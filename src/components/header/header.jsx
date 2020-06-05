import React from 'react';
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'
import './header.scss'

import { auth } from '../../fire-base/fire-base.utils'

import { ReactComponent as Logo } from '../../assets/logo-crown.svg'

import CartIcon from '../cart-icon/cart-icon'

import CartDropdown from '../cart-dropdown/cart-dropdown'

import { selectCartHidden, selectCurrentUser } from '../../redux/user/user.selectors'

const Header = ({currentUser, hidden}) => {

    // const link = currentUser ? <Link to="/signin" className="option">SIGNIN</Link>
    // : <Link to="/signin" className="option">SIGNOUT</Link>
    console.log('current', currentUser)

    return (<div className="header">
        <Link to="/" className="logo-container">
            <Logo className="logo"></Logo>
        </Link>

        <div className="options">
            <Link to="/shop" className="option">SHOP</Link>

            <Link to="/shop" className="option">CONTACT</Link>

            { currentUser ?
            <div className = "option" onClick={ () => auth.signOut() } > SIGNOUT </div>
            :
            <Link to="/signin" className="option">SIGNIN</Link> }

            <CartIcon />

        </div>

        {
            hidden ? null : <CartDropdown />
        }


    </div>)
}

const mapStatetoProps = (state) => ({
    currentUser: selectCurrentUser(state),
    hidden: selectCartHidden(state)
})

export default connect(mapStatetoProps)(Header)