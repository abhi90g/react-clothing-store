import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

import Header from './components/header/header.component'
import Homepage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'


class App extends Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount () {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({ currentUser: user })
      // createUserProfileDocument(user)
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })
      } else {
        this.setState ({ currentUser: userAuth })
      }

      console.log(this.state)
    })
  }

  componentWillUnmount () {
    this.unsubscribeFromAuth();
  }

  render() {
      return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
        
      </div>
    );
  }
  
}

export default App;
