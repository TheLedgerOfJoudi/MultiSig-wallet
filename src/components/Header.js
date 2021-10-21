import {React, useEffect, useState} from "react"
import { ethers } from "ethers"
import { Navbar, Nav } from "react-bootstrap";
import Balance from "./dashboard/Balance"
import {Link} from "react-router-dom"
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import './Header.css';

function Header () {
    const [network, setNetwork] = useState("");

    useEffect(() => {
        loadNetwork();
    }, [])

    async function loadNetwork() {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        let net = await provider.getNetwork()
        net = net.name
        setNetwork(net);
    }

    return (
        <div>        
            <Navbar bg="primary" variant="dark">
                <Nav className="m-auto">
                <Nav.Link as={Link} to="/initiate-transaction">Initiate Transaction</Nav.Link>
                <Nav.Link as={Link} to="/pending-transactions">Pending Transactions</Nav.Link>
                </Nav>
            </Navbar>
            <Container className="p-3">
                <Jumbotron>
                    <h1 className="header">Welcome To Multisignature wallet app</h1>

                </Jumbotron>
            </Container>
            You are on network : {network}
            <Balance />
        </div>
    )
}
export default Header