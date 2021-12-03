


import React from 'react';
import "./Services.css"
const Services = () => {
    return (
        <div className="mt-5 container ">
            <hr className="text-danger mx-auto  col-lg-5"/>
           
            <h2 className="text-danger ">Services</h2>
            <p className="text-white">What i will do for you</p>
            <div className="row">
                
                <div className="col-lg-3 col-md-4 col-sm-12 col-12 cards text-white p-2 ">
               
                <i class="fas fa-camera-retro"></i>
                <h4 >DISCOVERY</h4>
                <p className="text-muted text-start">Before design your project, i would like to  know about your business  and develop a in-depth understanding of your goal</p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-12 col-12 cards  text-white p-2 ">
                <i class="fas fa-edit"></i>
               
                <h4 >DESIGN</h4>
                <p className="text-muted text-start">Possible to make incredible design of your website with tireless effort that encaptulates your brands visual identity </p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-12 col-12 cards  text-white p-2">
                <i class="fas fa-laptop-code"></i>
                <h4 >DEVELOPMENT</h4>
                <p className="text-muted text-start">Lihghtweight and minimal code purpose built to create a seamless user experience across all device type and screensizes</p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-12 col-12  cards text-white p-2">
                <i class="fas fa-mobile"></i>
                <h4 >APP DEVELOPMENT</h4>
                <p className="text-muted text-start">Possible to develop your app with your website design and development with prior knowledge and experience to increse value your business</p>
                </div>
           
            </div>
        </div>
    );
};

export default Services;