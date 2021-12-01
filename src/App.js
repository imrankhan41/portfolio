import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home/Home';
import { Navbar } from 'react-bootstrap';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Header from './pages/Home/Header/Header';
import About from './pages/Home/About/About';
import Projects from './pages/Home/Projects/Project/Projects';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
    <Header></Header>
      <Switch>
        <Route exact path="/">
        <Home></Home>
        </Route>
        <Route path="/home">
        <Home></Home>
        </Route>
        <Route path="/about">
        <About></About>
        </Route>
        <Route path="/projects">
        <Projects></Projects>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
