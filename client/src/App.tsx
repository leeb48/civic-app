import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Component Imports
import ElectionInfo from "./components/elections/ElectionInfo";
import Landing from "./components/layout/Landing";
import Navbar from "./components/layout/Navbar";
import Representatives from "./components/representatives/Representatives";
import { Store } from "./store/Store";

function App() {
  const { state } = useContext(Store);

  console.log(state);
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/elections" component={ElectionInfo} />
          <Route exact path="/representatives" component={Representatives} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
