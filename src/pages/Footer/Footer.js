import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"
const Footer = () => {
    return (
        <div>
            <hr className="text-danger mx-auto  mt-3"/>
       
        <div className="row container mt-3 ms-3">
             
            <div className="col-lg-4 col-md-6 col-sm-12 col-12 text-start text-white ms-3 ">
                <h2>Amran Miah</h2>
                <p className="text-muted">A dedicated web designer and developer from Narsigndi, Dhaka, Bangladesh.I always make websites that have unique designs and also has a good performance rate</p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12 text-start text-white ms-3 mt-4">
                <h4>Important Links</h4>
                <Link className="link-footer text-muted" to="/home">Home</Link><br />
                <Link className="link-footer text-muted"  to="/about">About Me</Link><br />
                <Link className="link-footer text-muted"  to="/projects">Projects</Link><br />
                <Link className="link-footer text-muted"  to="/contacts">Contact Me</Link><br />
                <Link className="link-footer text-muted"  to="/blogs">Blogs</Link>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12 col-12 text-start text-white ms-3 mt-4">
                <h4>Contact Info</h4>
                <Link className="link-footer text-muted" >+8801627421333</Link><br />
                <Link className="link-footer text-muted">imranbutex41@gmail.com</Link><br />
                <Link className="link-footer text-muted" >Narsingdi</Link><br />
                <Link className="link-footer text-muted"  >Dhaka</Link><br />
                <Link className="link-footer text-muted">Bangladesh</Link>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12 col-12 text-start text-white ms-3 mt-4">
                <h4>Social Links</h4>
                  <a className="link-footer text-muted" href="https://github.com/imrankhan41" target="_blank" rel="noopener noreferrer"> Github</a> <br />
                  <a className="link-footer text-muted" href="https://web.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a> <br />
                  <a className="link-footer text-muted" href="https://www.linkedin.com/in/mohammad-imran-khan-a70b2b16b/" target="_blank" rel="noopener noreferrer">Linkedin</a> <br />
                  <a className="link-footer text-muted" href="https://twitter.com/imrantexf69" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
        </div>
        </div>
    );
};

export default Footer;