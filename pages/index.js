import { Container, Box, Heading, useColorModeValue } from '@chakra-ui/react'

const Home = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        textAlign="center"
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m Gabriel, developer making awesome things for awesome
        people!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Gabriel García
          </Heading>
          <p>Climber / Developer / Photographer</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Home
