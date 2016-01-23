# About

## Get started
First we need some global modules:

`npm install --global typescript gulp tsd`

Then we need to install the node modules:
`npm install`

Then we need to make the type definition files for the server
`cd server`
`tsd init -y`
`tsd install express -s`

Then we need to make the type definition files for the client
`cd client`
`tsd init -y` 

Then we need to run the gulp tasks (from the root)
`gulp`

Then we can start the server by running
`node dist/server.js`
