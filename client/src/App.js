import React, { useEffect } from 'react';
import HomePage from './pages/homepage/homepage'
import ShopPage from './pages/shoppage/shop'
import Header from './components/header/header'
import SignInAndSignUp from './pages/siginandsignup/signinandsignup'
import CheckOut from './pages/check-out/check-out'

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import { connect } from 'react-redux'

import { setCurrentUser } from './redux/user/user.actions'

import { checkUserSession } from './redux/user/user.actions'
// import { auth, createUserProfileDocument } from './fire-base/fire-base.utils'

import { selectCurrentUser } from '../src/redux/user/user.selectors'


const App=({checkUserSession, currentUser})=>{

  const unsubscribFromAuth = null;

  useEffect(()=>{
    checkUserSession()
  }, [])

  // componentWillUnmount(){
  //   unsubscribFromAuth()
  // }

  return (
    <div>
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route exact path="/signin" render = { () => currentUser ? 
        (<Redirect to='/' />) : (<SignInAndSignUp />) } ></Route>
        <Route exact path='/checkout' component={CheckOut}></Route>
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </Router>
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state)
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
