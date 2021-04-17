import './App.css';
import HomePage from "./Components/HomePage"
import Contact from "./Components/Contact"
import About from "./Components/About"
import Forum from "./Components/Forum"
import Projects from "./Components/Projects"

import NavBar from "./Components/NavBar"
import Footer from "./Components/Footer"
import { Route, Switch } from "react-router-dom"
import Sign from './Components/Sign';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/sign" component={Sign}></Route>
        <Route exact path="/projects" component={Projects}></Route>
        <Route exact path="/forum" component={Forum}></Route>
      </Switch>
    </>
  );
}

export default App;
