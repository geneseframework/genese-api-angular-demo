# genese-api-angular-demo

 genese-api-angular-demo is a demonstration of the [genese-angular](https://www.npmjs.com/package/genese-angular) module, with the help of a backend in NestJs.
 
 This demonstration will help you to understand the concepts of the genese-angular module, which is using the core of the Genese framework : the generic mapper [genese-mapper](https://www.npmjs.com/package/genese-mapper).
 
 ## Installation
 
At first you need to install the npm module:

```sh
npm install genese-angular-demo --save
```

## Start

- Open a first terminal, move on the `backend` folder and launch the NestJs backend: 

```sh
npm run start
```
By default, the backend will be launched on port 3000.

- Open a second terminal, at the root of the project, and launch the frontend Angular app :

```sh
npm run start
```

By default, the frontend will be launched on port 4200.

## Usage

On the left side, you can choose which genese-angular method that you want to test. You will see most of the results on the page of the app, but some of them are displayed only in the navigator console. This behavior is the simplest way to show you the difference between the json data sent by the backend and the typed objects returned by the genese-angular module.
