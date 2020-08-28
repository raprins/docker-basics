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


## Node Application
Application booted with babel to use import statement
