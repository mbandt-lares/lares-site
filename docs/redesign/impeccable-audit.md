# Impeccable audit — Home, How it works, About

Дата: 24.09.2026. Обсяг: три landing routes у поточній гілці, затверджений Figma стиль. Це базовий стан **до** окремо запланованих правок; цей аудит не змінює UI. Перевірено реалізацію, CSS tokens, локальні зображення, семантичний DOM та фактичні computed styles у браузері на `127.0.0.1:3100`. Головний агент окремо перевірив відсутність горизонтального overflow на 360, 390, 768, 1024 і 1440 px. Lighthouse, text zoom і повний keyboard walkthrough у цей аудит не входили.

## Вердикт і оцінка

**Anti-pattern verdict: pass із дрібним поліруванням.** Фото, Lar, діалоги й інформаційні картки відповідають затвердженому Figma. Немає gradient text, glassmorphism або декоративних метрик. Послідовність з трьох карток на How пояснює справжні кроки, тому не є довільним шаблоном. Повторювані малі uppercase labels є частиною поточної композиції, але їхній typographic treatment недостатньо відрізняє їх від решти тексту.

| Вимір | 0–4 | Підстава |
| --- | ---: | --- |
| Accessibility | 3 | Семантичні секції, заголовки, alt і focus states; один малий текст має контраст 4.34:1. |
| Performance | 3 | Локальні Next/Image assets і responsive sizes; лабораторні LCP/CLS не вимірювалися. |
| Responsive design | 3 | Адаптивні колонки й нульовий overflow у п’яти контрольних ширинах; збільшення тексту не перевірено. |
| Theming | 3 | Основні кольори й типографіка на landing tokens, окремі кольори ілюстрацій задані локально. |
| Anti-patterns | 3 | Виразні фірмові ресурси й стримана композиція; labels та два рівноцінні inverse абзаци потребують точного налаштування. |
| **Разом** | **15/20 — Good** | **3 пріоритетні знахідки: P1 × 1, P3 × 2.** |

## Пріоритетні знахідки

1. **[P1] Контраст малого підпису “Lar is speaking”.** [`src/app/about/page.module.css:217`](../../src/app/about/page.module.css) задає `--lc-action` (#CF4747) для 13 px regular підпису на #FFF9F7: **4.34:1**, нижче 4.5:1 для звичайного тексту за WCAG 1.4.3. Людині зі зниженим контрастним зором складніше прочитати стан ілюстративної розмови. Мінімальна правка: `--lc-link` (#B84444), що дає близько **5.10:1** на цій поверхні. Команда: `/impeccable polish`.

2. **[P3] Eyebrows не мають окремого міжлітерного ритму.** [`src/app/home.module.css:75`](../../src/app/home.module.css), [`src/app/how-it-works/page.module.css:48`](../../src/app/how-it-works/page.module.css), [`src/app/about/page.module.css:55`](../../src/app/about/page.module.css): у браузері всі labels обчислюються з `letter-spacing: normal`. Це послаблює ієрархію малих uppercase підписів, особливо поруч із заголовками та body. Встановити стримане `letter-spacing: .06em` для наявних eyebrow rules, не змінюючи їхній текст, колір чи розміри. Команда: `/impeccable typeset`.

3. **[P3] У Home два сусідні inverse абзаци мають один тон.** [`src/app/home.module.css:94`](../../src/app/home.module.css) і [`src/app/home.module.css:95`](../../src/app/home.module.css) — 21 px основний опис і 17 px примітка про permission; у браузері обидва чисто білі на navy. Розмір уже дає часткову ієрархію, але примітка привертає майже таку саму увагу. Залишити lead білим, permission зробити світлим secondary inverse тоном із контрастом понад 4.5:1 (наприклад #D8DFE8 дає ~10.11:1 на #0F2D5B). Команда: `/impeccable polish`.

## Перевірений baseline

- Глобальне правило [`src/app/globals.css:105`](../../src/app/globals.css) `[data-design-system="landing"] p { color: inherit }` **не збиває** кольори secondary routes: браузер обчислює #4D5F75 для звичайного тексту How/About, білий для inverse секції About. Це не дефект у поточному DOM/CSS каскаді.
- Підпис About “OUR VIEW BEGINS WITH THE PERSON” має #FF6B6B на #0F2D5B — приблизно 4.89:1. Для 14 px тексту перевірявся поріг 4.5:1. Новий погоджений CTA градієнт у цю знахідку не включався: його білий напис 20 px/700 перевіряється як великий текст із порогом 3:1.
- Сильні сторони: один H1 на route, зрозумілий порядок H2/H3, прямі посилання до pilot і пояснювальних сторінок, реальні фото та локальні Figma assets, видимі focus styles shared controls, native form controls і підтримка reduced motion.

## Заплановане виправлення й межі

Головний агент уже передав три вузькі правки на окрему реалізацію: `.06em` для eyebrows, secondary inverse тон Home permission і `--lc-link` для About speaking caption. Їх не слід вважати виконаними на підставі цього звіту. Після внесення правок достатньо повторно звірити computed styles і контраст цих трьох місць та виконати короткий візуальний контроль Home/How/About; наступним кроком є `/impeccable polish`.

## Перевірка після полірування

Повторно перевірено у браузері 24.09.2026 після правок користувача:

- Усі три базові знахідки виправлено: eyebrow 14px має computed letter-spacing 0.84px; Home lead #D5DFEE та permission #B7C7DD; About speaking label #B84444.
- Додатково виявлено й виправлено надмірну специфічність Home margin reset через `:where()`: фактичний відступ H1 під бейджем 24px, абзацу Independence 28px desktop / 22px mobile.
- CTA використовує погоджений світлий кораловий градієнт із білим 20px/700 текстом. Великий coral заголовок отримав окремий #E85F5F токен.
- Іконка та малий текст прикладу How мають однаковий #CF4747 (4.52:1 на білому); SVG mask наслідує currentColor. NIA отримав ↗; внутрішні посилання лишилися →.
- Home: видалено підпис під hero фото, телефон зменшено на 6%, THIS WEEK опущено на 30px; виправлено crop фото, ширину бейджа, desktop перенос lead, баланс signal cards, вагу Speak/Type.
- About: замість низькороздільних Lar/statusbar використано наявний високоякісний Lar та DOM/SVG; прибрано вбудовані бокові лінії. NIA став єдиним текстовим потоком замість непропорційних колонок.
- Оглянуто desktop та mobile Home/How/About, зокрема фактичні ширини 354/390 і 1440/1584px: у перевірених станах горизонтальний overflow 0. Нижні краї текстів перших двох signal cards відрізняються менш ніж на 1px.

Це перевірка конкретних виправлень, а не новий повний аудит чи підвищення оцінки 15/20. Lighthouse, text zoom і повний keyboard walkthrough повторно не виконувалися.

Остання додаткова правка: How family benefits отримали три Lucide іконки (FileText / Bell / Phone), 28px, stroke 1.5, gap 20px. Після неї ESLint і TypeScript пройшли; production build та 8 mocked tests пройшли перед цією локальною зміною. Локальний dev server на 3100 відновлено для безперервного перегляду.
