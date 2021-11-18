import * as React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import StyleContext from "isomorphic-style-loader/StyleContext";

import App from "./shared/App";


const renderer = (req) => {
  const css = new Set();
  const insertCss = (...styles) =>
    styles.forEach((style) => css.add(style._getCss()));

  const context = {};
  const content = ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouter location={req.url} context={context}>
        <StyleContext.Provider value={{ insertCss }}>
          <App />
        </StyleContext.Provider>
      </StaticRouter>
    </React.StrictMode>
  );

  return `
  <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Portfolio</title>
        <script src="/bundle.js" defer></script>
        <style>${[...css].join("")}</style>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
    </head>
    <body>
        <div id="root">${content}</div>    
    </html>
    `;
};

export default renderer;
