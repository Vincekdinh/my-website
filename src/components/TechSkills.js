/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import aggie from '../assets/images/aggie.png'
import ucdavis from '../assets/images/ucdavislogo.jpeg'

function TechSkills(){

    return (
        <section aria-label="tech_skills">
            <a id="row2" className="anchor"></a>
            <div className="row2">
            <div className="col-lg-5 text-container2" data-aos="zoom-in-up">
                <h1 className="title">Technical Skills</h1>
                <hr />
                <span className="highlight">FRONT-END</span>
                <br />
                <br />
                <ul>
                    <li>HTML5, CSS (Bootstrap, Semantic UI, Material UI)</li>
                    <li>JavaScript, ES6, ReactJS, TypeScript, jQuery</li>
                </ul>
                <span className="highlight">BACK-END</span>
                <br />
                <br />
                <ul>
                    <li>NodeJS</li>
                    <li>ExpressJS</li>
                    <li>MongoDB</li>
                </ul>
                <span className="highlight">EXPERIENCE</span>
                <br />
                <br />
                <ul>
                    <li>RESTful APIs, Authentication, OAuth</li>
                    <li>Context API, Redux</li>
                    <li>Unit Tesing: Jest, React Testing Library</li>
                    <li>Git version control</li>
                </ul>
                <br />
            </div>
            <div className="col-lg-5">
                <img className="logo_img" src={aggie} alt="aggie" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500"/>
                <img className="logo_img" src={ucdavis} alt="ucdavis" />
            </div>
            </div>
        </section>
    )
}

export default TechSkills;