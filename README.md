<!-- markdownlint-disable MD033 MD041 -->

<div align="center">

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/S6S8L8OOP)
[![爱发电](https://img.shields.io/badge/%E7%88%B1%E5%8F%91%E7%94%B5_Afdian-946CE6?style=for-the-badge)](https://ifdian.net/a/SharpIce)

</div>

## Usage

### Install

```bash
npm add --save-dev postcss-remove-format-fonts # Npm
yarn add -D postcss-remove-format-fonts # Yarn
pnpm add -D postcss-remove-format-fonts # Pnpm
```

### Config

```javascript
// postcss.config.js
import postcssRemoveFontFormat from 'postcss-remove-format-fonts';

export default {
  plugins: [postcssRemoveFontFormat('woff')],
};
```

or

```javascript
// postcss.config.js
import postcssRemoveFontFormat from 'postcss-remove-format-fonts';

export default {
  plugins: [postcssRemoveFontFormat(['woff', 'openType'])],
};
```
