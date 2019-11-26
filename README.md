# django-webpack-integration

Example of `django` + `webpack` integration - multi-page application.

## Setup

```shell
$ python3 -m venv .venv
$ source .venv/bin/activate
$ pip install -r requirements.txt
$ npm i
$ ./manage.py migrate
$ ./manage.py runserver
$ npm run serve
```

## URLs

- `http://localhost:8080/home/`
- `http://localhost:8080/about/`
- `http://localhost:8080/list/`
- `http://localhost:8080/detail/`
