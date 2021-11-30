import React from 'react';
import "./About.css"
import imran from "../../../images/imran.jpg"
const About = () => {
    return (
        <div className="row">
            <div classNam="mt-5">
            <br />
            <br />
            <h1 className="pt-5 text-white">About <span className="text-danger"> Me</span></h1>
            <h4 className="text-white">ALLOW ME TO INTRODUCE MYSELF</h4>
            </div>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <img className="img" src={imran} alt="" srcset="" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-start text-white mt-5 p-5">
                    <h5>I am obsessed with making things and even more obsessed with making things better.After graduating from Bangladesh University of Textiles (BUTEX), I am totally focused on  <span className="text-danger">Design and Development</span>. I have been actively involved in <span className="text-danger">Design Community</span> for last 6 months.I have designed different kind of websites like <span className="text-danger">E-commerce, Health-care, Educational, Travel Website and more exciting also coming </span> </h5>
                    <h5>I am highly interested in Web Design and Development specially in <span className="text-danger"> Front in Design </span>. </h5>
                    <h5>When i am not designing. I go hanging with my wife , spend time with family ,Play cricket and do what i like </h5>
                </div>

            </div>
            <div className="row">
               <div className="col-lg-6 col-md-6 col-sm-12 col-12 p-5">
                   <br />
                <h2 className="text-white">Things I Love</h2>
               <i class="fas fa-futbol"></i>
               <i class="fas fa-table-tennis"></i>
               <i class="fas fa-volleyball-ball"></i>
               <i class="fas fa-biking"></i>
               </div>
               <div className="col-lg-6 col-md-6 col-sm-12 col-12 p-5">
                   <h2 className="text-white mt-4">Look What I Can Do</h2>
                   <div className="row text-white text-start">
                       <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                       <h5 className="text-danger">Expertise:</h5>
                       <p ><i  className="fas fa-plus"></i>HTML5</p>
                       <p ><i  className="fas fa-plus"></i>CSS3</p>
                       <p ><i  className="fas fa-plus"></i>Bootstrap5</p>
                       <p ><i  className="fas fa-plus"></i>Material UI</p>
                       <p ><i  className="fas fa-plus"></i>Tailwind CSS</p>
                       </div>
                       <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                       <h5 className="text-danger">Comfortable</h5>
                       <p ><i  className="fas fa-plus"></i>JavaScript</p>
                       <p ><i  className="fas fa-plus"></i>React</p>
                      
                       <p ><i  className="fas fa-plus"></i>ES6</p>
                       <p ><i  className="fas fa-plus"></i>Mongo Db</p>
                       <p ><i  className="fas fa-plus"></i>Node JS</p>
                       </div>
                   </div>
                   <div className="row text-white text-start">
                       <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                       <h5 className="text-danger">Familiars:</h5>
                       <p ><i  className="fas fa-plus"></i>TypeScript</p>
                       <p ><i  className="fas fa-plus"></i>React Native</p>
                       <p ><i  className="fas fa-plus"></i>Next Js</p>
                       </div>
                       <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                       <h5 className="text-danger">Tools:</h5>
                       <p ><i  className="fas fa-plus"></i>Heroku</p>
                       <p ><i  className="fas fa-plus"></i>Netlify</p>
                       <p ><i  className="fas fa-plus"></i>GitHub</p>
                       <p ><i  className="fas fa-plus"></i> Firebase</p>
                       <p ><i  className="fas fa-plus"></i> VSCode</p>
                       </div>
                   </div>
                  
               </div>
            </div>
        </div>
    );
};

export default About;