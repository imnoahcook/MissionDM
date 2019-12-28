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

## Running the server


In addition in the /server folder you will need a .env file.
If you're meant to be working on this project, I'll give one to you 😉

all node_modules need to be installed by typing 
```sh
$ yarn
```
in their respective folders (root, client, and server)
If you don't have yarn, look up how to install it I don't remember lol

to start the server run 
```sh
$ yarn dev
```
while in the /server directory and it will start a nodemon server running on port 3001

and for the client, run 
```sh
$ yarn watch
```
and it will start the react app running on port 3001. 
If for whatever reason you need to run an https localhost, use 

```sh
$ yarn watch:https
```


