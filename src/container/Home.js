import React from 'react';

function Home() {
  return (
    <div className="mainWrapper d-flex flex-column justify-content-around">        
        <div className="AppContent"><img src={require('../assets/images/testImage.jpg')} alt="Content Image"/></div>        
    </div>
  );
}

export default Home;
