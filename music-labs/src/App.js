import React from 'react';
import './App.css';
import Footer from './navigation/Footer';
import Header from './navigation/Header';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Container maxWidth="lg">
      <Header/>
    </Container>
    <Footer/>
  </ThemeProvider>
  );
}

export default App;