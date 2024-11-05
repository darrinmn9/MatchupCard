# MatchupCard Component

## Project Folder Structure

This projected was scaffolded with [create-vue](https://github.com/vuejs/create-vue) which provides a minimal project structure for a `Vue` + `Vite` + `Vitest` (unit testing) + `Eslint/Prettier` (code formatting/linting). This scaffold does install extra dependencies for the dev environment, but the overall production code is just `HTML` + `CSS` + `JS` with `VueJS` being the only production external dependency.


## Project Setup

```sh
npm ci
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

## Example Component Usage
```html
<MatchupCard :matchups="matchupsList" />
```

## Known Limitations

- Font, sizes and colors may not be exact, but a good approximation based off the image provided.
- For the "ProgressCircular" component, I referenced an [open source example](https://vuetifyjs.com/en/components/progress-circular/) because I'm not a svg expert and was time constrained.
- I am relying on the hardcoded `matchupsList` data always existing and did not handle empty/error/loading states.
- The component always defaults to showing the 1st matchup, but could be improved to allow specifying an initial matchup index.
- The component does not watch for mutations to the `matchups` array after initial render.