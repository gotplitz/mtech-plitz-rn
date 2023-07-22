import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Animated, PanResponder, Text } from 'react-native';
import { useSelector } from 'react-redux';

// Static Images
import imagePro01 from '@assets/background5.jpg';
import imagePro02 from '@assets/background6.jpg';
import imagePro03 from '@assets/background7.jpg';

// Styling
import { AnimatedMask, ProjectsContainer } from '@styles/ProjectsStyles';

// Components
import Project from '@components/Project';
import { RootState } from '@myReduxConf/store';

const nextIndex = (myIndex: number) => {
	const comparison = projects.length - 1;
	const nextIndex = myIndex + 1;

	if (nextIndex > comparison) {
		return 0;
	}

	return nextIndex;
};

const ProjectsScreen = () => {
	const pan = useRef(new Animated.ValueXY()).current;

	// Other Cards
	const [scale2nd] = useState(new Animated.Value(0.9));
	const [translateY2nd] = useState(new Animated.Value(44));
	const [scale3rd] = useState(new Animated.Value(0.8));
	const [translateY3rd] = useState(new Animated.Value(-50));
	const [maskOpacity] = useState(new Animated.Value(0));
	const [index, setIndex] = useState(0);

	// Declare the state for panResponder, so we can update it when the cards are new
	const [panResponder, setPanResponder] = useState(null);

	const { toggleCard } = useSelector(
		(state: RootState) => state.projectsReducer
	);

	useEffect(() => {
		setPanResponder({
			onMoveShouldSetPanResponder: (
				e: any,
				gestureState: { dx: number; dy: number }
			) => {
				if (gestureState.dx === 0 && gestureState.dy === 0) {
					return false;
				} else {
					if (toggleCard) {
						return false;
					} else {
						return true;
					}
				}
			},

			onPanResponderGrant: () => {
				Animated.spring(scale2nd, {
					toValue: 1,
					useNativeDriver: false,
				}).start();
				Animated.spring(translateY2nd, {
					toValue: 0,
					useNativeDriver: false,
				}).start();

				Animated.spring(scale3rd, {
					toValue: 0.9,
					useNativeDriver: false,
				}).start();
				Animated.spring(translateY3rd, {
					toValue: 44,
					useNativeDriver: false,
				}).start();

				Animated.timing(maskOpacity, {
					toValue: 1,
					useNativeDriver: false,
				}).start();
			},

			onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
				useNativeDriver: false,
			}),

			onPanResponderRelease: (e: any, gesture: { dy: number }) => {
				const currentY = gesture.dy;

				Animated.timing(maskOpacity, {
					toValue: 0,
					useNativeDriver: false,
				}).start();

				if (currentY > 200) {
					Animated.timing(pan, {
						toValue: { x: 0, y: 1000 },
						useNativeDriver: false,
					}).start(() => {
						pan.setValue({ x: 0, y: 0 });

						scale2nd.setValue(0.9);
						translateY2nd.setValue(44);
						scale3rd.setValue(0.8);
						translateY3rd.setValue(-50);

						setIndex(nextIndex(index));
					});
				} else {
					Animated.spring(pan, {
						toValue: { x: 0, y: 0 },
						useNativeDriver: false,
					}).start();

					Animated.spring(scale2nd, {
						toValue: 0.9,
						useNativeDriver: false,
					}).start();
					Animated.spring(translateY2nd, {
						toValue: 44,
						useNativeDriver: false,
					}).start();

					Animated.spring(scale3rd, {
						toValue: 0.8,
						useNativeDriver: false,
					}).start();
					Animated.spring(translateY3rd, {
						toValue: -50,
						useNativeDriver: false,
					}).start();
				}
			},
		});
	}, [index]);

	return (
		<ProjectsContainer>
			<AnimatedMask style={{ opacity: maskOpacity }} />
			<Animated.View
				style={{
					transform: [{ translateX: pan.x }, { translateY: pan.y }],
					zIndex: 3,
				}}
				{...PanResponder.create(panResponder).panHandlers}
			>
				<Project
					canOpen={true}
					title={projects[index].title}
					image={projects[index].image}
					author={projects[index].author}
					intro={projects[index].intro}
				/>
			</Animated.View>
			<Animated.View
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					zIndex: 2,
					width: '100%',
					height: '100%',
					justifyContent: 'center',
					alignItems: 'center',
					transform: [{ scale: scale2nd }, { translateY: translateY2nd }],
				}}
			>
				<Project
					canOpen={false}
					title={projects[nextIndex(index)].title}
					image={projects[nextIndex(index)].image}
					author={projects[nextIndex(index)].author}
					intro={projects[nextIndex(index)].intro}
				/>
			</Animated.View>
			<Animated.View
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					zIndex: 1,
					width: '100%',
					height: '100%',
					justifyContent: 'center',
					alignItems: 'center',
					transform: [{ scale: scale3rd }, { translateY: translateY3rd }],
				}}
			>
				<Project
					canOpen={false}
					title={projects[nextIndex(index + 1)].title}
					image={projects[nextIndex(index + 1)].image}
					author={projects[nextIndex(index + 1)].author}
					intro={projects[nextIndex(index + 1)].intro}
				/>
			</Animated.View>
		</ProjectsContainer>
	);
};

export default ProjectsScreen;

const projects = [
	{
		title: 'Magenta Tech Demo',
		image: imagePro01,
		author: 'Norm Plitz',
		intro:
			'I have been working on this project to create an app using React Native from a course and trying to use the most current versions for latest practices. I have been working on this project to create an app using React Native from a course and trying to use the most current versions for latest practices.',
	},
	{
		title: 'The DM App - Ananoumous Chat',
		image: imagePro02,
		author: 'Norm Plitz',
		intro:
			'Design+Code was the first resource I used when breaking into software. I went from knowing nothing about design or code to building a production ready app from scratch. ',
	},
	{
		title: 'Nikhiljay',
		image: imagePro03,
		author: 'Norm Plitz',
		intro:
			"Recently finished the React course by @Mengto, and I 10/10 would recommend. I already rewrote my personal website in @reactjs and I'm very excited with it.",
	},
];
