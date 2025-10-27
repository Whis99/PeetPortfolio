import { Box, Flex, Text } from '@chakra-ui/react'

function AboutMe() {
  return (
    <Box id="about" py={20} px={16} bg="gray.900" position="relative" overflow="hidden">
      {/* Floating Green Square */}
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

      <Flex gap={16} align="flex-start" maxW="1400px" mx="auto" position="relative" zIndex={2}>
        {/* Left Column - Text Content */}
        <Flex flex={1} direction="column" gap={6}>
          {/* Section Title */}
          <Box>
            <Text 
              fontSize="5xl" 
              fontWeight="bold" 
              mb={3}
              style={{
                background: 'linear-gradient(to right, #00CEF4, #B172EA)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            >
              About Me
            </Text>
            <Box 
              w="100px" 
              h="2px" 
              style={{
                background: 'linear-gradient(to right, #00CEF4, #B172EA)'
              }}
            />
          </Box>

          {/* Paragraphs */}
          <Text fontSize="lg" color="gray.300" lineHeight="1.8" mt={6}>
            I am an ambitious and motivated student pursuing a Bachelor of Science in 
            Electrical Engineering with a concentration in Electronics. With a strong 
            foundation in mathematics, physics, and computer science, I am passionate 
            about the intersection of hardware and software, aiming to build a career as 
            an Embedded Systems Engineer.
          </Text>
          <Text fontSize="lg" color="gray.300" lineHeight="1.8">
            My vision is to design and develop intelligent, efficient, and reliable 
            systems that drive the next generation of technology — from consumer 
            electronics to industrial automation and IoT devices. I combine my technical 
            training with hands-on experience in database management, programming, 
            and problem-solving, approaching engineering challenges from a multidisciplinary 
            perspective.
          </Text>
        </Flex>

        {/* Right Column - Skill Cards */}
        <Flex flex={1} direction="column" gap={6}>
          {/* Card 1: Circuit Design */}
          <Flex
            p={6}
            bg="gray.800"
            borderRadius="lg"
            border="2px"
            borderColor="#00CEF4"
            alignItems="center"
            gap={6}
            transition="all 0.3s"
            _hover={{
              transform: 'translateY(-5px)',
              borderColor: '#00CEF4',
              boxShadow: '0 10px 30px rgba(0, 206, 244, 0.3)'
            }}
          >
            <Box
              w="80px"
              h="80px"
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexShrink={0}
              style={{
                background: 'linear-gradient(to bottom right, #00CEF4, #B172EA)'
              }}
            >
              <Text fontSize="40px" filter="brightness(0) invert(1)">⚡</Text>
            </Box>
            <Flex direction="column">
              <Text fontSize="xl" fontWeight="bold" color="white" mb={1}>
                Circuit Design
              </Text>
              <Text fontSize="md" color="gray.400">
                Precision engineering
              </Text>
            </Flex>
          </Flex>

          {/* Card 2: Power Systems */}
          <Flex
            p={6}
            bg="gray.800"
            borderRadius="lg"
            border="2px"
            borderColor="#B172EA"
            alignItems="center"
            gap={6}
            transition="all 0.3s"
            _hover={{
              transform: 'translateY(-5px)',
              borderColor: '#B172EA',
              boxShadow: '0 10px 30px rgba(177, 114, 234, 0.3)'
            }}
          >
            <Box
              w="80px"
              h="80px"
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexShrink={0}
              style={{
                background: 'linear-gradient(to bottom right, #B172EA, #B172EA)'
              }}
            >
              <Text fontSize="40px" filter="brightness(0) invert(1)">💡</Text>
            </Box>
            <Flex direction="column">
              <Text fontSize="xl" fontWeight="bold" color="white" mb={1}>
                Power Systems
              </Text>
              <Text fontSize="md" color="gray.400">
                Efficient energy solutions
              </Text>
            </Flex>
          </Flex>

          {/* Card 3: Automation */}
          <Flex
            p={6}
            bg="gray.800"
            borderRadius="lg"
            border="2px"
            borderColor="#B172EA"
            alignItems="center"
            gap={6}
            transition="all 0.3s"
            _hover={{
              transform: 'translateY(-5px)',
              borderColor: '#B172EA',
              boxShadow: '0 10px 30px rgba(177, 114, 234, 0.3)'
            }}
          >
            <Box
              w="80px"
              h="80px"
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexShrink={0}
              style={{
                background: 'linear-gradient(to bottom right, #B172EA, #00CEF4)'
              }}
            >
              <Text fontSize="40px" filter="brightness(0) invert(1)">⚙️</Text>
            </Box>
            <Flex direction="column">
              <Text fontSize="xl" fontWeight="bold" color="white" mb={1}>
                Automation
              </Text>
              <Text fontSize="md" color="gray.400">
                Smart control systems
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

export default AboutMe

