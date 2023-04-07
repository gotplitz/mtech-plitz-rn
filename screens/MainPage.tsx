import React from 'react';
import { useTheme } from 'styled-components/native';

// Styles
import {
	Avatar,
	Container,
	Subtitle,
	Title,
	TitleBar,
	WelcomeName,
} from '@styles/MainPageStyles';

// Components
import Card from '@components/Card';

const MainPage = () => {
	const theme = useTheme();

	return (
		<Container theme={theme}>
			<TitleBar>
				<Avatar source={require('@assets/Avatar.jpg')} />
				<Title>Welcome back,</Title>
				<WelcomeName>Norman</WelcomeName>
			</TitleBar>
			<Subtitle>Continue Learning</Subtitle>
			<Card />
		</Container>
	);
};

export default MainPage;
