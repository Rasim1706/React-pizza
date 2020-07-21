import React, { useEffect, useCallback } from "react";
import { Route, Switch } from "react-router";
import { useDispatch } from "react-redux";
import axios from "axios";

import { Header } from "./components";
import { Home, Cart } from "./pages";
import { setPizzas } from "./redux/action/pizzas";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://localhost:3001/pizzas").then(({ data }) => {
      dispatch(setPizzas(data));
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
