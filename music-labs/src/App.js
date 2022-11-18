import React from 'react';
import Footer from './navigation/Footer';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SongDetails from './components/SongDetails/SongDetails';
import { Routes, Route } from "react-router-dom";
import { AppContextProvider } from './store/app-context';
import HomePage from './components/Home Page/HomePage';

const theme = createTheme();

function App() {
  return (
    <AppContextProvider>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details" element={<SongDetails />} />
        </Routes>
      </Container>
      <Footer/>
    </ThemeProvider>
  </AppContextProvider>
  );
}

export default App;