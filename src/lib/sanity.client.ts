import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: 'v2peljwj',
  dataset: 'production',
  apiVersion: '2026-01-05',
  useCdn: false, 
});
