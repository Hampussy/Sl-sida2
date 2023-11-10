import logo from './logo.svg';
import './App.css';
import axios from Axios
import { useState } from 'react';
import { Axios } from 'axios';
const apikey = 'a9255bbb03194d14a7186bcf6f14558b';

const apiPlats = '6d89ea803f5d43a8893f8ea50a03ef52';

const platsKollYani = 'https://api.sl.se/api2/typeahead.json?searchstring=Huddinge&stationsonly=true&maxresults=10&key=;6d89ea803f5d43a8893f8ea50a03ef52'

const apiUrl = 'https://api.sl.se/api2/realtimedeparturesV4.Json?key=23997f00503e4100862f3dce6ca22690&siteid=7000&timewindow=30&Bus=true';

const [bussData, setBussData] = useState ({});

const searchData = event => {
  if (event.onload)
}


function App() {
  return (
    <div className="App">
      <div className='destination'>
        <p>{Bussar[0].Destination}</p>
      </div>
      <div className='displaytime'></div>
      <div className='linenumber'></div>
    </div>
  );
}

export default App;
