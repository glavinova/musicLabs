import React from 'react';
import Footer from './navigation/Footer';
import Header from './navigation/Header';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SongDetails from './components/SongDetails/SongDetails';
import { Routes, Route } from "react-router-dom";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Container maxWidth="lg">
      <Routes>
      <Route path="/" element={<Header/>} />
      <Route path="/details" element={<SongDetails/>} />
      </Routes>
    </Container>
    <Footer/>
  </ThemeProvider>
  );
}

export default App;