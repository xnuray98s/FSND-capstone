# Full Stack Capstone Final Project

## Full Stack Capstone

This is a casting websites that uses **Reac.js** in the frontend and **Flask** in the backend, this application will provide you with the following:

1. you can get a list of movies.
2. you can get a list of actors.
3. you can add a movie.
4. you can add an actor.
5. you can update a movie.
6. you can update an actor.
7. you can delete a movie.
8. you can delete an actor.

[URL](https://fsnd-capstone-misk.herokuapp.com/)

## Installing Dependencies for the Backend

1. **Python 3.8** - Follow instructions to install the latest version of python for your platform in the [python docs](https://docs.python.org/3/using/unix.html#getting-and-installing-the-latest-version-of-python)

2. **Virtual Enviornment** - We recommend working within a virtual environment whenever using Python for projects. This keeps your dependencies for each project separate and organaized. Instructions for setting up a virual enviornment for your platform can be found in the [python docs](https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/)

3. **PIP Dependencies** - Once you have your virtual environment setup and running, install dependencies by naviging to the `/backend` directory and running:

```bash
pip install -r requirements.txt
```

This will install all of the required packages we selected within the `requirements.txt` file.

4. **Key Dependencies**

- [Flask](http://flask.pocoo.org/) is a lightweight backend microservices framework. Flask is required to handle requests and responses.

- [SQLAlchemy](https://www.sqlalchemy.org/) is the Python SQL toolkit and ORM we'll use handle the lightweight sqlite database. You'll primarily work in app.py and can reference models.py.

- [Flask-CORS](https://flask-cors.readthedocs.io/en/latest/#) is the extension we'll use to handle cross origin requests from our frontend server.

### Database Setup

There is a insert_dummy_values_for_test method in `/backend/models.py` that you can call in the app to insert dummy data.

### Running the server

First ensure you are working using your created virtual environment.
Replace the default database_path with database_path_locally
To run the server, execute:

```bash
flask run --reload
```

The `--reload` flag will detect file changes and restart the server automatically.

## Installing Dependencies for the Frontend

1. **Installing Node and NPM**<br>
   This project depends on Nodejs and Node Package Manager (NPM). Before continuing, you must download and install Node (the download includes NPM) from [https://nodejs.com/en/download](https://nodejs.org/en/download/).

2. **Installing project dependencies**<br>
   This project uses NPM to manage software dependencies. NPM Relies on the package.json file located in the `frontend` directory of this repository. After cloning, open your terminal and run:

```bash
npm install
```

## API

> Please note that the frontend is running on port 3000 while the backend is running on port 5000, so while using our api remember that it's on port 5000.

### Endpoints

```js
GET '/api/movies'
GET '/api/actors'
POST '/api/movies'
POST '/api/actors'
PATCH '/api/movies/${id}'
PATCH '/api/actors/${id}'
DELETE '/api/movies/${id}'
DELETE '/api/actors/${id}'
```
