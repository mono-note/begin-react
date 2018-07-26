# Begin-react

### start react with webpack

Make a **new project** and **cd**

```bash
mkdir begin-react
cd react
```

Create a **package.json**

```bash
npm init
```

or skip questions

```bash
npm init -y
```

install **webpack** as a dev dependency and **webpack-cli**

```bash
npm i webpack webpack-cli -D
```

add following scripts into **package.json**

```bash
  "scripts": {
    "start": "webpack --mode development",
    "build": "webpack --mode production"
  },
```

### Setting React and Babel

install **react** and **react-dom**

```bash
npm i react react-dom -S
```

install **babel-core, babel-loader, babel-preset-env and babel-preset-react**

```bash
npm i babel-core babel-loader babel-preset-env babel-preset-react -D
```

- babel-core: Transforms your ES6 code into ES5
- babel-loader: Webpack helper to transform your JavaScript dependencies (for example, when you import your components into other components) with Babel
- babel-preset-env: Determines which transformations/plugins to use and polyfills (provide modern functionality on older browsers that do not natively support it) based on the browser matrix you want to support
- babel-preset-react: Babel preset for all React plugins, for example turning JSX into functions

Create a **webpack.config.js** file to set the rules of babel-loader.

```bash
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: []
};
```

And create file **.babelrc** to provide the options for babel-loader

```bash
{
  "presets": ["env", "react"]
}
```

Next, Create a **src** folder with **index.js** and add code

```bash
import React from "react";
import ReactDOM from "react-dom";

const Index = () => {
  return <div>Hello React!</div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));
```

And make a **index.html** file in the **src** folder

```bash
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>React and Webpack4</title>
</head>
<body>
  <section id="index"></section>
</body>
</html>
```

install **html-webpack-plugin**

```bash
npm i html-webpack-plugin -D
```

Update the webpack config like so:

```bash
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    }]
  },
  plugins: [new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
  })]
};
```

Now, run **npm run start**

# Setting up webpack-dev-server

install **webpack-dev-server**

```bash
npm i webpack-dev-server -D
```

After that change **package.json** file start scripts

```bash
"scripts": {
  "start": "webpack-dev-server --mode development --open",
  "build": "webpack --mode production"
},
```

- **--open** Everytime you make changes refresh the page
- **--hot** reload the component that it changed.

# Setting up CSS

Importing CSS files into our React components install **css-loader** and **style-loader**

```bash
npm i css-loader style-loader -D
```

update our **webpack.config.js**

```bash
module: {
  rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    },
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    }
  ]
}
```

## Making CSS modular

class name will be scoped locally and specific to only the component in question,
we can provide some options to css-loader in **webpack.config.js**

```bash
rules: [{
 ...
},
{
  test: /\.css$/,
  use: [{
      loader: "style-loader"
    },
    {
      loader: "css-loader",
      options: {
        modules: true,
        importLoaders: 1,
        localIdentName: "[name]_[local]_[hash:base64]",
        sourceMap: true,
        minimize: true
      }
    }
  ]
}
```
# Entry and output points
Webpack 4 by default has a default entry point of index.js in your src folder. If you would like to point to a different file, you can do so by specifying an entry point in your webpack config file:
```bash
module.exports = {
  entry: "./src/app.js",
  module: {
   ...
  }
}
```
You can also specify output file like so:
```bash
const path = require('path')
module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(‘dist’),
    filename: ‘bundled.js’
  },
  module: {
    ...
  }
}
```
after that run **npm run start**
or
## clone this to your project