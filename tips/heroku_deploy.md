brew install postgresql
mkdir workspace

web: gunicorn myproject.wsgi
https://devcenter.heroku.com/articles/django-app-configuration

https://devcenter.heroku.com/articles/python-support

export LDFLAGS="-L/usr/local/opt/openssl/lib" export CPPFLAGS="-I/usr/local/opt/openssl/include"
https://github.com/psycopg/psycopg2/issues/997

pipenv shell
django-admin startproject config .

touch .env

## settings.py

ALLOWED_HOSTS = ['*']

LANGUAGE_CODE = 'ja'

TIME_ZONE = 'Asia/Tokyo'

https://e-tec-memo.herokuapp.com/article/172/
settings.py

.gitignore

https://devcenter.heroku.com/articles/django-assets

       FileNotFoundError: [Errno 2] No such file or directory: '/tmp/build_92dcbc5cd81ba8eab587c1c3dbe2b90e/static'

! Error while running '$ python manage.py collectstatic --noinput'.
       See traceback above for details.
       You may need to update application code to resolve this error.
       Or, you can disable collectstatic for this application:
          $ heroku config:set DISABLE_COLLECTSTATIC=1
https://devcenter.heroku.com/articles/django-assets
! Push rejected, failed to compile Python app.
! Push failed

heroku run python manage.py migrate --app edeccotest

← 　 STATICFILES_DIRS = (os.path.join(BASE_DIR, 'static'), )　が原因

makemigrations は heroku でやってはだめ（migrate のみ）
https://teratail.com/questions/223798

fileupload
https://sleepless-se.net/2019/04/30/django-google-cloud-storage-settings/
