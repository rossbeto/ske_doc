#!/bin/bash

# set -e

BOOTSTRAP_DIR=$(dirname $(readlink -e "$0"))
BASE_DIR=$(dirname "$BOOTSTRAP_DIR")

main() {
    echo "here"

    source "$BASE_DIR/env.sh"
    echo "$BASE_DIR/env.sh"

    # poetry env use 3.7 
    poetry shell

    echo "here"

    "$@"

}

main "$@"