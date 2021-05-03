import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faBaseballBall,
  faCheckSquare,
  faMusic,
  faPlug,
  faSwimmer,
} from "@fortawesome/free-solid-svg-icons";

import LayoutView from "./views/LayoutView/LayoutView";

import GlobalProvider from "./context/globalStore";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <LayoutView />
      </GlobalProvider>
    </div>
  );
}

library.add(fab, faCheckSquare, faPlug, faMusic, faSwimmer, faBaseballBall);

export default App;
