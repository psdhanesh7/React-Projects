import './App.css';
import Navbar from './Components/Navabar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Components/Home';
// import About from './Components/About';
import Contact from './Components/Contact';
import About from './Components/About';
// import Post from './Components/Post';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path = "/" component = {Home} />
            <Route path = "/about" component = {About} />
            <Route path = "/contact" component = {Contact} />
                        
          </Switch>

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
