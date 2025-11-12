import { Box, Button, Icon, Text } from '@chakra-ui/react'
import resumePdf from '../assets/Resume.pdf'

function Resume() {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = resumePdf
    link.download = 'Resume_Frank_Peter-Lee_Edouard.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  return (
    <Box id="resume" py={{ base: 16, md: 20 }} px={{ base: 6, md: 16 }} bg="gray.900" position="relative" overflow="hidden">
      {/* Floating Green Diamond */}
      <Box
        position="absolute"
        top="5%"
        right="5%"
        w="40px"
        h="40px"
        border="2px solid"
        borderColor="green.400"
        transform="rotate(45deg)"
        animation="rotate 10s linear infinite"
        zIndex={1}
      />

      {/* Purple Diagonal Line */}
      <Box
        position="absolute"
        bottom="10%"
        right="5%"
        w="60px"
        h="4px"
        bg="purple.400"
        transform="rotate(45deg)"
        zIndex={1}
      />

      <Box maxW="1400px" mx="auto" position="relative" zIndex={2}>
        {/* Section Title */}
        <Box mb={12} textAlign="center">
          <Text 
            fontSize="5xl" 
            fontWeight="bold"
            mb={2}
            style={{
              background: 'linear-gradient(to right, #00CEF4, #B172EA)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent'
            }}
          >
            Resume
          </Text>
          <Box 
            w="100px" 
            h="2px" 
            mx="auto"
            style={{
              background: 'linear-gradient(to right, #00CEF4, #B172EA)'
            }}
          />
        </Box>

        {/* Central Resume Card */}
        <Box
          maxW="600px"
          mx="auto"
          p={{ base: 8, md: 10 }}
          bg="gray.800"
          borderRadius="xl"
          position="relative"
          border="2px solid"
          borderColor="transparent"
          boxShadow="0 0 40px rgba(0, 206, 244, 0.3), 0 0 80px rgba(177, 114, 234, 0.2)"
          style={{
            backgroundImage: 'linear-gradient(gray.800, gray.800), linear-gradient(to right, #00CEF4, #B172EA)',
            backgroundOrigin: 'border-box',
            backgroundClip: 'padding-box, border-box'
          }}
        >
          {/* Decorative Circle */}
          <Box
            position="absolute"
            left="-40px"
            top="50%"
            transform="translateY(-50%)"
            w="100px"
            h="100px"
            borderRadius="full"
            border="2px solid"
            borderColor="cyan.400"
            opacity={0.2}
            animation="pulse 4s ease-in-out infinite"
          />

          {/* Download Icon Circle */}
          <Box display="flex" justifyContent="center" mb={6}>
            <Box
              w={{ base: '90px', md: '120px' }}
              h={{ base: '90px', md: '120px' }}
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
              style={{
                background: 'linear-gradient(to right, #B172EA, #00CEF4)'
              }}
            >
              <Text fontSize="60px" filter="brightness(0) invert(1)">⬇</Text>
            </Box>
          </Box>

          {/* CTA Text */}
          <Text 
            fontSize="2xl" 
            fontWeight="bold"
            textAlign="center"
            mb={6}
            style={{
              background: 'linear-gradient(to right, #00CEF4, #B172EA)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent'
            }}
          >
            Want to Know More?
          </Text>

          {/* Description Paragraph */}
          <Text fontSize="lg" color="white" textAlign="center" mb={8} lineHeight="1.8">
            Download my full resume to explore my complete professional journey, detailed work experience, education, and accomplishments.
          </Text>

          {/* Download Button */}
          <Box display="flex" justifyContent="center" mb={6}>
            <Button
              size="lg"
              px={8}
              py={6}
              borderRadius="lg"
              fontWeight="bold"
              fontSize="lg"
              style={{
                background: 'linear-gradient(to right, #48BB78, #B172EA)'
              }}
              color="white"
              leftIcon={
                <Icon viewBox="0 0 24 24" boxSize={5}>
                  <path fill="currentColor" d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"/>
                </Icon>
              }
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: '0 10px 30px rgba(177, 114, 234, 0.4)'
              }}
              transition="all 0.3s"
              onClick={handleDownload}
              w={{ base: '100%', sm: 'auto' }}
            >
              Download Resume (PDF)
            </Button>
          </Box>

          {/* Update Information */}
          <Text fontSize="sm" color="gray.400" textAlign="center">
            Last updated: October 2024
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

export default Resume

