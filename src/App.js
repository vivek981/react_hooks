import React, {useContext} from 'react';
import TodoList from './todos/TodoList'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './nav/nav';
import Home from './Home/home';


const themes = {
  light: {
    color: 'red',
  }, 
  dark: {
    color: '#000',
  }

};

const ThemeContext = React.createContext(themes.light);

function App() {
  const red = useContext(ThemeContext);
  return (
    <Router>
    <div style={{color: red.color}}>
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
