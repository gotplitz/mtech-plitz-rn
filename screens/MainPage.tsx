import React from "react";
import { DefaultTheme, useTheme } from "styled-components/native";
import { ScrollView, SafeAreaView } from "react-native";
// import Ionicons from "@expo/vector-icons/Ionicons";

// Styles
import {
  Avatar,
  Container,
  Subtitle,
  Title,
  TitleBar,
  WelcomeName,
} from "@styles/MainPageStyles";

// Components
import Card from "@components/Card";
import { NotificationsIcon } from "@components/Icons";
import Logo from "@components/Logo";

// TS
interface ThemesTypes extends DefaultTheme {
  secondaryColor?: string;
}

const MainPage = () => {
  const theme: ThemesTypes = useTheme();

  return (
    <Container theme={theme}>
      <SafeAreaView>
        <ScrollView>
          <TitleBar>
            <Avatar source={require("@assets/Avatar.jpg")} />
            <Title>Welcome back,</Title>
            <WelcomeName>Norman</WelcomeName>
            <NotificationsIcon
              color={theme.secondaryColor}
              style={{ position: "absolute", right: 20, top: 5 }}
            ></NotificationsIcon>
          </TitleBar>
          <ScrollView
            horizontal={true}
            style={{ padding: 20, paddingLeft: 12, paddingTop: 30 }}
          >
            <Logo image={require("@assets/logo-framerx.png")} text="Framer X" />
            <Logo image={require("@assets/logo-figma.png")} text="Figma" />
          </ScrollView>
          <Subtitle>Continue Learning</Subtitle>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ paddingBottom: 30 }}
          >
            <Card
              title="TRB Going Mobile"
              image={require("@assets/background2.jpg")}
              logo={require("@assets/logo-react.png")}
              caption="Created with React Native"
              subtitle="TRB Team"
            />
            <Card
              title="TRB Going Mobile"
              image={require("@assets/background2.jpg")}
              logo={require("@assets/logo-react.png")}
              caption="Created with React Native"
              subtitle="TRB Team"
            />
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
};

export default MainPage;
