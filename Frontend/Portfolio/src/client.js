import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID, 
  dataset: 'production',
  apiVersion: '2022-03-10',
  useCdn: true, // Keep true for faster, cache-based fetching
  token: import.meta.env.VITE_SANITY_TOKEN ,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
