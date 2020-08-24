## Resources

### API

[coronavirus-19-api.herokuapp.com/countries](https://coronavirus-19-api.herokuapp.com/countries)

### Steps

```sh
$ npm i styled-components
```

```sh
$ touch jsconfg-json
```

```sh
$ npm i @material-ui/core
```

```sh
$ config-overrides.js
```

```sh
$ npm i @material-ui/lab
```

```sh
$ npm i -D customize-cra
```

```sh
$ npm i -D react-app-rewired
```

`package.json`

```js
"scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```

#### PWA

`public/manifest.json`

```js
"short_name": "Covid-19",
"name": "Covid-19 app PWA",
```

`public/worker.js`

```js
var CACHE_NAME = 'covid19-pwa';
var urlsToCache = [
  '/'
];
...
```

`src/index.js`

```js
serviceWorker.register();
```

[Lighthouse](https://github.com/GoogleChrome/lighthouse#using-the-node-cli) analyzes web apps and web pages, collecting modern performance metrics and insights on developer best practices.

```sh
$ npm install -g lighthouse
$ lighthouse http://localhost:3000/
```

## Credits

[Tautorn/covid19-dio](https://github.com/Tautorn/covid19-dio)

## TODO

- [ ] check why does not work

```js
"start": "react-app-rewired start",
```

## Bla bla

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
