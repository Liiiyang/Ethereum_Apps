const path = require('path');
const fs = require('fs');
const solc = require('solc');

//Generates path to the Inbox.sol location
const inboxPath = path.resolve(__dirname, 'contracts','Inbox.sol');

//Read Inbox.sol content
const source = fs.readFileSync(inboxPath, 'utf8');

//1 - number of contracts required to compile
//console.log(solc.compile(source, 1));

/*
contracts[':Inbox'] gets access to bytecode, which will be deployed to
the network
*/
module.exports = solc.compile(source, 1).contracts[':inbox'];
