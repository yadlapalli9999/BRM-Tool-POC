// import '@fortawesome/fontawesome-free/css/all.css';
// import 'mdbootstrap/css/bootstrap.css';
// import 'mdbootstrap/css/mdb.css';
import "@fortawesome/fontawesome-free/css/all.css";
// import "@mdbootstrap/css/mdb.min.css";
 //import 'mdb-react-ui-kit/dist/css/mdb.min.css'

// import "mdb-ui-kit/js/mdb.min.js";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'

//import "mdbootstrap/js/bootstrap.min.js";
// import "mdbootstrap/js/popper.min.js";
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//import "./styles.css"; // customized bootstrap styles
import reportWebVitals from "./reportWebVitals";
import axios from "axios";
import { Provider } from "react-redux";
import store from "./redux/store";
axios.interceptors.response.use(
  (response) => {
    if (response.data.success === false && response.data.message === "Unauthenticated Invalid Token") {
     alert("Invalid Token")
    }
    else {
      return response;
    }
  }
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
