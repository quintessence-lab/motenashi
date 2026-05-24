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

const utsuwa = defineCollection({
  loader: glob({ base: './src/content/utsuwa', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string(),
    tags: z.array(z.string()),
    excerpt: z.string().optional(),
    draft: z.boolean().default(false),
    price: z.string().optional(),
    material: z.string().optional(),     // 素材（陶器・磁器・ガラス・木・漆等）
    origin: z.string().optional(),       // 産地（有田・益子・京都等）
    maker: z.string().optional(),        // 作家名・窯元・ブランド
    occasion: z.string().optional(),     // シーン（普段使い・接待・お祝い等）
    pairing: z.string().optional(),      // おすすめの料理・菓子
    shopName: z.string().optional(),
    shopUrl: z.string().optional(),
    image: z.string().optional(),
    images: z.array(z.string()).optional(),
  }),
});

export const collections = { temiyage, restaurant, utsuwa };
