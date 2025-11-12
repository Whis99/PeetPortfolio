import { Box } from '@chakra-ui/react'
import { Routes, Route, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Vision from './pages/Vision'
import SkillsPage from './pages/SkillsPage'
import Work from './pages/Work'
import ResumePage from './pages/ResumePage'
import Contact from './pages/Contact'

function Layout() {
  return (
    <Box minH="100vh" bg="gray.900" color="gray.100">
      <Navbar />
      <Box as="main">
        <Outlet />
      </Box>
      <Footer />
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes rotate {
          0% {
            transform: rotate(45deg);
          }
          100% {
            transform: rotate(405deg);
          }
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 0.2;
            transform: translateY(-50%) scale(1);
          }
          50% {
            opacity: 0.4;
            transform: translateY(-50%) scale(1.1);
          }
        }
        @keyframes shimmer {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }
      `}</style>
    </Box>
  )
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/work" element={<Work />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
