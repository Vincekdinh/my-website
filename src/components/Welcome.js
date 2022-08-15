function Welcome(){
    
    return (
        <section aria-label="welcome">
            <div className="col-lg-12 front-page">
                <span>
                    Welcome, my name is <span className="highlight">Vince Dinh</span>.
                    <br />I'm a <span className='highlight'>Front-End Developer</span><br />
                    <hr />
                    <a className="btn btn-lg" href="#mainNavbar" role="button">Portfolio</a>
                </span>
            </div>
      </section>
    )
}

export default Welcome;