import GlobalStyle from "./globalStyles";
import Navbar from "./components/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <GlobalStyle />

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
