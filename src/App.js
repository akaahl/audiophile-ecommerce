import GlobalStyle from "./globalStyles";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import Checkout from "./pages/Checkout";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />

      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
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
      </AnimatePresence>
    </div>
  );
}

export default App;
