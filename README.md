# Guilds

[![Test](https://github.com/asoltd/guilds/actions/workflows/test.yml/badge.svg)](https://github.com/asoltd/guilds/actions/workflows/test.yml)
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

I already submitted a PR for the main firebase package, but it might take some
time before it's up and running, so for now got to use the workaround to benefit
from the amazingly fast `bun install` and `bun test`.

## Usage

First, start the firebase emulators:

```sh
firebase emulators:start
```

Then to run development server on [http://localhost:3000](http://localhost:3000)
with hot-reload:

```sh
bun next dev
```

The NextJS compliler is written is Rust so it is super fast, yet also
well-maintained. There is also an option to run the dev server with bun, but it
has its hickups.

```sh
bun dev --reload
```

Mainly, there are some issues with bundling NextJS and the firebase
authentication with emulators struggles.

## License

MIT
