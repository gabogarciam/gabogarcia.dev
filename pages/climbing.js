import Link from 'next/link';
import { Box, Text, Heading, Container } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { allClimbs } from 'contentlayer/generated';
import { compareDesc } from 'date-fns'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 }
}

function PostCard(post) {
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      <Box mb={3} cursor="pointer">
        <Text>
          <Link href={`/climbing/${post.slug}`}>{post.title}</Link>
        </Text>
        <Box dangerouslySetInnerHTML={{ __html: post.body.html }} />
      </Box>
    </motion.div>
  )
}

const Climbing = () => {
  const posts = allClimbs.sort((a, b) => compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)))

  return (
    <Container>
      <Box
        display="flex"
        mt={9}
      >
        <Heading as='h4' size='md'>Read my climbing post</Heading>
      </Box>
      <Box
        mt={9}
        display="flex"
        minHeight="70vh"
      >
        <Container>
          {posts.map((post, idx) => (
            <PostCard key={idx} {...post} />
          ))}
        </Container>
      </Box>
    </Container>
  )
}

export default Climbing