import React from "react";
import { ethers } from "ethers";
import { ABI, ADDRESS } from "../config";
import GetBalanceButton from "./operations/GetBalanceButton";
class WalletCreationForm extends React.Component{
constructor(){
    super()
    this.state = {
        firstOwner:"",
        secondOwner:"", 
        walletAddress:""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
}

handleChange(event){
    const {name , value} = event.target
    this.setState({
        [name] : value
    })
}

async handleSubmit(event){
    event.preventDefault()
    let provider = new ethers.providers.Web3Provider(window.ethereum)
    const contract = new ethers.Contract(ADDRESS, ABI, provider)
    let wallet = await contract.wallet()
    this.setState({
        walletAddress : wallet
    })
}

render(){
    console.log(this.state.walletAddress)
    if(!this.state.walletAddress)
    {
    return(
        <div>
            <h3>Don't have a wallet yet? Create one! </h3>
        <form onSubmit = {this.handleSubmit}>
            <input 
            type = "text"
            placeholder = "first owner"
            name = "firstOwner"
            value = {this.state.firstOwner}
            onChange = {this.handleChange}
            />

            <input 
            type = "text"
            placeholder = "second owner"
            name = "secondOwner"
            value = {this.state.secondOwner}
            onChange = {this.handleChange}
            />

            <button type = "submit">Create Wallet</button>
        </form>
        </div>
    )
    }
   else{
       return(
           <div>
               <GetBalanceButton walletAddress = {this.state.walletAddress}/>
           </div>
       )
   }
}
}
export default WalletCreationForm