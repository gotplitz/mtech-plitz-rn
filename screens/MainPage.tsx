import React, { useEffect, useState } from "react";
import { DefaultTheme, useTheme } from "styled-components/native";
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  Easing,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// Redux stuf
import { useDispatch, useSelector } from "react-redux";

// Styles
import {
  AnimatedContainer,
  RootView,
  ScrHorSpacer,
  Subtitle,
  Title,
  TitleBar,
  WelcomeName,
} from "@styles/MainPageStyles";

// Components
import Card from "@components/Card";
import { NotificationsIcon } from "@components/MainLayout/Icons";
import Logo from "@components/MainLayout/Logo";
import Course from "@components/Course";
import Avatar from "@components/MainLayout/Avatar";

// TS
import { InitialStateTypes } from "App";
interface ThemesTypes extends DefaultTheme {
  secondaryColor?: string;
}

const MainPage = () => {
  const [scale] = useState(new Animated.Value(1));
  const [opacity] = useState(new Animated.Value(1));

  // Sytling connector
  const theme: ThemesTypes = useTheme();

  // Redux dispatcher to open the menu
  const { action, userName } = useSelector((state: InitialStateTypes) => ({
    action: state.action,
    userName: state.userName,
  }));

  const dispatch = useDispatch();

  const toggleMenu = () => {
    if (action === "openMenu") {
      Animated.timing(scale, {
        toValue: 0.9,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: false,
      }).start();
      Animated.spring(opacity, {
        toValue: 0.5,
        useNativeDriver: false,
      }).start();

      StatusBar.setBarStyle("light-content", true);
    }

    if (action === "closeMenu") {
      Animated.timing(scale, {
        toValue: 1,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: false,
      }).start();
      Animated.spring(opacity, {
        toValue: 1,
        useNativeDriver: false,
      }).start();

      StatusBar.setBarStyle("dark-content", true);
    }
  };

  useEffect(() => {
    StatusBar.setBarStyle("dark-content", true);
    toggleMenu();
  }, [dispatch, action]);

  const navigation: any = useNavigation();

  return (
    <RootView>
      <AnimatedContainer
        style={{ transform: [{ scale }], opacity: opacity }}
        theme={theme}
      >
        <SafeAreaView>
          <ScrollView>
            <TitleBar>
              <TouchableOpacity
                onPress={() => {
                  dispatch({ type: "OPEN_MENU" });
                }}
                style={{ position: "absolute", top: 0, left: 0 }}
              >
                <Avatar />
              </TouchableOpacity>
              <Title>Welcome back,</Title>
              <WelcomeName>{userName}</WelcomeName>
              <NotificationsIcon
                color={theme.secondaryColor}
                style={{ position: "absolute", right: 20, top: 5 }}
              ></NotificationsIcon>
            </TitleBar>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{ padding: 20, paddingLeft: 12, paddingTop: 30 }}
            >
              {logos.map((logo, index) => (
                <Logo key={index} image={logo.image} text={logo.text} />
              ))}
              <ScrHorSpacer />
            </ScrollView>
            <Subtitle>Continue Learning</Subtitle>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{ paddingBottom: 30 }}
            >
              {cards.map((card, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    navigation.navigate("Section Screen", {
                      name: card.title,
                      section: card,
                    });
                  }}
                >
                  <Card
                    title={card.title}
                    image={card.image}
                    logo={card.logo}
                    caption={card.caption}
                    subtitle={card.subtitle}
                  />
                </TouchableOpacity>
              ))}

              <ScrHorSpacer />
            </ScrollView>
            <Subtitle>Popular Courses</Subtitle>
            {courses.map((course, index) => (
              <Course
                key={index}
                title={course.title}
                subtitle={course.subtitle}
                caption={course.caption}
                image={course.image}
                logo={course.logo}
                author={course.author}
                avatar={course.avatar}
              />
            ))}
          </ScrollView>
        </SafeAreaView>
      </AnimatedContainer>
    </RootView>
  );
};

export default MainPage;

// Logos Data
const logos = [
  {
    image: require("@assets/logo-framerx.png"),
    text: "Framer X",
  },
  {
    image: require("@assets/logo-figma.png"),
    text: "Figma",
  },
  {
    image: require("@assets/logo-studio.png"),
    text: "Studio",
  },
  {
    image: require("@assets/logo-react.png"),
    text: "React",
  },
  {
    image: require("@assets/logo-swift.png"),
    text: "Swift",
  },
  {
    image: require("@assets/logo-sketch.png"),
    text: "Sketch",
  },
];

const cards = [
  {
    title: "React Native for Designers",
    image: require("@assets/background11.jpg"),
    subtitle: "React Native",
    caption: "1 of 12 sections",
    logo: require("@assets/logo-react.png"),
  },
  {
    title: "Styled Components",
    image: require("@assets/background12.jpg"),
    subtitle: "React Native",
    caption: "2 of 12 sections",
    logo: require("@assets/logo-react.png"),
  },
  {
    title: "Props and Icons",
    image: require("@assets/background13.jpg"),
    subtitle: "React Native",
    caption: "3 of 12 sections",
    logo: require("@assets/logo-react.png"),
  },
  {
    title: "Static Data and Loop",
    image: require("@assets/background14.jpg"),
    subtitle: "React Native",
    caption: "4 of 12 sections",
    logo: require("@assets/logo-react.png"),
  },
];

const courses = [
  {
    title: "Prototype in InVision Studio",
    subtitle: "10 sections",
    image: require("@assets/background13.jpg"),
    logo: require("@assets/logo-studio.png"),
    author: "Norman C. Pleitez",
    avatar: require("@assets/Avatar.jpg"),
    caption: "Design and interactive prototype",
  },
  {
    title: "React for Designers",
    subtitle: "12 sections",
    image: require("@assets/background11.jpg"),
    logo: require("@assets/logo-react.png"),
    author: "Norman C. Pleitez",
    avatar: require("@assets/Avatar.jpg"),
    caption: "Learn to design and code a React site",
  },
  {
    title: "Design and Code with Framer X",
    subtitle: "10 sections",
    image: require("@assets/background14.jpg"),
    logo: require("@assets/logo-framerx.png"),
    author: "Norman C. Pleitez",
    avatar: require("@assets/Avatar.jpg"),
    caption: "Create powerful design and code components for your app",
  },
  {
    title: "Design System in Figma",
    subtitle: "10 sections",
    image: require("@assets/background6.jpg"),
    logo: require("@assets/logo-figma.png"),
    author: "Norman C. Pleitez",
    avatar: require("@assets/Avatar.jpg"),
    caption:
      "Complete guide to designing a site using a collaborative design tool",
  },
];
