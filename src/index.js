import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App/App';
import {BrowserRouter as Router} from 'react-router-dom';


import "./styles/_style.scss"
import {Provider} from "react-redux";
import {store} from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
);

