import './index.css';
import store from './redux/redux-store'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './MainPage/App';



let renderEntierTree = () => {

    ReactDOM.render(
        <React.StrictMode>
            <App appstate={store.getState()} dispatch={store.dispatch.bind(store)} />
        </React.StrictMode>,
        document.getElementById('root')
    );

};

renderEntierTree();

store.subscribe(renderEntierTree);

