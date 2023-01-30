import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//Provider wraps the App and the whole application has access to Redux. If you start your application with npm start and open Redux Dev Tools, your should see @@INIT Congratulations you have setup redux!
import { Provider } from "react-redux";
// We need to connect our store to the React application. Importit into index.js like this
import store from "./store";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
