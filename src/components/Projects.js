/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'

function Projects() {
    
  return (
    <section aria-label="projects">
        <a id="row7" className="anchor"></a>
        <div className="row7">
            <div className="col-lg-6 text-container7" data-aos="fade-up">
                <h1 className="title">ReactJS Project Web apps </h1>
                <hr />
                <a href="https://githubfinder84.netlify.app">
                    <h5>Github Finder</h5>
                </a>
                <p>Find GitHub users and access their profile with custom UI/UX design using Github API</p>
                <a href="https://youtube84.netlify.app">
                    <h5>Video Finder</h5>
                </a>
                <p>Find videos using YouTube API</p>
                <h1 className="title">NodeJS Web App </h1>
                <hr />
                <a className="yelpcamp" href="https://github.com/Vincekdinh/YelpCamp">
                    <h5>YelpCamp</h5>
                </a>
                <h1 className="title">Full Stack MERN App</h1>
                <hr />
                <a href="https://github.com/Vincekdinh/Contact-Keeper">
                    <h5>Contact Keeper...WIP</h5>
                </a>
                <br />
            </div>
        </div>
  </section>
  )
}

export default Projects;