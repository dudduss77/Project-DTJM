import "./fontLibrary";

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

export default App;
