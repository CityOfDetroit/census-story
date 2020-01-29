import React, { useState }from 'react';
import './Panel.scss';

function Panel(props) {

  const buildPanel = () => {
    let markup;
    if(props.location != undefined && typeof props.location != 'string'){
      markup = <p>Your current location is Long: {props.location.lon}, Lat:{props.location.lat}</p>;
    }else{
      markup = <p>{props.location}</p>;
    }
    return markup;
  }

  return (
    <article className="Panel">
      {buildPanel()}
    </article>
  );
}

export default Panel;

