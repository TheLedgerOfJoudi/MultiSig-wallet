import React from "react";
import { ethers } from "ethers";
import { walletABI } from "../../config";
class TransactionInitiateForm extends React.Component{
constructor(){
    super()
    this.state = {
        receiver:"",
        amount:""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
}

handleChange(event){
const {name, value} = event.target
this.setState({
    [name] : value
})
}

async handleSubmit(event){
    event.preventDefault()
    let provider = new ethers.providers.Web3Provider(window.ethereum)
    const contract = new ethers.Contract(
        this.props.walletAddress,
        walletABI,
        provider)
    await contract.initiateTransaction()
}

render(){
    <form onSubmit = {this.handleSubmit()}>
        <input type = "text"
        placeholder = "receiver"
        name = "receiver"
        value = {this.state.receiver}
        onChange = {this.handleChange}
        />

        <input type = "number"
        placeholder = "amount"
        name = "amount"
        value = {this.state.amount}
        onChange = {this.handleChange}
        />

        <button type = "submit">initiate a transaction</button>

    </form>
}
}
export default TransactionInitiateForm