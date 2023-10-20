import logo from './logo.svg';
import './App.css';
import axios from axios
apikey = 'a9255bbb03194d14a7186bcf6f14558b'

apiUrl = 'https://api.sl.se/api2/realtimedeparturesV4.Json?key=23997f00503e4100862f3dce6ca22690&siteid=7044&timewindow=30&Bus=true'

function App() {
  return (
    <div className="App">
      <div className='destination'></div>
      <div className='displaytime'></div>
      <div className='linenumber'></div>
    </div>
  );
}

export default App;
