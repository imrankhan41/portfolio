import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";
  import "./Projects.css"
import All from '../All/All';
import BootstrapProjects from '../BootstrapProjects/BootstrapProjects';
import JavascriptProjects from '../JavascriptProjects/JavascriptProjects';
import ReactProjects from '../ReactProjects/ReactProjects';
import CompleteProject from '../CompleteProject/CompleteProject';
const Projects = () => {
      let { path, url } = useRouteMatch();
    return (
        <div className="mt-5 text-white">
            <div >
            <h1 className="pt-5">My <span className="text-danger">Projects</span> </h1>
            <p >In-depth Case Studies to show you what i can offer and how i work</p>
            
            </div>
            <hr/>
            <ul>
          <li>
            <Link className="header-link text-danger" to={`${url}/all`}>All</Link>
          </li>
          <li>
            <Link className="header-link text-danger" to={`${url}/bootstrapprojects`}>Bootstrap</Link>
          </li>
          <li> 
            <Link className="header-link text-danger" to={`${url}/javascriptprojects`}>JavaScript</Link>
          </li>
          <li>
            <Link className="header-link text-danger" to={`${url}/reactprojects`}>React</Link>
          </li>
          <li>
            <Link className="header-link text-danger" to={`${url}/completeprojects`}>Complete Project</Link>
          </li>
        </ul>
        <Switch>
        <Route exact path={`${path}`}>
        <h2>Welcome to My Project World</h2>
        </Route>
        <Route  path={`${path}/all`}>
          <All></All>
        </Route>
        <Route path={`${path}/bootstrapprojects`}>
          <BootstrapProjects></BootstrapProjects>
        </Route>
        <Route path={`${path}/javascriptprojects`}>
          <JavascriptProjects></JavascriptProjects>
        </Route>
        <Route path={`${path}/reactprojects`}>
          <ReactProjects></ReactProjects>
        </Route>
        <Route path={`${path}/completeprojects`}>
          <CompleteProject></CompleteProject>
        </Route>
      </Switch>
        </div>
    );
};

export default Projects;