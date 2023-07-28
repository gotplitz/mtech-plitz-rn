import LottieView from 'lottie-react-native';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components/native';
import { Animated, Dimensions } from 'react-native';

// Assets
import LoadingAnimation from '@assets/animations/animation_lkk6h10u.json';

type LoadingProps = {
	isActive: boolean;
};

const Loading = (props: LoadingProps) => {
	const animation = useRef(null);

	const screenHeight = Dimensions.get('window').height;

	const [top] = useState(new Animated.Value(0));
	const [opacity] = useState(new Animated.Value(0));

	useEffect(() => {
		if (props.isActive) {
			Animated.timing(top, {
				toValue: 0,
				duration: 0,
				useNativeDriver: false,
			}).start();
			Animated.timing(opacity, { toValue: 1, useNativeDriver: false }).start();

			animation.current.play();
		} else {
			Animated.timing(top, {
				toValue: screenHeight,
				duration: 0,
				useNativeDriver: false,
			}).start();
			Animated.timing(opacity, { toValue: 0, useNativeDriver: false }).start();
		}
	}, [props.isActive]);

	return (
		<AnimatedContainer style={{ top, opacity }}>
			<LottieView
				source={LoadingAnimation}
				autoPlay={false}
				loop
				ref={animation}
				style={{
					width: '100%',
					height: '100%',
				}}
			/>
		</AnimatedContainer>
	);
};

export default Loading;

const Container = styled.View`
	width: 100%;
	height: 100%;
	background-color: rgba(255, 255, 255, 0.9);
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 0;
	left: 0;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);
