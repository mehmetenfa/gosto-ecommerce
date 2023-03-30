import React from "react";
import Pages from "./components/pages/Pages";
import "./style/main.scss";
import { Provider } from "react-redux";
import store from "./controller/store";

function App() {
  return (
    <>
      <Provider>
        <Pages />
      </Provider>
    </>
  );
};

export default App
