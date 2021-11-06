import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals";
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";
import LoadingScreen from './components/LoadingScreen'
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <React.StrictMode>
    {/* <I18nextProvider i18n={i18n}> */}
      {/* <Suspense fallback={<LoadingScreen />}> */}
       <App />
      {/* </Suspense> */}
    {/* </I18nextProvider> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
