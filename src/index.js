// import React from 'react';
import './index.css';
import state from './redux/state'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './MainPage/App';
import { addPost,subscriber } from './redux/state'


 let renderEntierTree = () => {

    ReactDOM.render(
        <React.StrictMode>
            <App appstate={state} addPost={addPost} />
        </React.StrictMode>,
        document.getElementById('root')
    );

};

subscriber(renderEntierTree);

