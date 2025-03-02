import {
  defineDocs,
  defineConfig,
  defineCollections,
  frontmatterSchema,
} from "fumadocs-mdx/config"
import { z } from "zod"

export const blogPosts = defineCollections({
  type: "doc",
  dir: "content/blog",
  // add required frontmatter properties
  schema: frontmatterSchema.extend({
    author: z.string(),
    date: z.string().date().or(z.date()),
  }),
})

export const projectPosts = defineCollections({
  type: "doc",
  dir: "content/projects",
  // add required frontmatter properties
  schema: frontmatterSchema.extend({
    author: z.string(),
    date: z.string().date().or(z.date()),
  }),
})

export const docs = defineDocs({
  dir: "content/docs",
})

export default defineConfig({
  mdxOptions: {
    // MDX options
  },
})
