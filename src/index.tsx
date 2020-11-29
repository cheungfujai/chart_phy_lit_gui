import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import store from './store/reducer';
import { persistStore } from 'redux-persist'

import {PersistGate} from "redux-persist/integration/react";


  
ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
				<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);