import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "../Components/Pages/Home/Home"
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"
import Plans from "../Components/Pages/Plans/Plans"
import Courses from "../Components/Pages/Courses/Courses"

const LayoutRoutes = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Plans />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default LayoutRoutes
