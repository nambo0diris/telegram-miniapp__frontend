import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./components/app/App.tsx";
import './index.css'
import {BrowserRouter} from "react-router-dom";
// import {Provider} from "react-redux";
// import {store} from "./services/store/store.ts";



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
        {/*<Provider store={store}>*/}
        {/*    <App />*/}
        {/*</Provider>*/}
        <App />
    </BrowserRouter>
  </React.StrictMode>,
)
