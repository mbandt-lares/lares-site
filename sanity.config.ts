"use client";

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

export default defineConfig({
  name: 'default',
  title: 'Lares Health CMS',
  projectId: 'v2peljwj',
  dataset: 'production',
  basePath: '/studio',
  plugins: [structureTool()],
  schema: {
    types: [
      {
        name: 'page',
        type: 'document',
        title: 'Marketing Pages',
        fields: [
          { name: 'title', type: 'string', title: 'Page Title' },
          { name: 'slug', type: 'slug', title: 'URL Slug', options: { source: 'title' } },
          {
            name: 'content',
            type: 'array',
            title: 'Page Sections',
            of: [
              {
                type: 'object',
                name: 'hero',
                title: 'Hero Section',
                fields: [
                  { name: 'eyebrow', type: 'string', title: 'Eyebrow' },
                  { name: 'heading', type: 'string', title: 'Main Heading' },
                  { name: 'subheading', type: 'text', title: 'Sub-heading Text' },
                  { name: 'ctaLabel', type: 'string', title: 'Button Label' },
                  { name: 'image', type: 'image', title: 'Hero Image' }
                ]
              }
            ]
          }
        ]
      }
    ],
  },
});
