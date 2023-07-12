import RenderHTML from 'react-native-render-html';

// Sytles
import {
	Caption,
	CardContainer,
	CardSubtitle,
	Content,
	Cover,
	Image,
	Logo,
	Overlay,
	TitleCard,
	Wrapper,
} from '@styles/MainPageStyles';
import { ImageSourcePropType } from 'react-native/types';

// TS
interface CardsProps {
	image: ImageSourcePropType;
	title: string;
	logo: ImageSourcePropType;
	caption: string;
	subtitle: {
		name: string;
		uri: string;
	}[];
}

const Card = (props: CardsProps) => {
	const tagsStyles = {
		p: {
			fontSize: 10,
			maxWidth: `90%`,
		},
	};

	return (
		<CardContainer style={{ elevation: 10 }}>
			<Cover>
				<Image source={props.image} />
				<TitleCard>{props.title}</TitleCard>
				<Overlay />
			</Cover>
			<Content>
				<Logo source={props.logo} />
				<Wrapper>
					<RenderHTML
						contentWidth={150}
						source={{ html: props.caption }}
						tagsStyles={tagsStyles}
					/>
					<CardSubtitle>{props.subtitle[0].name.toUpperCase()}</CardSubtitle>
				</Wrapper>
			</Content>
		</CardContainer>
	);
};

export default Card;
