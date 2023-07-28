
import { Box, Image, Link } from '@chakra-ui/react'
import { useMDXComponent } from 'next-contentlayer/hooks';
import Section from '../section'

function RoundedImage(props) {
  return <Image borderRadius="lg" alt={props.alt} {...props} />;
}

const CustomLink = (props) => {
  const href = props.href;

  if (href.startsWith('/')) {
    return <Link href={href} {...props}>{props.children}</Link>
  }

  if (href.startsWith('#')) {
    return <Link {...props} />
  }

  return <Link {...props} isExternal rel="noopener noreferrer" />;
};

const components = {
  Image: RoundedImage,
  a: CustomLink
};

const Mdx = ({ code }) => {
  const Component = useMDXComponent(code);
  return (
    <Box as='article' className="mdx">
      <Section delay={0.1}>
        <Component components={{...components}} />
      </Section>
    </Box>
  )
}

export default Mdx