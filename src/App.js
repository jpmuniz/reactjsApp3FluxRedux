import React from "react";
import { Provider } from "react-redux";
import "./config/reactotron";
import store from "./store/Index";
import Router from "./routes/index";

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default App;
