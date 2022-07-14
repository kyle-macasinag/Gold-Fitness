import React from 'react'
import "./App.css"
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import HomePage from "./pages/HomePage";
import ExerciseDetail from "./pages/ExerciseDetail";
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <Box width="400px">
      Navbar
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="excercise/:id" element={<ExerciseDetail />} />
      </Routes>
    </Box>
  )
}

export default App