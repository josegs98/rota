import React from 'react';
import ReactDOM from 'react-dom';
import Routing from './routing';

import { Provider } from 'react-redux';
import createdStore from './store/createdStore';

const store = createdStore();

ReactDOM.render(
    <Provider store={store}>
        <Routing />
    </Provider>
    , document.getElementById('root')
);
