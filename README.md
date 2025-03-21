# ATM Smart Contract
This Solidity program implements an ATM system where the owner can deposit, withdraw funds, and transfer ownership. This project demonstrates how to create a smart contract with basic financial transactions and owner-only restrictions using Solidity and how to interact with it using a frontend application.

## Description

This project consists of a smart contract written in Solidity, which allows the owner to deposit and withdraw funds and transfer ownership. The frontend application, developed with React and ethers.js, interacts with this smart contract, allowing the owner to perform these operations via a web interface.


### Installing Dependencies

- First terminal type: npm i
- second terminal type: npx hardhat node
- third terminal, type: npx hardhat run --network localhost scripts/deploy.js
- Back in the first terminal, type npm run dev to launch the front-end.
- After this, the project will be running on your localhost. Typically at http://localhost:3000/

### Usage Instructions

To use this application, you must follow these steps:

1. Connect your MetaMask wallet: Make sure you have the MetaMask browser extension installed. Connect it to your browser and log in using your credentials.

2. Import your private key: In MetaMask, import your Ethereum account using the private key associated with it. This will allow you to interact with the Ethereum network.

3. Establish your own network: Copy the details of the Hardhat network from your third terminal. In MetaMask, click on the network selection dropdown and choose "Custom RPC". Paste the network details (RPC URL, chain ID, etc.) into the respective fields.

4. Once connected and your network is established, you can interact with the smart contract deployed on your local network through the provided front-end interface.


## Authors

John Angelo Sagum
(https://github.com/ANGELO-SAGUM)


## License

This project is licensed under the MIT License - see the LICENSE.md file for details











# Starter Next/Hardhat Project

After cloning the github, you will want to do the following to get the code running on your computer.

1. Inside the project directory, in the terminal type: npm i
2. Open two additional terminals in your VS code
3. In the second terminal type: npx hardhat node
4. In the third terminal, type: npx hardhat run --network localhost scripts/deploy.js
5. Back in the first terminal, type npm run dev to launch the front-end.

After this, the project will be running on your localhost. 
Typically at http://localhost:3000/
