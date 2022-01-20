
import './App.css';
import Navbar from './components/Navbar';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Achievements from './components/pages/Achievements';
import AboutMe from './components/pages/AboutMe';
import resume from './components/pages/resume';
import Contact from './components/Contact';
import Education from './components/Education';
import Work from './components/Work';

function App() {
  return (
  <>
  <Router>
     <Navbar /> 
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/Achievements' exact component={Achievements}/>
      <Route path='/AboutMe' exact component={AboutMe}/>
      <Route path='/resume' exact component={resume}/>
      <Route path='/Contact' exact component={Contact}/>
      <Route path='/Education' exact component={Education}/>
      <Route path='/Work' exact component={Work}/>
    </Switch>
  </Router> 

  </>  
  );
}

export default App;
