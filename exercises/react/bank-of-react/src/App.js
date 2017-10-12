import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import axios from 'axios'
import Home from './components/Home'
import UserProfile from './components/UserProfile';
import LogIn from './components/Login'
import AccountBalance from './components/AccountBalance'
import DebitView from './components/DebitView'
import CreditView from './components/CreditView'
class App extends Component {
  state = {
    accountBalance: 0,
    currentUser: {
      userName: 'bob_loblaw',
      memberSince: '08/23/99'
    },
    debits: [],
    credits: []

  }
  mockLogIn = (logInInfo) => {
    const newUser = {
      ...this.state.currentUser
    }
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  getDebits = () => {
    axios
      .get("http://localhost:4000/debits")
      .then((res) => {
        const debits = res.data;
        this.setState({debits});
        const totalDebit = this.state.debits.reduce((acc, debit) => {
          return acc + debit.amount
        }, 0)
        const accountBalance = this.state.accountBalance - totalDebit
        this.setState({accountBalance});
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  }

  getCredits = () => {
    axios
    .get("http://localhost:4000/credits")
    .then((res) => {
      const credits = res.data;
      this.setState({credits});
      const totalCredit = this.state.credits.reduce((acc, credit) => {
        return acc + credit.amount
      }, 0)
      const accountBalance = this.state.accountBalance + totalCredit
      this.setState({accountBalance});
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
  }

  updateDebits = (newDebit) => {
    const newDebitList = [...this.state.debits]
    newDebitList.push(newDebit)
    this.setState({debits: newDebitList})
    const accountBalance = this.state.accountBalance - newDebit.amount
    this.setState({accountBalance})
  }

  updateCredits = (newCredit) => {
    const newCreditList = [...this.state.credits]
    newCreditList.push(newCredit)
    this.setState({credits: newCreditList})
    const accountBalance = Number(this.state.accountBalance) + Number(newCredit.amount)
    this.setState({accountBalance})
  }

  componentWillMount() {
    this.getDebits()
    this.getCredits()
  }


  render() {
    const AccountBalanceComponent = () => (<AccountBalance accountBalance={this.state.accountBalance}/>)
    const UserProfileComponent = () => (<UserProfile
      userName={this.state.currentUser.userName}
      memberSince={this.state.currentUser.memberSince}/>);
    const LogInComponent = () => (<LogIn
      user={this.state.currentUser}
      mockLogIn={this.mockLogIn}
      {...this.props}/>)
    const DebitsComponent = () => (<DebitView debits={this.state.debits} 
    accountBalance={this.state.accountBalance} 
    getDebits={this.getDebits}
    updateDebits={this.updateDebits} />)

const CreditsComponent = () => (<CreditView credits={this.state.credits} 
    accountBalance={this.state.accountBalance} 
    getCredits={this.getCredits}
    updateCredits={this.updateCredits} />)

    return (
      <Router>
        <Switch>
          <Route exact path="/login" render={LogInComponent}/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/account" render={AccountBalanceComponent}/>
          <Route exact path="/userProfile" render={UserProfileComponent}/>
          <Route exact path="/debits" render={DebitsComponent} />
          <Route exact path="/credits" render={CreditsComponent} />
        </Switch>
      </Router>
    );
  }
}

export default App;
