import React, { useEffect } from "react";
import { DefaultTheme, useTheme } from "styled-components";
import { Ionicons } from "@expo/vector-icons";

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
} from "@styles/SectionStyles";

// TypeScript
import { ImageSourcePropType, TouchableOpacity, StatusBar } from "react-native";

interface ThemeTypes extends DefaultTheme {
  primaryColor?: string;
}
interface SectionScreenProps {
  route: {
    params: {
      section: {
        title: string;
        image: ImageSourcePropType;
        subtitle: string;
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

  const closeScreen = () => {
    navigation.goBack();
  };

  useEffect(() => {
    StatusBar.setBarStyle("light-content", true);

    return () => {
      StatusBar.setBarStyle("dark-content", true);
    };
  }, []);

  return (
    <SectionContainer>
      <StatusBar hidden />
      <Cover>
        <Image source={section.image} />
        <Wrapper>
          <Logo source={section.logo} />
          <Subtitle>{section.subtitle}</Subtitle>
        </Wrapper>
        <Title>{section.title}</Title>
        <Caption>{section.caption}</Caption>
      </Cover>
      <TouchableOpacity
        onPress={closeScreen}
        style={{ position: "absolute", top: 15, right: 30 }}
      >
        <CloseView>
          <Ionicons name="ios-close" size={24} color={theme.primaryColor} />
        </CloseView>
      </TouchableOpacity>
    </SectionContainer>
  );
};

export default SectionScreen;
