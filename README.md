$ docker-compose run database bash # drop into the container shell

database# psql --host=database --username=unicorn_user --dbname=rainbow_database
Password for user unicorn_user:
psql (12.0 (Debian 12.0-2.pgdg100+1))
Type "help" for help.
rainbow_database=#



https://www.vendure.io/docs/developer-guide/overview/


https://www.vendure.io/docs/graphql-api/admin/input-types/#productlistoptions


docker exec -it node-graphql-commerce_node-graphql-commerce_1 /bin/sh
