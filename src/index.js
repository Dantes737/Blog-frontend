import './index.css';
import store from './redux/redux-store'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './MainPage/App';
import {Provider} from 'react-redux';


    ReactDOM.render(
            <Provider store={store}>
                <App/>
            </Provider>,
        document.getElementById('root')
    );




