import React from "react";
import "./App.css";
import CounterApp from "./components/CounterApp";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h2>Redux-Test</h2>
        <CounterApp />
      </div>
    </Provider>
  );
};

export default App;
