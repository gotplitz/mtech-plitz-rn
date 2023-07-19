import React, { useEffect } from 'react';
import { DefaultTheme, useTheme } from 'styled-components';
import moment from 'moment';
import { Ionicons } from '@expo/vector-icons';
import {
	ImageSourcePropType,
	TouchableOpacity,
	StatusBar,
	ScrollView,
	Platform,
} from 'react-native';
// import WebView from 'react-native-webview';

// Styling
import {
	Caption,
	CloseView,
	Cover,
	Image,
	Logo,
	SectionContainer,
	Subtitle,
	Title,
	Wrapper,
	Overlay,
	Content,
	LoadingText,
} from '@styles/SectionStyles';

// TypeScript
import { useQuery } from '@apollo/client';
import { getSinglePost } from '@libs/graphQL/getBlogContent';
import RenderHTML from 'react-native-render-html';

interface ThemeTypes extends DefaultTheme {
	primaryColor?: string;
}
interface SectionScreenProps {
	route: {
		params: {
			section: {
				title: string;
				date: string;
				uri: string;
				featuredImage: {
					node: {
						mediaItemUrl: ImageSourcePropType;
					};
				};
				categories: {
					nodes: {
						name: string;
					}[];
				};
				caption: string;
				logo: ImageSourcePropType;
			};
		};
	};
	navigation: {
		goBack: () => void;
	};
}

const SectionScreen = (props: SectionScreenProps) => {
	const { route, navigation } = props;
	const section = route.params.section;
	const theme: ThemeTypes = useTheme();

	const postDate = moment(section.date).format('MM / DD / YYYY');

	// const myRef = useRef(null);

	const { loading, data } = useQuery(getSinglePost, {
		variables: { id: section.uri },
	});

	const closeScreen = () => {
		navigation.goBack();
	};

	useEffect(() => {
		StatusBar.setBarStyle('light-content', true);

		return () => {
			StatusBar.setBarStyle('dark-content', true);
			if (Platform.OS === 'android') {
				StatusBar.setBarStyle('light-content', true);
			}
		};
	}, []);

	return (
		<ScrollView>
			<SectionContainer>
				<StatusBar />
				<Cover>
					<Image
						source={{ uri: `${section.featuredImage.node.mediaItemUrl}` }}
					/>
					<Wrapper>
						<Logo source={{ uri: `${section.logo}` }} />
						<Subtitle>{section.categories.nodes[0].name}</Subtitle>
					</Wrapper>
					<Title>{section.title}</Title>
					<Caption>{postDate}</Caption>
					<Overlay />
				</Cover>
				<TouchableOpacity
					onPress={closeScreen}
					style={{ position: 'absolute', top: 65, right: 30, zIndex: 20 }}
				>
					<CloseView>
						<Ionicons
							name='ios-close'
							size={24}
							color={theme.primaryColor}
						/>
					</CloseView>
				</TouchableOpacity>
				<Content>
					{loading ? (
						<LoadingText>Loading Content...</LoadingText>
					) : (
						// <WebView
						// 	originWhitelist={['*']}
						// 	source={{ html: data?.post?.content + htmlStyles }}
						// 	ref={myRef}
						// 	scalesPageToFit={false}
						// 	onNavigationStateChange={(event) => {
						// 		if (event.url !== 'about:blank') {
						// 			myRef.current.stopLoading();
						// 			Linking.openURL(event.url);
						// 		}
						// 	}}
						// />
						<RenderHTML
							contentWidth={150}
							source={{ html: extraHtml + data?.post?.content }}
							tagsStyles={htmlStyles}
						/>
					)}
				</Content>
			</SectionContainer>
		</ScrollView>
	);
};

export default SectionScreen;

const htmlStyles = {
	p: {
		fontFamily: '-apple-system, Roboto',
		fontSize: '1.2rem',
	},
};

const extraHtml = `
  <head>
  <base href="https://americanstandardair.com"></base>
  </head>
`;
