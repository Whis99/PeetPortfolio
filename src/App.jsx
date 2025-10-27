import { Box } from '@chakra-ui/react'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import MyVision from './components/MyVision'
import Skills from './components/Skills'
import FeaturedProjects from './components/FeaturedProjects'
import Resume from './components/Resume'
import LetsCollaborate from './components/LetsCollaborate'

function App() {
  return (
    <Box minH="100vh" bg="gray.900" position="relative" overflow="hidden">
      <Hero />
      <AboutMe />
      <MyVision />
      <Skills />
      <FeaturedProjects />
      <Resume />
      <LetsCollaborate />

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

export default App
