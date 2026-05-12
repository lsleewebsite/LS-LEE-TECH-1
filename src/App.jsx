import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import Layout from "./Layout.jsx"
import Home from "./pages/Home.jsx"
import Industries from "./pages/Industries.jsx"
import Services from "./pages/Services.jsx"
import Projects from "./pages/Projects.jsx"
import Safety from "./pages/Safety.jsx"
import Contact from "./pages/Contact.jsx"

function Wrap({ name, Page }) {
  return (
    <Layout currentPageName={name}>
      <Page />
    </Layout>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Home" replace />} />
      <Route path="/Home" element={<Wrap name="Home" Page={Home} />} />
      <Route path="/Industries" element={<Wrap name="Industries" Page={Industries} />} />
      <Route path="/Services" element={<Wrap name="Services" Page={Services} />} />
      <Route path="/Projects" element={<Wrap name="Projects" Page={Projects} />} />
      <Route path="/Safety" element={<Wrap name="Safety" Page={Safety} />} />
      <Route path="/Contact" element={<Wrap name="Contact" Page={Contact} />} />
      <Route path="*" element={<Navigate to="/Home" replace />} />
    </Routes>
  )
}
