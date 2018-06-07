const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
  'body sheriff elegant theory adult tide sign group absent arrive potato census',
  'https://rinkeby.infura.io/CWlVPDk00YZkGGSFMl25'
);

const web3 = new Web3(provider);

const deploy = async () => {
  //Mnuemonic genereates all the accounts
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
  .deploy({ data: '0x' + compiledFactory.bytecode})
  .send({gas: '1000000', from: accounts[0]});

  console.log('Contract deployed to', result.options.address);
};
deploy();

//deployed address:  0xa0cCf7875F1F8Af0D0B8D95F42405b074B18CE8C
