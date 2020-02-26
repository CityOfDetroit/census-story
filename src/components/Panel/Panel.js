import React, { useState }from 'react';
import './Panel.scss';

function Panel(props) {
  const {
    loader: [loader, setLoader]
  } = {
    loader: useState(0),
    ...(props.state || {})
  };
  const language = drupalSettings.detroitmi.language;

  const sendToCensus = () => {
    setLoader('active');
    props.handleChange();
  }

  return (
    <article className="Panel">
      <div className="census-logos">
        <div className="img-container">
          <img src="https://www.census.gov/programs-surveys/decennial-census/2020-census/_jcr_content/herotextimage.texthero.png/1569950604067.png" alt="United States Census 2020"></img>
        </div>
        <div className="img-container">
          <img src="https://detroitmi.gov/sites/detroitmi.localhost/files/2019-03/LogoHorizontal_Final.png" alt="Be counted Detroit 2020"></img>
        </div>
      </div>
      <div className="census-button">
        <button onClick={sendToCensus}>
          {(language == 'en') ? 'Fill out the census':''} 
          {(language == 'es') ? 'Completa el censo':''} 
          {(language == 'bn') ? 'জনগণনা পূরণ করুন':''} 
          {(language == 'ar') ? 'املأ التعداد':''} 
        </button>
      </div>
    </article>
  );
}

export default Panel;

