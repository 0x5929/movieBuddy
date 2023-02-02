# movieBuddy

## To Get Started

```sh
$ git clone <repo.git>
$ yarn
```

### Compile and Hot-Reload for Development

```sh
$ yarn start
```

### Compile and Minify for Production

```sh
$ yarn build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
$ yarn test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
$ yarn lint
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/) (yet to be implemented, see TODOs below)

```sh
$ yarn test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
$ yarn build
$ yarn test:e2e
```

---

### TODOs
1. further testing
    - mock `vue-router` 
    - mock `fetch`
    - e2e testing with cypress
2. features
    - menu button in header (with modals for credits, terms and privacy info)
    - light/dark mode switch (with working theme in tailwindcss)
    - spinner for render while waiting for API response
3. DX
    - add support for module aliases 


