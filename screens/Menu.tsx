import React, { useEffect, useState } from 'react';
import { Animated, TouchableOpacity, Dimensions } from 'react-native';

// Redux stuff
import { useDispatch, useSelector } from 'react-redux';
import { closeMenu } from '@myReduxConf/actions/globalActions';

// Styles
import {
	AnimatedContainer,
	CloseView,
	Content,
	Cover,
	Image,
	Subtitle,
	Title,
} from '@styles/MenuStyles';

// Components
import { CloseIcon } from '@components/MainLayout/Icons';
import MenuItem from '@components/MenuParts/MenuItem';

// TS
import { AppDispatch, RootState } from '@myReduxConf/store';

// Helper to get screensizes, in this case only height
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const Menu = () => {
	const [containerTop] = useState(new Animated.Value(screenHeight));

	const [currentWidth, setCurrentWidth] = useState(screenWidth);

	const { menuToggler, userInfo } = useSelector(
		(state: RootState) => state.globalReducer
	);
	const dispatch: AppDispatch = useDispatch();

	useEffect(() => {
		if (screenWidth > 500) {
			setCurrentWidth(500);
		}
	}, []);

	useEffect(() => {
		toggleMenu();
	}, [dispatch, menuToggler]);

	const onPress = () => {
		dispatch(closeMenu());
	};

	const toggleMenu = () => {
		if (menuToggler === 'openMenu' && screenWidth < 500) {
			Animated.spring(containerTop, {
				toValue: 57,
				useNativeDriver: false,
			}).start();
		}

		if (menuToggler === 'openMenu' && screenWidth > 500) {
			Animated.spring(containerTop, {
				toValue: 100,
				useNativeDriver: false,
			}).start();
		}

		if (menuToggler === 'closeMenu') {
			Animated.spring(containerTop, {
				toValue: screenHeight,
				useNativeDriver: false,
			}).start();
		}
	};

	return (
		<AnimatedContainer
			style={{ top: containerTop, width: currentWidth, alignSelf: 'center' }}
		>
			<Cover>
				<Image source={require('@assets/background2.jpg')} />
				<Title>{userInfo.fullname}</Title>
				<Subtitle>Senior Front End Developer</Subtitle>
			</Cover>
			<TouchableOpacity
				onPress={onPress}
				style={{
					position: 'absolute',
					top: 178,
					left: '50%',
					marginLeft: -22,
					zIndex: 1,
				}}
			>
				<CloseView>
					<CloseIcon
						width={44}
						color='#546bfb'
					/>
				</CloseView>
			</TouchableOpacity>
			<Content style={{ height: screenHeight }}>
				{MenuItems.map((mi, index) => (
					<MenuItem
						key={index}
						icon={mi.icon}
						title={mi.title}
						text={mi.text}
					/>
				))}
			</Content>
		</AnimatedContainer>
	);
};

export default Menu;

const MenuItems = [
	{
		icon: 'ios-settings',
		title: 'Account',
		text: 'Settings',
	},
	{
		icon: 'ios-card',
		title: 'Billing',
		text: 'Payments',
	},
	{
		icon: 'ios-compass',
		title: 'Learn React',
		text: 'Start course',
	},
	{
		icon: 'ios-exit',
		title: 'Log out',
		text: 'See you soon!',
	},
];
