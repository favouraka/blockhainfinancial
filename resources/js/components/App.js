// scripts 
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
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
            this.errors = null
            // 
            axios.get('/sanctum/csrf-cookie')
                .then( r => {
                    axios.post('/login',{
                        email: data.email,
                        password: data.password
                    })
                    .then( r => {
                        checkSession();
                    }).catch( e => {
                        // handle exceptions 
                        this.errors = e.errors
                    })
                })
        },

        // logout
        logout: function(){
            axios.post('/logout')
                .then( r => {
                    checkSession()
                })
        },

        // errors during authentication
        errors: null

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
                    <HomeRoute path="/" exact>
                        <Home/>
                    </HomeRoute> 
                    <AccessRoute path="/login">
                        <Login/>
                    </AccessRoute>
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

// routing for non protected routes 
function HomeRoute({children, ...rest}){
    const Children = () => {
        return (
            <div className="d-flex flex-column background">
                <Navbar></Navbar>
                {children}
                <Footer></Footer>
            </div>
        )
    }

    return <Route {...rest} render={Children}></Route>
}

// logical routes for login and sign up
function AccessRoute({children, ...rest}){
    const auth = React.useContext(AuthContext)
    const View =()=> {
        return (
            <div className="d-flex flex-column background">
                <Navbar></Navbar>
                {children}
                <Footer></Footer>
            </div>
        )
    }
    
    if(auth.user){
        // if user is logged in redirect to dashboard 
        return <Redirect to="/dashboard"></Redirect>
    } else {
        return <Route {...rest} render={View}></Route>
    }
}

// login page
function Login(){
    const auth = React.useContext(AuthContext)
    const [loginData, setLoginData] = React.useState({
        email: '',
        password: ''
    })

    return (
        <div className="container">
            <br/><br/>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow">
                        <div className="card-body">
                            <h4 className="text-muted">Please login to continue</h4>
                            <form action="#" onSubmit={(e) => {auth.login(loginData); e.preventDefault()} }>
                                <div className="form-group d-flex flex-column">
                                    <div className="label">Email:</div>
                                    <input required type="email" onChange={(e)=> {setLoginData({...loginData, email: e.target.value})}} />
                                </div>
                                <div className="form-group d-flex flex-column">
                                    <div className="label">Password</div>
                                    <input required type="password" onChange={(e)=> {setLoginData({...loginData, password: e.target.value})}} />
                                </div>
                                {/*  */}
                                <button type="submit" className="btn btn-block btn-primary">Log in</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(
        <Router>
            <App />
        </Router>
        , document.getElementById('app'));
}
