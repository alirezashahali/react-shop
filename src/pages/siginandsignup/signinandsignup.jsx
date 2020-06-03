import React from 'react'
import './signinandsignup.scss'

import SignIn from '../../components/signin/sign-in'
import SignUp from '../../components/sign-up/sign-up'

const SignInAndSignUp = ()=>{
    return (
        <div className="signin-and-sign-up">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInAndSignUp