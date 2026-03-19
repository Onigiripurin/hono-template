#!/bin/bash
sudo chown -R vscode:vscode /home/vscode

npm install -g bun
bun i --frozen-lockfile

pip install pre-commit
pre-commit install --hook-type pre-merge-commit