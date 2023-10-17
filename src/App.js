import logo from './logo.svg';
import './App.css';

apiUrl = 'https://api.sl.se/api2/realtimedeparturesV4.Json?key=23997f00503e4100862f3dce6ca22690&siteid=7044&timewindow=30&Bus=true'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
