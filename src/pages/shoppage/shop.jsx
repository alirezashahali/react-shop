// import React from 'react';
// import './shop.scss'
// import { Route, Switch, useRouteMatch } from 'react-router-dom'

// import CollectionsOverview from '../../components/collections-overview/collections-overview'
// import CategoryPage from '../collection/category'

// const ShopPage = ({ match }) => {
//     console.log('match',match)
//     let {path} = useRouteMatch();
//     return (
//     <div className="shop-page">
//         <Switch>
//         <Route path={`${match.path}/:categoryId`}>
//           <CategoryPage />
//         </Route>
//           <Route path='/shop'>
//             <CollectionsOverview />
//           </Route>
//         </Switch>
//     </div>
// )}

// export default ShopPage