import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const temiyage = defineCollection({
  loader: glob({ base: './src/content/temiyage', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string(),
    tags: z.array(z.string()),
    excerpt: z.string().optional(),
    draft: z.boolean().default(false),
    price: z.string().optional(),
    area: z.string().optional(),
    occasion: z.string().optional(),
    shopName: z.string().optional(),
    address: z.string().optional(),
    shopUrl: z.string().optional(),
    image: z.string().optional(),
    images: z.array(z.string()).optional(),
  }),
});

const restaurant = defineCollection({
  loader: glob({ base: './src/content/restaurant', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string(),
    tags: z.array(z.string()),
    excerpt: z.string().optional(),
    draft: z.boolean().default(false),
    price: z.string().optional(),
    area: z.string().optional(),
    cuisine: z.string().optional(),
    occasion: z.string().optional(),
    reservation: z.string().optional(),
    shopName: z.string().optional(),
    address: z.string().optional(),
    shopUrl: z.string().optional(),
    image: z.string().optional(),
    images: z.array(z.string()).optional(),
  }),
});

export const collections = { temiyage, restaurant };
