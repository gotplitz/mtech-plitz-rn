import { Animated } from "react-native";
import styled from "styled-components/native";

interface ThemeProps {
  theme: {
    whiteBg: string;
  };
}

export const SectionContainer = styled.View`
  flex: 1;
`;

export const Cover = styled.View`
  height: 375px;
`;

export const CloseView = styled.View`
  width: 32px;
  height: 32px;
  background-color: ${(props: ThemeProps) => props.theme.whiteBg};
  border-radius: 16px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  position: absolute;
  top: 70px;
  left: 20px;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 24px;
  height: 24px;
`;

export const Subtitle = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: ${(props: ThemeProps) => props.theme.whiteBg};
  opacity: 0.8;
  margin-left: 5px;
  text-transform: uppercase;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${(props: ThemeProps) => props.theme.whiteBg};
  font-weight: bold;
  width: 170px;
  position: absolute;
  top: 120px;
  left: 20px;
`;

export const Caption = styled.Text`
  color: ${(props: ThemeProps) => props.theme.whiteBg};
  font-size: 17px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  width: 300px;
`;

export const SectionText = styled.Text`
  font-size: 20px;
`;
