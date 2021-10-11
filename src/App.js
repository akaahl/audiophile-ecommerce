import GlobalStyle from "./globalStyles";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <div className="App">
      <GlobalStyle />

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/checkout" exact>
          <Checkout />
        </Route>

        <Route path="/:category" exact>
          <CategoryPage />
        </Route>

        <Route path="/:product/:item">
          <ProductPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
