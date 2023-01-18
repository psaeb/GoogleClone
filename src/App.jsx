import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NotDone from "./pages/NotDone";
import Results from "./pages/Results";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#0052cc",
      },
      secondary: {
        main: "#edf2ff",
      },
      customGrey: {
        main: "#000",
      },
      customBlack: {
        main: "#000",
        contrastText: "#fff",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Results />} />
            <Route path="*" element={<NotDone />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
