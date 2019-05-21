import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import LoginForm from './Components/LoginForm';
import SignUpForm from './Components/SignUpForm';


class App extends React.Component {


  render() {
    return (
      <div className="App">
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/signup" component={SignUpForm} />
      </div>
    );
  }
}

export default App;
