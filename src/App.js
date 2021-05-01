import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './fontLibrary'
import './App.scss';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBaseballBall, faCheckSquare, faMusic, faPlug, faSwimmer } from '@fortawesome/free-solid-svg-icons'

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

library.add(fab, faCheckSquare, faPlug, faMusic, faSwimmer, faBaseballBall)

export default App;
