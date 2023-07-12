import NextLink from 'next/link'
import { Box, Heading, Container, Divider, Button } from '@chakra-ui/react'

const Works = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="90vh"
    >
      <Container>
        <Heading as="h1" align="center">
            👷🏽‍♂️ | Sorry this page is under construction.
        </Heading>
        <Divider my={6} />
        <Box my={6} align="center">
          <Button as={NextLink} href="/" colorScheme="teal">
            Return to home
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default Works
