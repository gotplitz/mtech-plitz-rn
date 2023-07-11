import 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

// GraphQL Connection
import { client } from '@libs/GraphClient';
import { ApolloProvider } from '@apollo/client';

// Screens
import Menu from '@screens/Menu';
import AppNavigator from '@navigator/AppNavigator';
import store from '@myReduxConf/store';

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
		<ApolloProvider client={client}>
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<Menu />
					<NavigationContainer>
						<AppNavigator />
					</NavigationContainer>
				</ThemeProvider>
			</Provider>
		</ApolloProvider>
	);
};

export default App;
