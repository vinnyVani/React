import './App.css';
import NavBar from './Components/Layout/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './Components/Pages/About';
import NotFound from './Components/Pages/NotFound';



function App() {
  return (
    <Router>
    <div className="Container">
      <NavBar />
      <Switch>
        <Route exact path="/" component={About} />       
        <Route component={NotFound}/>
      </Switch><br/>
      <br/><br/>
     
    </div>
    
    </Router>
    
  );
}

export default App;