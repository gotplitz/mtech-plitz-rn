import React from "react";
import { ImageSourcePropType } from "react-native";

// Styles
import { ImageLogo, LogoContainer, LogoName } from "@styles/MainPageStyles";

type LogoProps = {
  image: ImageSourcePropType;
  text: string;
};

const Logo = (props: LogoProps) => {
  return (
    <LogoContainer>
      <ImageLogo source={props.image} resizeMode="contain" />
      <LogoName>{props.text}</LogoName>
    </LogoContainer>
  );
};

export default Logo;
