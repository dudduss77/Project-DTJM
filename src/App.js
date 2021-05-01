import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './fontLibrary'
import './App.scss';


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

      

    </div>
  );
}

export default App;
