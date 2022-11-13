# JWT Viewer

[![Build Status][github-actions-shield]][github-actions]

Exactly like [JWT.io][jwt-io], except it's neither as beautiful nor remotely as useful :trollface:.

I'm only interested in the claims from the `payload`. I neither care about the `header` nor the `signature`.

If you feel adventurous you can try the [hosted version][jwt-viewer].

## Running locally

:female_detective: If you would like to inspect some top-secret `JWT` I advise you to run locally (the app is self-contained). You'll need:

- [Latest Node.js LTS][node-js]
- [Yarn modern][yarn-modern]

Then run the following commands one by one:

```shell
yarn
yarn start
```

## CI/CD

Each push to `main` triggers a `GitHub Actions` workflow and a deployment to `Azure Static Web Apps`.

[jwt-io]: https://jwt.io/
[jwt-viewer]: https://victorious-tree-09a6b2700.2.azurestaticapps.net
[node-js]: https://nodejs.org/en/download/
[yarn-modern]: https://yarnpkg.com/getting-started/install
[github-actions-shield]: https://github.com/gabrielweyer/jwt-viewer/actions/workflows/workflow.yml/badge.svg
[github-actions]: https://github.com/gabrielweyer/jwt-viewer/actions/workflows/workflow.yml
