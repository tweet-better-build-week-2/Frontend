import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppBar color="primary" />
      <Button variant="contained" color="primary">
      Hello World
    </Button>
    </div>
  );
}

export default App;
