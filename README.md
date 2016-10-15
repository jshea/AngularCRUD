# Angular 2 CRUD

This is my learning/experimenting/sharing Angular 2 CRUD application. It uses Chris Camargo's [ng-seed](https://github.com/camargo/ng-seed) as its foundation.

## Some potentially interesting features
* Typescript classes
* InMemoryWebApiModule (mock REST api & database)
* Lazy loaded module (about).
* Reactive Forms
* Form validations
* Basic Create/Report/Update/Delete functionality
* Bootstrap 4 formatting

## Getting started
Current version of [NodeJS](https://nodejs.org/), version 6.7 as of this writing.
* In the AngularCRUD folder, run `npm install` to load dependent libraries into the `node_modules` folder.
* Run `npm start` to build the application with Webpack and start a light http server. The application will be available at [http://localhost:8080/](http://localhost:8080/).

## Angular architectural aspects

### Best Practices
Follows the Angular Best Practices as identified in the [style guide](https://angular.io/styleguide).

### Bootstrapping
[Webpack](http://webpack.github.io/docs/what-is-webpack.html)

|File/Command | Description|
--------------|-----------
/package.json | npm start<br>webpack-dev-server --inline --progress --port 8080
 /src/app/webpack.config.js | points to /config/webpack.dev.js
 /config/webpack.common.js | Common includes, loaders, plugins, linting...
 /config/webpack.prod.js | Production building. Deduplication, uglify, add hash to file names to prevent caching issues...


### Modules
Follows the best practice of "All feature areas are in their own folder, with their own Angular module."
https://angular.io/styleguide#!#app-structure-and-angular-modules

### Routing
Router
Subroutes
Lazy loading

### Web Services & Data Storage
InMemoryWebApiModule

### Services
API service - End points for
* Getting all people
* Getting one person by id
* Updating one person
* Adding a person - No UI for this yet
* Deleting a person - No UI for this yet

### Constants
URL - Encapsulated in person-constants class.

### Technology changes beyond ng-seed
Added Bootstrap 4 and Font Awesome.

## Package Management
### Initial installation
|Command|Description|
---|---
`rm -rf node_modules` | Clear all existing modules/libraries from the project.
`npm install` | Install all modules/libraries listed in package.json

### Check for version updates
#### npm outdated
Update package.json as desired and re-run initial installation commands above.
#### npm cache clean
Delete cached npm data. When you really, really want to start from scratch.
