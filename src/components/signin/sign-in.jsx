import React from 'react'
import './sign-in.scss'

import { signInWithGoogle } from '../../fire-base/fire-base.utils'

import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({email: "", password: ""})
    }

    handleChange = (e) => {
        const { value, name } = e.target;

        this.setState({ [name]: value })
    }

    render(){
        return (
            <div className="sign-in">
                <h2>I have already have an account</h2>
                <span>Sign in with email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email"
                        value= {this.state.email} handleChange={this.handleChange} label= "Email" />

                    <FormInput type="password" name="password"
                        value= {this.state.password} handleChange={this.handleChange} label="Password" />

                    
                    <div className="button">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={ signInWithGoogle } isGoogleSignedIn>Sign in with google</CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn