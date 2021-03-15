import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import CatalogContainer from './components/CatalogContainer'
// items

// redux stuff
import { createStore } from "redux";
import reducer from "./reducer";
// react-redux - Provider - wraps app , connect - used in components
import { Provider } from "react-redux";
//routing
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// initial store

// store
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/cart">
            <CartContainer />
          </Route>
          <Route path="/">
            <CatalogContainer />
          </Route>
        </Switch>
      </Router>

    </Provider>
  );
}

export default App;
