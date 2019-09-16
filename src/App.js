import React from 'react';
import './assets/css/style.css';
import Routing from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="mainWrapper d-flex flex-column justify-content-around">
      <Routing/>        
    </div>
  );
}

export default App;
