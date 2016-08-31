#Starter Project for Angular 2 
Using Gulp as Building Tool



## 1. Installation
```
$ git clone https://github.com/tbrandenburger/starter-angular2-gulp
$ cd starter-angular2-gulp
$ npm install 
$ (if typings folder not shows up run: $sudo typings install)
$ npm run clean & npm run build
$ npm start
```
Go to [http://localhost:3000](http://localhost:3000) in your browser

## 2. Known Issues
First time running Error: app.module.ts.js not found (404) - Solution: Change in app.component.ts something (while server is on watch mode) - the file gets compiled and the app should run.

## 3. Debugging
IntelliJ: It's important to compile the .ts scripts with the IntelliJ Typescript Compiler (Make sure you checked "use tsconfig.json" in the preferences

Use the Javascript Debugger (Make sure you installed the chrome extension)
problem: Todo: the source of the .js.map files are not set correctly through the ts compiler from gulp
 