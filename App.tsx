import React from 'react';
import { ThemeProvider } from 'styled-components/native';

// Screens
import MainPage from '@screens/MainPage';

// TS
interface ThemeProps {
	whiteBg: string;
	primaryColor: string;
	accentColor: string;
}

const App = () => {
	const theme: ThemeProps = {
		whiteBg: '#f0f3f5',
		primaryColor: '#3c4560',
		accentColor: '#b8bece',
	};

	return (
		<ThemeProvider theme={theme}>
			<MainPage />
		</ThemeProvider>
	);
};

export default App;
