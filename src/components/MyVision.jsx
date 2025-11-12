import { Box, Text } from '@chakra-ui/react'

function MyVision() {
  return (
    <Box id="vision" py={{ base: 16, md: 20 }} px={{ base: 6, md: 16 }} bg="gray.900" position="relative" overflow="hidden">
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
        display={{ base: 'none', md: 'block' }}
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
            My Vision
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

        {/* Vision Content */}
        <Box maxW="800px" mx="auto" textAlign="center">
          <Text fontSize="lg" color="gray.300" lineHeight="1.8">
            Committed to continuous learning and professional excellence, my goal is to establish 
            a rewarding career as a System Embedded Engineer. I am eager to contribute my skills 
            to innovative projects, collaborate with diverse teams, and grow as a leader in the 
            engineering field.
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

export default MyVision

