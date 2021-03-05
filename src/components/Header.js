import React from 'react'
import './Header.css'


function Header(props) {
    return (
        <div className="header">
            <h1>{props.logo}</h1>
            <div className="header__center">
                <input type="text" />
            </div>
            <div className="header__right">
                <p>Login</p>
                <p>Signup</p>

            </div>
        </div>
    )
}

Header.defaultProps = {
    logo: "Bodyprofile finder"
}

export default Header
