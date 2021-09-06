import os
from flask import Flask, request, abort, jsonify, send_from_directory
from flask.globals import current_app
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import random


from models import setup_db, Movie, Actor
from auth import AuthError, requires_auth


def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, static_folder="frontend/build", static_url_path="")
    setup_db(app)
    CORS(app, resources={r"/api/*": {"origins": "*"}})

    @app.after_request
    def after_request(response):
        response.headers.add(
            "Access-Control-Allow-Headers", "Content-Type,Authorization,true"
        )
        response.headers.add(
            "Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS"
        )
        return response

    @app.route("/")
    def index():
        return send_from_directory(app.static_folder, "index.html")

    @app.route("/api/actors")
    @requires_auth(permission="get:actors")
    def get_actors(payload):
        actors = [actor.format() for actor in Actor.query.all()]
        if len(actors) == 0:
            abort(404)
        return jsonify({"success": True, "actors": actors})

    @app.route("/api/movies")
    @requires_auth(permission="get:movies")
    def get_movies(payload):
        movies = [movie.format() for movie in Movie.query.all()]
        if len(movies) == 0:
            abort(404)
        return jsonify({"success": True, "movies": movies})

    @app.route("/api/actors/<int:id>", methods=["DELETE"])
    @requires_auth(permission="delete:actors")
    def delete_actor(payload, id):
        try:
            actor = Actor.query.filter(Actor.id == id).one_or_none()

            if actor is None:
                abort(404)

            actor.delete()
            actors_list = [actor.format() for actor in Actor.query.all()]

            return jsonify(
                {
                    "success": True,
                    "deleted": id,
                    "actors": actors_list,
                }
            )

        except:
            abort(422)

    @app.route("/api/movies/<int:id>", methods=["DELETE"])
    @requires_auth(permission="delete:movies")
    def delete_movie(payload, id):
        try:
            movie = Movie.query.filter(Movie.id == id).one_or_none()

            if movie is None:
                abort(404)

            movie.delete()
            movies_list = [movie.format() for movie in Movie.query.all()]

            return jsonify(
                {
                    "success": True,
                    "deleted": id,
                    "movies": movies_list,
                }
            )

        except:
            abort(422)

    @app.route("/api/actors", methods=["POST"])
    @requires_auth(permission="post:actors")
    def add_actor(payload):
        try:
            body = request.get_json()
            actor = Actor(
                name=body.get("name"),
                image=body.get("image"),
                gender=body.get("gender"),
                nationality=body.get("nationality"),
                dob=body.get("dob"),
                movie=body.get("movie"),
            )
            actor.insert()
            return jsonify({"success": True, "actor": [actor.format()]})

        except:
            abort(422)

    @app.route("/api/movies", methods=["POST"])
    @requires_auth(permission="post:movies")
    def add_movie(payload):
        try:
            body = request.get_json()
            movie = Movie(
                title=body.get("title"),
                image=body.get("image"),
                cast=body.get("cast"),
                plot=body.get("plot"),
                genres=body.get("genres"),
                rating=body.get("rating"),
                imdb=body.get("imdb"),
                release=body.get("release"),
            )
            movie.insert()
            return jsonify({"success": True, "movie": [movie.format()]})

        except:
            abort(422)

    @app.route("/api/actors/<int:id>", methods=["PATCH"])
    @requires_auth(permission="patch:actors")
    def edit_actor(payload, id):
        try:
            actor = Actor.query.filter(Actor.id == id).one_or_none()
            if actor is None:
                abort(404)
            body = request.get_json()
            name = body.get("name")
            image = body.get("image")
            gender = body.get("gender")
            nationality = body.get("nationality")
            dob = body.get("dob")
            movie = body.get("movie")
            if name is not None:
                actor.name = name
            if image is not None:
                actor.image = image
            if gender is not None:
                actor.gender = gender
            if nationality is not None:
                actor.nationality = nationality
            if dob is not None:
                actor.dob = dob
            if movie is not None:
                actor.movie = movie
            actor.update()
            return jsonify({"success": True, "actor": [actor.format()]})
        except:
            abort(422)

    @app.route("/api/movies/<int:id>", methods=["PATCH"])
    @requires_auth(permission="patch:movies")
    def edit_movie(payload, id):
        try:
            movie = Movie.query.filter(Movie.id == id).one_or_none()
            if movie is None:
                abort(404)
            body = request.get_json()
            title = body.get("title")
            image = body.get("image")
            cast = body.get("cast")
            plot = body.get("plot")
            genres = body.get("genres")
            rating = body.get("rating")
            imdb = body.get("imdb")
            release = body.get("release")
            if title is not None:
                movie.title = title
            if image is not None:
                movie.image = image
            if cast is not None:
                movie.cast = cast
            if plot is not None:
                movie.plot = plot
            if genres is not None:
                movie.genres = genres
            if rating is not None:
                movie.rating = rating
            if imdb is not None:
                movie.imdb = imdb
            if release is not None:
                movie.release = release
            movie.update()
            return jsonify({"success": True, "movie": [movie.format()]})
        except:
            abort(422)

    @app.errorhandler(422)
    def unprocessable(error):
        return (
            jsonify({"success": False, "error": 422, "message": "unprocessable"}),
            422,
        )

    @app.errorhandler(404)
    def not_found(error):
        return (
            jsonify({"success": False, "error": 404, "message": "resource not found"}),
            404,
        )

    @app.errorhandler(400)
    def bad_request(error):
        return jsonify({"success": False, "error": 400, "message": "bad request"}), 400

    @app.errorhandler(405)
    def not_allowed(error):
        return (
            jsonify({"success": False, "error": 405, "message": "method not allowed"}),
            405,
        )

    @app.errorhandler(500)
    def server_error(error):
        return (
            jsonify(
                {"success": False, "error": 500, "message": "internal server error"}
            ),
            500,
        )

    @app.errorhandler(AuthError)
    def auth_error(error):
        return (
            jsonify(
                {"success": False, "error": error.status_code, "message": error.error}
            ),
            error.status_code,
        )

    return app
