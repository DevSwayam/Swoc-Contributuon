// just importing all stuffs
import {useEffect, useState} from 'react';
import { ethers } from 'ethers';
import abi from "./contract/chai.json";
import './App.css';

function App() {

  //as we know that we need provider for every function so we just made a object and will reffer to it
const [state,setState] = useState({
  provider:null,
  signer:null,
  contract:null,
});

// this will connect to wallet and deal with smart contract interaction
useEffect(()=>{
  const connectWallet = async()=>{
    const contractAddress = 0x6B31C562a0aaF421A00E86a8657ce25aE3feA36b ; // deployed contract address
    const connectAbi = abi.abi; // contract abi from abi from artifacts.
    
    try{
      const {ethereum}=window; // requests browser for wallet interaction
      if(ethereum){
        const account = await ethereum.request({method:"eth_requestAccounts"}); // if connected to wallet then request account
      }
      const provider = new ethers.providers.Web3Provider(ethereum); // web3 provider which will connect to node
      const signer = provider.getSigner();// so that we can sign transactions
      const contract = new ethers.Contract(contractAddress,connectAbi,signer); // creating instance
      setState({provider,signer,contract});// and we set our state and we can interact with contract now
    }catch(error){ // if we get error it will catch it
      console.log(error);
    }
  
  };
  connectWallet();
},[]);
console.log(state);
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
