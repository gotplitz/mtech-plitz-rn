import 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

// Screens
import Menu from '@screens/Menu';
import AppNavigator from '@navigator/AppNavigator';
import store from '@myReduxConfiguration/store';

// TS
export interface ThemeProps {
	whiteBg: string;
	primaryColor: string;
	secondaryColor: string;
	accentColor: string;
}

const App = () => {
	const theme: ThemeProps = {
		whiteBg: '#f0f3f5',
		primaryColor: '#3c4560',
		secondaryColor: '#4775f2',
		accentColor: '#b8bece',
	};

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
