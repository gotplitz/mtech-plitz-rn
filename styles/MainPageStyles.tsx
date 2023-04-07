import styled from 'styled-components/native';

interface ThemeProps {
	theme: {
		whiteBg: string;
		primaryColor: string;
		accentColor: string;
	};
}

// Main Page
export const Container = styled.View`
	flex: 1;
	background-color: ${(props: ThemeProps) => props.theme.whiteBg};
`;

export const TitleBar = styled.View`
	width: 100%;
	margin-top: 50px;
	padding-left: 80px;
`;

export const Avatar = styled.Image`
	width: 44px;
	height: 44px;
	background: #000000;
	border-radius: 22px;
	margin-left: 20px;
	position: absolute;
	top: 0;
	left: 0;
`;

export const Title = styled.Text`
	font-size: 16px;
	color: ${(props: ThemeProps) => props.theme.accentColor};
	font-weight: 500;
`;

export const WelcomeName = styled.Text`
	font-size: 20px;
	color: ${(props: ThemeProps) => props.theme.primaryColor};
	font-weight: bold;
`;

export const Subtitle = styled.Text`
	color: ${(props: ThemeProps) => props.theme.accentColor};
	font-weight: 600;
	font-size: 15px;
	margin-left: 20px;
	margin-top: 50px;
	text-transform: uppercase;
`;

// Main Page
// > Card
export const CardContainer = styled.View`
	background: white;
	width: 315px;
	height: 280px;
	border-radius: 14px;
	margin-left: 20px;
	margin-top: 20px;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
	overflow: hidden;
`;

export const Cover = styled.View`
	width: 100%;
	height: 200px;
`;

export const Image = styled.Image`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
`;

export const TitleCard = styled.Text`
	color: white;
	font-size: 24px;
	font-weight: bold;
	margin: 20px 0 0 20px;
	width: 170px;
`;

export const Content = styled.View`
	padding-left: 20px;
	flex-direction: row;
	align-items: center;
	height: 80px;
`;

export const Logo = styled.Image`
	width: 44px;
	height: 44px;
`;

export const Wrapper = styled.View`
	margin-left: 10px;
`;

export const Caption = styled.Text`
	color: #3c4560;
	font-size: 20px;
	font-weight: 600;
`;

export const CardSubtitle = styled.Text`
	color: #b8bece;
	font-weight: 600;
	font-size: 15px;
	text-transform: uppercase;
	margin-top: 4px;
`;
