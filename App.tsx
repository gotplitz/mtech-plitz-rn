import React from 'react';
import { ThemeProvider } from 'styled-components/native';

// Screens
import MainPage from '@screens/MainPage';
import Menu from '@screens/Menu';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

// TS
export interface ThemeProps {
	whiteBg: string;
	primaryColor: string;
	secondaryColor: string;
	accentColor: string;
}

export interface InitialStateTypes {
	action: string;
}

const App = () => {
	const theme: ThemeProps = {
		whiteBg: '#f0f3f5',
		primaryColor: '#3c4560',
		secondaryColor: '#4775f2',
		accentColor: '#b8bece',
	};

	const initialState: InitialStateTypes = {
		action: '',
	};

	const reducer = (state = initialState, action: { type: any }) => {
		switch (action.type) {
			case 'CLOSE_MENU':
				return { action: 'closeMenu' };
			case 'OPEN_MENU':
				return { action: 'openMenu' };
			default:
				return state;
		}
	};

	const store = configureStore({ reducer });

	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<Menu />
				<MainPage />
			</ThemeProvider>
		</Provider>
	);
};

export default App;
