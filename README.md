# eslint-config
My own ESLint config.

## Instalation and Usage
You can install ESLint using npm or yarn:
```
$ npm i eslint -D
```

Install my config:
```
$ npm i @m-kutnik/eslint-config -D
```

#### JS Configuration:
```javascript
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parser: 'babel-eslint',
  extends: [
    '@m-kutnik/eslint-config'
  ]
}
```

#### Vue configuration
Firstly install webpack resolver for ESLint:
```
$ npm i -D eslint-import-resolver-webpack
```

```javascript
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    '@m-kutnik/eslint-config',
    'plugin:vue/recommended',
    'eslint:recommended',
    '@vue/prettier',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './node_modules/@vue/cli-service/webpack.config.js',
      },
    },
  },
}

```

## Excluding files/directories
To exclude files/directories create valid `.eslintignore` file.
Docs are available [here](https://eslint.org/docs/user-guide/configuring#ignoring-files-and-directories)

Example:
```
/dist/**
/node_modules/**
```

## Using ESLint
### **The Best Way™**
Install ESLint locally and create a script in `package.json`
```json

{
  ...

  "scripts": {
    "lint": "eslint ./src",
    "fix": "eslint --fix ./src"
  },  

  ...  
},
```
### *The OK way™*

If ESLint is installed locally:

```
$ npx eslint ./src
```
If ESLint is installed globally:

```
$ eslint ./src
```
