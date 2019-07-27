# LegendOfMountainSea-Server
A server for game LegendOfMountainSea

[![Platform](https://img.shields.io/badge/platform-osx%20%7C%20win-orange.svg?style=flat-square)](https://github.com/legendofmountainsea/LegendOfMountainSea/releases)
[![npm](https://img.shields.io/npm/v/loms-cli.svg?style=flat-square&label=loms-cli)](https://www.npmjs.com/package/loms-cli)
[![PRs](https://img.shields.io/badge/PRs-welcome-yellow.svg?style=flat-square)](https://github.com/legendofmountainsea/LegendOfMountainSea-Server/blob/master/.github/CONTRIBUTING.md)

[![Maintainability](https://api.codeclimate.com/v1/badges/2bc618dc2a42a64aab26/maintainability)](https://codeclimate.com/github/legendofmountainsea/LegendOfMountainSea-Server/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/2bc618dc2a42a64aab26/test_coverage)](https://codeclimate.com/github/legendofmountainsea/LegendOfMountainSea-Server/test_coverage)
[![Build Status](https://travis-ci.com/legendofmountainsea/LegendOfMountainSea-Server.svg?branch=master)](https://travis-ci.com/legendofmountainsea/LegendOfMountainSea-Server)
[![Build status](https://ci.appveyor.com/api/projects/status/7iauu1o581jryirc/branch/master?svg=true)](https://ci.appveyor.com/project/TyrealGray/legendofmountainsea-server/branch/master)

## Installing

Install LOMS Development CLI
```
$ npm install loms-cli -g
```

Fork repository, create your branch from master and run NPM command-line inside project folder
```
$ cd LegendOfMountainSea-Server/
$ npm install
```
- Windows might get `node-gyp rebuild` error, open Powershell as admin and run
```
$ npm i -g --prodution --vs2015 --add-python-to-path windows-build-tools
```

## Getting started
```
$ loms run-server
```

## Requirement
Node.js **version 10.0.0 or higher**

## Contributing
LegendOfMountainSea welcomes all contributions from anyone willing to work in good faith both with other contributors and with the community.

No contribution is too small and all contributions are valued.
[Contributing to LegendOfMountainSea-Server](https://github.com/legendofmountainsea/LegendOfMountainSea-Server/blob/master/.github/CONTRIBUTING.md)

## License
GPL-2.0
