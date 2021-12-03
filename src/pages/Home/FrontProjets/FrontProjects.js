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
                         <h4 >Niche Product</h4>
                     </div>
                 </div>
                 <div className="col-lg-4 col-md-3 col-sm-12 col-12">
                     <div className="card">
                         <img className="img-fluid" src={food} alt="" />
                         <hr />
                         <h4 >Food Delivery</h4>
                     </div>
                 </div>
                 <div className="col-lg-4 col-md-3 col-sm-12 col-12">
                     <div className="card">
                         <img className="img-fluid" src={health} alt="" />
                         <hr />
                         <h4 >Health Care</h4>
                     </div>
                 </div>
             </div>
             <div className="row ">
                 <div className="col-lg-4 col-md-3 col-sm-12 col-12">
                     <div className="card">
                         <img className="img-fluid" src={mac} alt="" />
                         <hr />
                         <h4 >Mac Book </h4>
                     </div>
                 </div>
                 <div className="col-lg-4 col-md-3 col-sm-12 col-12">
                     <div className="card">
                         <img className="img-fluid" src={football} alt="" />
                         <hr />
                         <h4 >Football Website</h4>
                     </div>
                 </div>
                 <div className="col-lg-4 col-md-3 col-sm-12 col-12">
                     <div className="card">
                         <img className="img-fluid" src={honda} alt="" />
                         <hr />
                         <h4 >Honda CBR</h4>
                     </div>
                 </div>
             </div>
             <div className="row ">
                 <div className="col-lg-4 col-md-3 col-sm-12 col-12">
                     <div className="card">
                         <img className="img-fluid" src={nike} alt="" />
                         <hr />
                         <h4 >Nike E-Commerce </h4>
                     </div>
                 </div>
                 <div className="col-lg-4 col-md-3 col-sm-12 col-12">
                     <div className="card">
                         <img className="img-fluid" src={panda} alt="" />
                         <hr />
                         <h4 >Panda E-Commerce</h4>
                     </div>
                 </div>
                 <div className="col-lg-4 col-md-3 col-sm-12 col-12">
                     <div className="card">
                         <img className="img-fluid" src={penguin} alt="" />
                         <hr />
                         <h4 >Penguin E-Commerce</h4>
                     </div>
                 </div>
             </div>
        </div>
    );
};

export default FrontProjects;