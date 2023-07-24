import { allClimbs } from "contentlayer/generated";
import { Box, Divider, Flex, Heading, Link, Text } from '@chakra-ui/react'
import Mdx from 'components/mdx';
 
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

function formatDate(date) {
  const currentDate = new Date();
  const targetDate = new Date(date);

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = '';

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = 'Today';
  }

  const fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return `${fullDate} (${formattedDate})`;
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