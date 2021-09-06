import os
import unittest
import json
from flask_sqlalchemy import SQLAlchemy

from app import create_app
from models import setup_db, insert_dummy_values_for_test, Movie, Actor

ASSISTANT_TOKEN = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlJzN01BWWlEZ291NzRsSzZLeV9jeSJ9.eyJpc3MiOiJodHRwczovL2NhcHN0b25lLXByb2plY3QtdWRhY2l0eS51cy5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NjEyOGE3OGU4ZmM0YmEwMDcxZjA2MTZiIiwiYXVkIjoiY2Fwc3RvbmUiLCJpYXQiOjE2MzA4ODE3NTcsImV4cCI6MTYzMDg4ODk1NywiYXpwIjoiZUpTcnNyY3RXdld4c1NpaEUxVzgwUzZPRGRpeTU1S28iLCJzY29wZSI6IiIsInBlcm1pc3Npb25zIjpbImdldDphY3RvcnMiLCJnZXQ6bW92aWVzIl19.hVyAlfrxXFD0d2H8TIWDtW360MRa9SD9kaGCc8jy8pvoUfmtwQRmN5I08JtZ7tRYcmfljz1DBr2a_O38Dou3V7wyo9boDN3vAk7JB8KMeVqcwYGvHonEujovGyF2CLyqF30eDGvqrWoIVbPiJQde-6zZoj_LQs05_-3P0Lqm1K_NbJdYbIxYqeUGgwXhJZitBkuY3b4U1k6o-KnVfj9KJ0p3aSOirB1iXnPAm-p43jcYdoHvtj3xqb-vpqFVzxRbmLVOaf_3Z0RAxwjya0Zp3guQfi5_DwSLTDjGhvg6bSRCkKpo0s0aardW2u4sdtGT_bHVFdO32XwxWuauAhN8pA"
DIRECTOR_TOKEN = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlJzN01BWWlEZ291NzRsSzZLeV9jeSJ9.eyJpc3MiOiJodHRwczovL2NhcHN0b25lLXByb2plY3QtdWRhY2l0eS51cy5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NjEyOGE3Y2ZmNTQ4NjcwMDY5N2YyMDNlIiwiYXVkIjoiY2Fwc3RvbmUiLCJpYXQiOjE2MzA4ODIzNDQsImV4cCI6MTYzMDg4OTU0NCwiYXpwIjoiZUpTcnNyY3RXdld4c1NpaEUxVzgwUzZPRGRpeTU1S28iLCJzY29wZSI6IiIsInBlcm1pc3Npb25zIjpbImRlbGV0ZTphY3RvcnMiLCJnZXQ6YWN0b3JzIiwiZ2V0Om1vdmllcyIsInBhdGNoOmFjdG9ycyIsInBhdGNoOm1vdmllcyIsInBvc3Q6YWN0b3JzIl19.CkufS0I02Rp2K3SIBTVhiKgqIVFvdEKYbcJ35BZ2BmV8AZeeRKVxhjhaNqlmsC6M4JhnIooj1VPeRqAqSF3s8LOyeQVgcUQXB0DSw2UDMgeodabr353JxtPl0TCec6UGk9zm9x8_xemBDSrY1y4pKGzXc6p2mNmpcIC2x6kwpYFNiWDm6X7_itIJbyXOdC3M9FIaYuu3V4kK0yXnngvwI4mWapuH15xkZg_DdZdOqyl_MS85CoTY1LfRfQ2lKbh7H9SA4RfjjQKCnUBd2R1T-U2iSxITT9fNPbxBKlIuIjggSLWYbwEOvLo3mGzmdsVIQyQyvTQzMiEgi1jdTjUOqw"
PRODUCER_TOKEN = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlJzN01BWWlEZ291NzRsSzZLeV9jeSJ9.eyJpc3MiOiJodHRwczovL2NhcHN0b25lLXByb2plY3QtdWRhY2l0eS51cy5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NjEyOGE4OGEyYzFjYzkwMDcxMDg4ODk5IiwiYXVkIjoiY2Fwc3RvbmUiLCJpYXQiOjE2MzA4ODI0NjAsImV4cCI6MTYzMDg4OTY2MCwiYXpwIjoiZUpTcnNyY3RXdld4c1NpaEUxVzgwUzZPRGRpeTU1S28iLCJzY29wZSI6IiIsInBlcm1pc3Npb25zIjpbImRlbGV0ZTphY3RvcnMiLCJkZWxldGU6bW92aWVzIiwiZ2V0OmFjdG9ycyIsImdldDptb3ZpZXMiLCJwYXRjaDphY3RvcnMiLCJwYXRjaDptb3ZpZXMiLCJwb3N0OmFjdG9ycyIsInBvc3Q6bW92aWVzIl19.HHyb-V9Q8UIqj6Mq_jDng9gAANecNNGjRBm9Ey9KUuXPTSUk2YUEKO-jUFwX6FXK9UsHCL2HyjF8Rs1uEaB0dVoaYfCL3tJQ7GkV2U5QsB_gj64rQl49XP-Lsl8_vlfUOjdbMawP-X-mSh5rUwuF4zIhQXRQDihSRPp2124A5fU2ScNo6K42SfgvgPfDrd3t_xJ89iW6Of4lu3Ze9SLeeBdgwgLauCB-wDEQFxGR1qB3LyxKzOVXS6w-FyfKgkb8xpliWy5aOBn8Vogop-oME_ujpgCc0Uh4_vaijhw6ifsVxhYaGZ19VqGGgt81I7qCWQLGYd3enTL7nvweTjlrng"
NO_KID = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2NhcHN0b25lLXByb2plY3QtdWRhY2l0eS51cy5hdXRoMC5jb20vIiwiaWF0IjoxNjMwODg2OTg3LCJleHAiOjE2MzA4ODgyNDEsImF1ZCI6ImNhcHN0b25lIiwic3ViIjoiSkZuVW96WXRIa3BJcXNCUnB0bERIcmFmeHV6cDFneFdAY2xpZW50cyIsImF6cCI6IkpGblVvell0SGtwSXFzQlJwdGxESHJhZnh1enAxZ3hXIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.UUH4bnTyyZIMhyrarZJg_jc6JPFpVPOYgzRfywwEy94"
NO_PERMISSIONS = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlJzN01BWWlEZ291NzRsSzZLeV9jeSJ9.eyJpc3MiOiJodHRwczovL2NhcHN0b25lLXByb2plY3QtdWRhY2l0eS51cy5hdXRoMC5jb20vIiwic3ViIjoiSkZuVW96WXRIa3BJcXNCUnB0bERIcmFmeHV6cDFneFdAY2xpZW50cyIsImF1ZCI6ImNhcHN0b25lIiwiaWF0IjoxNjMwODg3ODEyLCJleHAiOjE2MzA5NzQyMTIsImF6cCI6IkpGblVvell0SGtwSXFzQlJwdGxESHJhZnh1enAxZ3hXIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIiwicGVybWlzc2lvbnMiOltdfQ.JglDKrsiaV9B1iGqLCT639_19CtN8e0fQZWORHGj_ZIPab2-IL2u_n6mzHucnJ77hyB7XfHoPKlqriW_AgyRvnR97eatVv0JnttTDKVeVzdtZ1eMLLThCL-KVVNfVMXh-fb15UO7lfhrWOubBbxjoEQJROWr4UX67s_SQwQIDpQSE-hHhRz54VJdBgy0Hl-YgId1O6RzLbxSrI9T2r1hGLM-E1qAimDqF4_SGY2XTfNjb3Mas094JPdwS8giJUxbG2d1jHQ5WcN1Q26AQ8JYqzpOautCq0sEUUSh-Kk1ieNM1FGOcWIX50kfTPY26e5CrHpOIQikMqsbrd9ohzIQaQ"


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
        setup_db(self.app, self.database_path)

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

    """
    TODO
    Write at least one test for each test for successful operation and for expected errors.
    """

    def test_get_movies(self):
        # test with Assistant Role
        res = self.client().get(
            "/api/movies", headers={"Authorization": f"Bearer {ASSISTANT_TOKEN}"}
        )
        data = json.loads(res.data.decode("utf-8"))

        self.assertEqual(res.status_code, 200)
        self.assertEqual(data["success"], True)
        self.assertTrue(data["movies"])

    def test_get_actors(self):
        # test with Diretor Role
        res = self.client().get(
            "/api/actors", headers={"Authorization": f"Bearer {DIRECTOR_TOKEN}"}
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
            "/api/movies/1", headers={"Authorization": f"Bearer {PRODUCER_TOKEN}"}
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
            "/api/actors/1", headers={"Authorization": f"Bearer {PRODUCER_TOKEN}"}
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
            "/api/movies", headers={"Authorization": f"Bearer {NO_KID}"}
        )
        data = json.loads(res.data)
        message = data["message"]

        self.assertEqual(res.status_code, 401)
        self.assertEqual(message["code"], "invalid_header")
        self.assertEqual(message["description"], "Authorization malformed.")

    def test_400_get_actors(self):
        res = self.client().get(
            "/api/actors", headers={"Authorization": f"Bearer {NO_PERMISSIONS}"}
        )
        data = json.loads(res.data)
        message = data["message"]

        self.assertEqual(res.status_code, 400)
        self.assertEqual(message["code"], "invalid_claims")
        self.assertEqual(message["description"], "permissions not included in JWT.")

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
        self.assertEqual(message["description"], "unable to find authorization")

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
            "/api/actors/1", headers={"Authorization": f"Bearer {ASSISTANT_TOKEN}"}
        )
        data = json.loads(res.data)
        message = data["message"]
        self.assertEqual(res.status_code, 403)
        self.assertEqual(message["code"], "permission_denied")
        self.assertEqual(message["description"], "unauthorized access")

    def test_403_delete_movies(self):
        res = self.client().delete(
            "/api/movies/1", headers={"Authorization": f"Bearer {DIRECTOR_TOKEN}"}
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
