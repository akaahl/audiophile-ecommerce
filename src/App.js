import GlobalStyle from "./globalStyles";
import Navbar from "./components/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div className="App">
      <GlobalStyle />

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/:category">
          <CategoryPage />
        </Route>

        <Route path="/:category/:product">
          <ProductPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
