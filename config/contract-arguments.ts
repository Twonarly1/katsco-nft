import { utils } from "ethers";
import CollectionConfig from "./collection-config";

// Update the following array if you change the constructor arguments...
const ContractArguments = [
    CollectionConfig.tokenName,
    CollectionConfig.tokenSymbol,
    utils.parseEther(CollectionConfig.whitelistSale.price.toString()),
    CollectionConfig.maxSupply,
    CollectionConfig.whitelistSale.maxMintAmountPerTx,
    CollectionConfig.hiddenMetadataUri,
] as const;

export default ContractArguments;
