import React from 'react';
import ReactDOM from 'react-dom';

function App() {
       // 
    const why_choose_us = [
        {
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, similique quisquam? Et cumque amet autem.'
        },
        {
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, similique quisquam? Et cumque amet autem.'
        },
        {
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, similique quisquam? Et cumque amet autem.'
        },
        {
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, similique quisquam? Et cumque amet autem.'
        },
    ]

    const IndexCards =()=>  why_choose_us.map((e, index) => {
                      return <div className="col-lg-3 col-md-3 col-sm-8 p-2" key={index}>
                            <div className="card rounded">
                                <div className="card-body">
                                    <p className="text-muted">{e.text}</p>
                                </div>
                            </div>
                        </div> 
                        })
    function Navbar(){
        return (
         <nav className="navbar shadow-lg">
            <div className="d-flex flex-row mx-2" style={{justifyContent:'space-between', width: '100%'}}>
                <div className="my-1 d-flex flex-row" style={{alignItems:'center'}}>
                    {/* logo */}
                    <h1><a href="#">Blockchain Financial</a></h1>
                    {/* links */}
                    <div className="d-flex flex-row ml-3" style={{alignSelf:'baseline'}}>
                        <button className="btn btn-link">Home</button>
                        <button className="btn btn-link">About</button>
                        <button className="btn btn-link">FAQ</button>
                    </div>
                </div>
                {/* login signup */}
                <div className="d-block ">
                    <button className="btn btn-primary mx-3">Sign up</button>
                    <button className="btn btn-outline-primary">Log in</button>
                </div>
            </div>
        </nav>
        );
    }
   
    return (
        <div className="d-flex flex-column background">
           <Navbar></Navbar>
            {/* service provided */}
            <div className="jumbotron bg-transparent">
                <div className="row">
                    <div className="col-sm-12 col-md-8 col lg-6">
                        <p className="display-4 text-primary">Invest in the blockchain revolution</p>
                        <p className="lead">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste laudantium quae quis,
                             at dolores vitae ipsum? Iure ipsum aut error, esse tenetur distinctio!
                        </p>
                        {/* CALL TO ACTION */}
                        <div className="d-flex flex-row">
                            <button className="btn btn-primary mr-3">Sign up</button>
                            <button className="btn btn-outline-dark">See pricing</button>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <picture>
                            <img src="" alt=""/>
                        </picture>
                    </div>
                </div>
            </div>
            {/* why choose us */}
            <div className="container">
                <div className="row">
                    <IndexCards></IndexCards>
                </div>
            </div>
            {/* pricing index */}
            <div className="container">
                <br/><hr/>
                <br/><br/><br/>
                    <h2 className="text-primary text-center">Guaranteed profit from investment</h2>
                <br/>
                <div className="row justify-content-center pricing-cards">
                    {/*  */}
                    <div className="col-lg-2">
                        <div className="card rounded text-center" >
                            <div className="card-header p-2">Basic</div>
                            <div className="card-body">
                                <h3 className="thin">
                                    $4000
                                </h3>
                                <p className="lead">
                                    Lorem ipsum dolor sit.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div className="col-lg-3">
                        <div className="card rounded text-center" >
                            <div className="card-header p-2">Basic</div>
                            <div className="card-body">
                                <h1 className="thin">
                                    $4000
                                </h1>
                                <p className="lead">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas sunt facilis libero.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div className="col-lg-2">
                        <div className="card rounded text-center" >
                            <div className="card-header p-2">Basic</div>
                            <div className="card-body">
                                <h3 className="thin">
                                    $4000
                                </h3>
                                <p className="lead">
                                    Lorem ipsum dolor sit.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* footer */}
            <br/>
            <br/>
            <br/>
            <footer className="footer bg-dark">
                <div className="container-fluid my-5">
                    <div className="row">
                        {/* quick links */}
                        <div className="col d-flex flex-column text-white">
                            <a href="#" className="btn btn-link">Home</a>
                            <a href="#" className="btn btn-link">FAQ</a>
                            <a href="#" className="btn btn-link">About</a>
                        </div>
                        <div className="col"></div>
                        <div className="col"></div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
