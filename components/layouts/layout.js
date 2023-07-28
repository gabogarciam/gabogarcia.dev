import Head from 'next/head'
import Navbar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

const RootLayout = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content='Developer, writer, and creator.' />
        <meta name="author" content="Gabriel García" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>Gabriel García</title>
      </Head>
      <Navbar path={router.route} />
      <Container maxW="container.md" pt={14}>
        {[children]}
        <Footer />
      </Container>
    </Box>
  )
}

export default RootLayout
