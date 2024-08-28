import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import Absences from "./Pages/Absences";
import Contact from "./Pages/Contact";
import ErrorPage from "./Pages/ErrorPage";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  // Define the theme for styled-components
  const theme = {
    colors: {
      bg: "#fff", // Background color for the theme
    },
    media: {
      mobile: "786px", // Mobile breakpoint for media queries
      tab: "998px", // Tablet breakpoint for media queries
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle /> {/* Global styles applied to the entire app */}
        <Header /> {/* Header component rendered on every page */}
        <Routes>
          {/* Define routes and corresponding components */}
          <Route path="/" element={<Home />} /> {/* Home page route */}
          <Route path="/absences" element={<Absences />} />{" "}
          {/* Absences page route */}
          <Route path="/contact" element={<Contact />} />{" "}
          {/* Contact page route */}
          <Route path="*" element={<ErrorPage />} />{" "}
          {/* Catch-all route for 404 errors */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
