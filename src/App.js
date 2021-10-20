import TodoList from './todos/TodoList'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './nav/nav';
import Home from './Home/home';

function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/todos' component={TodoList} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
