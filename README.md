# JWT Viewer

Exactly like [JWT.io][jwt-io], except it's neither as beautiful or remotely as useful.

If you feel adventurous you can try the [hosted version][jwt-viewer].

This is very much a **work in progress**. If I manage to motivate myself I'll work on the cards listed in this [public Trello board][trello-board].

## Running locally

If you would like to inspect some top-secret `JWT` I advise you to run locally (the app is self-contained). You'll need:

- [Node.js][node-js]
- [Yarn][yarn]

Then run the following commands one by one:

```shell
yarn install
yarn start
```

## CI/CD

Each push to `master` triggers a build in `VSTS` and a deployment to `Azure Blob storage`. I'm using `Azure Functions Proxies` to be able to support an extension-less URI and tab reload.

`VSTS` does not support anonymous browsing but the build pipeline is available as [YAML](.vsts-ci.yml).

[jwt-io]: https://jwt.io/
[jwt-viewer]: https://jwtviewer.azurewebsites.net/
[trello-board]: https://trello.com/b/8JWl1Nc7/jwt-viewer
[node-js]: https://nodejs.org/en/download/
[yarn]: https://yarnpkg.com/lang/en/docs/install/
