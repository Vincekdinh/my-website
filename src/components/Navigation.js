/* eslint-disable jsx-a11y/anchor-is-valid */
function Navigation(){
    return (
        <nav id="mainNavbar" className="navbar navbar-expand-md sticky-top">
            <a href="#" className="navbar-brand">Portfolio</a>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navLinks" aria-label="Toggle navigation">
                <span>
                <i className="fa fa-bars" aria-hidden="true" style={{color: "black"}}></i>
                </span>
            </button>
            <div className="collapse navbar-collapse" id="navLinks">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="#row1" className="nav-link">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#row3" className="nav-link">Experience</a>
                    </li>
                    <li className="nav-item">
                        <a href="#row4" className="nav-link">Hobbies</a>
                    </li>
                    <li className="nav-item">
                        <a href="#row6" className="nav-link">Languages</a>
                    </li>
                    <li className="nav-item">
                        <a href="#row7" className="nav-link">Projects</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;