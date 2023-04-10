import React from "react";
import { ThemeProvider } from "styled-components/native";

// Screens
import MainPage from "@screens/MainPage";

// TS
export interface ThemeProps {
  whiteBg: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
}

const App = () => {
  const theme: ThemeProps = {
    whiteBg: "#f0f3f5",
    primaryColor: "#3c4560",
    secondaryColor: "#4775f2",
    accentColor: "#b8bece",
  };

  return (
    <ThemeProvider theme={theme}>
      <MainPage />
    </ThemeProvider>
  );
};

export default App;
