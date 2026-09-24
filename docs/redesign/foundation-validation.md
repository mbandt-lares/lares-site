# Shared landing foundation — source and verification

## Exact shared assets

All visual assets below were downloaded from Figma file `3kvJHevjr4infPgV2DOtXc`, page `225:2`, on 2026-09-24. No temporary Figma URL is used by the site.

| Local asset | Figma node | Rendered use |
| --- | --- | --- |
| `public/landing/shared/wordmark.svg` | Header `484:224`, logo `484:200` | Header, 190 × 30 px |
| `public/landing/shared/wordmark-light.svg` | Footer `485:305`, logo `485:269` | Footer, 252 × 40 px |
| `public/landing/shared/pilot-scene.png` | Pilot section `491:459`, scene `491:433` | Invitation card lower image; native 1536 × 1024 px |
| `public/landing/shared/plus.svg` | Pilot form `486:396`, icon `486:380` | Optional note control, 24 × 24 px |
| `public/landing/shared/arrow-right.svg` | Text link `486:2024`, icon `486:2022` | Text link, 20 × 20 px |
| `public/landing/shared/arrow-right-inverse.svg` | Text link `486:2029`, icon `486:2027` | Text link on navy, 20 × 20 px |

`public/fonts/Manrope-Variable.ttf` and `public/fonts/Manrope-OFL.txt` come from the [official Google Fonts Manrope directory](https://github.com/google/fonts/tree/main/ofl/manrope), under the SIL Open Font License 1.1. Root layout loads weights 200–800 locally with `next/font/local`.

## Checks

- Focused ESLint for shared components, form, API, layout and campaign route: passed.
- `npx tsc --noEmit`: passed.
- `npm run test:contact`: eight mocked checks passed; no lead was sent to Google Sheets.
- Route-aware shared header/footer preserve the legacy shell on legal, campaign and studio pages. `/contact` retains its existing redirect to `/#contact`. The Home pilot section provides both `#pilot` and the previous `#contact` anchor.
- Main task owns final browser comparison and full build after the page agents finish.
