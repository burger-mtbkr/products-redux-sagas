# CRUD Products React App using Redux Saga


**Overview:**

This is a simple CRUD product application to demonstrate using [Redux Saga](https://redux-saga.js.org/). This app is  the same as the previous [Products-React-Query](https://github.com/loanburger/products-react-query) app I added where I was using ReactQuery but in this instance we will not use React Query and instead use react redux and saga.

**Prerequisites:**

- You'll need the [Mongo-Api-Docker](https://github.com/loanburger/Mongo-Api-Docker) mock api.

**Tech:**

- [Yarn](https://yarnpkg.com/)
- React TypeScript
- [Material UI](https://mui.com/getting-started/installation/)
- [React Hook Forms](https://react-hook-form.com)
- React Testing Library-
- [Redux Toolkit](https://redux-toolkit.js.org/) - used for local app state like modal open/closed, selected rows etc.
- [Redux Saga](https://redux-saga.js.org/).
- [Github Actions](https://github.com/features/actions) for running checks - CI workflow can be seen [here](https://github.com/loanburger/products-redux-saga/blob/main/.github/workflows/build_test_react.yml)

**To run the project:**

- Start the [Mongo-Api-Docker](https://github.com/loanburger/Mongo-Api-Docker) mock api as described in [readme](https://github.com/loanburger/Mongo-Api-Docker/blob/master/README.MD) file of that repo.
- run `yarn install`
- run `yarn start:dev`
