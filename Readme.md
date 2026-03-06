# react-jsbarcode

[![npm](https://img.shields.io/npm/v/react-jsbarcode.svg)](https://www.npmjs.com/package/react-jsbarcode)
[![Known Vulnerabilities](https://snyk.io/test/github/iamchathu/react-jsbarcode/badge.svg)](https://snyk.io/test/github/iamchathu/react-jsbarcode)
[![Code Climate](https://codeclimate.com/github/iamchathu/react-jsbarcode/badges/gpa.svg)](https://codeclimate.com/github/iamchathu/react-jsbarcode)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/1327fdb350f84fc7b3dded573c983892)](https://www.codacy.com/gh/iamchathu/react-jsbarcode/dashboard?utm_source=github.com&utm_medium=referral&utm_content=iamchathu/react-jsbarcode&utm_campaign=Badge_Grade)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/iamchathu/react-jsbarcode/master/LICENSE)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/iamchathu/react-jsbarcode.svg?style=social)](https://twitter.com/intent/tweet?text=Barcode+for+react&url=https%3A%2F%2Fgithub.com%2Fiamchathu%2Freact-jsbarcode)

## About

This is a [React](https://reactjs.org) component wrapping up [jsbarcode](<[https://](https://github.com/lindell/JsBarcode)>). Written as a React functional component using React hooks. <ReactBarcode />

## 🌏  Open in the Cloud 
Click any of the buttons below to start a new development environment to demo or contribute to the codebase:

[![Open in VS Code](https://img.shields.io/badge/Open%20in-VS%20Code-blue?logo=visualstudiocode)](https://vscode.dev/github/iamchathu/react-jsbarcode)
[![Open in Glitch](https://img.shields.io/badge/Open%20in-Glitch-blue?logo=glitch)](https://glitch.com/edit/#!/import/github/iamchathu/react-jsbarcode)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/iamchathu/react-jsbarcode)
[![Edit react-jsbarcode](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-jsbarcode-2659g?fontsize=14&hidenavigation=1&theme=dark)
[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/react-jsbarcode?file=src%2FApp.tsx)[![Open in Repl.it](https://replit.com/badge/github/withastro/astro)](https://replit.com/github/iamchathu/react-jsbarcode)
[![Open in Codeanywhere](https://codeanywhere.com/img/open-in-codeanywhere-btn.svg)](https://app.codeanywhere.com/#https://github.com/iamchathu/react-jsbarcode)
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/iamchathu/react-jsbarcode)

## Installation

using NPM

```bash
npm i react-jsbarcode
```

using yarn

```bash
yarn add react-jsbarcode
```

using PNPM

```bash
pnpm add react-jsbarcode
```

## Usage

- Basic usage

```tsx
import { ReactBarcode } from 'react-jsbarcode';

const App = () => {
  return <ReactBarcode value="ABC123" />;
};
```

- Advanced usage

```tsx
import { ReactBarcode } from 'react-jsbarcode';

const App = () => {
  return <ReactBarcode value="ABC123" options={{ format: 'code128' }} renderer="svg" />;
};
```

For all options refer jsbarcode [wiki](https://github.com/lindell/JsBarcode/wiki/Options).

### Renderers

JSBarcode supports rendering to SVG, image and canvas. Default renderer is 'svg'.

