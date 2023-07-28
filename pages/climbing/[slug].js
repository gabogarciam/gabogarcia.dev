import { allClimbs } from "contentlayer/generated";
import { Box, Divider, Flex, Heading, Text } from '@chakra-ui/react'
import formatDate from 'lib/utils.js'
import Mdx from 'components/layouts/mdx.js';
 
export async function getStaticPaths() {
  const paths = allClimbs.map((post) => `/climbing/${post.slug}`);
  return {
    paths,
    fallback: false,
  };
}
 
export async function getStaticProps({ params }) {
  const post = allClimbs.find((post) => post._raw.flattenedPath === `climbing/${params?.slug}`);
 
  return typeof post === "undefined"
    ? {
        redirect: {
          destination: "/",
          permanent: false,
        },
      }
    : {
        props: {
          post,
        },
      };
}

const PostLayout = ({ post }) => {
  return (
    <Box>
      <Heading
        as="h1"
        fontWeight="bold"
        fontSize="2xl"
        letterSpacing="tighter"
        maxW="650px"
        mt={20}
      >
        {post.title}
      </Heading>
      <Flex justify="between" align="center" mt="2" mb="8" fontSize="sm" maxW="650px">
          <Text color="neutral.600" as="p">
            {formatDate(post.publishedAt)}
          </Text>
          <Text ml="auto" color="neutral.600" as="p">
            {post.readingTime.text}
          </Text>
      </Flex>
      <Mdx code={post.body.code} />
      <Divider my={6} />
    </Box>
  );
}

export default PostLayout