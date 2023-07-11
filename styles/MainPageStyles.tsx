import { Animated } from 'react-native';
import styled from 'styled-components/native';

interface ThemeProps {
	theme: {
		whiteBg: string;
		primaryColor: string;
		accentColor: string;
	};
}

export const LoaderContainer = styled.View`
	color: ${(props: ThemeProps) => props.theme.primaryColor};
	background: white;
	width: 315px;
	height: 280px;
	border-radius: 14px;
	margin-left: 20px;
	margin-top: 20px;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const LoaderText = styled.Text`
	color: #3c4560;
	font-size: 16px;
	font-weight: 600;
	text-transform: uppercase;
`;

export const ScrHorSpacer = styled.View`
	width: 30px;
	background: transparent;
`;

// Main Page
export const RootView = styled.View`
	background: black;
	flex: 1;
`;

export const Container = styled.View`
	flex: 1;
	background-color: ${(props: ThemeProps) => props.theme.whiteBg};
`;

export const AnimatedContainer = Animated.createAnimatedComponent(Container);

export const TitleBar = styled.View`
	width: 100%;
	margin-top: 50px;
	padding-left: 80px;
`;

export const AvatarImage = styled.Image`
	width: 44px;
	height: 44px;
	border-radius: 22px;
	margin-left: 20px;
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
	margin-top: 20px;
	text-transform: uppercase;
`;

// Main Page
// > Logo
export const LogoContainer = styled.View`
	flex-direction: row;
	background-color: white;
	height: 60px;
	padding: 12px 16px;
	border-radius: 10px;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
	align-items: center;
	justify-content: center;
	margin: 0 8px;
`;

export const ImageLogo = styled.Image`
	width: 36px;
	height: 36px;
`;

export const LogoName = styled.Text`
	font-size: 17px;
	font-weight: 600;
	margin-left: 8px;
`;

// Main Page
// > Card
export const CardContainer = styled.View`
	background: white;
	width: 315px;
	height: 300px;
	border-radius: 14px;
	margin-left: 20px;
	margin-top: 20px;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
	overflow: hidden;
`;

export const Cover = styled.View`
	width: 100%;
	height: 200px;
	position: relative;
`;

export const Overlay = styled.View`
	position: absolute;
	display: block;
	width: 100%;
	height: 200px;
	top: 0;
	background-color: rgba(0, 0, 0, 0.7);
	position: relative;
	z-index: 5;
`;

export const Image = styled.Image`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 0;
`;

export const TitleCard = styled.Text`
	position: absolute;
	color: white;
	font-size: 20px;
	font-weight: bold;
	margin: 20px 0 0 20px;
	width: 170px;
	z-index: 10;
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
	font-size: 10px;
	font-weight: 600;
`;

export const CardSubtitle = styled.Text`
	color: #b8bece;
	font-weight: 600;
	font-size: 12px;
	text-transform: uppercase;
	margin-top: 4px;
`;

// Main Page
// > Courses
export const CourseContainer = styled.View`
	width: 315px;
	height: 335px;
	background: white;
	margin: 10px 20px;
	border-radius: 20px;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
	overflow: hidden;
`;

export const CourseCover = styled.View`
	height: 260px;
	justify-content: flex-end;
`;

export const CourseImage = styled.Image`
	width: 100%;
	height: 100%;
	position: absolute;
`;

export const CourseLogo = styled.Image`
	width: 48px;
	height: 48px;
	position: absolute;
	top: 90px;
	left: 50%;
	margin-left: -24px;
`;

export const CourseTitle = styled.Text`
	font-size: 24px;
	color: white;
	font-weight: 700;
	margin-top: 4px;
	width: 170px;
`;

export const CourseSubtitle = styled.Text`
	font-size: 14px;
	font-weight: 500;
	color: rgba(255, 255, 255, 0.8);
	text-transform: uppercase;
`;

export const CourseContent = styled.View`
	padding-left: 62px;
	justify-content: center;
	height: 75px;
`;

export const CourseCaption = styled.Text`
	font-size: 14px;
	color: ${(props: ThemeProps) => props.theme.primaryColor};
	font-weight: 500;
`;

export const CourseAuthor = styled.Text`
	font-size: 12px;
	color: ${(props: ThemeProps) => props.theme.accentColor};
	margin-top: 4px;
	font-weight: 500;
`;
