import React from 'react'
import "./App.css"
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import HomePage from './pages/HomePage/HomePage';
import ExerciseDetail from './pages/ExerciseDetail/ExerciseDetail';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Box width="400px">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="excercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App