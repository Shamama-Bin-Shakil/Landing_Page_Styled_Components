import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GlobalStyle from "./components/styles/GlobalStyled";
const App = () => {
  const theme = {
    color: {
      heading: "#1de9b6",
      color: "#1de9b6",
      text: "#455a64",
    }
  }
  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Footer />
    </ThemeProvider>
    </>
  );
};

export default App;
