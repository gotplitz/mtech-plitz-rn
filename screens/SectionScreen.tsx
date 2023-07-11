import React, { useEffect } from 'react';
import { DefaultTheme, useTheme } from 'styled-components';
import moment from 'moment';
import { Ionicons } from '@expo/vector-icons';

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
} from '@styles/SectionStyles';

// TypeScript
import { ImageSourcePropType, TouchableOpacity, StatusBar } from 'react-native';

interface ThemeTypes extends DefaultTheme {
	primaryColor?: string;
}
interface SectionScreenProps {
	route: {
		params: {
			section: {
				title: string;
				date: string;
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

	const closeScreen = () => {
		navigation.goBack();
	};

	useEffect(() => {
		StatusBar.setBarStyle('light-content', true);

		return () => {
			StatusBar.setBarStyle('dark-content', true);
		};
	}, []);

	return (
		<SectionContainer>
			<StatusBar hidden />
			<Cover>
				<Image source={{ uri: `${section.featuredImage.node.mediaItemUrl}` }} />
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
				style={{ position: 'absolute', top: 15, right: 30 }}
			>
				<CloseView>
					<Ionicons
						name='ios-close'
						size={24}
						color={theme.primaryColor}
					/>
				</CloseView>
			</TouchableOpacity>
		</SectionContainer>
	);
};

export default SectionScreen;
