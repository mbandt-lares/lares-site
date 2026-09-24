# Перенесення LaresCare з Figma

Дата: 24 вересня 2026. Статус: три сторінки реалізовано у `codex/new-landing`; локальні перевірки пройдено. Merge і deployment ще не виконані. Результати та межі перевірки: [implementation-validation.md](./implementation-validation.md).

## Джерела та гілки

- Репозиторій: https://github.com/mbandt-lares/lares-site.
- Робочий каталог: `/Users/masan/Developer/lares-site`.
- База: `9dcc3d874f61c2bcca7f957c26c9e1c624d0bf65`; перед початком робоче дерево чисте, `main` збігається з `origin/main`.
- Backup: `codex/backup-before-redesign-2026-09-24`, збережений локально і на origin. Це Git-знімок відстежуваних файлів, не копія deployment settings, env або зовнішніх даних.
- Робоча гілка: `codex/new-landing`, створена від тієї ж бази та опублікована на origin.
- Figma: [Landing Design](https://www.figma.com/design/3kvJHevjr4infPgV2DOtXc/LaresCare?node-id=225-2). Це сторінка Figma, а не один frame.
- Актуальні frames: Home `391:187`, How it works `365:135`, About / Why LaresCare `431:258`.
- [Дизайн-система](https://www.figma.com/design/3kvJHevjr4infPgV2DOtXc/LaresCare?node-id=538-333), [наявні спільні компоненти](https://www.figma.com/design/3kvJHevjr4infPgV2DOtXc/LaresCare?node-id=482-207).

## Підтверджені рішення

1. Перенести всі три сторінки: `/`, `/how-it-works`, `/about`.
2. Основний CTA з усіх сторінок веде на `/#pilot`, форму на Home. Поточний макет About також містить форму: при реалізації вона використовує ту саму логіку; основна навігаційна кнопка все одно веде на Home.
3. Сайт англійською. Мобільна версія адаптується з desktop; окремого мобільного макета не виявлено на Landing Design.
4. Google Sheets залишається. Значення `Myself / A loved one` тимчасово включається в `message`; контракт `name, email, message` не розширюється.
5. Зберегти всі чинні URL, зокрема `/contact`, `/privacy`, `/terms`, `/campaigns/[slug]`, `/studio/[[...index]]`, API та metadata assets.
6. Назва пункту навігації й заголовок сторінки: `How it works`. У Figma змінені Header/Footer, їхні екземпляри й заголовок; контекстні посилання `Read practical details` замінені на `See how it works`.
7. Після порівняння production CTA обрано варіант «Світлий корал»: #E85050 → #EA6255, білий напис 20px/700/28px, радіус 12px, мінімальна висота 56px. Outline залишається 18px/600. Figma наразі містить попередній темний варіант; чинним для сайту є CSS.

## Що вже підготовлено

- Git backup і робоча гілка на GitHub.
- Візуально перевірена правка назви у Figma.
- 27 нових Figma variables: 10 семантичних кольорів через aliases до чинної палітри, 15 розмірів/відступів/радіусів і 2 кольори CTA-градієнта. WEB syntax пов'язано з CSS tokens.
- Дев'ять Manrope text styles та окрема дошка основ дизайн-системи; використовується чинна бібліотека з восьми компонентів, без їх дублювання.
- 24 видимих блоки мають `[#dom-id]` у назві Figma layer. Архівні приховані блоки не входять у карту.
- `src/design-system/tokens.css`: тема з явним підключенням через `data-design-system="landing"`; імпортована у layout, застосована до трьох нових сторінок та їхньої оболонки.
- `src/design-system/sections.ts`: контракт ID, навігації та CTA; застосований до нових сторінок.
- `figma-source.json` — знімок джерел; `figma-state.json` — IDs створених/змінених об'єктів для наступної сесії.

## Послідовність реалізації

### 1. Ресурси та технічна база

- Отримати високодетальний design context і screenshot кожної секції перед реалізацією. Повний frame недостатній для складних вкладених блоків.
- Експортувати точні SVG/зображення логотипа, Lar, фото, mockup і графіки через Figma assets. Створити manifest: Figma node → локальний файл → компонент → alt/decorative. Не використовувати тимчасові MCP URLs у production.
- Підключити Manrope 400/500/600 через `next/font`, перевірити джерело й ліцензію локальних шрифтів. Наявний Urbanist не відповідає макету.
- Підключити landing tokens у межах нових сторінок, перевірити вплив глобальних стилів заголовків та абзаців. Не замінювати палітру старого сайту глобальним search/replace.
- Виправити підтверджену проблему `params` у campaign route під Next.js 16; після цього прибрати `ignoreBuildErrors` і отримати чистий type-check. Це наступний етап, у підготовці помилку лише зафіксовано.

Готово, коли: ресурси локальні та відповідають слотам Figma, Manrope завантажується, TypeScript проходить, старі URL працюють.

### 2. Спільні компоненти

- Адаптувати чинні `Button`, `Container`, `Section`, `Card`, `SiteHeader`, `MobileNav`, `SiteFooter`, `ContactForm`, зберігши сумісність із legacy routes.
- Реалізувати стани та responsive поведінку з [контрактів дизайн-системи](./design-system.md).
- Єдине джерело навігації `landingNavigation`; CTA `pilotHref`. Визначити активний route, забезпечити keyboard navigation, Escape й повернення focus у mobile menu.
- Логотип і декоративні ресурси перевикористовувати, не перемальовувати.

Готово, коли: компоненти перевірені окремо; кнопки, focus, menu і form controls працюють з клавіатури й на touch; відсутні дубльовані реалізації Header/Footer.

### 3. Home → How it works → About

- Home: hero → conversation → signals → family → independence → FAQ → pilot.
- How it works: introduction → process → context → conversation → family → pilot CTA.
- About: hero → conversation → connection → independence → pilot.
- Встановити ID з таблиці нижче, один H1 на сторінку, H2 для основних секцій; header/footer як semantic landmarks.
- Адаптивність: почати з 360/390px, перевірити 768, 1024 і 1440px. Висоти макета — орієнтир desktop, не fixed-height CSS для текстових секцій. На mobile колонки стають вертикальними; порядок DOM відповідає читанню.
- Зберегти точний англійський текст макета. Перевірити кожне внутрішнє, зовнішнє й якірне посилання. Не додавати нові продуктові або медичні обіцянки.

Готово, коли: усі секції й ресурси присутні, тексти не обрізані, немає горизонтального overflow, DOM IDs унікальні на сторінці, усі primary CTA доходять до Home form.

### 4. Форма та чинні сторінки

- Перемикач `Myself / A loved one` — native radio group з доступною назвою.
- Payload: `{ name, email, message }`; `message = "Who is this for: Myself" + (note ? "\\n\\n" + note : "")` або відповідний `A loved one`.
- Контактна форма без перемикача має продовжувати працювати. Не дублювати audience при повторній відправці.
- Стани: idle, invalid, submitting, success, error; блокувати повторне натискання під час запиту. Відкрита optional note має зберігати введений текст.
- API зараз повертає success навіть при помилці HTTP Google Sheets: до релізу виправити хибне підтвердження та перевірити rejection/timeout. Не надсилати реальні тестові заявки під час візуального QA; mock інтеграції, потім окремий погоджений end-to-end запис.
- Перевірити Contact, Privacy, Terms, campaign pages і Studio після підключення спільної оболонки. Зберегти URL, API-контракти та зміст legal pages.

Готово, коли: тести підтверджують правильний audience у message, note optional, email validation, відновлення після помилки та відсутність false success.

### 5. Перевірка і випуск

- Desktop/mobile порівняння з Figma: композиція, шрифт, відступи, ресурси, header/footer, CTA.
- Keyboard і focus, radio/accordion semantics, reduced motion, контраст тексту та controls, scroll offset для anchor.
- `npm run lint`, `npx tsc --noEmit`, `npm run build`; успішний build із `ignoreBuildErrors` не рахується доказом чистої типізації.
- Metadata: окремі title/description для трьох сторінок, canonical/OG і assets; зберегти наявні маршрути. Виміряти LCP/CLS на preview, оптимізувати hero assets без втрати геометрії.
- PR із preview, списком перевірок, desktop/mobile screenshots та відомими обмеженнями. Визначити реальний deployment pipeline за налаштуваннями хостингу: README містить старий repository URL і не є підтвердженням поточного deployment.
- Merge/deploy — окремий крок після готового preview. Backup branch залишається незмінною; rollback через revert release commit або попередній deployment, без force-push/reset main.

## Карта секцій

ID унікальні в межах HTML document. `site-header` і `site-footer` повторюються між різними routes навмисно. `pilot` існує тільки на Home; About використовує `about-pilot`.

### /how-it-works

| DOM ID | Figma node | Блок |
| --- | --- | --- |
| `site-header` | [429:241](https://www.figma.com/design/3kvJHevjr4infPgV2DOtXc/LaresCare?node-id=429-241) | header |
| `how-it-works-hero` | [429:254](https://www.figma.com/design/3kvJHevjr4infPgV2DOtXc/LaresCare?node-id=429-254) | How it works |
| `how-it-works-process` | [372:134](https://www.figma.com/design/3kvJHevjr4infPgV2DOtXc/LaresCare?node-id=372-134) | Connect. Learn. Stay informed. |
| `how-it-works-context` | [430:256](https://www.figma.com/design/3kvJHevjr4infPgV2DOtXc/LaresCare?node-id=430-256) | What information adds context |
| `how-it-works-conversation` | [430:330](https://www.figma.com/design/3kvJHevjr4infPgV2DOtXc/LaresCare?node-id=430-330) | Where conversation fits |
| `how-it-works-family` | [430:299](https://www.figma.com/design/3kvJHevjr4infPgV2DOtXc/LaresCare?node-id=430-299) | What families receive |
| `how-it-works-pilot` | [433:288](https://www.figma.com/design/3kvJHevjr4infPgV2DOtXc/LaresCare?node-id=433-288) | Join the Bay Area pilot |
| `site-footer` | [430:353](https://www.figma.com/design/3kvJHevjr4infPgV2DOtXc/LaresCare?node-id=430-353) | How |

### /

| DOM ID | Figma node | Блок |
| --- | --- | --- |
| `site-header` | [391:188](https://www.figma.com/design/3kvJHevjr4infPgV2DOtXc/LaresCare?node-id=391-188) | header |
| `home-hero` | [391:189](https://www.figma.com/design/3kvJHevjr4infPgV2DOtXc/LaresCare?node-id=391-189) | A little company. A brighter day. |
| `home-conversation` | [391:190](https://www.figma.com/design/3kvJHevjr4infPgV2DOtXc/LaresCare?node-id=391-190) | A story, a question, or just a little company. |
| `home-signals` | [391:191](https://www.figma.com/design/3kvJHevjr4infPgV2DOtXc/LaresCare?node-id=391-191) | Two signals. A fuller picture. |
| `home-family` | [391:192](https://www.figma.com/design/3kvJHevjr4infPgV2DOtXc/LaresCare?node-id=391-192) | More to share. More to talk about. |
| `home-independence` | [391:193](https://www.figma.com/design/3kvJHevjr4infPgV2DOtXc/LaresCare?node-id=391-193) | Built around independence. |
| `home-faq` | [391:194](https://www.figma.com/design/3kvJHevjr4infPgV2DOtXc/LaresCare?node-id=391-194) | A few things to know. |
| `pilot` | [391:195](https://www.figma.com/design/3kvJHevjr4infPgV2DOtXc/LaresCare?node-id=391-195) | Good company. A good place to start. |
| `site-footer` | [391:196](https://www.figma.com/design/3kvJHevjr4infPgV2DOtXc/LaresCare?node-id=391-196) | footer |

### /about

| DOM ID | Figma node | Блок |
| --- | --- | --- |
| `site-header` | [431:259](https://www.figma.com/design/3kvJHevjr4infPgV2DOtXc/LaresCare?node-id=431-259) | header |
| `about-hero` | [431:272](https://www.figma.com/design/3kvJHevjr4infPgV2DOtXc/LaresCare?node-id=431-272) | Care starts with connection. |
| `about-conversation` | [431:322](https://www.figma.com/design/3kvJHevjr4infPgV2DOtXc/LaresCare?node-id=431-322) | Conversation comes first. |
| `about-connection` | [431:353](https://www.figma.com/design/3kvJHevjr4infPgV2DOtXc/LaresCare?node-id=431-353) | The National Institute on Aging describes how social connection relates to health and wellbeing as we age. |
| `about-independence` | [431:364](https://www.figma.com/design/3kvJHevjr4infPgV2DOtXc/LaresCare?node-id=431-364) | Close to them. On their terms. |
| `about-pilot` | [431:387](https://www.figma.com/design/3kvJHevjr4infPgV2DOtXc/LaresCare?node-id=431-387) | Good company. A good place to start. |
| `site-footer` | [431:424](https://www.figma.com/design/3kvJHevjr4infPgV2DOtXc/LaresCare?node-id=431-424) | footer |

## Історичні перевірки підготовки (до реалізації)

- `npm run build`: успішно повторно після останньої зміни CSS; конфігурація досі пропускає type errors.
- `npx tsc --noEmit`: не проходить через наявні синхронні `params` у `src/app/campaigns/[slug]/page.tsx` (потрібен Promise). Підготовлені файли не змінюють цей route.
- `npm run lint -- src/design-system/sections.ts`: успішно після створення файлу.
- Figma: screenshots Header, How introduction, Home і foundations board; виправлено висоту auto-layout карток палітри. Нові variables мають WEB syntax, без ALL_SCOPES; старих точних navigation labels не залишилося.
- Нові сторінки ще не реалізовані, тому browser QA нового сайту та інтеграційна відправка форми ще не виконані.
- Історія підготовки: спочатку у Figma та CSS погодили темніший CTA-градієнт #B84444 → #C64B43 з білим текстом 18px/600. Пізніший вибір production варіанта «Світлий корал» у пункті 7 вище замінив це рішення для сайту; Figma ще не оновлена.
