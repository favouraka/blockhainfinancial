// scripts
import React from  'react'
import {AuthContext} from '../globals/auth-context'
import {Link, useHistory} from 'react-router-dom'
// 
import Logo from '../../img/LOGO.svg'

function Navbar(){
    const auth = React.useContext(AuthContext)
    const history = useHistory();
    return (
    <>
     <nav className="navbar shadow-lg">
        <div className="d-flex flex-row mx-4" style={{justifyContent:'space-between', width: '100%'}}>
            <div className="d-flex flex-row" style={{alignItems:'center'}}>
                {/* logo */}
                <img src={Logo} alt="blockchain-financial-logo" onClick={() => {history.push('/')}} width="150px"/>
                {/* links */}
                <div className="d-lg-flex flex-row ml-3 d-sm-none d-none" style={{alignSelf:'baseline'}}>
                    <Link to="/" className="btn btn-link">Home</Link>
                    <button className="btn btn-link">How it works</button>
                    <button className="btn btn-link">About</button>
                    <button className="btn btn-link">FAQ</button>
                </div>
            </div>
            {/* login signup */}
            { auth.user ? <button className="btn-outline-primary btn">Dashboard</button> : 
                <div className="d-lg-block d-sm-none d-none">
                    <button className="btn btn-primary mx-3">Sign up</button>
                    <Link to="/login" className="btn btn-outline-primary">Log in</Link>
                </div>            
            }
        </div>
    </nav>
    <br/>
    <br/>
    <br/>
    </>
    );
}

export default Navbar