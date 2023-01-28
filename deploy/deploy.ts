import { developmentChains, networkConfig, VERIFICATION_BLOCK_CONFIRMATIONS } from "../helper-hardhat-config"
import verify from "../lib/verify"
import { DeployFunction } from "hardhat-deploy/types"
import { HardhatRuntimeEnvironment } from "hardhat/types"
import collectionConfig from "../config/collection-config"
import ContractArguments from "../config/contract-arguments"

const deployMultiMetaNft: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployments, getNamedAccounts, network, ethers } = hre
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const waitBlockConfirmations = developmentChains.includes(network.name) ? 1 : VERIFICATION_BLOCK_CONFIRMATIONS
    const chainId = network.config.chainId!

    log("----------------------------------------------------")
    const args = [...ContractArguments]

    const multiMetaNft = await deploy(collectionConfig.contractName, {
        from: deployer,
        args: args,
        log: true,
        waitConfirmations: waitBlockConfirmations || 1,
    })

    // Verify the deployment
    if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
        log("Verifying...")
        await verify(multiMetaNft.address, args)
    }
}

export default deployMultiMetaNft
deployMultiMetaNft.tags = ["all", "multiMetaNft", "main"]
