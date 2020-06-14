import React from 'react'
import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'
import { auth, createUserProfileDocument } from '../../fire-base/fire-base.utils'

import './sign-up.scss'

class SignUp extends React.Component{
    constructor(props){
        super(props)

        this.state= {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '' 
        }
    }

    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({ [name]: value })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state

        console.log(`displayName, ${displayName},
            email, ${email}, password, ${password}, confirmPassword, ${confirmPassword}`)
        if(password !== confirmPassword){
            alert('Your password is not right')
        }else{
            try{
                const { user } = await auth.signInWithEmailAndPassword(email, password)

                console.log(user)
    
                await createUserProfileDocument(user, { displayName })
                this.setState({
                    displayName: '',
                    email: '',
                    password: '',
                    confirmPassword: '' 
                })
    
            }catch(err){
                console.log('error', err)
            }
        }
    }

    render(){
        const {displayName, email, password, confirmPassword} = this.state
        return (
            <div className='sign-up'>
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>

                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput type="text" name="displayName"
                     value={ displayName } onChange={ this.handleChange } label='display name' ></FormInput>

                    <FormInput type="email" name="email"
                     value={ email } onChange={ this.handleChange } label='email' ></FormInput>

                    <FormInput type="password" name="password"
                     value={ password } onChange={ this.handleChange } label='password' ></FormInput>

                     
                    <FormInput type="password" name="confirmPassword"
                     value={ confirmPassword } onChange={ this.handleChange } label='confirmed password' ></FormInput>

                     <CustomButton type="submit">SignUp</CustomButton>

                     
                </form>

            </div>
        )
    }
}

export default SignUp