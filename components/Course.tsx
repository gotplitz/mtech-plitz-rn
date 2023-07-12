import React, { useCallback, useEffect, useState } from 'react';
import { Dimensions, ImageSourcePropType, View } from 'react-native';

// Styles
import {
	CourseAuthor,
	CourseCaption,
	CourseContainer,
	CourseContent,
	CourseCover,
	CourseImage,
	CourseLogo,
	CourseSubtitle,
	CourseTitle,
} from '@styles/MainPageStyles';
import Avatar from './MainLayout/Avatar';

// TS
type Props = {
	image: ImageSourcePropType;
	logo: ImageSourcePropType;
	title: string;
	subtitle: string;
	avatar: string;
	caption: string;
	author: string;
};

interface DimensionsTypes {
	window: {
		width: number;
	};
}

// Helper to identify current device
const screenWidth = Dimensions.get('window').width;

const Course = (props: Props) => {
	const [cardWidth, setCardWidth] = useState<number>(screenWidth - 40);

	useEffect(() => {
		if (screenWidth >= 768 && screenWidth < 1024) {
			setCardWidth((screenWidth - 60) / 2);
		}

		if (screenWidth >= 1024) {
			setCardWidth((screenWidth - 80) / 3);
		}
	}, []);

	useEffect(() => {
		Dimensions.addEventListener('change', adaptLayout);
	});

	const adaptLayout = useCallback(
		(dimensions: DimensionsTypes) => {
			const currentWidth = dimensions?.window?.width;
			let finalWidth = 0;

			if (currentWidth >= 768 && currentWidth < 1024) {
				finalWidth = (currentWidth - 60) / 2;
			}

			if (currentWidth >= 1024) {
				finalWidth = (currentWidth - 80) / 3;
			}

			setCardWidth(finalWidth);
		},
		[screenWidth]
	);

	return (
		<CourseContainer style={{ width: cardWidth }}>
			<CourseCover>
				<CourseImage source={props.image} />
				<CourseLogo
					source={props.logo}
					resizeMode='contain'
				/>
				<View style={{ margin: 20 }}>
					<CourseSubtitle>{props.subtitle}</CourseSubtitle>
					<CourseTitle>{props.title}</CourseTitle>
				</View>
			</CourseCover>
			<CourseContent>
				<Avatar
					source={props.avatar}
					style={{ width: 32, height: 32, position: 'absolute', top: 20 }}
				/>
				<CourseCaption>{props.caption}</CourseCaption>
				<CourseAuthor>Taught by {props.author}</CourseAuthor>
			</CourseContent>
		</CourseContainer>
	);
};

export default Course;
