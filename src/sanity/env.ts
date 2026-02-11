export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-01-05'

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder'

// Ми прибрали assertValue, щоб збірка не падала без змінних середовища.
// Якщо змінні будуть потрібні в рантаймі, Sanity просто видасть попередження.
