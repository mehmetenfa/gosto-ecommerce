import React from "react";
import { Pages } from "./components/pages/Pages";
import "./style/main.scss";
import { Provider } from "react-redux";
import store from "./controller/store";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Pages />
      </Provider>
    </>
  );
};

export default App

// import React from 'react'

// const App = () => {
//   return (
//     <div>App</div>
//   )
// }

// export default App