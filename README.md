# Ampify Prettier Config

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](CODE_OF_CONDUCT.md)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Code Style](https://img.shields.io/static/v1?label=Code%20Style&message=Prettier&color=pink&style=flat)](https://prettier.io)

## What is it?

This stores the default Ampify prettier config used across it's repositories.

## Prerequisites:

- Access to the [Focusrite-Novation npm registry](https://github.com/Focusrite-Novation/ampify-web-ui#add-focusrite-novation-npm-registry)


## Usage:

To use the prettier config in your project, add the following to your package.json

```
  "prettier": "@focusrite-novation/ampify-prettier-config",
  "devDependencies": {
    "@focusrite-novation/ampify-prettier-config": "^1.0.0"
  }
````

## Updating

When the change has been merged to `master`, a new version will be published based off the CI build number.
