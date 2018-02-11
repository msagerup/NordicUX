import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers/';
import NordicRouter from './routers/NordicRouter';
import Golden from './components/Golden'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

 const store = createStore(rootReducer)

ReactDOM.render(<Provider store={store}><NordicRouter /></Provider> , document.getElementById('app'));