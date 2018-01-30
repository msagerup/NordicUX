import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers/';
import NordicRouter from './routers/NordicRouter';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = createStore(allReducers);


ReactDOM.render(<Provider store={store}><NordicRouter /></Provider> , document.getElementById('app'));