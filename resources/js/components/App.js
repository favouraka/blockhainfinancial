// scripts 
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Axios from 'axios'
import {AuthContext} from './globals/auth-context'

// logo 
import Logo from '../img/LOGO.svg'

// navigation
import Navbar from './navigation/Navbar'
import Footer from './navigation/Footer'
// pages
import Home from './views/Home'


function App() {
    // state 
    const [session, setSession] = React.useState({user: null, checked: false});

    // 
    React.useEffect(()=>{
        // check session when the effect runs
        checkSession();
    },[])
    //

        // 
    const contextValue =  {
        // user 
        user: session.user,

        // login method of context 
        login: function(data){
            axios.get('/sanctum/csrf-cookie')
                .then( r => {
                    axios.post('/login',{
                        email: data.email,
                        password: data.password
                    })
                    .then( r => {
                        checkSession();
                    })
                })
        },

        // logout
        logout: function(){
            axios.post('/logout')
                .then( r => {
                    checkSession()
                })
        }

    }
    // 
    const checkSession = () => {
        Axios.get('/api/user')
                .then( r => {
                    // returns response and sets as user property of session state 
                    setSession({checked: true, user: r.data})        
                }).catch(
                    // if an error occurs sets user as null 
                    e => {
                        setSession({checked: true, user: null})
                    } 
                )
    }

       //
    // display app if sessioncheck state is true 
    if(session.checked){
        return (
            <AuthContext.Provider value={contextValue}>
                <Switch>
                <Route path="/" exact>
                        <div className="d-flex flex-column background">
                            <Navbar></Navbar>
                            <Home/>
                            <Footer></Footer>
                        </div>
                    </Route> 
                </Switch>
            </AuthContext.Provider>
        );
    } else {
        // else display splash if sessioncheck is not loaded
        return (
            <div className="d-flex" style={{height:'100vh', width:'100%'}}>
                <div className="m-auto">
                    <img src={Logo} alt="splash-logo" width="150px" />
                </div>
            </div>
        );
    }
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(
        <Router>
            <App />
        </Router>
        , document.getElementById('app'));
}
