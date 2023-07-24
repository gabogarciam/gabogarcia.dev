import { defineDocumentType, makeSource } from "contentlayer/source-files";
import readingTime from "reading-time";
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
 
/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },
  slug: {
    type: 'string',
    // resolve: (doc) => doc._raw.flattenedPath,
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
  },
  structuredData: {
    type: 'object',
    resolve: (doc) => ({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: doc.title,
      datePublished: doc.publishedAt,
      dateModified: doc.publishedAt,
      description: doc.summary,
      author: {
        '@type': 'Person',
        name: 'Gabriel García',
      },
    }),
  },
}

const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `blog/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    publishedAt: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
    summary: {
      type: "string",
      description: "The summary of the post",
      required: true,
    },
    image: {
      type: 'string',
    },
  },
  computedFields,
}));

const Climb = defineDocumentType(() => ({
  name: "Climb",
  filePathPattern: `climbing/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    publishedAt: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
    summary: {
      type: "string",
      description: "The summary of the post",
      required: true,
    },
    image: {
      type: 'string',
    },
  },
  computedFields,
}));
 
export default makeSource({
  contentDirPath: "content",
  documentTypes: [Blog, Climb],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: 'one-dark-pro',
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push('line--highlighted');
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ['word--highlighted'];
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },
});
