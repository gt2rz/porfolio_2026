import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    coverImage: z.string(),
    liveUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
    date: z.coerce.date(),
    featured: z.boolean().default(false),
    role: z.string(),
    status: z.enum(['LIVE_DEPLOYMENT', 'IN_DEVELOPMENT', 'ARCHIVED']),
    metrics: z.record(z.string(), z.string()).optional(),
    codeSnippet: z.string().optional(),
    codeLanguage: z.string().optional(),
  }),
});

export const collections = { projects };
