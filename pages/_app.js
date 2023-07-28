import '../lib/global.css';
import { ChakraProvider } from '@chakra-ui/react'
import Layout from 'components/layouts/layout'
import theme from 'lib/theme'

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  )
}

export default Website
