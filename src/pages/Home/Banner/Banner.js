import React from 'react';
import { Button} from 'react-bootstrap';
import banner from "../../../images/imran-banner-logo.png"
import "./Banner.css"
const Banner = () => {
    return (
        <div className="row banner">
           
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-white p-5">
                 <div className="ms-5 text-start">
                     
                 <h2>Cheers, I am Amran Miah</h2>
                <h4>If you searching for dynamic,high user interface <span className="text-danger">website developer </span> , you are in right place. I have experince working with React JS, JavaScript, React Bootstrap ,Material UI for <span className="text-danger">Front End Development</span> and with MongoDb, Node JS for  <span className="text-danger">Back End Development</span></h4>

                <h4>If you fancy a chat feel free to drop me a line.</h4>
                <h4>Stay bold & <br />
                  Have a mathematics Monday</h4>
                  <div >
                  <a href="https://drive.google.com/file/d/1VG-CrC_ByUMa9RwZXa1hPUAsjddSfr5l/view?usp=sharing" target="_blank" download>
                    <Button className ="btn btn-danger ">Donwload Resume</Button>
                </a> <br />
                <br />
                  <a href="https://github.com/imrankhan41" target="_blank" rel="noopener noreferrer"> <i className="fab fa-github text-danger "></i></a>
                  <a href="https://web.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook text-danger "></i></a>
                  <a href="https://www.linkedin.com/in/mohammad-imran-khan-a70b2b16b/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin  text-danger "></i></a>
                  <a href="https://twitter.com/imrantexf69" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter text-danger "></i></a>
                 </div>
               
                 </div>
               
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <img className="my-img p-5" src ={banner}/>
            </div>
        </div>
    );
};

export default Banner;