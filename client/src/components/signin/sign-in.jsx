import React, {useState} from 'react'
import './sign-in.scss'
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'

import { connect } from 'react-redux'

import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'

const SignIn = ({emailSignInStart, googleSignInStart}) =>{
    const [userCredentials, setuserCredentials] = useState({ email:"", password:"" })

    const {email, password} = userCredentials

    const handleSubmit = async (e) => {
        e.preventDefault()

        emailSignInStart(email, password)
        // this.setState({email:"", password: ""})
    }

    const handleChange = (e) => {
        const { value, name } = e.target;

        setuserCredentials({ ...userCredentials, [name]: value })
    }


    return (
        <div className="sign-in">
            <h2>I have already have an account</h2>
            <span>Sign in with email and password</span>

            <form onSubmit={ handleSubmit }>
                <FormInput type="email" name="email"
                    value= { email } handleChange={ handleChange } label= "Email" />

                <FormInput type="password" name="password"
                    value= { password } handleChange={ handleChange } label="Password" />

                
                <div className="button">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton type="button" onClick={ googleSignInStart } isGoogleSignedIn>Sign in with google</CustomButton>
                </div>
                
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn)