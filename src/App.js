import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      hello
    </ThemeProvider>
  );
}

export default App;
