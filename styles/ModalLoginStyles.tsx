import { Animated } from 'react-native';
import styled from 'styled-components/native';

interface ThemeProps {
	theme: {
		whiteBg: string;
		primaryColor: string;
		secondaryColor: string;
		accentColor: string;
	};
}

export const LoginContainer = styled.View`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.75);
	justify-content: center;
	align-items: center;
`;

export const AnimatedLoginContainer =
	Animated.createAnimatedComponent(LoginContainer);

export const Modal = styled.View`
	width: 335px;
	height: 370px;
	background: #fff;
	border-radius: 20px;
	box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
	align-items: center;
`;

export const AnimatedModal = Animated.createAnimatedComponent(Modal);

export const Logo = styled.Image`
	width: 44px;
	height: 44px;
	margin-top: 50px;
	border-radius: 22px;
`;

export const TextIntro = styled.Text`
	margin-top: 20px;
	font-size: 13px;
	font-weight: 600;
	text-transform: uppercase;
	width: 160px;
	text-align: center;
	color: ${(props: ThemeProps) => props.theme.accentColor};
`;

export const TextInput = styled.TextInput`
	border: 1px solid ${(props: ThemeProps) => props.theme.accentColor};
	width: 295px;
	height: 44px;
	border-radius: 10px;
	font-size: 17px;
	color: ${(props: ThemeProps) => props.theme.primaryColor};
	margin-top: 20px;
	padding-left: 44px;
`;

export const SubmitButton = styled.View`
	background: ${(props: ThemeProps) => props.theme.secondaryColor};
	width: 295px;
	height: 50px;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	margin-top: 20px;
	box-shadow: 0 10px 20px ${(props: ThemeProps) => props.theme.secondaryColor};
`;

export const ButtonText = styled.Text`
	color: #fff;
	font-weight: 600;
	font-size: 20px;
	text-transform: uppercase;
`;

export const IconEmail = styled.Image`
	width: 24px;
	height: 24px;
	position: absolute;
	top: 175px;
	left: 31px;
`;

export const IconLock = styled.Image`
	width: 18px;
	height: 24px;
	position: absolute;
	top: 239px;
	left: 35px;
`;
