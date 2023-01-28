import CollectionConfigInterface from "../lib/collection-config-interface"
import whitelistAddresses from "./whitelist.json"

const collectionConfig: CollectionConfigInterface = {
    // The contract name can be updated using the following command:
    // yarn rename-contract NEW_CONTRACT_NAME
    // Please DO NOT change it manually!
    contractName: "MultiMetaNft",
    tokenName: "Multi Meta NFT",
    tokenSymbol: "KMM",
    hiddenMetadataUri: "ipfs://__CID__/hidden.json",
    maxSupply: 400,
    whitelistSale: {
        price: 0.09,
        maxMintAmountPerTx: 1,
    },
    preSale: {
        price: 0.07,
        maxMintAmountPerTx: 2,
    },
    publicSale: {
        price: 0.12,
        maxMintAmountPerTx: 2,
    },
    contractAddress: null,
    whitelistAddresses,
}

export default collectionConfig
