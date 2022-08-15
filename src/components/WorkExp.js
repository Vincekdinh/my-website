/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */


function WorkExp(){
    return (
        <section aria-label="work_experience">
            <a id="row3" className="anchor"></a>
            <div className="row3">
            <div style={{width: "100%"}}>
                <h1 className="title">Work Experience</h1>
                <hr />
                <br />
            </div>
            <div id="carouselControls" className="carousel d-flex justify-content-center" data-ride="carousel">
                <div className="col-lg-8 carousel-inner">
                <div className="carousel-item active">
                    <h3>React Developer</h3>
                    <h4><span className="highlight">Air Tutors</span></h4>
                    <h6>January 2021 - Present</h6>
                    <br />
                    <ul>
                        <li>
                            Developed dynamic website pages for the client-side application utilizing React along with Semantic UI/Material UI and upgraded its user experience both visually as well as functionally by creating responsive UI components through CSS and JavaScript
                        </li>
                        <br />
                        <li>
                            Built reusable React class/functional components and leveraged UI libraries to embellish web applications such as carousel, drag-and-drop, input area, drop-down menus, etc. 
                        </li>
                        <br />
                        <li>
                            Made single-page applications (SPAs) by utilizing React Router to enhance browser performance, enabling users to refresh the page without interrupting the page view
                        </li>
                        <br />
                        <li>
                            Obeyed the principles of Behavior-driven development and Test-driven development using Jest and React Testing Library for unit testing
                        </li>
                    </ul>
                </div>
                <div className="carousel-item">
                    <h3>Front-End Developer</h3>
                    <h4><span className="highlight">Santa Clara Valley Medical Center</span></h4>
                    <h6> July 2018 - December 2020</h6>
                    <br />
                    <ul>
                        <li>
                            Optimized and tested the design of the hospital’s web applications to ensure conformity to Section 508 of the Federal Rehabilitation Act to meet the standards of accessibility and usability 
                        </li>
                        <br />
                        <li>
                            Crafted web application for managing Workplace Violence (WPV) incidents and reports following the Occupational Safety Health Administration (OSHA) guidelines using HTML, CSS, JavaScript, Bootstrap, and jQuery
                        </li>
                        <br />
                        <li>
                            Familiar with different underlying web security vulnerabilities such as CORS, cross-site scripting, CSRF, and SQL injection
                        </li>
                        <br />
                        <li>
                            Performed version control throughout the development of the project by using Git
                        </li>
                    </ul>
                </div>
                <div className="carousel-item">
                    <h3>Front-End Developer</h3>
                    <h4><span className="highlight">Carkibo</span></h4>
                    <h6>July 2017 - June 2018</h6>
                    <br />
                    <ul>
                    <li>
                        Maintained and added features to the company’s website using HTML5, CSS, JavaScript
                    </li>
                    <br />
                    <li>
                        Approached web applications with a responsive web design (RWD) mindset using Bootstrap Grid system and CSS Media Query at specific breakpoints
                    </li>
                    <br />
                    <li>
                        Provided cross-browser compatible and standards-compliant CSS-based page layouts
                    </li>
                    <br />
                    <li>
                        Created client-side buttons, drop-down menus, and carousels using Bootstrap 
                    </li>
                    </ul>
                </div>
                </div>
                <a className="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
                </a>
            </div>
            </div>
        </section>
    )
}

export default WorkExp;