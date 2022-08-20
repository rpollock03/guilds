# Next.js with Bun runtime

Bun is really amazing, you should check it out!

## Features

- NextJS
- TypeScript
- CSS in JS using styled-components
- Prettier
- ESLint
- CI workflows for style/lint/build
- supports CD with [Vercel](https://vercel.com/)

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

## Resources

- [Bun](https://bun.sh)
- [Next.js](https://nextjs.org/docs)
- [React](https://reactjs.org/docs/getting-started.html)
- [Firebase](https://firebase.google.com/docs)

## License

MIT
