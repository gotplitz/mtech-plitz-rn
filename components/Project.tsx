import React from 'react';
import { ImageSourcePropType } from 'react-native';

// Styles
import {
	Cover,
	Image,
	Title,
	Author,
	Intro,
	ProjectContainer,
} from '@styles/ProjectsStyles';

type ProjectProps = {
	image: ImageSourcePropType;
	title: string;
	author: string;
	intro: string;
};

const Project = (props: ProjectProps) => {
	return (
		<ProjectContainer>
			<Cover>
				<Image source={props.image} />
				<Title>{props.title}</Title>
				<Author>by {props.author}</Author>
			</Cover>
			<Intro>{props.intro}</Intro>
		</ProjectContainer>
	);
};

export default Project;
