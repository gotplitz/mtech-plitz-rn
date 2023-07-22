import { Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

interface ThemeProps {
	theme: {
		whiteBg: string;
		primaryColor: string;
		accentColor: string;
	};
}

// All Projects
export const ProjectsContainer = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	background: ${(props: ThemeProps) => props.theme.whiteBg};
`;

export const Mask = styled.View`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.4);
	z-index: -3;
`;

export const AnimatedMask = Animated.createAnimatedComponent(Mask);

// Project Component in all projects
export const ProjectContainer = styled.View`
	border-radius: 14px;
	background-color: #fff;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
	position: relative;
`;

export const AnimatedContainer =
	Animated.createAnimatedComponent(ProjectContainer);

export const Cover = styled.View`
	height: 290px;
	border-top-left-radius: 14px;
	border-top-right-radius: 14px;
	overflow: hidden;
`;

export const Image = styled.Image`
	width: 100%;
	height: 290px;
`;

export const Title = styled.Text`
	color: ${(props: ThemeProps) => props.theme.whiteBg};
	position: absolute;
	left: 20px;
	font-size: 24px;
	font-weight: bold;
	width: 300px;
`;

export const AnimatedTitle = Animated.createAnimatedComponent(Title);

export const Author = styled.Text`
	position: absolute;
	bottom: 20px;
	left: 20px;
	color: rgba(255, 255, 255, 0.8);
	font-size: 15px;
	font-weight: 600;
	text-transform: uppercase;
`;

export const Intro = styled.Text`
	color: ${(props: ThemeProps) => props.theme.primaryColor};
	font-size: 17px;
	line-height: 24px;
	margin: 20px;
`;

export const AnimatedIntro = Animated.createAnimatedComponent(Intro);

export const AnimatedLinearGradient =
	Animated.createAnimatedComponent(LinearGradient);
