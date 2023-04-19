import React, { useEffect, useState } from 'react';
import { DefaultTheme, useTheme } from 'styled-components/native';
import {
	ScrollView,
	SafeAreaView,
	TouchableOpacity,
	Animated,
} from 'react-native';

// Redux stuf
import { useDispatch, useSelector } from 'react-redux';

// Styles
import {
	AnimatedContainer,
	Avatar,
	ScrHorSpacer,
	Subtitle,
	Title,
	TitleBar,
	WelcomeName,
} from '@styles/MainPageStyles';

// Components
import Card from '@components/Card';
import { NotificationsIcon } from '@components/MainLayout/Icons';
import Logo from '@components/MainLayout/Logo';
import Course from '@components/Course';
import { InitialStateTypes } from 'App';

// TS
interface ThemesTypes extends DefaultTheme {
	secondaryColor?: string;
}

const MainPage = () => {
	const [scale] = useState(new Animated.Value(1));

	// Sytling connector
	const theme: ThemesTypes = useTheme();

	// Redux dispatcher to open the menu
	const action = useSelector<InitialStateTypes>((state) => state.action);
	const dispatch = useDispatch();

	const toggleMenu = () => {
		if (action === 'openMenu') {
			Animated.spring(scale, {
				toValue: 0.9,
				useNativeDriver: false,
			}).start();
		}

		if (action === 'closeMenu') {
			Animated.spring(scale, {
				toValue: 1,
				useNativeDriver: false,
			}).start();
		}
	};

	useEffect(() => {
		toggleMenu();
	}, [dispatch, action]);

	return (
		<AnimatedContainer
			style={{ transform: [{ scale }] }}
			theme={theme}
		>
			<SafeAreaView>
				<ScrollView>
					<TitleBar>
						<TouchableOpacity
							onPress={() => {
								dispatch({ type: 'OPEN_MENU' });
							}}
						>
							<Avatar source={require('@assets/Avatar.jpg')} />
						</TouchableOpacity>
						<Title>Welcome back,</Title>
						<WelcomeName>Norman</WelcomeName>
						<NotificationsIcon
							color={theme.secondaryColor}
							style={{ position: 'absolute', right: 20, top: 5 }}
						></NotificationsIcon>
					</TitleBar>
					<ScrollView
						horizontal={true}
						showsHorizontalScrollIndicator={false}
						style={{ padding: 20, paddingLeft: 12, paddingTop: 30 }}
					>
						{logos.map((logo, index) => (
							<Logo
								key={index}
								image={logo.image}
								text={logo.text}
							/>
						))}
						<ScrHorSpacer />
					</ScrollView>
					<Subtitle>Continue Learning</Subtitle>
					<ScrollView
						horizontal={true}
						showsHorizontalScrollIndicator={false}
						style={{ paddingBottom: 30 }}
					>
						{cards.map((card, index) => (
							<Card
								key={index}
								title={card.title}
								image={card.image}
								logo={card.logo}
								caption={card.caption}
								subtitle={card.subtitle}
							/>
						))}

						<ScrHorSpacer />
					</ScrollView>
					<Subtitle>Popular Courses</Subtitle>
					{courses.map((course, index) => (
						<Course
							key={index}
							title={course.title}
							subtitle={course.subtitle}
							caption={course.caption}
							image={course.image}
							logo={course.logo}
							author={course.author}
							avatar={course.avatar}
						/>
					))}
				</ScrollView>
			</SafeAreaView>
		</AnimatedContainer>
	);
};

export default MainPage;

// Logos Data
const logos = [
	{
		image: require('@assets/logo-framerx.png'),
		text: 'Framer X',
	},
	{
		image: require('@assets/logo-figma.png'),
		text: 'Figma',
	},
	{
		image: require('@assets/logo-studio.png'),
		text: 'Studio',
	},
	{
		image: require('@assets/logo-react.png'),
		text: 'React',
	},
	{
		image: require('@assets/logo-swift.png'),
		text: 'Swift',
	},
	{
		image: require('@assets/logo-sketch.png'),
		text: 'Sketch',
	},
];

const cards = [
	{
		title: 'React Native for Designers',
		image: require('@assets/background11.jpg'),
		subtitle: 'React Native',
		caption: '1 of 12 sections',
		logo: require('@assets/logo-react.png'),
	},
	{
		title: 'Styled Components',
		image: require('@assets/background12.jpg'),
		subtitle: 'React Native',
		caption: '2 of 12 sections',
		logo: require('@assets/logo-react.png'),
	},
	{
		title: 'Props and Icons',
		image: require('@assets/background13.jpg'),
		subtitle: 'React Native',
		caption: '3 of 12 sections',
		logo: require('@assets/logo-react.png'),
	},
	{
		title: 'Static Data and Loop',
		image: require('@assets/background14.jpg'),
		subtitle: 'React Native',
		caption: '4 of 12 sections',
		logo: require('@assets/logo-react.png'),
	},
];

const courses = [
	{
		title: 'Prototype in InVision Studio',
		subtitle: '10 sections',
		image: require('@assets/background13.jpg'),
		logo: require('@assets/logo-studio.png'),
		author: 'Norman C. Pleitez',
		avatar: require('@assets/Avatar.jpg'),
		caption: 'Design and interactive prototype',
	},
	{
		title: 'React for Designers',
		subtitle: '12 sections',
		image: require('@assets/background11.jpg'),
		logo: require('@assets/logo-react.png'),
		author: 'Norman C. Pleitez',
		avatar: require('@assets/Avatar.jpg'),
		caption: 'Learn to design and code a React site',
	},
	{
		title: 'Design and Code with Framer X',
		subtitle: '10 sections',
		image: require('@assets/background14.jpg'),
		logo: require('@assets/logo-framerx.png'),
		author: 'Norman C. Pleitez',
		avatar: require('@assets/Avatar.jpg'),
		caption: 'Create powerful design and code components for your app',
	},
	{
		title: 'Design System in Figma',
		subtitle: '10 sections',
		image: require('@assets/background6.jpg'),
		logo: require('@assets/logo-figma.png'),
		author: 'Norman C. Pleitez',
		avatar: require('@assets/Avatar.jpg'),
		caption:
			'Complete guide to designing a site using a collaborative design tool',
	},
];
