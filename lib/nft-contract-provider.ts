// The name below ("YourNftToken") should match the name of your Solidity contract.
// It can be updated using the following command:
// yarn rename-contract NEW_CONTRACT_NAME
// Please DO NOT change it manually!
import { MultiMetaNft as ContractType } from "../typechain-types/index"

import { ethers } from "hardhat"
import collectionConfig from "../config/collection-config"

export default class NftContractProvider {
    public static async getContract(): Promise<ContractType> {
        // Check configuration
        if (collectionConfig.contractAddress === null) {
            throw (
                "\x1b[31merror\x1b[0m " +
                "Please add the contract address to the configuration before running this command."
            )
        }

        if (
            (await ethers.provider.getCode(
                collectionConfig.contractAddress
            )) === "0x"
        ) {
            throw (
                "\x1b[31merror\x1b[0m " +
                `Can't find a contract deployed to the target address: ${collectionConfig.contractAddress}`
            )
        }

        return (await ethers.getContractAt(
            collectionConfig.contractName,
            collectionConfig.contractAddress
        )) as ContractType
    }
}

export type NftContractType = ContractType
