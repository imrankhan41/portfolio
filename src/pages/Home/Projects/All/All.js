import React from 'react';
import "./All.css"
import { Carousel,Button } from 'react-bootstrap';
import nichelaptop from "../../../../images/React/niche-website-laptop.png"
import nichemobile from "../../../../images/React/niche-website-mobile.png"
import nicheregistration from "../../../../images/React/niche-website-registration.png"
import nichelogin from "../../../../images/React/niche-website-login.png"
import nicheanother from "../../../../images/React/niche-website-another.png"
import nichedashboard from "../../../../images/React/niche-website-dashboard.png"

import foodlaptop from "../../../../images/React/food-delivery-laptop.png"
import foodmobile from "../../../../images/React/food-delivery-mobile.png"
import foodregistration from "../../../../images/React/food-delivery-registration.png"
import foodanother from "../../../../images/React/food-delivery-website-orders.png"

import healthlaptop from "../../../../images/React/health-care-laptop.png"
import healthmobile from "../../../../images/React/health-care-mobile.png"
import healthdetails from "../../../../images/React/health-care-deatils.png"
import healthregistration from "../../../../images/React/health-care-registration.png"
import healthlmember from "../../../../images/React/health-care-member.png"

import mackbook from "../../../../images/javascript/macbook-bootstrap-javascript.png"

import penguinlaptop from "../../../../images/bootstrap/penguin-bootstrap-website-laptop.png"
import penguinmobile from "../../../../images/bootstrap/penguin-bootstrap-website-mobile.png"

import nikelaptop from "../../../../images/bootstrap/nike-bootstrap-react-website-laptop.png"
import nikemobile from "../../../../images/bootstrap/nike-bootstrap-react-website-mobile.png"

import pandalaptop from "../../../../images/bootstrap/panda-bootstrap-website-laptoop.png"
import pandamobile from "../../../../images/bootstrap/panda-bootstrap-website-mobile.png"

import footballlaptop from "../../../../images/bootstrap/responsive-bootstrap-football-website-laptop.png"
import footballmobile from "../../../../images/bootstrap/responsive-bootstrap-football-website-mobile.png"

