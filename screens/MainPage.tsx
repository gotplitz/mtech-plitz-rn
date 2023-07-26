import React, { useEffect, useState } from 'react';
import { DefaultTheme, useTheme } from 'styled-components/native';
import {
	ScrollView,
	SafeAreaView,
	TouchableOpacity,
	Animated,
	Easing,
	StatusBar,
	ImageSourcePropType,
	Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// GraphQL Stuff
import { useQuery } from '@apollo/client';
import { getBlogHub } from '@libs/graphQL/getBlogContent';

// Redux stuff
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo, openMenu } from '@myReduxConf/actions/globalActions';

// Styles
import {
	AnimatedContainer,
	CoursesContainer,
	LoaderContainer,
	LoaderText,
	RootView,
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
import Avatar from '@components/MainLayout/Avatar';

// TS
import { AppDispatch, RootState } from '@myReduxConf/store';
import ModalLogin from '@components/ModalLogin';

interface ThemesTypes extends DefaultTheme {
	secondaryColor?: string;
}

export interface CardTypes {
	title: string;
	excerpt: string;
	featuredImage: {
		node: {
			altText: string;
			mediaDetails: {
				width: number;
				height: number;
			};
			mediaItemUrl: ImageSourcePropType;
		};
	};
	uri: string;
	date: string;
	categories: {
		nodes: {
			name: string;
			uri: string;
		}[];
	};
}

const MainPage = () => {
	const [scale] = useState(new Animated.Value(1));
	const [opacity] = useState(new Animated.Value(1));
	const [borderTopLeft] = useState(new Animated.Value(0));
	const [borderTopRight] = useState(new Animated.Value(0));

	// Queries - GraphQL
	const { loading, data } = useQuery(getBlogHub);

	// Sytling connector
	const theme: ThemesTypes = useTheme();

	// Redux dispatcher to open the menu
	const { menuToggler, userInfo } = useSelector(
		(state: RootState) => state.globalReducer
	);

	const dispatch: AppDispatch = useDispatch();

	useEffect(() => {
		dispatch(getUserInfo());
	}, []);

	const toggleMenu = () => {
		if (menuToggler === 'openMenu') {
			Animated.timing(scale, {
				toValue: 0.9,
				duration: 300,
				easing: Easing.ease,
				useNativeDriver: false,
			}).start();
			Animated.spring(opacity, {
				toValue: 0.5,
				useNativeDriver: false,
			}).start();

			Animated.timing(borderTopLeft, {
				toValue: 20,
				duration: 200,
				easing: Easing.ease,
				useNativeDriver: false,
			}).start();
			Animated.timing(borderTopRight, {
				toValue: 20,
				duration: 200,
				easing: Easing.ease,
				useNativeDriver: false,
			}).start();

			StatusBar.setBarStyle('light-content', true);

			if (Platform.OS === 'android') {
				StatusBar.setBarStyle('dark-content', true);
			}
		}

		if (menuToggler === 'closeMenu') {
			Animated.timing(scale, {
				toValue: 1,
				duration: 300,
				easing: Easing.ease,
				useNativeDriver: false,
			}).start();
			Animated.spring(opacity, {
				toValue: 1,
				useNativeDriver: false,
			}).start();

			Animated.timing(borderTopLeft, {
				toValue: 0,
				duration: 200,
				easing: Easing.ease,
				useNativeDriver: false,
			}).start();
			Animated.timing(borderTopRight, {
				toValue: 0,
				duration: 200,
				easing: Easing.ease,
				useNativeDriver: false,
			}).start();

			StatusBar.setBarStyle('dark-content', true);

			if (Platform.OS === 'android') {
				StatusBar.setBarStyle('light-content', true);
			}
		}
	};

	useEffect(() => {
		StatusBar.setBarStyle('dark-content', true);
		if (Platform.OS === 'android') {
			StatusBar.setBarStyle('light-content', true);
		}
		toggleMenu();
	}, [dispatch, menuToggler]);

	const navigation: any = useNavigation();

	return (
		<RootView>
			<AnimatedContainer
				style={{
					transform: [{ scale }],
					opacity: opacity,
					borderTopLeftRadius: borderTopLeft,
					borderTopRightRadius: borderTopRight,
				}}
				theme={theme}
			>
				<StatusBar />
				<SafeAreaView>
					<ScrollView>
						<TitleBar>
							<TouchableOpacity
								onPress={() => {
									dispatch(openMenu());
								}}
								style={{ position: 'absolute', top: 0, left: 0 }}
							>
								<Avatar />
							</TouchableOpacity>
							<Title>Welcome back,</Title>
							<WelcomeName>{userInfo.fullname}</WelcomeName>
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
							style={{ paddingBottom: 30, paddingLeft: 10 }}
						>
							{loading ? (
								<LoaderContainer>
									<LoaderText>Loading...</LoaderText>
								</LoaderContainer>
							) : (
								data?.posts?.nodes?.map((card: CardTypes, index: number) => (
									<TouchableOpacity
										key={index}
										onPress={() => {
											navigation.navigate('Section Screen', {
												name: card.title,
												section: {
													...card,
													logo: 'https://www.americanstandardair.com/favicons/favicon-128x128.ico',
												},
											});
										}}
									>
										<Card
											title={card.title}
											image={{ uri: `${card.featuredImage.node.mediaItemUrl}` }}
											logo={{
												uri: 'https://www.americanstandardair.com/favicons/favicon-128x128.ico',
											}}
											caption={card.excerpt}
											subtitle={card.categories.nodes}
										/>
									</TouchableOpacity>
								))
							)}

							<ScrHorSpacer />
						</ScrollView>
						<Subtitle>Popular Courses</Subtitle>
						<CoursesContainer>
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
						</CoursesContainer>
					</ScrollView>
				</SafeAreaView>
			</AnimatedContainer>
			<ModalLogin />
		</RootView>
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
