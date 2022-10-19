
# Mkdocs

This repo serves as a skeleton for other project that would like to use mkdocs as a documentation tool.
It include some shell and python code to spin up the documentation.


!!! note "start mkdocs development server for live editing"
    mk-serve.sh

    or

    mkdocs serve -a 0.0.0.0:8081

# Poetry

Poetry is being used for dependencies management.
The `pyproject.toml` is the project settings that contains list of dependencies needed for the project.

Point PATH to the folder that poetry installed
```console
export PATH="/home/administrator/.local/bin:$PATH"
```


