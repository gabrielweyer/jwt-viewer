# JWT Viewer

[![Build Status][github-actions-shield]][github-actions]

Exactly like [JWT.io][jwt-io], except it's neither as beautiful nor remotely as useful :trollface:.

I'm only interested in the claims from the `payload`. I neither care about the `header` nor the `signature`.

If you feel adventurous you can try the [hosted version][jwt-viewer].

## Running locally

:female_detective: If you would like to inspect some top-secret `JWT` I advise you to run locally (the app is self-contained). You'll need:

- [Node.js][node-js]
- [Yarn][yarn]

Then run the following commands one by one:

```shell
yarn
yarn start
```

## CI/CD

Each push to `main` triggers a `GitHub Actions` workflow and a deployment to `Azure Blob storage`. I'm using `Azure Functions Proxies` to be able to support an extension-less URI and reload.

[jwt-io]: https://jwt.io/
[jwt-viewer]: https://jwtviewer.azurewebsites.net/
[trello-board]: https://trello.com/b/8JWl1Nc7/jwt-viewer
[node-js]: https://nodejs.org/en/download/
[yarn]: https://yarnpkg.com/lang/en/docs/install/
[github-actions-shield]: https://github.com/gabrielweyer/jwt-viewer/actions/workflows/workflow.yml/badge.svg
[github-actions]: https://github.com/gabrielweyer/jwt-viewer/actions/workflows/workflow.yml
