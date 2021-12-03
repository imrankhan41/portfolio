import React from 'react';
import "./FrontProjects.css"
import niche from "../../../images/FireShot/Niche Product.png"
import food from "../../../images/FireShot/Food Delivery.png"
import health from "../../../images/FireShot/Health Care.png"
import mac from "../../../images/FireShot/Mac Book.png"
import football from "../../../images/FireShot/Footabll.png"
import honda from "../../../images/FireShot/Honda.png"
import nike from "../../../images/FireShot/Nike.png"
import panda from "../../../images/FireShot/Panda.png"
import penguin from "../../../images/FireShot/Penguin.png"
const FrontProjects = () => {
    return (
        <div className="text-white container">
            <hr className="col-lg-4 mx-auto text-danger" />
            <h2 className="text-danger">Projects</h2>
            <p>Short views of my projetcs</p>
             <div className="row ">
                 <div className="col-lg-4 col-md-3 col-sm-12 col-12">
                     <div className="card">
                         <img className="img-fluid" src={niche} alt="" />
                         <hr />
                         <h4 > <a className="title text-danger" href="/projects">Niche Product</a> </h4>
                     </div>
                 </div>
                 <div className="col-lg-4 col-md-3 col-sm-12 col-12">
                     <div className="card">
                         <img className="img-fluid" src={food} alt="" />
                         <hr />
                         <h4 > <a className="title text-danger" href="/projects">Food Delivery</a> </h4>
                     </div>
                 </div>
                 <div className="col-lg-4 col-md-3 col-sm-12 col-12">
                     <div className="card">
                         <img className="img-fluid" src={health} alt="" />
                         <hr />
                         <h4 ><a className="title text-danger" href="/projects">Health Care</a> </h4>
                     </div>
                 </div>
             </div>
             <div className="row ">
                 <div className="col-lg-4 col-md-3 col-sm-12 col-12">
                     <div className="card">
                         <img className="img-fluid" src={mac} alt="" />
                         <hr />
                         <h4 ><a className="title text-danger" href="/projects">Mac Book </a></h4>
                     </div>
                 </div>
                 <div className="col-lg-4 col-md-3 col-sm-12 col-12">
                     <div className="card">
                         <img className="img-fluid" src={football} alt="" />
                         <hr />
                         <h4 ><a className="title text-danger" href="/projects">Football Website</a> </h4>
                     </div>
                 </div>
                 <div className="col-lg-4 col-md-3 col-sm-12 col-12">
                     <div className="card">
                         <img className="img-fluid" src={honda} alt="" />
                         <hr />
                         <h4 ><a className="title text-danger" href="/projects">Honda CBR</a> </h4>
                     </div>
                 </div>
             </div>
             <div className="row ">
                 <div className="col-lg-4 col-md-3 col-sm-12 col-12">
                     <div className="card">
                         <img className="img-fluid" src={nike} alt="" />
                         <hr />
                         <h4 ><a className="title text-danger" href="/projects">Nike E-Commerce </a> </h4>
                     </div>
                 </div>
                 <div className="col-lg-4 col-md-3 col-sm-12 col-12">
                     <div className="card">
                         <img className="img-fluid" src={panda} alt="" />
                         <hr />
                         <h4 ><a className="title text-danger" href="/projects">Panda E-Commerce</a> </h4>
                     </div>
                 </div>
                 <div className="col-lg-4 col-md-3 col-sm-12 col-12">
                     <div className="card">
                         <img className="img-fluid" src={penguin} alt="" />
                         <hr />
                         <h4 ><a className="title text-danger" href="/projects">Penguin E-Commerce</a> </h4>
                     </div>
                 </div>
             </div>
        </div>
    );
};

export default FrontProjects;