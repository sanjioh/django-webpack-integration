# django-webpack-integration

Example of `django` + `webpack` integration - multi-page application.

## Setup

```shell
$ python3 -m venv .venv
$ source .venv/bin/activate
$ pip install -r requirements.txt
$ npm i
$ npm run build
$ ./manage.py migrate
$ ./manage.py collectstatic -c --noinput -v3
$ ./manage.py runserver
```

## URLs

- `http://localhost:8000/home/`
- `http://localhost:8000/about/`
- `http://localhost:8000/list/`
- `http://localhost:8000/detail/`
