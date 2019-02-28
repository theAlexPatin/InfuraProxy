# Infura Relay Server

A Node/Express.js-based web server wrapping the functionality of the Infura API standard HTTPS Web3 methods.

Use this to host your own Web3 provider for general use or to circumvent Infura CORS issues.

## Dependencies

- Node.js > 9.0
- PM2 (`npm install -g pm2`)

## Installation/Setup

```
$ git clone https://github.com/theAlexPatin/InfuraRelay.git
$ cd InfuraRelay
$ npm install
$ printf "INFURA_ID=<YOUR_INFURA_ID>\nINFURA_SECRET=<YOUR_INFURA_SECRET>"> .env"
```

Make sure to set `<YOUR_INFURA_ID>` and `<YOUR_INFURA_SECRET>`


## Running in Development

`$ npm run dev`

## Running in Production

- Build for Production: `$ npm run build`
- Start production server: `$ npm run start`
- Restart production server after building: `$ npm run restart`
- Stop production server: `$ npm run stop`
- Enter server logs: `$ npm run logs`

```
$ npm run build
$ npm run start
$ npm run
```

## Making Requests

The default host in development is http://localhost:5000/

You can change this by setting the `PORT` variable in your .env file

### Standard Request Format:
```
$ curl -X POST
  -H "Content-type: application/json" \
  --data '{"jsonrpc": "2.0", "id": 1, "method": "<DESIRED WEB3 METHOD>", "params": [<LIST OF WEB3 PARAMETERS>]}' \
  "http://localhost:5000/<NETWORK_NAME>"
```

Make sure to set `<NETWORK_NAME>` to your desired network

### Available Networks:

- Ethereum Mainnet: `mainnet`
- Ropsten Network: `ropsten`
- Kovan Network: `Kovan`
- Rinkeby Network: `Rinkeby`
