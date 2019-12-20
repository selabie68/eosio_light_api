"use strict";

const RPCClient = require('jsonrpc2-ws').Client;

const client = new RPCClient('ws://localhost:5010/');


client.on('connected', () => { console.log('connected'); });
client.on('error', (err) => { console.error(err); });

client.on('error', (err) => { console.error(err); });

client.methods.set("reqdata", (socket, params) => {
    console.log(JSON.stringify(params, null, 2));
    if( params.end ) {
        process.exit();
    }
});


async function send_req() {
    try {
        let res = await client.call("get_balances", {
            reqid: 100,
            network: 'jungle',
            accounts: ['cc32dninexxx', 'training1111'] });
        console.log(JSON.stringify(res, null, 2));
    }
    catch(err) {
        console.error(err);
    }
}

send_req();

