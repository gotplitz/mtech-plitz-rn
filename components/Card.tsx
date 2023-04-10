import styled from "styled-components/native";

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
} from "@styles/MainPageStyles";
import { ImageSourcePropType } from "react-native/types";

interface CardsProps {
  image: ImageSourcePropType;
  title: string;
  logo: ImageSourcePropType;
  caption: string;
  subtitle: string;
}

const Card = (props: CardsProps) => {
  return (
    <CardContainer>
      <Cover>
        <Image source={props.image} />
        <TitleCard>{props.title}</TitleCard>
      </Cover>
      <Content>
        <Logo source={props.logo} />
        <Wrapper>
          <Caption>{props.caption}</Caption>
          <CardSubtitle>{props.subtitle}</CardSubtitle>
        </Wrapper>
      </Content>
    </CardContainer>
  );
};

export default Card;
