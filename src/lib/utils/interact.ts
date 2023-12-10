
import { ethers } from 'ethers'
import Crowdr from '../../../Crowdr.json'


const contractABI = Crowdr.abi

const contractAddress = '0x73599C3d56fF856D3A3Ee9cdB82C9866C3247AE4'

export const contractInstance = (provider: ethers.Signer | ethers.providers.Provider | undefined) => {
  return new ethers.Contract(contractAddress, contractABI, provider)
}

export const getMyCampaigns = async (provider: ethers.Signer | ethers.providers.Provider | undefined, creatorAddr: string) => {
  try {
    const contract = await contractInstance(provider)

    let campaignIndexes = await contract.getCreatorCampaigns(creatorAddr)

    if (!(campaignIndexes)) return []

    campaignIndexes = campaignIndexes.map((item: number) => Number(item));

    let campaigns = []

    for (let i = 0; i < campaignIndexes.length; i++) {
      const data = await contract.getCampaignDetails(campaignIndexes[i])
    
      console.log(data)

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
      }
      campaigns.push(campaign)
    }

    return campaigns

  } catch (e) {
    console.log(e)
  }
}

export const createCampaign = async (
  provider: ethers.Signer | ethers.providers.Provider | undefined,
 
  ) => {
 
  const contract = await contractInstance(provider)
  
  const tx = await contract.createCampaign(
    'title',
    'desc',
    2000,
    88990007655,
    1,
    1
  )
  alert(tx)
  if (tx) {
    const result = await tx.wait()
    return result
  }
}

export const createEvent = async (
  provider: ethers.Signer | ethers.providers.Provider | undefined,
  title: string,
  eventTimestamp: number | undefined,
  deposit: string,
  maxCapacity: number,
  imagePath: string,
  phone: string
  ) => {
  
  const contract = await contractInstance(provider)
  const tx = await contract.createCampaign(
    2000,
    eventTimestamp,
    1,
    1
  )
  if (tx) {
    const result = await tx.wait()
    return result
  }
}

export const getCreatorCampaigns = async (
  provider: ethers.Signer | ethers.providers.Provider | undefined,
  addr: any
  ) => {
  const contract = await contractInstance(provider)

  const tx = await contract.getCreatorCampaigns(addr)
  return tx
  if (tx) {
    return await tx.wait()
  }
}

export const confirmAllAttendees = async (
  provider: ethers.Signer | ethers.providers.Provider | undefined
  ) => {
  const contract = await contractInstance(provider)
  try {
    const tx = await contract.confirmAllAttendees()
    if (tx) {
      return await tx.wait()  
    }
  } catch (error) {
    console.log(error)
  }
}

export const getContractBalance = async (
  provider: ethers.Signer | ethers.providers.Provider | undefined
  ) => {
  const contract = await contractInstance(provider)
  return await contract.getContractBalance()
}