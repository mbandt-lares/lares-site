import { client } from './sanity.client';

export async function getPageData(slug: string) {
  const query = `*[_type == "page" && slug.current == $slug][0]{
    title,
    content[]{
      _type,
      heading,
      subheading,
      eyebrow,
      ctaLabel,
      "imageUrl": image.asset->url
    }
  }`;
  
  return await client.fetch(query, { slug });
}
