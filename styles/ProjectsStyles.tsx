import { Animated } from 'react-native';
import styled from 'styled-components/native';

interface ThemeProps {
	theme: {
		whiteBg: string;
		primaryColor: string;
		accentColor: string;
	};
}

export const ProjectsContainer = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	background: ${(props: ThemeProps) => props.theme.whiteBg};
`;

export const ProjectContainer = styled.View`
	width: 315px;
	height: 460px;
	border-radius: 14px;
	background-color: #fff;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
`;

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
	top: 20px;
	left: 20px;
	font-size: 24px;
	font-weight: bold;
	width: 300px;
`;

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
