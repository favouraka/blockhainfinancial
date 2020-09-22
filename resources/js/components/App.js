// scripts 
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Axios from 'axios'

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

    // context for authentication
    const AuthContext = React.createContext()

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
            <Switch>
               <Route path="/" exact>
                    <div className="d-flex flex-column background">
                        <Navbar></Navbar>
                        <Home/>
                        <Footer></Footer>
                    </div>
                </Route> 
            </Switch>
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
