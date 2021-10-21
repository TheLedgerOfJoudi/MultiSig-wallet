import {useState, React, useEffect} from "react";
import { ethers } from "ethers";
import { ABI, ADDRESS, walletABI } from "../../config";

function Balance () {
    const [balance, setBalance] = useState("0");

    useEffect(() => {
        const timerId = setInterval(() => {
            set_balance();
       }, 1000);
    }, [])

    async function set_balance(){
        let provider = new ethers.providers.Web3Provider(window.ethereum)
        const contract  = new ethers.Contract(
            ADDRESS,
             walletABI,
              provider)
        let newBalance = await contract.getBalance()
        newBalance = ethers.utils.formatEther(newBalance)
        setBalance(newBalance)
    }

        
    return <div>Balance: {balance}</div>

}
export default Balance