import hondalaptop from "../../../../images/bootstrap/hondacbr-bootstrap-laptop.png"
import hondamobile from "../../../../images/bootstrap/hondacbr-bootstrap-mobile.png"
const All = () => {
    return (
        <div>
            <div className="row ">
                <div className="col-lg-7 col-md-6 col-sm-12 col-12 scrollable">
                  
                    <Carousel variant="dark">
                    <Carousel.Item>
                    <img className="img-fluid" src={nichelaptop} alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img className="img-fluid" src={nichemobile} alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img className="img-fluid" src={nicheregistration} alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img className="img-fluid" src={nicheanother} alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img className="img-fluid" src={nichelogin} alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img className="img-fluid" src={nichedashboard} alt="" />
                    </Carousel.Item>
                    </Carousel>
                </div>
                <div className="col-lg-5 col-md-6 col-sm-12 col-12">
                <h2 className="text-danger">Bicycle store || Come to Buy Your Favorite One</h2>
                    <div className="text-start ">
                    <p><i  className="fas fa-plus"></i>Developed a website where you can buy any bicycle, add reviews, see all orders you have made </p> 
                    <p><i  className="fas fa-plus"></i>Dashboard has made differently for users and admin to increase maintaining capacity. Firebase authentication for email-password and google sign in and log in. </p> 
                    <p><i  className="fas fa-plus"></i>Admin can add any product, check users' orders, edit orders, delete and update orders. </p>
                </div>
             
                <p className="text-start "><strong >Technologies:</strong> 
                <Button variant="outline-danger m-1">React</Button>
                <Button variant="outline-danger m-1">Bootstrap</Button>
                <Button variant="outline-danger m-1">Firebase</Button>
                <Button variant="outline-danger m-1">Mongo dB</Button>
                <Button variant="outline-danger m-1">Express</Button>
                <Button variant="outline-danger m-1">Node Js</Button>
                <Button variant="outline-danger m-1">Heroku</Button>
                <Button variant="outline-danger m-1">JWT Token</Button>
               </p>
                <p className="text-start "><strong >All Links:</strong> 
              
                <Button variant="outline-danger m-1">  <a className="  text-decoration-none" href="https://github.com/imrankhan41/niche-product-clients" target="_blank" rel="noopener noreferrer">GitHub Client</a> </Button>
                <Button variant="outline-danger m-1">  <a className=" text-decoration-none" href="https://github.com/imrankhan41/niche-server-side" target="_blank" rel="noopener noreferrer">GitHub Server</a> </Button>
                <Button variant="outline-danger m-1">  <a className="text-decoration-none" href="https://niche-website-6e541.firebaseapp.com/" target="_blank" rel="noopener noreferrer">Live Preview</a> </Button>
               </p>
                </div>
            </div>
            <hr className="text-danger"/>
            <div className="row ">
                <div className="col-lg-7 col-md-6 col-sm-12 col-12 scrollable">
                
                    <Carousel variant="dark">
                    <Carousel.Item>
                    <img className="img-fluid" src={foodlaptop} alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img className="img-fluid" src={foodmobile} alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img className="img-fluid" src={foodregistration} alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img className="img-fluid" src={foodanother} alt="" />
                    </Carousel.Item>
                    </Carousel>
                </div>
                <div className="col-lg-5 col-md-6 col-sm-12 col-12">
                <h2 className="text-danger">Food Delivery || Come To Eat</h2>
               
                <div className="text-start ">
                    <p ><i  className="fas fa-plus"></i>Developed a website where you can buy any kind of food, see all orders and edit orders and delete orders you have made.  </p> 
                    <p ><i  className="fas fa-plus"></i>Users can add orders, manage all orders and delete orders  </p>
                    <p><i  className="fas fa-plus"></i>Firebase authentication for email-password and google sign in and log in. </p>
                </div>
                
             
                <p className="text-start "><strong >Technologies:</strong> 
                <Button variant="outline-danger m-1">React</Button>
                <Button variant="outline-danger m-1">Bootstrap</Button>
                <Button variant="outline-danger m-1">Firebase</Button>
                <Button variant="outline-danger m-1">Mongo dB</Button>
                <Button variant="outline-danger m-1">Express</Button>
                <Button variant="outline-danger m-1">Node Js</Button>
                <Button variant="outline-danger m-1">Heroku</Button>
                </p>
                <p className="text-start "><strong >All Links:</strong> 
                <Button variant="outline-danger m-1">  <a className="  text-decoration-none" href="https://github.com/imrankhan41/Food-Delivery-clients" target="_blank" rel="noopener noreferrer">GitHub Client</a> </Button>
                <Button variant="outline-danger m-1">  <a className=" text-decoration-none" href="https://github.com/imrankhan41/food-Delivery-Server" target="_blank" rel="noopener noreferrer">GitHub Server</a> </Button>
             
                <Button variant="outline-danger m-1">  <a className="text-decoration-none" href="https://food-delivery-website-7e5fa.firebaseapp.com/" target="_blank" rel="noopener noreferrer">Live Preview</a> </Button>
               </p>
                </div>
            </div>
            <hr className="text-danger"/>
           
            <div className="row ">
                <div className="col-lg-7 col-md-6 col-sm-12 col-12 scrollable">
                
                    <Carousel variant="dark">
                    <Carousel.Item>
                    <img className="img-fluid" src={healthlaptop} alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img className="img-fluid" src={healthdetails} alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img className="img-fluid" src={healthregistration} alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img className="img-fluid" src={healthlmember} alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img className="img-fluid" src={healthmobile} alt="" />
                    </Carousel.Item>
                    </Carousel>
                </div>
                <div className="col-lg-5 col-md-6 col-sm-12 col-12">
                <h2 className="text-danger">Health Care</h2>
               
                <div className="text-start ">
                    <p ><i  className="fas fa-plus"></i>Developed a website where you can see different kind of services provided gymnasium, schedule of gym, consultant of gym and membership plan.  </p> 
                    <p><i  className="fas fa-plus"></i>Firebase authentication used for login and registration using email-password and default google from browser. </p>
                </div>
                
             
                <p className="text-start "><strong >Technologies:</strong> 
                <Button variant="outline-danger m-1">React</Button>
                <Button variant="outline-danger m-1">Bootstrap</Button>
                <Button variant="outline-danger m-1">Firebase</Button>
                </p>
                <p className="text-start "><strong >All Links:</strong> 
                <Button variant="outline-danger m-1">  <a className="  text-decoration-none" href="https://github.com/imrankhan41/Health_care" target="_blank" rel="noopener noreferrer">GitHub </a> </Button>
             
                <Button variant="outline-danger m-1">  <a className="text-decoration-none" href="https://food-delivery-website-7e5fa.firebaseapp.com/" target="_blank" rel="noopener noreferrer">Live Preview</a> </Button>
               </p>
                </div>
            </div>
            <hr className="text-danger"/>
           
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
            <hr className="text-danger"/>
           
            <div className="row ">
                <div className="col-lg-7 col-md-6 col-sm-12 col-12 scrollable">
                    <Carousel variant="dark">
                    <Carousel.Item>
                    <img className="img-fluid" src={penguinlaptop} alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img className="img-fluid" src={penguinmobile} alt="" />
                    </Carousel.Item>
                    </Carousel>
                </div>
                <div className="col-lg-5 col-md-6 col-sm-12 col-12">
                <h2 className="text-danger">Penguin || E-Commerce</h2>
               
                <div className="text-start ">
                    <p ><i  className="fas fa-plus"></i>Developed a website where you will feel the E-commerce site like. It is a single page design   </p> 
                    <p><i  className="fas fa-plus"></i>Here Mainly Bootstrap is used to make a  landing page website </p>
                </div>
                <p className="text-start "><strong >Technologies:</strong> 
                <Button variant="outline-danger m-1">HTML5</Button>
                <Button variant="outline-danger m-1">CSS3</Button>
                <Button variant="outline-danger m-1">Bootstrap</Button>
                <Button variant="outline-danger m-1">Netlify</Button>
                </p>
                <p className="text-start "><strong >All Links:</strong> 
                <Button variant="outline-danger m-1">  <a className="  text-decoration-none" href="https://github.com/imrankhan41/penguin-bootstrap-website" target="_blank" rel="noopener noreferrer">GitHub </a> </Button>
                <Button variant="outline-danger m-1">  <a className="text-decoration-none" href="https://penguin-bootstrap-website.netlify.app/" target="_blank" rel="noopener noreferrer">Live Preview</a> </Button>
               </p>
                </div>
            </div>
            <hr className="text-danger"/>
           
            <div className="row ">
                <div className="col-lg-7 col-md-6 col-sm-12 col-12 scrollable">
                    <Carousel variant="dark">
                    <Carousel.Item>
                    <img className="img-fluid" src={nikelaptop} alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img className="img-fluid" src={nikemobile} alt="" />
                    </Carousel.Item>
                    </Carousel>
                </div>
                <div className="col-lg-5 col-md-6 col-sm-12 col-12">
                <h2 className="text-danger">Nike || E-Commerce</h2>
               
                <div className="text-start ">
                    <p ><i  className="fas fa-plus"></i>Developed a website where you will feel the E-commerce site like. It is a single page design   </p> 
                    <p><i  className="fas fa-plus"></i>Here Mainly Bootstrap is used to make a  landing page website </p>
                </div>
                <p className="text-start "><strong >Technologies:</strong> 
                <Button variant="outline-danger m-1">HTML5</Button>
                <Button variant="outline-danger m-1">CSS3</Button>
                <Button variant="outline-danger m-1">Bootstrap</Button>
                <Button variant="outline-danger m-1">Netlify</Button>
                </p>
                <p className="text-start "><strong >All Links:</strong> 
                <Button variant="outline-danger m-1">  <a className="  text-decoration-none" href="https://github.com/imrankhan41/nike-bootstrap-react-website" target="_blank" rel="noopener noreferrer">GitHub </a> </Button>
                <Button variant="outline-danger m-1">  <a className="text-decoration-none" href="https://nike-bootstrap-react-website.netlify.app/" target="_blank" rel="noopener noreferrer">Live Preview</a> </Button>
               </p>
                </div>
            </div>
            <hr className="text-danger"/>
           
            <div className="row ">
                <div className="col-lg-7 col-md-6 col-sm-12 col-12 scrollable">
                    <Carousel variant="dark">
                    <Carousel.Item>
                    <img className="img-fluid" src={pandalaptop} alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img className="img-fluid" src={pandamobile} alt="" />
                    </Carousel.Item>
                    </Carousel>
                </div>
                <div className="col-lg-5 col-md-6 col-sm-12 col-12">
                <h2 className="text-danger">Panda || E-Commerce</h2>
               
                <div className="text-start ">
                    <p ><i  className="fas fa-plus"></i>Developed a website where you will feel the E-commerce site like. It is a single page design   </p> 
                    <p><i  className="fas fa-plus"></i>Here Mainly Bootstrap is used to make a  landing page website </p>
                </div>
                <p className="text-start "><strong >Technologies:</strong> 
                <Button variant="outline-danger m-1">HTML5</Button>
                <Button variant="outline-danger m-1">CSS3</Button>
                <Button variant="outline-danger m-1">Bootstrap</Button>
                <Button variant="outline-danger m-1">Netlify</Button>
                </p>
                <p className="text-start "><strong >All Links:</strong> 
                <Button variant="outline-danger m-1">  <a className="  text-decoration-none" href="https://github.com/imrankhan41/panda-bootstrap-website-" target="_blank" rel="noopener noreferrer">GitHub </a> </Button>
                <Button variant="outline-danger m-1">  <a className="text-decoration-none" href="https://panda-bootstrap-website.netlify.app/" target="_blank" rel="noopener noreferrer">Live Preview</a> </Button>
               </p>
                </div>
            </div>
            <hr className="text-danger"/>
           
            <div className="row ">
                <div className="col-lg-7 col-md-6 col-sm-12 col-12 scrollable">
                    <Carousel variant="dark">
                    <Carousel.Item>
                    <img className="img-fluid" src={footballlaptop} alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img className="img-fluid" src={footballmobile} alt="" />
                    </Carousel.Item>
                    </Carousel>
                </div>
                <div className="col-lg-5 col-md-6 col-sm-12 col-12">
                <h2 className="text-danger">Football || Bootstrap Website</h2>
               
                <div className="text-start ">
                    <p ><i  className="fas fa-plus"></i>Developed a website where you will feel the E-commerce site like. It is a single page design   </p> 
                    <p><i  className="fas fa-plus"></i>Here Mainly Bootstrap is used to make a  landing page website </p>
                </div>
                <p className="text-start "><strong >Technologies:</strong> 
                <Button variant="outline-danger m-1">HTML5</Button>
                <Button variant="outline-danger m-1">CSS3</Button>
                <Button variant="outline-danger m-1">Bootstrap</Button>
                <Button variant="outline-danger m-1">Netlify</Button>
                </p>
                <p className="text-start "><strong >All Links:</strong> 
                <Button variant="outline-danger m-1">  <a className="  text-decoration-none" href="https://github.com/imrankhan41/responsive-football-bootstrap-website" target="_blank" rel="noopener noreferrer">GitHub </a> </Button>
                <Button variant="outline-danger m-1">  <a className="text-decoration-none" href="https://responsive-bootstrap-football-website.netlify.app/" target="_blank" rel="noopener noreferrer">Live Preview</a> </Button>
               </p>
                </div>
            </div>
            <hr className="text-danger"/>
           
            <div className="row ">
                <div className="col-lg-7 col-md-6 col-sm-12 col-12 scrollable">
                    <Carousel variant="dark">
                    <Carousel.Item>
                    <img className="img-fluid" src={hondalaptop} alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img className="img-fluid" src={hondamobile} alt="" />
                    </Carousel.Item>
                    </Carousel>
                </div>
                <div className="col-lg-5 col-md-6 col-sm-12 col-12">
                <h2 className="text-danger">Honda || E-Commerce</h2>
               
                <div className="text-start ">
                    <p ><i  className="fas fa-plus"></i>Developed a website where you will feel the E-commerce site like. It is a single page design   </p> 
                    <p><i  className="fas fa-plus"></i>Here Mainly Bootstrap is used to make a  landing page website </p>
                </div>
                <p className="text-start "><strong >Technologies:</strong> 
                <Button variant="outline-danger m-1">HTML5</Button>
                <Button variant="outline-danger m-1">CSS3</Button>
                <Button variant="outline-danger m-1">Bootstrap</Button>
                <Button variant="outline-danger m-1">Netlify</Button>
                </p>
                <p className="text-start "><strong >All Links:</strong> 
                <Button variant="outline-danger m-1">  <a className="  text-decoration-none" href="https://github.com/imrankhan41/honda-cbr-bootstrap-assignment" target="_blank" rel="noopener noreferrer">GitHub </a> </Button>
                <Button variant="outline-danger m-1">  <a className="text-decoration-none" href="https://hondacbr-bootstrap-assignment.netlify.app/" target="_blank" rel="noopener noreferrer">Live Preview</a> </Button>
               </p>
                </div>
            </div>
        </div>
    );
};

export default All;