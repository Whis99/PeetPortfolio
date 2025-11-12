import { Box, Text } from '@chakra-ui/react'

function Footer() {
  return (
    <Box
      as="footer"
      py={8}
      px={{ base: 6, md: 16 }}
      bg="rgba(11, 17, 32, 0.9)"
      borderTop="1px solid rgba(148, 163, 184, 0.1)"
    >
      <Box maxW="1200px" mx="auto" textAlign="center">
        <Text fontSize="sm" color="gray.500">
          © 2025 Frank Edouard Peter-Lee. All rights reserved.
        </Text>
      </Box>
    </Box>
  )
}

export default Footer


