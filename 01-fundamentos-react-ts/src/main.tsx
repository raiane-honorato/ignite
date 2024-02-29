import * as React from "react";
import * as ReactDOM from "react-dom/client"; //biblioteca do react específica para o DOM, para o browser
import App from "./App";

// react vai criar HTML dentro da div root
// spa > toda interface é construída no javascript
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
