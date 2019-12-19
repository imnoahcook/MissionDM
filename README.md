# Mission DM

## Setting up Postgres

```sh
docker run -p 0.0.0.0:3999:27017 --name missiondm-mongo -d mongo:4.2.0
```

This will create a docker instance called `missiondm-mongo`, running mongodb version:4.2.0 w/ port 3999
