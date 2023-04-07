import styled from 'styled-components/native';

// Sytles
import {
	Caption,
	CardContainer,
	CardSubtitle,
	Content,
	Cover,
	Image,
	Logo,
	TitleCard,
	Wrapper,
} from '@styles/MainPageStyles';

interface CardsProps {}

const Card = (props: CardsProps) => {
	return (
		<CardContainer>
			<Cover>
				<Image source={require('../assets/background2.jpg')} />
				<TitleCard>Styled Components</TitleCard>
			</Cover>
			<Content>
				<Logo source={require('../assets/logo-react.png')} />
				<Wrapper>
					<Caption>React Native</Caption>
					<CardSubtitle>5 of 12 sections</CardSubtitle>
				</Wrapper>
			</Content>
		</CardContainer>
	);
};

export default Card;
