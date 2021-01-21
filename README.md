# Module Federation

## Purpose
To split our FE into smaller, focussed codebases with different ownership and release cadences whilst still allowing us to share logic and features and deliver a unified single SPA experience

## Monorepo
Even though the Module federation pattern isn't limited to a monorepo, I have created this as a monorepo for convenience.


### Setup
Install package dependencies using yarn.
```
yarn
```

**.env**

Each package contains a `.env.example` file that stands up that particular SPA up locally whilst using the deployed versions as remotes. Copy this example file to `.env` before running any of the scripts below

### Run 
Each package has 3 scripts

- `serve` - Compiles and hot-reloads for development
- `build` - Compiles and minifies for production
- `start` - Compiles and minifies for production and serves with [Servor](https://www.npmjs.com/package/servor)

You can chose to run these scripts individually from their package dir

```cmd
yarn serve
yarn build
yarn start
```

...or all at once from the repo root using the lerna cmd line tool

```cmd
lerna run serve
lerna run build
lerna run start
```



## Packages

### Shell
Base application, responsible for exposing the basic layout, routing and login functionality for the unified SPA

Deployed to https://nervous-jones-f43a95.netlify.app/

### App
Focussed SPA, closely integrated with Shell, exposing a single page to be shown on the unified SPA

Deployed to https://happy-kirch-47dfe1.netlify.app/app

### Styleguide
Simple standalone SPA that showcases components, exposes shared base components 

Published to https://www.npmjs.com/package/@brockreece/test-styleguide





