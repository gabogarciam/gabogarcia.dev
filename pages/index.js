import {
  Container,
  Box,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react'
import TadaAnimation from '../components/icons/tada-animation'
import Section from '../components/section'
import Paragraph from '../components/paragraph'

const Home = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mt={3}
        mb={6}
        textAlign="center"
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m developer making awesome things for awesome people!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            <TadaAnimation>👋🏼</TadaAnimation>
            Gabriel García
          </Heading>
          <Section delay={0.1}>
            Conquering heights through Code: My Developer&apos;s Journey as a
            Climber
          </Section>
          <Section delay={0.1}>
            <Paragraph>
              I like to combine the worlds of technology and outdoor
              exploration, I&apos;m found solace, exhilaration and inspiration
              in two vastly different yet captivating pursuits, climbing and
              code, the synergy between code and the great outdoors as well how
              a love for capturing moments through a lens adds an extra layer of
              magic.
            </Paragraph>
          </Section>
          <Section delay={0.2}>
            <Paragraph>
              The Call of the Mountains: The world of climbing opened me the
              doors to a boundless freedom and exploration. We delve into the
              experiences climbing magnificent peaks, defying gravity, pushing
              our physical and mental limits. I have discovered how the tenacity
              and problem-solving skills acquired as a developer complement the
              climbing pursuits, turning mountains into a coding challenge that
              demands focus, resilience, and adaptability.
            </Paragraph>
          </Section>
          <Section delay={0.3}>
            <Paragraph>
              In the realm of technology, coding is my main focus and this
              allows me to discover the symbiotic relationship between me
              developer skills and the love for outdoor pursuits. I can build
              applications that aid climbers in planning expeditions to using
              data analysis to optimize training regimens, witness of their
              improvements and passion. Gained a glimpse at the new software
              tools and algorithms that other developers create to improve these
              experiences.
            </Paragraph>
          </Section>
          <Section delay={0.3}>
            <Paragraph>
              Beyond personal fulfillment, I discovered a way to inspire and
              connect with others through this multifaceted journey. As all of
              us I like to share my climbing stories, breathtaking photographs,
              and coding insights on social media platforms and personal blog,
              fostering a community of like-minded adventurers, developers, and
              photography enthusiasts.
            </Paragraph>
          </Section>
        </Box>
      </Box>
    </Container>
  )
}

export default Home
