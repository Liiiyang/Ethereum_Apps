const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'body sheriff elegant theory adult tide sign group absent arrive potato census',
  'https://rinkeby.infura.io/CWlVPDk00YZkGGSFMl25'
);

const web3 = new Web3(provider);

const deploy = async () => {
  //Mnuemonic genereates all the accounts
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
  .deploy({ data: '0x' + bytecode})
  .send({gas: '1000000', from: accounts[0]});

  console.log(interface);
  console.log('Contract deployed to', result.options.address);
};
deploy();

//TxHash on the Rinkeby Network: 0xd1E91849654fc778D56c99603b9bf9868C8376e3
