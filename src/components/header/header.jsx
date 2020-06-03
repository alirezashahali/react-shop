import React from 'react';
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'
import './header.scss'

import { auth } from '../../fire-base/fire-base.utils'

import { ReactComponent as Logo } from '../../assets/logo-crown.svg'

const Header = ({currentUser}) => {

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

        </div>
    </div>)
}

const mapStatetoProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStatetoProps)(Header)