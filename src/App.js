import React from 'react';
import HomePage from './pages/homepage/homepage'
import ShopPage from './pages/shoppage/shop'
import { Route } from 'react-router-dom'


function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage}></Route>
      <Route exact path="/shop" component={ ShopPage }></Route>
      {/* <Route exact path="/shop/hats" component={}></Route> */}
    </div>
  );
}

export default App;
