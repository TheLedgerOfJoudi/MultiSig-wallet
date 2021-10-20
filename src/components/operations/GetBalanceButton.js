import React from "react";
import { ethers } from "ethers";
import { ABI, ADDRESS, walletABI } from "../../config";

class GetBalanceButton extends React.Component{
    constructor(){
        super()
        this.state = {
            balance:""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    async handleSubmit(event)
    {
        event.preventDefault()
        let provider = new ethers.providers.Web3Provider(window.ethereum)
        const contract  = new ethers.Contract(
            this.props.walletAddress,
             walletABI,
              provider)
        let balance = await contract.getBalance()
        balance = ethers.utils.formatEther( balance)
        this.setState({
            balance : balance
        })
    }

    render(){
        if(this.state.balance)
        return(
            <form onSubmit = {this.handleSubmit}>
                <button type = "submit">get wallet Balance</button>
                <h2>Your balance is {this.state.balance}</h2>
            </form>
        )
        else{
            return(
                <form onSubmit = {this.handleSubmit}>
                    <button type = "submit">get wallet Balance</button>
                </form>
            )  
        }
    }
}
export default GetBalanceButton