import { ethers } from "ethers";
import Crowdr from "../../../Crowdr.json";

const contractABI = Crowdr.abi;

const contractAddress = '0x550411dD1c8f2A70eF278F691179490F0ace919f'

export const contractInstance = (
  provider: ethers.Signer | ethers.providers.Provider | undefined
) => {
  return new ethers.Contract(contractAddress, contractABI, provider);
};

export const getMyCampaigns = async (
  provider: ethers.Signer | ethers.providers.Provider | undefined,
  creatorAddr: string
) => {
  try {
    const contract = await contractInstance(provider);

    let campaignIndexes = await contract.getCreatorCampaigns(creatorAddr);

    if (!campaignIndexes) return [];

    campaignIndexes = campaignIndexes.map((item: number) => Number(item));

    let campaigns = [];

    for (let i = 0; i < campaignIndexes.length; i++) {
      const data = await contract.getCampaignDetails(campaignIndexes[i]);

      console.log(data);

      const campaign = {
        id: i,
        title: data[0],
        description: data[1],
        owner: data[2],
        goal: Number(data[3]),
        endTime: Number(data[4]),
        totalFunds: Number(data[5]),
        category: data[6],
        isOpen: data[7],
        image: data[8]
      };
      campaigns.push(campaign);
    }

    return campaigns;
  } catch (e) {
    console.log(e);
  }
}

export const getCampaigns = async (
  provider: ethers.Signer | ethers.providers.Provider | undefined
) => {
  try {
    const contract = await contractInstance(provider);

    let campaignsLength = await contract.getCampaignsLength();
    
    if (!campaignsLength) return []

    campaignsLength = Number(campaignsLength)

    let campaigns = [];

    for (let i = 0; i < campaignsLength; i++) {
      const data = await contract.getCampaignDetails(i);

      console.log(data);

      const campaign = {
        id: i,
        title: data[0],
        description: data[1],
        owner: data[2],
        goal: Number(data[3]),
        endTime: Number(data[4]),
        totalFunds: Number(data[5]),
        category: data[6],
        isOpen: data[7],
      };
      campaigns.push(campaign);
    }

    return campaigns;
  } catch (e) {
    console.log(e);
  }
}


export const createCampaign = async (
  provider: ethers.Signer | ethers.providers.Provider | undefined
 
  ) => {
 
  const contract = await contractInstance(provider)
  const tx = await contract.createCampaign(
    'hello2',
    'desc',
    2000,
    88990007655,
    1,
    1
  );
};

export const getCreatorCampaigns = async (
  provider: ethers.Signer | ethers.providers.Provider | undefined,
  addr: any
) => {
  const contract = await contractInstance(provider);
  return await contract.getCreatorCampaigns(addr)

}


export const getAllCategories = async (
  provider: ethers.Signer | ethers.providers.Provider | undefined
  ) => {
  const contract = await contractInstance(provider)
  return await contract.getAllCategories()
}