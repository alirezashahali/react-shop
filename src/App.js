import React from 'react';
import HomePage from './pages/homepage/homepage'
import ShopPage from './pages/shoppage/shop'
import Header from './components/header/header'
import SignInAndSignUp from './pages/siginandsignup/signinandsignup'
import CheckOut from './pages/check-out/check-out'

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import { connect } from 'react-redux'

import { setCurrentUser } from './redux/user/user.actions'

import { auth, createUserProfileDocument } from './fire-base/fire-base.utils'

import { selectCurrentUser } from '../src/redux/user/user.selectors'


class App extends React.Component{

  unsubscribFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props
    
    this.unsubscribFromAuth =auth.onAuthStateChanged(async user => {
      // this.setState({ currentUser: user })
      if(user){
        const userRef = await createUserProfileDocument(user)
        userRef.onSnapshot( snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
        })
      }
      setCurrentUser(user)
    })
  }

  componentWillUnmount(){
    this.unsubscribFromAuth()
  }


  render(){
    return (
      <div>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route exact path="/signin" render = { () => this.props.currentUser ? 
          (<Redirect to='/' />) : (<SignInAndSignUp />) } ></Route>
          <Route exact path='/checkout' component={CheckOut}></Route>
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state)
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
