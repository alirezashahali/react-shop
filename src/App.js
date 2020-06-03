import React from 'react';
import HomePage from './pages/homepage/homepage'
import ShopPage from './pages/shoppage/shop'
import Header from './components/header/header'
import SignInAndSignUp from './pages/siginandsignup/signinandsignup'

import { Switch, Route } from 'react-router-dom'

import { auth, createUserProfileDocument } from './fire-base/fire-base.utils'

class App extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      currentUser: null
    }
  }

  unsubscribFromAuth = null;


  componentDidMount(){
    this.unsubscribFromAuth =auth.onAuthStateChanged(async user => {
      // this.setState({ currentUser: user })
      if(user){
        const userRef = await createUserProfileDocument(user)
        userRef.onSnapshot( snapShot => {
          this.setState({
            currentUser:{
              id: snapShot.id,
              ...snapShot.data()
            }
          })

          // console.log(this.state.currentUser)
        })

      }else{
        this.setState({
          currentUser: user
        })
      }
    })

    // console.log(this.state.currentUser)
  }

  componentWillUnmount(){
    this.unsubscribFromAuth()
  }

  render(){
    return (
      <div>
        <Header currentUser = { this.state.currentUser }/>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/shop" component={ ShopPage }></Route>
          <Route exact path="/signin" component={SignInAndSignUp} ></Route>
        </Switch>
      </div>
    );
  }
}


export default App;
