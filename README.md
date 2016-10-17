# Angular 2 CRUD

This is my learning/experimenting/sharing Angular 2 CRUD application. It uses Chris Camargo's [ng-seed](https://github.com/camargo/ng-seed) as its foundation.

## Some potentially interesting features
* Basic Create/Report/Update/Delete functionality
* [InMemoryWebApiModule](https://github.com/angular/in-memory-web-api) (mock REST api & database)
* Lazy loaded module (about module is lazy loaded).
* Reactive Forms
* Form validations
* Bootstrap 4 (responsive grid, buttons, cards, forms)
* Typescript classes

## Getting started
This was created and runs using the current version of [NodeJS](https://nodejs.org/), version 6.7 as of this writing.
* In the AngularCRUD folder, run `npm install` to load dependent libraries and perform post installation configuration. Package.json contains libs to be loaded into the `node_modules` folder.
* Run `npm start` to build the application with [Webpack](https://webpack.github.io/) and start a lightweight http server. The application will be available at [http://localhost:8080/](http://localhost:8080/).

## Angular architectural aspects
Chris Camargo's [ng-seed](https://github.com/camargo/ng-seed) provides the foundation for this application. This ng-seed provides:
* Core package.json
* Webpack build and run configuration files
* Linting (lint errors will prevent running, a good practice if a bit harsh)
* Testing harness - Unit (Karma) and E2E (Protractor)
* app with module, router and beginning components

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
```
npm outdated
```
Update package.json as desired and re-run initial installation commands above.
```
npm cache clean
```
Delete cached npm data. When you really, really want to start from scratch.

## files
| File | Description |
---|---
.editorconfig | "EditorConfig helps developers define and maintain consistent coding styles between different editors and IDEs. The EditorConfig project consists of a file format for defining coding styles and a collection of text editor plugins that enable editors to read the file format and adhere to defined styles."<br>http://editorconfig.org/
.gitignore | "If you create a file in your repository named .gitignore, Git uses it to determine which files and directories to ignore, before you make a commit. "<br>https://help.github.com/articles/ignoring-files/
package.json | Contains meta data for the project including libraries (and versions) to be downloaded, post installation processes to run and development scripts.
README.md | This file you're reading
tsconfig.json | Typescript transpiler configuration.<br>http://typescriptlang.org/
tslint.json | Configuration file for the tslinter. "TSLint checks your TypeScript code for readability, maintainability, and functionality errors."<br>https://palantir.github.io/tslint/
webpack.config.js |
