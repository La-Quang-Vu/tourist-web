import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import './App.css';
import './assets/css/dist/tailwind.css';
import Home from "./pages/home/Home";

function App() {

  return (
    <div className="">
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            {/* <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route> */}
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
