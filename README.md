# Introduction

This is a quick boiler plate for Frontend Devs willing to use tailwindcss and .sass in their project

### Two Options to watch Sass

You can either use

# Node-Sass to watch the changes via VSCode

"liveSassCompile.settings.autoprefix": [],
"liveSassCompile.settings.generateMap": false
"liveSassCompile.settings.formats": [
{
"format": "expanded",
"extensionName": ".css",
"savePath": "/src/stylesheets/css"
}
],

# or

# You can add the script below to your package.json file

"twdBuild": "tailwind build src/stylesheets/css/twd-input.css -o src/stylesheets/css/twd-output.css",
"sass": "node-sass --watch src/stylesheets/sass -o src/stylesheets/css",
"start": "yarn twdBuild && react-scripts start",

## Available Scripts

In the project directory, you can run:

### `yarn sass`

This watches your sass file on every save
