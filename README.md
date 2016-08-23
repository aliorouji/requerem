# requerem
require module that takes care of project modules and prevents require('../../../../foo') thing

## Installation

   npm install requerem --save

## Usage

   In every js file of your app, before any other requires add this line:

   var require = require('requerem');

   now you can require both your app-specific and installed modules using this new require function.

   var User = require('models/User'); // app-specific module (relative to project root)

   or 

   var mongoose = require('mongoose'); // installed modules

## Tests

   npm test

