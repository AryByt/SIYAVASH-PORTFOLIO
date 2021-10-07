import { Route, Switch } from 'react-router';
import Navbar from './components/Navbar';
import Home from './screens/Home';
import Projects from './screens/Projects';
import './App.css';
import Resume from './screens/Resume'
function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/projects">
          <Projects />
        </Route>

        <Route exact path="/resume">
          <Resume />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
