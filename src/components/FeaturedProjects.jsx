import { Box, Flex, Text } from '@chakra-ui/react'

function FeaturedProjects() {
  const projects = [
    'Circuit Board Design',
    'Power Plant Infrastructure',
    'Industrial Control Systems',
    'Control Panel Installation',
    'Solar Energy Systems',
    'Power Distribution Network'
  ]

  return (
    <Box id="work" py={20} px={16} bg="gray.900" position="relative" overflow="hidden">
      {/* Floating Green Rectangle */}
      <Box
        position="absolute"
        top="5%"
        right="5%"
        w="50px"
        h="30px"
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
            Featured Projects
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

        {/* Projects Grid */}
        <Flex gap={6} flexWrap="wrap" justify="center">
          {projects.map((project) => (
            <Box
              key={project}
              flex="1"
              minW="280px"
              maxW="380px"
              bg="gray.800"
              borderRadius="lg"
              border="1px solid"
              borderColor="gray.700"
              overflow="hidden"
              transition="all 0.3s"
              _hover={{
                borderColor: '#00CEF4',
                transform: 'translateY(-5px)',
                boxShadow: '0 10px 30px rgba(0, 206, 244, 0.3)'
              }}
            >
              <Box h="200px" bg="gray.700" display="flex" alignItems="center" justifyContent="center">
                <Text color="gray.500" fontSize="sm">Image Placeholder</Text>
              </Box>
              <Text p={4} fontSize="xl" fontWeight="semibold" color="white">
                {project}
              </Text>
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  )
}

export default FeaturedProjects
