# Task Manager SPA ✅

A Vue 3 + TypeScript single-page app for managing tasks. It is the frontend half of a
decoupled pair — the backend it talks to is
[to-do-list-api](https://github.com/DevoidTuna/to-do-list-api), a Laravel REST API.

## Features

- Registration and login against the API's OAuth2 endpoints, with the session persisted
  across reloads.
- Task list with create, edit, complete and delete.
- Date and datetime handling via Luxon, wrapped in dedicated `TDateInput` /
  `TDatetimeInput` components so formatting rules live in one place.

## Architecture notes

The parts worth pointing at:

- **`contracts/ModelService.ts`** — a shared interface that `TodoService` and
  `UserService` both implement, so every resource is consumed through the same shape and
  a new one is a matter of implementing the contract rather than inventing another
  ad-hoc axios call.
- **Split routers** — `router/public.ts` and `router/private.ts` are declared separately
  and merged in `router/index.ts`, which keeps the auth guard a property of the route
  table rather than a condition scattered through components.
- **Typed throughout** — services, stores, router and API response shapes
  (`types/DataResponse.d.ts`) are all TypeScript; components are auto-imported with
  generated declarations (`components.d.ts`, `typed-router.d.ts`).
- **`components/core/`** — presentational `T*` primitives (buttons, cards, inputs,
  snackbars) kept apart from the task-specific components in `components/to-do/`.

## Stack

| Layer | Technology |
|---|---|
| Framework | Vue 3 (Composition API) + TypeScript |
| UI | Vuetify 3 |
| State | Pinia, with persisted state |
| HTTP | Axios |
| Dates | Luxon |
| Build | Vite |

## Running locally

Requires **Node.js 18+**, and the API running (see
[to-do-list-api](https://github.com/DevoidTuna/to-do-list-api)).

```bash
npm install
npm run dev
```

Point the app at your API instance through the axios base URL in `src/plugins/axios.ts`.
