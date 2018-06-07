import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';
const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xa0cCf7875F1F8Af0D0B8D95F42405b074B18CE8C'
);

export default instance;
