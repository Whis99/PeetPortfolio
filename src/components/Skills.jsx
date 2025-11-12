import { Box, Flex, Text } from '@chakra-ui/react'

function Skills() {
  const skills = [
    'Amazon Connect',
    'Artificial Intelligence',
    'Call Center Administration',
    'Robotic',
    'AWS Lambda',
    'Solution Architecture',
    'Information Technology Infrastructure',
    'AWS',
    'Teaching',
    'Problem Solving',
    'Team Leadership',
    'Business Intelligence',
    'Databases',
    'Physical Computing',
    'Microcontrollers'
  ]

  return (
    <Box id="skills" py={{ base: 16, md: 20 }} px={{ base: 6, md: 16 }} bg="gray.900" position="relative" overflow="hidden">
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
            Skills & Expertise
          </Text>
          <Box 
            w="80px" 
            h="2px" 
            mx="auto"
            style={{
              background: 'linear-gradient(to right, #00CEF4, #B172EA)'
            }}
          />
        </Box>

        {/* Skills Grid */}
        <Flex gap={6} flexWrap="wrap" justify="center">
          {skills.map((skill) => (
            <Box
              key={skill}
              minW={{ base: '140px', sm: '180px', md: '200px' }}
              maxW="300px"
              p={6}
              bg="gray.800"
              borderRadius="lg"
              border="2px solid"
              borderColor="transparent"
              transition="all 0.3s"
              _hover={{
                borderColor: '#00CEF4',
                transform: 'translateY(-5px)',
                boxShadow: '0 10px 30px rgba(0, 206, 244, 0.3)'
              }}
            >
              <Text fontSize="lg" fontWeight="bold" color="white" textAlign="center">
                {skill}
              </Text>
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  )
}

export default Skills
