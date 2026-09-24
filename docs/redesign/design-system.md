# LaresCare — дизайн-система лендінга v1

[Foundations у Figma](https://www.figma.com/design/3kvJHevjr4infPgV2DOtXc/LaresCare?node-id=538-333) · [Спільні компоненти](https://www.figma.com/design/3kvJHevjr4infPgV2DOtXc/LaresCare?node-id=482-207) · [План переносу](./migration-plan.md)

Це підготовлена основа для реалізації, знята з поточних Figma frames 24.09.2026. Тема CSS ще не підключена до сайту; нові React-варіанти та interaction states реалізуються за планом. Figma — джерело візуального вигляду, існуючий Next.js-проєкт — джерело routes та інтеграцій.

## Кольори

CSS: `src/design-system/tokens.css`, область `[data-design-system="landing"]`.

| Примітив | HEX | Призначення |
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
| `--lc-gradient-start` | #B84444 | Темний край primary CTA, знизу ліворуч |
| `--lc-gradient-end` | #C64B43 | Світлий край primary CTA, зверху праворуч |

Семантичний шар: `bg-page → cream`, `bg-card → white`, `bg-muted → surface`, `bg-inverse → navy`, `text-primary → navy`, `text-secondary → secondary`, `text-inverse → white`, `border-subtle → line`, `link-light → link`, `focus → navy`.

У Figma колекція `Landing / Web foundations` містить 27 variables; семантичні кольори посилаються на чинні variables, а не дублюють HEX. Два кольори градієнта прив'язані до gradient stops primary component та його екземплярів. WEB syntax відповідає іменам CSS.

Білий напис на затвердженому темнішому CTA-градієнті має контраст щонайменше 4,68:1 за кінцевими кольорами. Обидва кольори та напрям уже застосовано у Figma. Coral не використовувати довільно як дрібний текст на cream/white; для такого тексту є `link-light`.

## Типографіка

Manrope: Regular 400, Medium 500, SemiBold 600. Дев'ять Figma text styles створено з наявної desktop-типографіки. Локальні файли шрифтів ще не додано; перед активацією теми потрібне завантаження через `next/font`.

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

## Layout та форма

- Desktop canvas 1440px, max-width контенту 1280px, бокові поля 80px.
- Спільна шкала відступів: 4, 8, 12, 16, 24, 32, 48, 64, 80px. Це базова шкала; не округляти всі деталі макета до неї автоматично.
- Primary/outline button: min-height 56px, radius 12px; текст 18/28. Link hit area — 44px.
- Pilot form: desktop width 560px, radius 32px; mobile width 100%, без fixed-height контейнера.
- Mobile початкові значення: gutters 20px, section spacing 48px. Breakpoints перевірити на 768/1024px; CSS grid/flex замість абсолютного позиціонування макета.
- Anchor `scroll-margin-top` узгодити з реальною висотою header. Reduced motion має вимикати smooth scrolling і необов'язкові анімації.

## Компоненти та відповідність коду

У Figma вже є вісім основних компонентів. Вони збережені, описані й перевикористовуються; radius кнопок і форми прив'язано до нових variables. Шляхи нижче — точки адаптації або майбутні компоненти, а не твердження про готовий новий UI. Code Connect ще не публікувався.

| Figma / node | Код | Робота під час переносу |
| --- | --- | --- |
| Primary button / `483:205` | `src/components/Button.tsx` | Новий landing variant; semantic button або Link; default, hover, focus-visible, disabled, submitting; без scale jump |
| Outline button / `483:208` | той самий `Button` | Outline variant, інверсне оточення, keyboard focus |
| Header / `484:224` | `SiteHeader.tsx`, `MobileNav.tsx` | Desktop/mobile, active route, open/closed menu, Escape, focus return; primary CTA `/#pilot` |
| Footer / `485:305` | `SiteFooter.tsx` | Responsive columns, усі URL та social/contact targets |
| Pilot form / `486:396` | `ContactForm.tsx` | Audience radio, name/email, optional note; idle/invalid/submitting/success/error |
| Text link Light / `486:2024` | Запланований `TextLink` | Темне посилання для світлого тла, focus/hover; native anchor |
| Text link Dark / `486:2029` | той самий `TextLink` | Контрастний variant для темного тла; перевірити контраст |
| Pilot section / `491:459` | Запланований `PilotSection` + `ContactForm` | Одна shared composition для Home і About, різні section IDs |

Додаткові патерни для реалізації: `Container`, `Section`, `Card` адаптувати з наявних; FAQ item реалізувати через native `details/summary` або доступний accordion. З макета перенести початково видимі відповіді; collapse/expand не має ховати весь зміст без зрозумілого control. Signal cards, family summary й quote залишаються статичним поясненням продукту, якщо їхню інтерактивність не затверджено окремо.

Поведінку hover/focus, mobile menu і backend states не можна вважати готовою за одним desktop screenshot. Їхні матриці мають бути перевірені у браузері під час реалізації.

## Контракти та збережені рішення

- Навігація: Home → `/`; Why LaresCare → `/about`; How it works → `/how-it-works`.
- Primary navigation CTA: `/#pilot`. Submit-кнопки всередині форм відправляють форму, а не виконують navigation.
- Form payload зберігає `name, email, message`. Audience додається на початок message: `Who is this for: Myself` або `Who is this for: A loved one`, optional note — після двох переносів рядка.
- Карта Figma node → section ID → route: [migration-plan.md](./migration-plan.md#карта-секцій), machine-readable snapshot: [figma-source.json](./figma-source.json), константи: `src/design-system/sections.ts`.
- Усі чинні routes зберігаються. Production layout та форми в цій підготовці не змінені.
