import React from 'react';
import { Carousel,Button } from 'react-bootstrap';
import mackbook from "../../../../images/javascript/macbook-bootstrap-javascript.png"
const JavascriptProjects = () => {
    return (
        <div>
            <div className="row ">
                <div className="col-lg-7 col-md-6 col-sm-12 col-12 scrollable">
                
                    <Carousel variant="dark">
                    <Carousel.Item>
                    <img className="img-fluid" src={mackbook} alt="" />
                    </Carousel.Item>
                   
                    </Carousel>
                </div>
                <div className="col-lg-5 col-md-6 col-sm-12 col-12">
                <h2 className="text-danger">Mac Book Pro</h2>
               
                <div className="text-start ">
                    <p ><i  className="fas fa-plus"></i>Developed a website where you will feel the E-commerce site like. It is a single page design   </p> 
                    <p><i  className="fas fa-plus"></i>Here Mainly javascript is used to make a functional landing page website </p>
                </div>
                
             
                <p className="text-start "><strong >Technologies:</strong> 
                <Button variant="outline-danger m-1">JavaScript</Button>
                <Button variant="outline-danger m-1">Bootstrap</Button>
                <Button variant="outline-danger m-1">Netlify</Button>
                </p>
                <p className="text-start "><strong >All Links:</strong> 
                <Button variant="outline-danger m-1">  <a className="  text-decoration-none" href="https://github.com/imrankhan41/mac-book-pro" target="_blank" rel="noopener noreferrer">GitHub </a> </Button>
             
                <Button variant="outline-danger m-1">  <a className="text-decoration-none" href="https://macbook-bootstrap-javascript-website.netlify.app/" target="_blank" rel="noopener noreferrer">Live Preview</a> </Button>
               </p>
                </div>
            </div>
        </div>
    );
};

export default JavascriptProjects;