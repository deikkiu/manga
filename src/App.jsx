import React from 'react';

import Router from '@routes/Router';
import { store } from '@store/store';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import '@assets/styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<Router />
		</Provider>
	</React.StrictMode>
);
