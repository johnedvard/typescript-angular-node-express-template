##About
Template code for an angular-typescript-node-express app
Most of the help came from this blogpost: http://blog.edenmsg.com/angular2-typescript-gulp-and-expressjs/
Also some help gotten from the angular site: https://angular.io/docs/ts/latest/quickstart.html

## Get started
First we need some global modules:

`npm install --global typescript gulp tsd`

Then we need to install the node modules:
`npm install`

Then we need to make the type definition files for the server
```
cd server
tsd init -y
tsd install express -s
```

Then we need to make the type definition files for the client
```
cd client
tsd init -y
```

Then we need to run the gulp tasks (from the root)
`gulp`

Then we can start the server by running
`node dist/server.js`
