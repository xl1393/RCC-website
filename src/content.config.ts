import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			tags: z.array(z.string()).optional(),
            category: z.string().optional(),
			author: z.string().optional(),
		}),
});

const pages = defineCollection({
	// Load Markdown and MDX files in the `src/content/pages/` directory.
	loader: glob({ base: './src/content/pages', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		subtitle: z.string().optional(),
		slug: z.string().optional(),
		icon: z.string().optional(),
		primaryCTA: z.string().optional(),
		primaryCTALink: z.string().optional(),
		secondaryCTA: z.string().optional(),
		secondaryCTALink: z.string().optional(),
		sectionTitle: z.string().optional(),
		sectionDescription: z.string().optional(),
	}),
});

export const collections = { blog, pages };
