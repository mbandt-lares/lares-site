# Перевірка реалізації — 24 вересня 2026

Робоча гілка: `codex/new-landing`. Перенесено Home, How it works і About за Figma `3kvJHevjr4infPgV2DOtXc`, page `225:2`. Production не змінено.

## Реалізовано

- Спільні Header/Footer, кнопки, текстові посилання, PilotSection і форма; локальний Manrope, scoped CSS tokens, ID секцій із `sections.ts`.
- Локальні Figma ресурси з manifests: `home-assets.json`, `secondary-assets.json`, `foundation-validation.md`.
- Узгоджена назва How it works; білий текст CTA на погодженому темнішому градієнті.
- Основний CTA веде на `/#pilot`. `/contact` зберігає старий redirect на `/#contact`; цей anchor веде до тієї ж форми. About має власний екземпляр форми з ID `about-pilot`.
- Audience записується в `message`, optional note зберігається при згортанні. API підтримує старий email-only payload і не повертає success після HTTP-помилки чи таймауту Sheets.
- Campaign route використовує асинхронні params Next 16; `ignoreBuildErrors` прибрано. Три нові сторінки мають окремі title/description, canonical та Open Graph.

## Виконані перевірки

| Перевірка | Результат |
| --- | --- |
| `npm run lint` | Passed, exit 0 |
| `npx tsc --noEmit` | Passed, exit 0 |
| `npm run test:contact` | 8 passed, 0 failed/skipped; upstream mocked |
| `npm run build` | Passed, exit 0; TypeScript увімкнено |
| Home / How / About: 360, 390, 768, 1024, 1440 px | DOM overflow 0, один H1, без дубльованих ID |
| Desktop/mobile viewport screenshots | Переглянуто hero трьох сторінок, Home independence/FAQ/pilot та About conversation |
| Мобільне меню | Відкриття, focus на першому пункті, Escape з поверненням focus, закриття після CTA |
| CTA між сторінками | How → Home `/#pilot`; після scroll позиція секції ≈128 px |
| Форма | Radio A loved one, note open/close зі збереженням тексту, native invalid submit повертає focus на name |
| Legacy routes | `/privacy`, `/terms`, обидві campaign-сторінки відкриваються; `/contact` → `/#contact` збережено |
| Production standalone preview | Запущено локально на `http://127.0.0.1:3100`; Home/How відображаються, Home canonical/OG перевірено |

Усі фінальні команди виконані після останніх змін коду. Build повідомляє лише про застарілі довідкові дані `baseline-browser-mapping`; оновлення залежностей поза обсягом міграції не виконувалось.

## Межі перевірки перед релізом

- Реальні заявки в Google Sheets не надсилалися. Success/rejection/timeout API перевірено з mock, а не через production webhook. UI success/error після реальної відправки потребують окремої інтеграційної перевірки.
- `/studio` повернув HTTP 200 у dev server, але авторизовані дії Sanity не перевірялися. `/api/health` повернув HTTP 200 у server log; браузер заблокував показ JSON.
- Повний Lighthouse/LCP/CLS аудит і перевірка на фізичних iOS/Android пристроях не виконані. Hero ресурси мають визначені розміри й responsive sizes; перше фото процесу завантажується eager.
- Публічний preview deployment, merge та production release ще не виконані. Docker/hosting pipeline збережено; локально перевірено standalone artifact, не сам Docker image.

## Локальний preview

Після build скопіювати `public` у `.next/standalone/public`, а `.next/static` у `.next/standalone/.next/static`, як у чинному Dockerfile. Запуск: `PORT=3100 HOSTNAME=127.0.0.1 node .next/standalone/server.js`.
