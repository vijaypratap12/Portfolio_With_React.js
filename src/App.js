import './App.css';
import Header from "./Header/Header";
import AboutMe from "./AboutMe/AboutMe";
import Menu from "./NavBar/Menu";
import ContactMe from "./ContactMe/ContactMe"
import Footer from "./Footer/Footer";
import Intro from "./Introduction/Intro";
import Education from "./Education/Education";
import TechnicalSkill from "./TechnicalSkills/TechnicalSkill";
import {Route, Switch} from "react-router-dom";
import ReactTooltip from "react-tooltip";

const App = () => {
  return (
   <div className="App">
    <ReactTooltip />
    <Header />
    <Menu />
    <Intro />
    <Switch>
    <Route exact path="/" component={AboutMe} />
    <Route  path="/education" component={Education} />
    <Route  path="/technicalskill" component={TechnicalSkill} />
    </Switch>
    <ContactMe />
    <Footer />
  </div>
  );
}

export default App;
