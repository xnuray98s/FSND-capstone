import os
from sqlalchemy import Column, String, Integer, create_engine
from flask_sqlalchemy import SQLAlchemy
import json

database_name = "casting"
database_path = "postgresql://{}:{}@{}/{}".format(
    "postgres", "postgres", "localhost:5432", database_name
)

db = SQLAlchemy()

"""
setup_db(app)
    binds a flask application and a SQLAlchemy service
"""


def setup_db(
    app,
    database_path=os.environ["DATABASE_URL"].replace("postgres://", "postgresql://"),
):
    app.config["SQLALCHEMY_DATABASE_URI"] = database_path
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    db.app = app
    db.init_app(app)
    insert_dummy_values_for_test()


def insert_dummy_values_for_test():
    movie1 = Movie(
        title="I Am Legend",
        image="https://images.moviesanywhere.com/56c992f18d66817a14cd68de04a10e57/2838a862-a8a4-4f54-9a22-bc2fba7264a3.jpg",
        cast="Will Smith, Alice Braga, Charlie Tahan, Salli Richardson-Whitfield",
        plot="Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.",
        genres="Drama, Horror, Sci-Fi",
        rating="PG-13",
        imdb="7.2",
        release="2007",
    )
    movie2 = Movie(
        title="Avatar",
        image="https://i.pinimg.com/originals/32/f1/1b/32f11b88771756b748a427428565afdd.jpg",
        cast="Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        plot="A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        genres="Action, Adventure, Fantasy",
        rating="PG-13",
        imdb="7.9",
        release="2009",
    )
    actor1 = Actor(
        name="Will Smith",
        image="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQbuF86tSHODHWHJRusio04zBWZHRNgFJdu-jyiWgkIbBC4-tuT",
        gender="m",
        nationality="American",
        dob=1968,
        movie="I Am Legend",
    )
    actor2 = Actor(
        name="Sam Worthington",
        image="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRRyYPpSOn_kpXBtE4wJ50MCIJ9J7bBAq8_swh03mb1kml7lGqF",
        gender="m",
        nationality="Australian",
        dob=1976,
        movie="Avatar",
    )
    db.drop_all()
    db.create_all()
    movie1.insert()
    movie2.insert()
    actor1.insert()
    actor2.insert()


class Movie(db.Model):
    __tablename__ = "movies"

    id = Column(Integer, primary_key=True)
    title = Column(String)
    image = Column(String)
    cast = Column(String)
    plot = Column(String)
    genres = Column(String)
    rating = Column(String)
    imdb = Column(String)
    release = Column(String)

    def __init__(self, title, image, cast, plot, genres, rating, imdb, release):
        self.title = title
        self.image = image
        self.cast = cast
        self.plot = plot
        self.genres = genres
        self.rating = rating
        self.imdb = imdb
        self.release = release

    def insert(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def format(self):
        return {
            "id": self.id,
            "title": self.title,
            "image": self.image,
            "cast": self.cast,
            "plot": self.plot,
            "genres": self.genres,
            "rating": self.rating,
            "imdb": self.imdb,
            "release": self.release,
        }


class Actor(db.Model):
    __tablename__ = "actors"

    id = Column(Integer, primary_key=True)
    name = Column(String)
    image = Column(String)
    gender = Column(String)
    nationality = Column(String)
    dob = Column(String)
    movie = Column(String)

    def __init__(self, name, image, gender, nationality, dob, movie):
        self.name = name
        self.image = image
        self.gender = gender
        self.nationality = nationality
        self.dob = dob
        self.movie = movie

    def insert(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def format(self):
        return {
            "id": self.id,
            "name": self.name,
            "image": self.image,
            "gender": self.gender,
            "nationality": self.nationality,
            "dob": self.dob,
            "movie": self.movie,
        }
