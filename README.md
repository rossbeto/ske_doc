
### A skeleton project for documentation using mkdocs, openapi
Using mkdocs to do documentation
and openapi is to describe api endpoints
With this approach, we will be able to have a more detailed documentation with link to those endpoint provided by swagger-ui

### Mkdocs

Mkdocs is being handle using poetry, python
`doc` is the folder that contains all mkdocs files

Activating a shell using poetry

```
poetry shell
```

Mkdocs can be run locally for live editing just by using 

```
mk-serve.sh
```

Or run it a pythonic way:

```
bash/bootstrap.sh
```

```
bash/ske.sh serve
```

### Openapi

Sample api spec is stored in `src/pet-store.yml`

Installed node packages

```
npm install
```

Using `redoc_cli` to generate standalone html from api spec  (generated html will be in public folder)

```
gendoc
```

View the result locally via webpack dev server

```
npm start_api
```

Then visiting `http://localhost:8080` to see swagger-ui version of the api spec
`http://localhost:8080/petstore.html` to see redoc vesion.


### Both Mkdocs and OpenApi spec

The idea is that when building documentation for a system, there is a need to link to API description.

This project support that ( in development mode), first `mkdocs` will generate those documentations and `redoc-cli` will generate the OpenApi spec to the same `public` folder.

Then developer can use `webpack` to serve that static html folder to view and edit the documentation locally.

First, activating the virtual env

```
./bash/bootstrap.sh
```

then generating all html files

```
./bash/ske.sh build
```

And start webpack to view it

```
npm start
```

Visit `http://localhost:8080` for the result.
