// import React from 'react';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link,
//     useParams,
//     useRouteMatch
//   } from "react-router-dom";
// const Projects = () => {
//       let { path, url } = useRouteMatch();
//     return (
//         <div className="mt-5 text-white">
//             <div >
//             <h1 className="pt-5">My <span className="text-danger">Projects</span> </h1>
//             <p >In-depth Case Studies to show you what i can offer and how i work</p>
            
//             </div>
//             <hr/>
//             <ul>
//           <li>
//             <Link to={`${url}/all`}>All</Link>
//           </li>
//           <li>
//             <Link to={`${url}/bootstrap`}>Bootstrap</Link>
//           </li>
//           <li>
//             <Link to={`${url}/javascript`}>JavaScript</Link>
//           </li>
//           <li>
//             <Link to={`${url}/react`}>React</Link>
//           </li>
//           <li>
//             <Link to={`${url}/completeprojects`}>Complete Project</Link>
//           </li>
//         </ul>
//         <Switch>
//         <Route path={`${path}/:all`}>
//           <Topic />
//         </Route>
//       </Switch>
//         </div>
//     );
// };

// export default Projects;