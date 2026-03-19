#!/bin/bash
sudo chown -R vscode:vscode /home/vscode

npm install -g bun
bun i --frozen-lockfile

curl -fsSL https://claude.ai/install.sh | bash

pip install pre-commit
pre-commit install --hook-type pre-merge-commit