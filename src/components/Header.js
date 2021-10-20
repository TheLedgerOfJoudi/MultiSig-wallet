import React from "react"
import { ethers } from "ethers"

class Header extends React.Component{
constructor(){
    super()
    this.state = {
        network:""
    }
}

componentDidMount(){
    this.loadNetwork()
}

async loadNetwork(){
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    let net = await provider.getNetwork()
    net = net.name
    this.setState({
        network : net
    })
}

render(){
    return(
        <div>
            You are on network : {this.state.network}
        </div>
    )
}
}
export default Header