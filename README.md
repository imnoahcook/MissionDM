# Mission DM

## Setting up MySQL

yarn will install all necessary Node dependencies.

You will need Docker in order to install a containerised MySQL dev environment.
https://www.docker.com/products/docker-desktop
After getting docker, run the following command anywhere:

```sh
docker run \
 -p 0.0.0.0:3999:3306 \
 --name missiondm-db \
 -e MYSQL_ROOT_PASSWORD=password \
 -e MYSQL_USER=missiondm-dev \
 -e MYSQL_PASSWORD=password \
 -e MYSQL_DATABASE=missiondm \
 -d mysql:5.7.20
```

This will create a Docker instance called `missiondm-db`, running MySQL v5.7.20, with the root password being `password`. It also creates a database called `missiondm`, creates a user called `missiondm-dev` (with password `password`), and assigns that user full permissions onto the `missiondm` database.
