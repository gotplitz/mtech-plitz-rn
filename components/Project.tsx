import React, { useState } from 'react';
import {
	Animated,
	Dimensions,
	ImageSourcePropType,
	StatusBar,
	TouchableOpacity,
	TouchableWithoutFeedback,
} from 'react-native';
import { DefaultTheme, useTheme } from 'styled-components';

// Static Assets
import { Ionicons } from '@expo/vector-icons';

// Styles
import {
	Cover,
	Image,
	Author,
	AnimatedContainer,
	AnimatedTitle,
	AnimatedIntro,
	AnimatedLinearGradient,
} from '@styles/ProjectsStyles';
import { CloseView } from '@styles/SectionStyles';

// Redux stuff
import { useDispatch } from 'react-redux';
import { cardClosing, cardOpening } from '@myReduxConf/actions/projectActions';

// TS
import { AppDispatch } from '@myReduxConf/store';
type ProjectProps = {
	canOpen: boolean;
	image: ImageSourcePropType;
	title: string;
	author: string;
	intro: string;
};

interface ThemeTypes extends DefaultTheme {
	primaryColor?: string;
}

const Project = (props: ProjectProps) => {
	const theme: ThemeTypes = useTheme();
	const dispatch: AppDispatch = useDispatch();

	const screenWidth = Dimensions.get('window').width;
	const screenHeight = Dimensions.get('window').height;
	const tabBarHeight = 83;

	const [cardWidth] = useState(new Animated.Value(315));
	const [cardHeight] = useState(new Animated.Value(460));
	const [titleTop] = useState(new Animated.Value(20));
	const [textHeight] = useState(new Animated.Value(100));
	const [showCloseBtn, setCloseBtn] = useState(false);

	const openCard = () => {
		if (!props.canOpen) return;

		Animated.spring(cardWidth, {
			toValue: screenWidth,
			useNativeDriver: false,
		}).start();

		Animated.spring(cardHeight, {
			toValue: screenHeight - tabBarHeight,
			useNativeDriver: false,
		}).start();

		Animated.spring(titleTop, {
			toValue: 80,
			useNativeDriver: false,
		}).start();

		Animated.spring(textHeight, {
			toValue: 1000,
			useNativeDriver: false,
		}).start();

		StatusBar.setHidden(true);
		setCloseBtn(true);
		dispatch(cardOpening);
	};

	const closeCard = () => {
		Animated.spring(cardWidth, {
			toValue: 315,
			useNativeDriver: false,
		}).start();

		Animated.spring(cardHeight, {
			toValue: 460,
			useNativeDriver: false,
		}).start();

		Animated.spring(titleTop, {
			toValue: 20,
			useNativeDriver: false,
		}).start();

		Animated.spring(textHeight, {
			toValue: 100,
			useNativeDriver: false,
		}).start();

		StatusBar.setHidden(false);
		setCloseBtn(false);
		dispatch(cardClosing);
	};

	return (
		<TouchableWithoutFeedback onPress={openCard}>
			<AnimatedContainer style={{ width: cardWidth, height: cardHeight }}>
				<Cover>
					<Image source={props.image} />
					<AnimatedTitle style={{ top: titleTop }}>{props.title}</AnimatedTitle>
					<Author>by {props.author}</Author>
				</Cover>
				<AnimatedIntro style={{ height: textHeight }}>
					{props.intro}
				</AnimatedIntro>
				<AnimatedLinearGradient
					colors={['rgba(255,255,255,0)', 'rgba(255,255,255,1)']}
					style={{
						position: 'absolute',
						top: 330,
						width: '100%',
						height: textHeight,
					}}
				/>
				{showCloseBtn && (
					<TouchableOpacity
						onPress={closeCard}
						style={{ position: 'absolute', top: 77, right: 30, zIndex: 20 }}
					>
						<CloseView>
							<Ionicons
								name='ios-close'
								size={24}
								color={theme.primaryColor}
							/>
						</CloseView>
					</TouchableOpacity>
				)}
			</AnimatedContainer>
		</TouchableWithoutFeedback>
	);
};

export default Project;
