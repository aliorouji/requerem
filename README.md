requerem
========

a "require" replacement that prevents `require('../../../../foo')` thing when working with multiple modules in nodejs apps.

## Installation
   
   ```
   npm install requerem --save
   ```

## Usage

   In top of your main js script (app.js) add: 

   ```javascript
   require('requerem'); // it adds your app-root to module resolver path
   ```

   now you can simply require your app-specific modules relative to your project root:

   ```javascript
   var User = require('models/User'); // app-specific module (relative to project root)
   ```

   and requiring npm-installed modules stays the same as before:

   ```javascript
   var mongoose = require('mongoose'); // installed modules
   ```

   also relative paths:

   ```javascript
   var config = require('./config');
   ```

## Tests

   npm test

