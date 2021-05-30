# Web App

## Setup

The first thing to do is to clone the repository:

```sh
$ git clone https://github.com/chromium7/project_tani.git
$ cd project_tani
```

Create a virtual environment to install dependencies in and activate it:

```sh
$ python -m venv env
$ env\Scripts\activate
```

Then install the dependencies:

```sh
(env)$ pip install -r requirements.txt
```

Note the `(env)` in front of the prompt. This indicates that this terminal
session operates in a virtual environment

Once `pip` has finished downloading the dependencies:

```sh
(env)$ python manage.py runserver
```

And navigate to `http://127.0.0.1:8000/`

## Frontend

To edit the React frontend, first `cd` into the `frontend` directory in a separate console

```sh
$ cd frontend
```

Run the script to watch changes in react

```sh
$ npm run dev
```

## Tests

To run the tests, `cd` into the directory where `manage.py` is:

```sh
(env)$ python manage.py test
```
