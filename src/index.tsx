import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import store from './store/reducer';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
	typography: {
	  fontFamily: [
		'"Poppins"',
		'"Arial"',
		'"sans-serif"',
	  ].join(','),
	  allVariants: {
		  color: "#757575",
		  lineHeight: "2.2rem"
	  }
	},
});

  
ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);