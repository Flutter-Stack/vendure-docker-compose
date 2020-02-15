$ docker-compose run database bash # drop into the container shell

database# psql --host=database --username=unicorn_user --dbname=rainbow_database
Password for user unicorn_user:
psql (12.0 (Debian 12.0-2.pgdg100+1))
Type "help" for help.
rainbow_database=#
