import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import LoginForm from './Components/LoginForm';
import SignUpForm from './Components/SignUpForm';
import Tweet from './Components/Tweet';
import Auth from "./Auth";

const auth = new Auth();


class App extends React.Component {


  render() {
    return (
      <div className="App">
        <Route exact path="/" component={LoginForm} />
        <Route path="/tweet" component={Tweet} />
      </div>
    );
  }
}

export default App;
