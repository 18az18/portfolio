import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import StyleContext from "isomorphic-style-loader/StyleContext";

import App from "../shared/App";

const insertCss = (...styles) => {
  const removeCss = styles.map((style) => style._insertCss());
  return () => removeCss.forEach((dispose) => dispose());
};

ReactDOM.hydrate(
  <React.StrictMode>
    <BrowserRouter>
      <StyleContext.Provider value={{ insertCss }}>
        <App />
      </StyleContext.Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
