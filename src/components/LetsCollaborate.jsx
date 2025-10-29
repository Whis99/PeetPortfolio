import { Box, Flex, Text, Button, Icon } from '@chakra-ui/react'

function LetsCollaborate() {
  return (
    <Box id="contact" py={20} px={16} bg="gray.900" position="relative" overflow="hidden">
      {/* Background Shapes */}
      {/* Top-Left: Rounded Square */}
      <Box
        position="absolute"
        top="10%"
        left="10%"
        w="50px"
        h="50px"
        borderRadius="xl"
        border="2px solid"
        borderColor="#00CEF4"
        opacity={0.3}
        filter="blur(4px)"
        animation="float 4s ease-in-out infinite"
        zIndex={1}
      />

      {/* Top-Right: Square */}
      <Box
        position="absolute"
        top="15%"
        right="10%"
        w="40px"
        h="40px"
        border="2px solid"
        borderColor="green.400"
        opacity={0.3}
        filter="blur(4px)"
        animation="float 3s ease-in-out infinite"
        zIndex={1}
      />

      {/* Bottom-Right: Diagonal Line */}
      <Box
        position="absolute"
        bottom="15%"
        right="8%"
        w="80px"
        h="4px"
        bg="purple.400"
        transform="rotate(45deg)"
        opacity={0.4}
        filter="blur(4px)"
        animation="float 5s ease-in-out infinite"
        zIndex={1}
      />

      <Box maxW="1200px" mx="auto" position="relative" zIndex={2}>
        {/* Section Title */}
        <Box mb={6} textAlign="center">
          <Text 
            fontSize="5xl" 
            fontWeight="bold"
            mb={4}
            style={{
              background: 'linear-gradient(to right, #00CEF4, #B172EA)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent'
            }}
          >
            Let's Collaborate
          </Text>
        </Box>

        {/* Descriptive Text */}
        <Text 
          fontSize="lg" 
          color="white" 
          textAlign="center" 
          mb={8}
          maxW="700px"
          mx="auto"
          lineHeight="1.8"
        >
          Ready to power your next project? Let's work together to create innovative electrical solutions.
        </Text>

        {/* CTA Buttons */}
        <Flex gap={6} justify="center" flexWrap="wrap" mb={12}>
          {/* Email Button */}
          <Button
            as="a"
            href="mailto:teamslgfred@gmail.com"
            size="lg"
            px={8}
            py={6}
            borderRadius="lg"
            fontWeight="bold"
            fontSize="lg"
            style={{
              background: 'linear-gradient(to right, #00CEF4, #B172EA)'
            }}
            color="white"
            leftIcon={
              <Icon viewBox="0 0 24 24" boxSize={5}>
                <path fill="currentColor" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </Icon>
            }
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: '0 10px 30px rgba(0, 206, 244, 0.4)'
            }}
            transition="all 0.3s"
            textDecoration="none"
          >
            teamslgfred@gmail.com
          </Button>

          {/* View Resume Button */}
          <Button
            size="lg"
            px={8}
            py={6}
            borderRadius="lg"
            fontWeight="bold"
            fontSize="lg"
            bg="white"
            color="gray.900"
            leftIcon={
              <Icon viewBox="0 0 24 24" boxSize={5}>
                <path fill="currentColor" d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"/>
              </Icon>
            }
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: '0 10px 30px rgba(255, 255, 255, 0.3)'
            }}
            transition="all 0.3s"
            onClick={() => {
              const element = document.getElementById('resume');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            View Resume
          </Button>
        </Flex>
      </Box>

      {/* Footer Separator */}
      <Box 
        w="100%"
        h="1px"
        bg="gray.700"
        mb={8}
      />

      {/* Footer */}
      <Box textAlign="center">
        <Text fontSize="sm" color="gray.500">
          © 2025 Frank Edouard Peter-Lee. All rights reserved.
        </Text>
      </Box>
    </Box>
  )
}

export default LetsCollaborate

