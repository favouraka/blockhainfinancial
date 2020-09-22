// scripts
import React  from 'react'

// scroll animation library
import sal from 'sal.js'

export default function Home(){
    React.useEffect(()=>{        
        // init scrooll animation library
        sal({
            threshold: 0.6,
            rootMargin: '12px'
        });
    },[])
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

    const IndexCards = () =>  why_choose_us.map((e, index) => {
        return <div className="col-lg-3 col-md-3 col-sm-8 p-2" key={index}>
              <div className="card rounded shadow-sm">
                  <div className="card-body">
                      <p className="text-muted">{e.text}</p>
                  </div>
              </div>
          </div> 
          })

   return (
       <>
        {/* service provided */}
    <div className="container">
        <div className="jumbotron bg-transparent">
            <div className="row">
                <div className="col-sm-12 col-md-8 col lg-6">
                    <p className="display-4">Invest in the <span className=" text-primary">blockchain revolution</span></p>
                    <p className="lead text-muted">
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
                        <img src="" alt="hero-illustration-landing-page"/>
                    </picture>
                </div>
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
            <div className="col-md-3 col-lg-2" data-sal="fade">
                <div className="card rounded text-center shadow mb-5" >
                    <div className="card-header p-2">Basic</div>
                    <div className="card-body">
                        <h3 className="thin">
                            $4000
                        </h3>
                        <p className="lead text-muted">
                            Lorem ipsum dolor sit.
                        </p>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className="col-md-5 col-lg-3" data-sal="fade" >
                <div className="card rounded text-center shadow mb-5" >
                    <div className="card-header p-2">Basic</div>
                    <div className="card-body">
                        <h1 className="thin">
                            $4000
                        </h1>
                        <p className="lead text-muted">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas sunt facilis libero.
                        </p>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className="col-md-3 col-lg-2" data-sal="fade" >
                <div className="card rounded text-center shadow mb-5" >
                    <div className="card-header p-2">Basic</div>
                    <div className="card-body">
                        <h3 className="thin">
                            $4000
                        </h3>
                        <p className="lead text-muted">
                            Lorem ipsum dolor sit.
                        </p>
                    </div>
                </div>
            </div>
        </div>
</div>
       </>
   )
}