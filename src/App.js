import './App.css';
import Header from './components/Header';
import WalletCreationForm from './components/WalletCreationForm';
import {Route, Switch, Redirect} from "react-router-dom"
import Dashboard from "./components/dashboard/Dashboard"
import {useState} from "react"
import InitiateTransaction from './components/dashboard/InitiateTransaction';
import PendingTransactions from './components/dashboard/PendingTransactions';

function App() {

  const [createdWallet, setCreatedWallet] = useState(false);
  
  return (
    <div className="App">
      <Header/>
      <Switch>
        
        <Route path="/create-wallet">
          <WalletCreationForm />
        </Route>

        <Route path="/dashboard">
          <Dashboard />
        </Route>

        <Route path="/initiate-transaction">
          <InitiateTransaction />
        </Route>

        <Route path="/pending-transactions">
          <PendingTransactions />
        </Route>

        <Route path="/">
          <Dashboard />
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;
