import React, { useState }from 'react';
import './App.scss';
import Connector from '../Connector/Connector';
import Loader from '../Loader/Loader';
import Locator from '../Locator/Locator';
import Panel from '../Panel/Panel';

function App() {
  const [loc, setLoc]       = useState();
  const [loader, setLoader] = useState('active');

  const sendToCensus = () => {
    Connector.start('get','https://us-central1-detroit-iet.cloudfunctions.net/getToken',null,(e)=>{(e.status >= 200 && e.status < 300) ? succToken(e) : errorToken(e)}, (e)=>{errorToken(e)});
  }
  const succToken = (resp) => {
    resp.json().then(data =>{
      let params = [
        {
          "attributes" : {
            "user_input" : Date.now()
          },
          "geometry" : {
            "x" : loc.lng,
            "y" : loc.lat
          }
        }
      ];
      let request = new Request(`https://services2.arcgis.com/qvkbeam7Wirps6zC/arcgis/rest/services/Tablet_Locator/FeatureServer/0/addFeatures?token=${data.access_token}&features=${encodeURIComponent(JSON.stringify(params))}&f=json`, {
          method: 'POST',
          body: '',
          headers: new Headers(),
          mode: 'cors',
          cache: 'default'
      });
      fetch(request)
      .then((res) => {
          window.location.replace("https://my2020census.gov/");
      });
    })
    .catch((error) => {
        // error(error);
    });
  }

  const errorToken = (resp) => {
    // console.log(e);
  }

  return (
    <section className="App">
      <Locator state={{ loc: [loc, setLoc] , loader: [loader, setLoader]}}></Locator>
      <Loader loader={loader}></Loader>
      <Panel handleChange={sendToCensus} location={loc}state={{ loader: [loader, setLoader] }}></Panel>
    </section>
  );
}

export default App;

