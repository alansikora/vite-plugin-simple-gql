# ⚡ vite-plugin-simple-gql

[![npm](https://img.shields.io/npm/v/vite-plugin-simple-gql.svg)](https://www.npmjs.com/package/vite-plugin-simple-gql)
[![npm](https://img.shields.io/npm/dt/vite-plugin-simple-gql)](https://www.npmjs.com/package/vite-plugin-simple-gql)

Easily import [`.graphql`] and [`.gql`] files using [`Vite`].

[`vite`]: https://github.com/vitejs/vite

## Install

```bash
npm i vite-plugin-simple-gql -D
# yarn add vite-plugin-simple-gql -D
```

## Usage

add this plugin to `vite.config.js`

```js
import { defineConfig } from 'vite';
import gql from 'vite-plugin-simple-gql';
export default defineConfig({
  plugins: [gql()]
});
```

import your `graphql` files

```js
import MyQuery from './queries/MyQuery.graphql'
```

##

## License

MIT