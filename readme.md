# Docker 
Node Js & Mongo DB

## Development environments
Dockerfile.dev
Script in package.json using nodemon
In docker-compose : map Workdir of dockerfile.dev with current directory
```
    ...
    volumes:
      - ".:/usr/src/app"
    ...
```
Or with docker run
```
docker run -it -v .:/usr/src/app
```

## DB
get an instance of Mongo DB :
Map mongo inner data to outer (some current folder "./data/mongo")
```
...
db:
    container_name: "my-mongo-db"
    image: "mongo"
    volumes:
      - ./data/mongo:/data/db
  ...
```

## Node Application
### Docker config
App depends_on database
DB URL : 
> mongodb://{container_name}:{container_port}/{init_db}

