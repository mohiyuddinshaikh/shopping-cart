import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
