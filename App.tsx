import 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

// Screens
import Menu from '@screens/Menu';
import AppNavigator from '@navigator/AppNavigator';

// TS
export interface ThemeProps {
	whiteBg: string;
	primaryColor: string;
	secondaryColor: string;
	accentColor: string;
}

export interface InitialStateTypes {
	action: string;
	userName: string;
}

interface ActionTypes {
	type: string;
	userName?: any;
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
		userName: '',
	};

	const reducer = (state = initialState, action: ActionTypes) => {
		switch (action.type) {
			case 'CLOSE_MENU':
				return { action: 'closeMenu' };
			case 'OPEN_MENU':
				return { action: 'openMenu' };
			case 'UPDATE_NAME':
				return { userName: action.userName };
			default:
				return state;
		}
	};

	const store = configureStore({ reducer });

	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<Menu />
				<NavigationContainer>
					<AppNavigator />
				</NavigationContainer>
			</ThemeProvider>
		</Provider>
	);
};

export default App;
