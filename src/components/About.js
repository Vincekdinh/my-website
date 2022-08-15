/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import selfie from '../assets/images/VinceSelfie.JPG'

function About(){

    return (
        <section aria-label="about">
            <a href="#" id="row1" className="anchor"/>
            <div className="row1">
                <div className="col-lg-5">  
                    <img className="center_img" src={selfie} alt="Vince"/>
                </div>
                <div className=" col-lg-5 text-container1" data-aos="zoom-in-up">
                    <h1 className="title">Summary</h1>
                    <hr />
                    <ul>
                        <li>
                            Approximately five years of work experience in the software industry. Passionate about learning and becoming a better developer every day. Long term goal is to become a mentor and a teacher to other aspiring developers.  
                        </li>
                    <br />
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default About;


