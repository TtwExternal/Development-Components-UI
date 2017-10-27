#!/bin/sh
cd $(dirname $0)

kill -9 `lsof -i TCP:49323 | awk '/LISTEN/ {print $2}'`

../../Development-Binary-Mac/Binary/NodeJS/exes100 ./HTTPServer_WebPage.js
