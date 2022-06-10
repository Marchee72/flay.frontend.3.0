import { Component } from "react";
import {
  BrowserRouter as Router, Route, Routes
} from 'react-router-dom';
import Home from "./views/Home";
import SignInSide from "./views/SignInSide";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route path='/signin' element={< SignInSide />}></Route>
            <Route path='/' element={< Home />}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}



export default App;
