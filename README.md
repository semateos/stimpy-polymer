Stimpy Polymer
=============
[hapi](http://hapijs.com) in the back, [polymer](polymer-project.org) in the front - love at first sight.

## Features
 - restfull back end via hapi.js 8.3
 - webcomponents via polymer 1.0
 - ORM via waterline and dogwater
 - polymer vulcanize build process via gulp
 - easy deploy to heroku
 - automatic refresh on code changes via browswersync
 - set up for offline via serviceworkers

## Install
```bash
$ npm install -g stimpy bower gulp
$ stimpy create polymer
$ cd stimpy-polymer
```

## Start the server
```bash
$ stimpy start
```

## Build for production
```bash
$ gulp
```

## Deploy to heroku
```bash
$ heroku login
$ stimpy deploy heroku
```

## About Stimpy
[Stimpy](https://www.npmjs.com/package/stimpy) is a simple little guy for making hapi things.  This here is a boilerplate for Stimpy, there a few more - nothing mind blowing - just a few quick ways to get a hapi project up and running.
