# Components Library

##### Installation

* `npm install`

##### Development

* `npm start` - it will launch the demo site, which can be used to develop components. The code will be served at `http://localhost:3333`.

NOTE: If you're adding a new component, make sure you add its path to the `entry` object in `webpack.library.config.js`.

##### Build components

* `npm run build` - this will build all the components specified in the `entry` field of `webpack.library.config.js` and output them to `dist` folder

##### Build demo page

* `npm run build:demo` - this will create a demo page that showcases our components (the same that you get with `npm start`). It will be outputted to the `demo` folder, which can then be viewed as a static website.

##### Linting

* `npm run lint`
* `npm run prettier`

Let the tools keep our code pretty :)

##### Library usage in the end product

If we put this repo on npm or something, this would be the way to import components:

```
import React from 'react';
import ReactDOM from 'react-dom';

import ThemeProvider from 'components-library/dist/ThemeProvider';
import Button from 'components-library/dist/Button';

ReactDOM.render(
  <ThemeProvider>
    <Button>Click me!</Button>
  </ThemeProvider>,
  document.getElementById('root')
);
```
