import React, { useState }from 'react';
import './App.scss';
import Loader from '../Loader/Loader';
import Locator from '../Locator/Locator';
import Panel from '../Panel/Panel';

function App() {
  const [loc, setLoc]       = useState();
  const [loader, setLoader] = useState('active');

  return (
    <section className="App">
      <Locator state={{ loc: [loc, setLoc] , loader: [loader, setLoader]}}></Locator>
      <Loader loader={loader}></Loader>
      <Panel location={loc} state={{ loader: [loader, setLoader] }}></Panel>
    </section>
  );
}

export default App;

