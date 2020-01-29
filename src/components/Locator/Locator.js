import React, { useState }from 'react';

function Locator(props) {
  const {
    loc: [loc, setLoc], 
    loader: [loader, setLoader]
  } = {
    loc: useState(0), loader: useState(0),
    ...(props.state || {})
  };

  const getLocation = () => {
    function success(position) {
      setLoc({lon: position.coords.longitude, lat: position.coords.latitude});
      setLoader('');
    }
  
    function error() {
      setLoc('Unable to retrieve your location');
      setLoader('');
    }
  
    if (!navigator.geolocation) {
      setLoc('Geolocation is not supported by your browser');
      setLoader('');
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }

  return (
    <section className="Locator">
      {getLocation()}
    </section>
  );
}

export default Locator;

