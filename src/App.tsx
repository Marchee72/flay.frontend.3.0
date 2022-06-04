import SignInSide from "./views/SignInSide";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import { Component } from "react";
import Home from "./views/Home";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul className="App-header">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
          <Routes>
            <Route path='/SignIn' element={< SignInSide />}></Route>
            <Route path='/' element={< Home />}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}



export default App;
