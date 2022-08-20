# Guilds

[![Lint](https://github.com/asoltd/guilds/actions/workflows/lint.yml/badge.svg)](https://github.com/asoltd/guilds/actions/workflows/lint.yml)
[![Build](https://github.com/asoltd/guilds/actions/workflows/build.yml/badge.svg)](https://github.com/asoltd/guilds/actions/workflows/build.yml)
[![Style](https://github.com/asoltd/guilds/actions/workflows/style.yml/badge.svg)](https://github.com/asoltd/guilds/actions/workflows/style.yml)

## Features

- [Bun](https://bun.sh)
- [Next.js](https://nextjs.org/docs)
- [React](https://reactjs.org/docs/getting-started.html)
- [TypeScript](https://docs.microsoft.com/en-us/learn/modules/typescript-get-started/)
- [Firebase](https://firebase.google.com/docs) with [Firebase Emulators](https://firebase.google.com/docs/emulator-suite)
- [Reactfire](https://github.com/firebaseextended/reactfire)
- CSS in JS using [styled-components](https://styled-components.com/)
- [Prettier](https://prettier.io/)
- [Typescript ESLint](https://github.com/typescript-eslint/typescript-eslint)
- CI workflows for style/lint/build
- CD with [Vercel](https://vercel.com/)

## Installation

```sh
bun install
```

There is an issue with one of the modules resulting in a build error, as a
workaround update the `registerFunctions` call in
`/node_modules/@firebase/functions/dist/index.esm2017.js`:

```tsx
...
/**
 * Cloud Functions for Firebase
 *
 * @packageDocumentation
 */
if (fetch?.bind !== undefined) {
    registerFunctions(fetch?.bind(self));
}
```

## Usage

First, start the firebase auth emulator

```sh
firebase emulators:start
```

To run the development server on [http://localhost:3000](http://localhost:3000)
with hot-reload:

```sh
bun dev --reload
```

## License

MIT
