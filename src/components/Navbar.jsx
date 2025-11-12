import { Box, Flex, Text, HStack } from '@chakra-ui/react'
import { NavLink, useNavigate } from 'react-router-dom'

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Vision', path: '/vision' },
  { name: 'Skills', path: '/skills' },
  { name: 'Work', path: '/work' },
  { name: 'Resume', path: '/resume' },
  { name: 'Contact', path: '/contact' },
]

function Navbar() {
  const navigate = useNavigate()

  return (
    <Box
      position="sticky"
      top={0}
      zIndex={50}
      bg="rgba(11, 17, 32, 0.8)"
      backdropFilter="blur(16px)"
      borderBottom="1px solid rgba(148, 163, 184, 0.1)"
    >
      <Flex
        maxW="1200px"
        mx="auto"
        px={{ base: 6, md: 12 }}
        py={{ base: 4, md: 5 }}
        direction={{ base: 'column', md: 'row' }}
        gap={{ base: 4, md: 0 }}
        align="center"
        justify="space-between"
      >
        <Text
          fontSize={{ base: 'lg', md: 'xl' }}
          fontWeight="bold"
          cursor="pointer"
          onClick={() => navigate('/')}
          style={{
            background: 'linear-gradient(to right, #00CEF4, #B172EA)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          PORTFOLIO
        </Text>

        <HStack spacing={{ base: 4, md: 8 }} flexWrap="wrap" justify="center">
          {links.map(({ name, path }) => (
            <Text
              key={path}
              as={NavLink}
              to={path}
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="bold"
              color="gray.200"
              _hover={{ color: '#00CEF4' }}
              _activeLink={{ color: '#00CEF4' }}
              textTransform="uppercase"
              letterSpacing="0.08em"
            >
              {name}
            </Text>
          ))}
        </HStack>
      </Flex>
    </Box>
  )
}

export default Navbar


