import React from "react";
import ReactDOM from "react-dom/client";
// https://reactjs.org/docs/context.html
import { AppProvider } from "./appContext";
// https://create-react-app.dev/docs/adding-bootstrap
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { NavermapsProvider } from 'react-naver-maps';

// https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
      <AppProvider>
        <NavermapsProvider
          ncpClientId="j4o164tqxe"
        >
          <App />
        </NavermapsProvider>
      </AppProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
