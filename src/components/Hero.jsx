import { Box, Flex, Text, Button, Badge, Icon, HStack } from '@chakra-ui/react'
import peetImage from '../assets/images/Peet.jpeg'

function Hero() {
  return (
    <>
      {/* Navigation Bar */}
      <Flex
        as="nav"
        justify="space-between"
        align="center"
        px={16}
        py={6}
        position="absolute"
        top={0}
        left={0}
        right={0}
        zIndex={10}
      >
        <Text 
          fontSize="xl" 
          fontWeight="bold"
          style={{
            background: 'linear-gradient(to right, #00CEF4, #B172EA)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent'
          }}
        >
          PORTFOLIO
        </Text>
        <HStack spacing={12}>
          {['About', 'Skills', 'Work', 'Resume', 'Contact'].map((item) => (
            <Text
              key={item}
              color="white"
              cursor="pointer"
              fontWeight="bold"
              _hover={{ color: 'cyan.400' }}
              transition="all 0.3s"
              onClick={() => {
                const sectionId = item === 'Contact' ? 'contact' : item.toLowerCase();
                const element = document.getElementById(sectionId);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              {item}
            </Text>
          ))}
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Flex
        minH="100vh"
        align="center"
        px={16}
        gap={16}
        position="relative"
        pt={20}
      >
        {/* Left Panel */}
        <Flex
          flex={1}
          direction="column"
          gap={6}
          maxW="600px"
          zIndex={2}
        >
          {/* Job Title Badge */}
          <Badge
            bg="transparent"
            color="white"
            px={4}
            py={2}
            borderRadius="full"
            w="fit-content"
            fontSize="sm"
            fontWeight="normal"
            border="2px solid"
            borderColor="#00CEF4"
            position="relative"
            overflow="hidden"
            _before={{
              content: '""',
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(0, 206, 244, 0.5), transparent)',
              animation: 'shimmer 3s infinite'
            }}
            boxShadow="0 0 20px rgba(0, 206, 244, 0.3)"
          >
            <Box position="relative" zIndex={1}>
              Electrical & Electronic Engineer
            </Box>
          </Badge>

          {/* Name with Gradient */}
          <Box>
            <Text 
              fontSize="6xl" 
              fontWeight="normal" 
              lineHeight="1.2"
              style={{
                background: 'linear-gradient(to right, #00CEF4, #B172EA)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            >
              Franck Peter-Lee Edouard
            </Text>
          </Box>

          {/* Description */}
          <Text fontSize="lg" color="gray.300" lineHeight="1.8" mt={4}>
            Systems Embedded Engineer Candidate || Marketing Coordinator || Website Designer
          </Text>

          {/* CTA Buttons */}
          <Flex gap={4} mt={8}>
            <Button
              bgGradient="linear(to-r, blue.500, purple.600)"
              color="white"
              size="lg"
              px={8}
              borderRadius="md"
              _hover={{ transform: 'translateY(-2px)', boxShadow: '0 10px 30px rgba(56, 189, 248, 0.4)' }}
              transition="all 0.3s"
              leftIcon={
                <Icon viewBox="0 0 24 24" boxSize={5}>
                  <path fill="currentColor" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </Icon>
              }
            >
              Get In Touch
            </Button>
            <Button
              bg="white"
              color="gray.900"
              size="lg"
              px={8}
              borderRadius="md"
              _hover={{ transform: 'translateY(-2px)', boxShadow: '0 10px 30px rgba(255, 255, 255, 0.2)' }}
              transition="all 0.3s"
            >
              View Resume
            </Button>
          </Flex>

          {/* Social Icons */}
          <HStack spacing={6} mt={8}>
            {[
              { icon: 'P', color: 'cyan.400' },
              { icon: 'in', color: 'cyan.400' },
              { icon: '✉', color: 'cyan.400' }
            ].map((social, index) => (
              <Box
                key={index}
                w="50px"
                h="50px"
                borderRadius="full"
                border="2px"
                borderColor={social.color}
                display="flex"
                alignItems="center"
                justifyContent="center"
                cursor="pointer"
                transition="all 0.3s"
                _hover={{
                  borderColor: 'cyan.300',
                  transform: 'translateY(-3px)',
                  boxShadow: `0 0 20px ${social.color}`
                }}
              >
                <Text color={social.color} fontWeight="bold" fontSize="sm">
                  {social.icon}
                </Text>
              </Box>
            ))}
          </HStack>
        </Flex>

        {/* Right Panel */}
        <Flex flex={1} justify="center" align="center" position="relative">
          {/* Glowing Image Frame */}
          <Box
            position="relative"
            w="400px"
            h="500px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="0 0 60px rgba(139, 92, 246, 0.5), 0 0 100px rgba(56, 189, 248, 0.3)"
            border="2px solid"
            borderColor="transparent"
            bgGradient="linear(to-r, purple.500, blue.500, pink.500)"
            p="3px"
          >
            {/* Inner Box for Image Placeholder */}
            <Box
              w="100%"
              h="100%"
              borderRadius="lg"
              border="4px solid"
              borderColor="transparent"
              overflow="hidden"
            >
              <img 
                src={peetImage} 
                alt="Franck Edouard Peter-Lee"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </Box>

            {/* Floating Icons */}
            <Box
              position="absolute"
              top="-30px"
              right="20px"
              w="50px"
              h="50px"
              color="cyan.400"
              fontSize="40px"
              filter="drop-shadow(0 0 10px rgb(56, 189, 248))"
              animation="float 3s ease-in-out infinite"
            >
              ⚙
            </Box>

            <Box
              position="absolute"
              top="50%"
              right="-40px"
              w="40px"
              h="40px"
              color="purple.400"
              fontSize="40px"
              filter="drop-shadow(0 0 10px rgb(139, 92, 246))"
              animation="float 2s ease-in-out infinite"
            >
              ⚡
            </Box>

            <Box
              position="absolute"
              bottom="-30px"
              right="30px"
              w="45px"
              h="45px"
              color="blue.400"
              fontSize="40px"
              filter="drop-shadow(0 0 10px rgb(59, 130, 246))"
              animation="float 3.5s ease-in-out infinite"
            >
              📱
            </Box>

            <Box
              position="absolute"
              top="45%"
              left="-40px"
              w="42px"
              h="42px"
              color="cyan.300"
              fontSize="40px"
              filter="drop-shadow(0 0 10px rgb(129, 140, 248))"
              animation="float 2.5s ease-in-out infinite"
            >
              📊
            </Box>

            <Box
              position="absolute"
              bottom="-25px"
              left="40px"
              w="48px"
              h="48px"
              color="purple.300"
              fontSize="40px"
              filter="drop-shadow(0 0 10px rgb(167, 139, 250))"
              animation="float 3.2s ease-in-out infinite"
            >
              🔋
            </Box>
          </Box>
        </Flex>

        {/* Background Decorative Elements */}
        <Box
          position="absolute"
          top="20%"
          right="10%"
          w="400px"
          h="400px"
          borderRadius="full"
          bg="purple.500"
          opacity={0.1}
          filter="blur(80px)"
          zIndex={0}
        />
        <Box
          position="absolute"
          bottom="20%"
          left="10%"
          w="300px"
          h="300px"
          borderRadius="full"
          bg="blue.500"
          opacity={0.1}
          filter="blur(80px)"
          zIndex={0}
        />
      </Flex>
    </>
  )
}

export default Hero

