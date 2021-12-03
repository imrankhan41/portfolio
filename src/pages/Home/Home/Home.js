import React from 'react';

import Banner from '../Banner/Banner';
import FrontProjects from '../FrontProjets/FrontProjects';
import Services from '../Services/Services';



const Home = () => {
    return (
        <div>
           
           <Banner></Banner>
           <Services></Services>
           <FrontProjects></FrontProjects>
        </div>
    );
};

export default Home;