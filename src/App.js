import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import TestComponent from './components/testComponent/TestComponent'
import GlobalProvider from './context/globalStore';

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Router>
          <TestComponent/>
        </Router>
      </GlobalProvider>

      
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
