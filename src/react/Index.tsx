import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppBase from './components/AppBase';
import store from './store';

ReactDOM.render (
    <Provider store={store}><AppBase/></Provider>,
    document.getElementById("app")
);