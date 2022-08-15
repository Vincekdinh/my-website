/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import HTML from '../assets/images/html_256x256.png'
import CSS from '../assets/images/css_256x256.png'
import JavaScript from '../assets/images/javascript_256x256.png'
import Express from '../assets/images/express+original_256.png'
import ReactJS from '../assets/images/react_256x256.png'
import NodeJS from '../assets/images/nodejs_256x256.png'
import Bootstrap from '../assets/images/bootstrap_256x256.png'
import TypeScript from '../assets/images/typescript_256.icns.png'
import ES6 from '../assets/images/ES6.png'


function Language() {

  return (
    <section aria-label="language">
        <a id="row6" className="anchor"></a>
        <div className="row6">
            <div style={{width: "100%"}}>
                <h1 className="title">Languages</h1>
                <hr />
                <br />
            </div>
        </div>
        <div className="row-end">
            <img className="language_img" src={HTML} alt="html" data-aos="zoom-in-up" />
            <img className="language_img" src={CSS} alt="css" data-aos="zoom-in-up" /> 
            <img className="language_img" src={JavaScript} alt="javascript" data-aos="zoom-in-up" />
            </div>
            <div className="row-end">
            <img className="language_img" src={Express} alt="react" data-aos="zoom-in-up" />
            <img className="language_img" src={ReactJS} alt="react" data-aos="zoom-in-up" />
            <img className="language_img" src={NodeJS} alt="nodejs" data-aos="zoom-in-up" />
        </div>
        <div className="row-end row-last">
            <img className="language_img" src={Bootstrap} alt="bootstrap" data-aos="zoom-in-up" />
            <img className="language_img" src={TypeScript} alt="c" data-aos="zoom-in-up" />
            <img className="language_img" src={ES6} alt="c" data-aos="zoom-in-up" />
        </div>
  </section>
  )
}

export default Language;