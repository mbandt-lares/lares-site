# LaresCare — дизайн-система лендінга v1

[Foundations у Figma](https://www.figma.com/design/3kvJHevjr4infPgV2DOtXc/LaresCare?node-id=538-333) · [Спільні компоненти](https://www.figma.com/design/3kvJHevjr4infPgV2DOtXc/LaresCare?node-id=482-207) · [План переносу](./migration-plan.md)

Основу взято з Figma frames 24.09.2026; пізніше для production primary CTA затверджено варіант «Світлий корал». Figma зберігає попередній стан градієнта, а чинні кольори CTA визначає CSS. Next.js-проєкт є джерелом routes та інтеграцій.

## Кольори

CSS: `src/design-system/tokens.css`, область `[data-design-system="landing"]`.

| Токен | HEX | Призначення |
| --- | --- | --- |
| `--lc-navy` | #0F2D5B | Заголовки, темні секції, focus |
| `--lc-coral` | #FF6B6B | Акцент бренду, Lar, декоративні елементи |
| `--lc-ink` | #10213A | Найтемніший текст |
| `--lc-secondary` | #4D5F75 | Другорядний текст |
| `--lc-surface` | #F1F4F8 | FAQ та світлі допоміжні поверхні |
| `--lc-white` | #FFFFFF | Картки, інверсний текст |
| `--lc-border` | #768396 | Контрастна межа controls |
| `--lc-error` | #9B3042 | Текст помилки |
| `--lc-cream` | #FBF7F1 | Основне тло |
| `--lc-peach` | #FBE3DC | Теплий акцентний блок |
| `--lc-action` | #CF4747 | Наявний колір дії; не підміняє CTA-градієнт |
| `--lc-line` | #D8DFE8 | Декоративні роздільники |
| `--lc-link` | #B84444 | Текстове посилання на світлому тлі |
| `--lc-text-accent` | #E85F5F | Великий акцентний текст на cream; не замінює брендове coral |
| `--lc-gradient-start` | #E85050 | Початок primary CTA, знизу ліворуч |
| `--lc-gradient-end` | #EA6255 | Кінець primary CTA, зверху праворуч |
| `--lc-text-secondary-inverse` | #D5DFEE | Основний пояснювальний текст на navy |
| `--lc-text-muted-inverse` | #B7C7DD | Додатковий supporting text на navy |

Семантичний шар: `bg-page → cream`, `bg-card → white`, `bg-muted → surface`, `bg-inverse → navy`, `text-primary → navy`, `text-secondary → secondary`, `text-accent → #E85F5F`, `text-inverse → white`, `text-secondary-inverse → #D5DFEE`, `text-muted-inverse → #B7C7DD`, `border-subtle → line`, `link-light → link`, `focus → navy`. Брендове coral #FF6B6B лишається для декору й акцентів на navy; для великого тексту на cream застосовується `text-accent` (3,16:1). На темній секції заголовок лишається білим, основний абзац стає secondary inverse, короткий додатковий абзац — muted inverse.

У Figma колекція `Landing / Web foundations` містить 27 variables; семантичні кольори посилаються на чинні variables, а не дублюють HEX. Після вибору «Світлий корал» production градієнт у CSS змінився; Figma variables і gradient stops ще показують попередній варіант.

Primary CTA використовує білий напис 20px/700/28px на #E85050 → #EA6255 у напрямі знизу ліворуч догори праворуч. Мінімальний контраст білого на кінцевих кольорах — 3,29:1; напис відповідає порогу 3:1 для великого жирного тексту (від 18,67px). Для дрібних посилань на cream/white залишається `link-light`.

## Типографіка

Manrope: Regular 400, Medium 500, SemiBold 600, Bold 700 для primary CTA. Локальний variable font 200–800 підключено через `next/font/local`. Дев'ять Figma text styles створено з наявної desktop-типографіки.

| Стиль | Size / line-height | Weight |
| --- | --- | --- |
| Display | 82 / 88 | 600 |
| Page title | 60 / 72 | 600 |
| Heading | 58 / 64 | 600 |
| Subheading | 40 / 50 | 600 |
| Card title | 23 / 32 | 600 |
| Body large | 21 / 32 | 400 |
| Body | 18 / 28 | 400 |
| Label | 16 / 22 | 500 |
| Caption | 14 / 20 | 400 |

Це набір спільних стилів, а не автоматична нормалізація всіх заголовків. About hero 68/76, compact heading 44/52, pilot heading 46/54 та інші локальні відмінності зберігаються за джерелом Figma. Стилі створено й показано на foundations board; всі existing text layers не переприв'язувалися, щоб не змінювати їхній letter spacing чи геометрію.

Mobile-пропозиція для реалізації: fluid display приблизно 40–82px, заголовки 32–58px, body 18px; конкретні переноси та line-height перевірити на 360/390px. Не переносити жорсткі desktop line breaks без responsive перевірки.

### Уточнення масштабу після перегляду сайту

Погоджено стримане зменшення великих заголовків без загального масштабування сторінки: Home hero до 76px замість 82px; основні Home H2 52–54px замість 58–60px; About hero 62px замість 68px; How hero 56px замість 60px. Пропорційно зменшено відповідні tablet caps. На вузькому mobile Home H1/H2 залишаються 36px, About/How H1 — від 42px. Нові font-size значення записані в rem. Окремим погодженим проходом основний desktop-текст зменшено з 21–22px до 20px із line-height 30–32px; mobile prose залишається 18px. Контейнер звужено з 1280px до 1200px, сітки Home переведено на пропорційні колонки. Кнопки, ілюстрації та міжблокові відступи збережено. Таблиця вище описує вихідні Figma styles; чинні CSS відображають ці погоджені уточнення.

## Layout та форма

- Desktop canvas 1440px, чинний max-width контенту 1200px (поля 120px на цьому canvas); вихідний Figma max-width — 1280px. Header, footer та pilot узгоджені зі спільним токеном контейнера.
- Спільна шкала відступів: 4, 8, 12, 16, 24, 32, 48, 64, 80px. Це базова шкала; не округляти всі деталі макета до неї автоматично.
- Primary/outline button: min-height 56px, radius 12px; primary текст 20/28, weight 700, outline 18/28, weight 600. TextLink має min-height 44px і додаткову область кліку 8px по вертикалі / 10px по горизонталі без зміщення тексту. Зовнішні URL мають ↗, внутрішні →; стрілка рухається на hover/focus із підтримкою reduced motion.
- Pilot form: desktop width 560px, radius 32px; mobile width 100%, без fixed-height контейнера.
- Mobile початкові значення: gutters 20px, section spacing 48px. Breakpoints перевірити на 768/1024px; CSS grid/flex замість абсолютного позиціонування макета.
- Anchor `scroll-margin-top` узгодити з реальною висотою header. Reduced motion має вимикати smooth scrolling і необов'язкові анімації.

## Компоненти та відповідність коду

У Figma вже є вісім основних компонентів. Вони збережені, описані й перевикористовуються; radius кнопок і форми прив'язано до нових variables. Перелічені компоненти вже реалізовано в гілці нового лендінга. Code Connect ще не публікувався.

| Figma / node | Код | Робота під час переносу |
| --- | --- | --- |
| Primary button / `483:205` | `src/components/landing/LandingButton.tsx` | Production variant «Світлий корал»; semantic button або Link, hover, focus-visible, disabled, submitting; без scale jump |
| Outline button / `483:208` | той самий `LandingButton` | Outline variant 18px/600, інверсне оточення, keyboard focus |
| Header / `484:224` | `SiteHeader.tsx`, `MobileNav.tsx` | Desktop/mobile, active route, open/closed menu, Escape, focus return; primary CTA `/#pilot` |
| Footer / `485:305` | `SiteFooter.tsx` | Responsive columns, усі URL та social/contact targets |
| Pilot form / `486:396` | `PilotForm.tsx` | Audience radio, name/email, optional note; idle/invalid/submitting/success/error |
| Text link Light / `486:2024` | `TextLink.tsx` | Темне посилання для світлого тла, focus/hover; native anchor |
| Text link Dark / `486:2029` | той самий `TextLink` | Контрастний variant для темного тла; перевірити контраст |
| Pilot section / `491:459` | `PilotSection.tsx` + `PilotForm.tsx` | Одна shared composition для Home і About, різні section IDs |

Додаткові патерни для реалізації: `Container`, `Section`, `Card` адаптувати з наявних; FAQ item реалізувати через native `details/summary` або доступний accordion. З макета перенести початково видимі відповіді; collapse/expand не має ховати весь зміст без зрозумілого control. Signal cards, family summary й quote залишаються статичним поясненням продукту, якщо їхню інтерактивність не затверджено окремо.

Поведінку hover/focus, mobile menu і backend states не можна вважати готовою за одним desktop screenshot. Їхні матриці мають бути перевірені у браузері під час реалізації.

## Контракти та збережені рішення

- Навігація: Home → `/`; Why LaresCare → `/about`; How it works → `/how-it-works`.
- Primary navigation CTA: `/#pilot`. Submit-кнопки всередині форм відправляють форму, а не виконують navigation.
- Form payload зберігає `name, email, message`. Audience додається на початок message: `Who is this for: Myself` або `Who is this for: A loved one`, optional note — після двох переносів рядка.
- Карта Figma node → section ID → route: [migration-plan.md](./migration-plan.md#карта-секцій), machine-readable snapshot: [figma-source.json](./figma-source.json), константи: `src/design-system/sections.ts`.
- Усі чинні routes зберігаються. Новий layout і форми реалізовано в гілці `codex/new-landing`; публічний deployment у межах цих правок не виконувався.
