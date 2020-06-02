import React from 'react'

import './custom-button.scss'

const CustomButton = ({children, isGoogleSignedIn, ...otherProps}) => (
    <button className={`custom-button ${ isGoogleSignedIn ? 'google-sign-in' : ''}`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton