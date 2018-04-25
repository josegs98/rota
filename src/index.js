import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import Menu from "./components/Menu";

ReactDOM.render(
    <div>
        <Menu/>
        <div style={{ backgroundColor: '#DDDDDD' }}>
            <App />
        </div>
    </div>
    , document.getElementById('root')
);
