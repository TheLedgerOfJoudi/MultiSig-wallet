import React from "react"
import { ethers } from "ethers"
import { Navbar, Nav } from "react-bootstrap";
import GetBalanceButton from "./dashboard/GetBalanceButton"
import {Link} from "react-router-dom"

class Header extends React.Component {
    constructor() {
        super()
        this.state = {
            network: ""
        }
    }

    componentDidMount() {
        this.loadNetwork()
    }

    async loadNetwork() {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        let net = await provider.getNetwork()
        net = net.name
        this.setState({
            network: net
        })
    }

    render() {
        return (
            <div>        
            
                    <Navbar bg="primary" variant="dark">
                        <Nav className="m-auto">
                        <Nav.Link as={Link} to="/initiate-transaction">Initiate Transaction</Nav.Link>
                        <Nav.Link as={Link} to="/pending-transactions">Pending Transactions</Nav.Link>
                        </Nav>
                    </Navbar>
                    
          
                You are on network : {this.state.network}
                <GetBalanceButton />
            </div>
        )
    }
}
export default Header