import styled from 'styled-components/native';

interface ThemeProps {
	theme: {
		whiteBg: string;
		primaryColor: string;
	};
}

export const SectionContainer = styled.View`
	flex: 1;
`;

export const Overlay = styled.View`
	position: absolute;
	display: block;
	width: 100%;
	height: 100%;
	top: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.7);
	z-index: 5;
`;

export const Cover = styled.View`
	height: 375px;
`;

export const CloseView = styled.View`
	width: 32px;
	height: 32px;
	background-color: ${(props: ThemeProps) => props.theme.whiteBg};
	border-radius: 16px;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
	justify-content: center;
	align-items: center;
`;

export const Image = styled.Image`
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: 0;
`;

export const Wrapper = styled.View`
	flex-direction: row;
	position: absolute;
	top: 70px;
	left: 20px;
	align-items: center;
	z-index: 10;
`;

export const Logo = styled.Image`
	width: 24px;
	height: 24px;
	z-index: 10;
`;

export const Subtitle = styled.Text`
	font-size: 14px;
	font-weight: 600;
	color: ${(props: ThemeProps) => props.theme.whiteBg};
	opacity: 0.8;
	margin-left: 5px;
	text-transform: uppercase;
	z-index: 10;
`;

export const Title = styled.Text`
	font-size: 24px;
	color: ${(props: ThemeProps) => props.theme.whiteBg};
	font-weight: bold;
	width: 200px;
	position: absolute;
	top: 120px;
	left: 20px;
	z-index: 10;
`;

export const Caption = styled.Text`
	color: ${(props: ThemeProps) => props.theme.whiteBg};
	font-size: 17px;
	position: absolute;
	bottom: 20px;
	left: 20px;
	width: 300px;
	z-index: 10;
`;

export const SectionText = styled.Text`
	font-size: 20px;
`;

export const Content = styled.View`
	display: flex;
	width: 100%;
	height: 100%;
	padding: 20px;
	background-color: #fff;
`;

export const LoadingText = styled.Text`
	margin-top: 30%;
	text-align: center;
	color: ${(props: ThemeProps) => props.theme.primaryColor};
`;
