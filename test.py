from os import environ
import unittest
import json
from flask_sqlalchemy import SQLAlchemy

from app import create_app
from models import setup_db, insert_dummy_values_for_test, Movie, Actor

ASSISTANT_TOKEN = environ.get("ASSISTANT_TOKEN")
DIRECTOR_TOKEN = environ.get("DIRECTOR_TOKEN")
PRODUCER_TOKEN = environ.get("PRODUCER_TOKEN")
NO_KID = environ.get("NO_KID")
NO_PERMISSIONS = environ.get("NO_PERMISSIONS")


class CapstoneTestCase(unittest.TestCase):
    """This class represents the capstone test case"""

    def setUp(self):
        """Define test variables and initialize app."""
        self.app = create_app()
        self.client = self.app.test_client
        self.database_name = "casting_test"
        self.database_path = "postgresql://{}:{}@{}/{}".format(
            "postgres", "postgres", "localhost:5432", self.database_name
        )
        setup_db(self.app, database_path=self.database_path)

        # binds the app to the current context
        with self.app.app_context():
            self.db = SQLAlchemy()
            self.db.init_app(self.app)
            # create all tables
            self.db.create_all()

        insert_dummy_values_for_test()

    def tearDown(self):
        """Executed after reach test"""
        pass

    def test_get_movies(self):
        # test with Assistant Role
        res = self.client().get(
            "/api/movies",
            headers={"Authorization": f"Bearer {ASSISTANT_TOKEN}"}
        )
        data = json.loads(res.data.decode("utf-8"))

        self.assertEqual(res.status_code, 200)
        self.assertEqual(data["success"], True)
        self.assertTrue(data["movies"])

    def test_get_actors(self):
        # test with Diretor Role
        res = self.client().get(
            "/api/actors",
            headers={"Authorization": f"Bearer {DIRECTOR_TOKEN}"}
        )
        data = json.loads(res.data.decode("utf-8"))

        self.assertEqual(res.status_code, 200)
        self.assertEqual(data["success"], True)
        self.assertTrue(data["actors"])

    def test_post_movies(self):
        # test with Diretor Role
        res = self.client().post(
            "/api/movies",
            headers={"Authorization": f"Bearer {PRODUCER_TOKEN}"},
            json={
                "title": "test",
                "image": "https://capstone-project98.s3-us-east-2.amazonaws.com/tourist.png",
                "cast": "test",
                "plot": "none",
                "genres": "Action",
                "rating": "PG-13",
                "imdb": "10",
                "release": "1990",
            },
        )
        data = json.loads(res.data.decode("utf-8"))

        self.assertEqual(res.status_code, 200)
        self.assertEqual(data["success"], True)
        self.assertTrue(data["movie"])

    def test_post_actor(self):
        # test with Producer Role
        res = self.client().post(
            "/api/actors",
            headers={"Authorization": f"Bearer {DIRECTOR_TOKEN}"},
            json={
                "name": "test",
                "image": "",
                "movie": "test",
                "dob": "2021-09-05",
                "nationality": "test",
                "gender": "f",
            },
        )
        data = json.loads(res.data.decode("utf-8"))

        self.assertEqual(res.status_code, 200)
        self.assertEqual(data["success"], True)
        self.assertTrue(data["actor"])

    def test_delete_movie(self):
        # test with Producer Role
        res = self.client().delete(
            "/api/movies/1",
            headers={"Authorization": f"Bearer {PRODUCER_TOKEN}"}
        )
        data = json.loads(res.data)

        movie = Movie.query.filter(Movie.id == 1).one_or_none()

        self.assertEqual(res.status_code, 200)
        self.assertEqual(data["success"], True)
        self.assertEqual(data["deleted"], 1)
        self.assertEqual(movie, None)

    def test_delete_actor(self):
        # test with Producer Role
        res = self.client().delete(
            "/api/actors/1",
            headers={"Authorization": f"Bearer {PRODUCER_TOKEN}"}
        )
        data = json.loads(res.data)

        actor = Actor.query.filter(Actor.id == 1).one_or_none()

        self.assertEqual(res.status_code, 200)
        self.assertEqual(data["success"], True)
        self.assertEqual(data["deleted"], 1)
        self.assertEqual(actor, None)

    def test_patch_movie(self):
        # test with Director Role
        res = self.client().patch(
            "/api/movies/1",
            headers={"Authorization": f"Bearer {DIRECTOR_TOKEN}"},
            json={"title": "newTest"},
        )
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 200)
        self.assertEqual(data["success"], True)
        self.assertTrue(data["movie"])

    def test_patch_actor(self):
        # test with Producer Role
        res = self.client().patch(
            "/api/actors/1",
            headers={"Authorization": f"Bearer {PRODUCER_TOKEN}"},
            json={"name": "newTest"},
        )
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 200)
        self.assertEqual(data["success"], True)
        self.assertTrue(data["actor"])

    def test_401_get_movies(self):
        res = self.client().get(
            "/api/movies",
            headers={"Authorization": f"Bearer {NO_KID}"}
        )
        data = json.loads(res.data)
        message = data["message"]

        self.assertEqual(res.status_code, 401)
        self.assertEqual(message["code"], "invalid_header")
        self.assertEqual(message["description"], "Authorization malformed.")

    def test_400_get_actors(self):
        res = self.client().get(
            "/api/actors",
            headers={"Authorization": f"Bearer {NO_PERMISSIONS}"}
        )
        data = json.loads(res.data)
        message = data["message"]

        self.assertEqual(res.status_code, 400)
        self.assertEqual(message["code"], "invalid_claims")
        self.assertEqual(message["description"],
                         "permissions not included in JWT.")

    def test_401_post_movies(self):
        # test without Authorization
        res = self.client().post(
            "/api/movies",
            json={
                "title": "test",
                "image": "https://capstone-project98.s3-us-east-2.amazonaws.com/tourist.png",
                "cast": "test",
                "plot": "none",
                "genres": "Action",
                "rating": "PG-13",
                "imdb": "10",
                "release": "1990",
            },
        )
        data = json.loads(res.data)
        message = data["message"]

        self.assertEqual(res.status_code, 401)
        self.assertEqual(message["code"], "invalid_header")
        self.assertEqual(message["description"],
                         "unable to find authorization")

    def test_401_post_actors(self):
        res = self.client().post(
            "/api/actors",
            headers={"Authorization": f"Bearer {ASSISTANT_TOKEN}"},
            json={
                "name": "test",
                "image": "",
                "movie": "test",
                "dob": "2021-09-05",
                "nationality": "test",
                "gender": "f",
            },
        )
        data = json.loads(res.data)
        message = data["message"]

        self.assertEqual(res.status_code, 403)
        self.assertEqual(message["code"], "permission_denied")
        self.assertEqual(message["description"], "unauthorized access")

    def test_403_delete_actors(self):
        res = self.client().delete(
            "/api/actors/1",
            headers={"Authorization": f"Bearer {ASSISTANT_TOKEN}"}
        )
        data = json.loads(res.data)
        message = data["message"]
        self.assertEqual(res.status_code, 403)
        self.assertEqual(message["code"], "permission_denied")
        self.assertEqual(message["description"], "unauthorized access")

    def test_403_delete_movies(self):
        res = self.client().delete(
            "/api/movies/1",
            headers={"Authorization": f"Bearer {DIRECTOR_TOKEN}"}
        )
        data = json.loads(res.data)
        message = data["message"]

        self.assertEqual(res.status_code, 403)
        self.assertEqual(message["code"], "permission_denied")
        self.assertEqual(message["description"], "unauthorized access")

    def test_401_patch_movies(self):
        res = self.client().patch(
            "/api/movies/1",
            headers={"Authorization": f"{PRODUCER_TOKEN}"},
            json={"title": "newTest"},
        )
        data = json.loads(res.data)
        message = data["message"]

        self.assertEqual(res.status_code, 401)
        self.assertEqual(message["code"], "invalid_header")
        self.assertEqual(message["description"], "Authorization malformed.")

    def test_401_patch_actors(self):
        res = self.client().patch(
            "/api/actors/1",
            headers={"Authorization": f"{PRODUCER_TOKEN}"},
            json={"name": "newTest"},
        )
        data = json.loads(res.data)
        message = data["message"]

        self.assertEqual(res.status_code, 401)
        self.assertEqual(message["code"], "invalid_header")
        self.assertEqual(message["description"], "Authorization malformed.")


# Make the tests conveniently executable
if __name__ == "__main__":
    unittest.main()
