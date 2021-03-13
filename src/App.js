import Home from './pages/home/Home'
import About from './pages/about/About'
import WeTask from './pages/wetask/WeTask'
import GroceryPal from './pages/grocerypal/GroceryPal'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router> 
      <Switch>
        <Route path='/about' exact component={About}/>
        <Route path='/wetask' exact component={WeTask}/>
        <Route path='/grocerypal' exact component={GroceryPal}/>
        <Route path='/' exact component={Home}/>
      </Switch>    
    </Router>
  );
}

export default App;
