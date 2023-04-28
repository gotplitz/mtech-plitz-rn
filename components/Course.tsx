import React from 'react';
import { ImageSourcePropType, View } from 'react-native';

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

const Course = (props: Props) => {
	return (
		<CourseContainer>
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
