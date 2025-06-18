import { defineDocumentType, makeSource } from 'contentlayer2/source-files'

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: `**/*.mdx`,
  fields: {
    title: {
      type: 'string',
      required: true
    },
    date: {
      type: 'date',
      required: true
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/posts/${post._raw.flattenedPath}`
    },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Blog]
})