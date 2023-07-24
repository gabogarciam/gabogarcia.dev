
import { Box, Link, Text } from '@chakra-ui/react'
import { CheckCircleIcon } from "@chakra-ui/icons";
import { CheckIcon } from "@chakra-ui/icons";
import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';

function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

const CustomLink = (props) => {
  const href = props.href;

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith('#')) {
    return (
      <Link {...props} />
    )
  }

  return <Link {...props} isExternal rel="noopener noreferrer" />;
};

function Callout(props) {
  return (
    <Box>
      <Box w="4" mr="4">
        {props.emoji}
      </Box>
      <Box flex="1" className="w-full callout">
        {props.children}
      </Box>
    </Box>
  );
}

function ProsCard({ title, pros }) {
  return (
    <Box>
      <Text>{`You might use ${title} if...`}</Text>
      <Box mt="4">
        {pros.map((pro) => (
          <Box key={pro} display="flex" alignItems="baseline" mb="2" fontWeight="medium">
            <Box h="4" w="4" mr="2">
              <CheckIcon h="4" w="4" color="emerald.500" />
            </Box>
            <Text>{pro}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

function ConsCard({ title, cons }) {
  return (
    <Box>
      <Text>{`You might not use ${title} if...`}</Text>
      <Box mt="4">
        {cons.map((con) => (
          <Box key={con}>
            <Box h="4" w="4" mr="2">
              <CheckCircleIcon h="4" w="4" color="red.500" />
            </Box>
            <Text>{con}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

const components = {
  Image: RoundedImage,
  a: CustomLink,
  Callout,
  ProsCard,
  ConsCard  
};

const Mdx = ({ code }) => {
  const Component = useMDXComponent(code);
  return (
    <Box as='article'>
      <Component components={{...components}} />
    </Box>
  )
}

export default Mdx