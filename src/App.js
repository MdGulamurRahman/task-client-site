import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Home from './Pages/Home/Home';
import NavigationBar from './Shared/NavigationBar/NavigationBar';
import UserDetails from './Pages/UserDetails/UserDetails';
function App() {
  return (
    <div className="App">
      <Router>
      <NavigationBar></NavigationBar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/details">
           <UserDetails></UserDetails>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
