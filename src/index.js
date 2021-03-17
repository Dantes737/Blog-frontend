import './index.css';
import store from './redux/redux-store'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './MainPage/App';
import {Provider} from 'react-redux';



let renderEntierTree = () => {

    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App appstate={store.getState()} />
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );

};

renderEntierTree();

store.subscribe(renderEntierTree);

