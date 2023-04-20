import { Animated } from 'react-native';
import styled from 'styled-components/native';

interface ThemeProps {
	theme: {
		whiteBg: string;
		primaryColor: string;
		accentColor: string;
	};
}

export const Container = styled.View`
	position: absolute;
	background: white;
	width: 100%;
	height: 100%;
	z-index: 100;
	border-radius: 25px;
	overflow: hidden;
`;

export const AnimatedContainer = Animated.createAnimatedComponent(Container);

export const Cover = styled.View`
	height: 200px;
	background: transparent;
	justify-content: center;
	align-items: center;
`;

export const Content = styled.View`
	padding: 50px;
	background-color: ${(props: ThemeProps) => props.theme.whiteBg};
`;

export const CloseView = styled.View`
	width: 44px;
	height: 44px;
	border-radius: 22px;
	justify-content: center;
	align-items: center;
	background-color: white;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`;

export const Image = styled.Image`
	position: absolute;
	width: 100%;
	height: 100%;
`;

export const Title = styled.Text`
	color: white;
	font-size: 24px;
	font-weight: 600;
	margin-top: 30px;
`;

export const Subtitle = styled.Text`
	color: rgba(255, 255, 255, 0.5);
	font-size: 13px;
	margin-top: 8px;
`;

// Menu Items Styling
export const MenuItemContainer = styled.View`
	flex-direction: row;
	margin: 15px 0;
`;

export const IconView = styled.View`
	width: 32px;
	height: 32px;
	justify-content: center;
	align-items: center;
`;

export const MenuItemContent = styled.View`
	padding-left: 20px;
`;

export const ItemTitle = styled.Text`
	color: ${(props: ThemeProps) => props.theme.primaryColor};
	font-size: 24px;
	font-weight: 600;
`;

export const ItemText = styled.Text`
	color: ${(props: ThemeProps) => props.theme.primaryColor};
	font-weight: 600;
	opacity: 0.6;
	margin-top: 5px;
`;
