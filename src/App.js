import React from 'react';
import { Route } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './App.css';
import LoginForm from './Components/LoginForm';

class App extends React.Component {


  render() {
    return (
      <div className="App">
        <Route path="/" component={LoginForm} />
        <div className="welcome-text">
          <h2>Tweets Reinvented</h2>
          <p>Make sure your tweets standout with our analytics tool. <br /> We check thousands of tweets and give you feedback <br />so you can make your Tweets Shine!</p>
          <Button variant="contained" color="primary">Signup</Button>
        </div>
      </div>
    );
  }
}

export default App;
