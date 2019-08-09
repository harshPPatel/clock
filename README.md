# Clock

A **clock** app created on JavaScript ES6 features. It shows different units of the time. App changes the background to dark color according to the time (between 8 PM to 6 AM). App takes time zone from the device time zone and displays different time units.

## Getting Started

To get started with this app, clone or download the repository from GitHub. This app uses node and gulp for managing tasks. So before starting to redeveloping this app, install these dependencies.

### Required

This is the list of required software/technologies to run for further instructions.

- IDE (Integrated Development Environment)
- node
- Last but not least, Browser🌐!

### Installing

Follow this step by step instruction to install dependencies. Code is provided as an example.

First, open the terminal / Command Prompt and navigate to this project folder and follow the steps.

**Step 1 :** Install Dependencies. Run below code in the terminal

    npm install

**Step 2 :** Run Gulp **watch** command. This will run the app in development mode. This will start a local server and opens the website in the browser. It is **Live Server**, so if you make any changes in the files, it will run the gulp task associated with the file type, and refreshes the page. Now you can add your own code and use this app to create more than this!

    gulp watch

### Deployment

**Step 1 :** Once the development process is done, run Gulp **build** command to make an optimized copy of the app. This will optimize all of your assets as well as code. It will compress the images, minify HTML, CSS, JS files. It also adds auto-prefix to the CSS files. The app also uses **babel** in this step to compile ES6 code into vanilla JavaScript so that code can be understood by older browsers.

    gulp build

**Step 2** : Upload these build files to your server.

## Built With

The following Framework/Technologies are used in this project's development.

- Node - [https://nodejs.org/en/](https://nodejs.org/en/)
- Gulp (Task Manager) - [https://gulpjs.com/](https://gulpjs.com/)
- Browser Sync (To create development server) - [https://www.browsersync.io/](https://www.browsersync.io/)
- Babel (To compile ES6 JS code) - [https://babeljs.io/](https://babeljs.io/)
- SCSS (To create CSS of the project) - [https://sass-lang.com/](https://sass-lang.com/)

## Vendors

This is the list of third party packages used in the development process.

- Gulp - [https://www.npmjs.com/package/gulp](https://www.npmjs.com/package/gulp)
- gulp-uglify - [https://www.npmjs.com/package/gulp-uglify](https://www.npmjs.com/package/gulp-uglify)
- gulp-rename - [https://www.npmjs.com/package/gulp-rename](https://www.npmjs.com/package/gulp-rename)
- gulp-concat - [https://www.npmjs.com/package/gulp-concat](https://www.npmjs.com/package/gulp-concat)
- gulp-bable - [https://www.npmjs.com/package/gulp-babel](https://www.npmjs.com/package/gulp-babel)
- gulp-sass - [https://www.npmjs.com/package/gulp-sass](https://www.npmjs.com/package/gulp-sass)
- gulp-autoprefixer - [https://www.npmjs.com/package/gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)
- gulp-clean-css - [https://www.npmjs.com/package/gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css)
- gulp-htmlmin - [https://www.npmjs.com/package/gulp-htmlmin](https://www.npmjs.com/package/gulp-htmlmin)
- browser-sync - [https://www.npmjs.com/package/browser-sync](https://www.npmjs.com/package/browser-sync)
- node-sass - [https://www.npmjs.com/package/node-sass](https://www.npmjs.com/package/node-sass)

### Read More About this project

- Folder Structure - _Link to Folder structure md file_
- JavaScript Functions - _Link to javaScript functions md file_
- Gulp Functions - _Link to Gulp functions md file_

**Author** : [Harsh P Patel](https://github.com/harshPPatel)
