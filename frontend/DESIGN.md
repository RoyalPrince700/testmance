# TestMancer design system

Use this file for every UI change. The source of truth for colors and type is `src/index.css`. If a token changes, update that file and this document together.

Home, courses, course detail, about, contact, terms, privacy, login, signup, the auth callback, dashboard, quiz hub, chapter quizzes, CA, exam, results, profile, the leaderboard, the chapter reader, and admin use these tokens.

## References

The structure follows Google for Education: one accent, a near-white canvas, hairline borders, pill controls, and large tightly tracked headlines.

Type and tokens follow Vercel Geist: one family, semantic colors, and `light-dark()` so light and dark stay in sync.

Color comes from the logo, not from a generic purple theme.

| Role | Hex | Where it appears |
| --- | --- | --- |
| Logo magenta | `#EC4899` | The mark only |
| Logo teal | `#14B8A6` | Sampled brand color. Darkened for buttons so white text stays readable |
| Logo gold | `#FACC15` | Gems only |

## Color

Tokens flip with the theme. Use the utility name. Do not write `dark:bg-gray-900` or a raw hex on new UI.

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `canvas` | `#f4f7f6` | `#101413` | Page background |
| `surface` | `#ffffff` | `#1a211f` | Nav, cards, menus, footer |
| `ink` | `#14201e` | `#f3f6f5` | Headlines and primary text |
| `graphite` | `#3d4a47` | `#d5ddda` | Body copy and nav labels |
| `slate` | `#5c6b67` | `#9aaba6` | Helper text, meta, footer links |
| `line` | `#d7e0dc` | `#2c3835` | Hairline borders and dividers |
| `accent` | `#0f766e` | `#5eead4` | Eyebrows, links, active nav, icons |
| `accent-fill` | `#0f766e` | `#14b8a6` | Primary button background |
| `accent-deep` | `#115e59` | `#2dd4bf` | Primary button hover |
| `accent-soft` | `#e7f6f4` | `#13302c` | Selected rows, icon tiles, active mobile item |
| `on-accent` | `#ffffff` | `#042f2e` | Text on `accent-fill` |
| `gem` | `#a16207` | `#facc15` | Gem counts only |
| `gem-soft` | `#fef9c3` | `#3a3010` | Gem chip background |
| `mark` | `#ec4899` | `#f9a8d4` | Reserved. Do not paint UI with it |

Rules:

- Teal is the only action color. One primary button per view.
- Gold is for gems. Magenta stays on the logo.
- Do not add gradient heroes, rainbow feature colors, or purple as a brand color.
- Page background is `bg-canvas`. Raised areas are `bg-surface` with `border-line`.
- Selection color is already set globally. Do not restyle it per page.

## Type

Geist is loaded in `index.html` and set as `--font-sans`. Do not add a second display font.

| Role | Classes |
| --- | --- |
| Hero | `text-[2.6rem] sm:text-6xl lg:text-[4.5rem] font-medium leading-[1.05] tracking-[-0.03em] text-ink` |
| Section title | `text-3xl md:text-5xl font-medium tracking-[-0.02em] text-ink md:leading-[1.1]` |
| Card title | `text-lg font-medium tracking-tight text-ink` |
| Eyebrow | `text-sm font-medium text-accent` |
| Body | `text-lg leading-relaxed text-graphite` or `text-[15px] leading-relaxed text-slate` |
| Nav and buttons | `text-sm font-medium` |

Headlines are medium, not black or extrabold. Eyebrows are a short teal line, not an uppercase tracking label and not a pulsing badge.

## Layout

- Content width is `max-w-6xl` with `px-5 md:px-8`. The chapter reader uses `max-w-3xl` so a lesson stays readable.
- The home, courses, course detail, about, contact, terms, privacy, login, signup, auth callback, dashboard, quiz hub, chapter quizzes, CA, exam, results, profile, leaderboard, chapter reader, and admin pages are full-bleed. Other routes still use `container mx-auto px-4 py-8` until they are restyled.
- Section padding is `py-20 md:py-28`.
- Separate bands with `border-line`, not a new background color for every section.
- Cards use `rounded-3xl` (24px). Menus and quiz options use `rounded-2xl`. Icon tiles use `rounded-2xl`. Buttons and chips are pills (`rounded-full`).
- Icons are Lucide, 16px in chrome and 20px in feature tiles, `strokeWidth={1.75}`.

## Controls

Primary and secondary buttons live in `src/index.css` as `.btn-primary` and `.btn-secondary`. Use those classes. Do not invent a new button style.

- Height is 40px. Hero and closing calls to action use `h-12 px-6 text-base`.
- Primary is `bg-accent-fill text-on-accent`. Hover is `bg-accent-deep`.
- Secondary is a surface fill with a `border-line`.
- Press is `active:translate-y-px`. Do not add a thick 3D shadow.
- A text link beside a primary button is enough for the lower-priority action. Do not put two filled buttons side by side.
- The arrow on a primary link may shift 4px on hover: `group-hover:translate-x-1`.

Nav:

- Sticky, `h-16` on desktop, `border-b border-line bg-surface`. No drop shadow and no blur.
- Active item: `border-b-2 border-accent font-medium text-ink`.
- Inactive item: `text-graphite`, hover `text-ink`.
- Gem chip: `rounded-full bg-gem-soft px-3 py-1 text-sm font-medium text-gem`.
- Menus: `rounded-2xl border border-line bg-surface p-1.5 shadow-lg`.
- Mobile active row: `rounded-xl bg-accent-soft font-medium text-accent`.

## Motion

Motion is short and plays once. The only loop is the slow float on the landing quiz card.

| Piece | How |
| --- | --- |
| Scroll reveal | `src/components/Reveal.jsx`. Rises 16px over 700ms. Stagger about 70–90ms. |
| Hero entrance | `rise-in` with delays of 70, 140, 210, and 280ms |
| Quiz card | `float-card`, 8px, 5.5s, after the entrance |
| Gem reward | `gem-pop`, once |
| Stat numbers | Count up over 900ms when the cell enters view |
| Buttons | 150ms color and a 1px press |

`Reveal` already respects `prefers-reduced-motion`. New motion must do the same. Do not add a second animation library for this. Do not animate the theme toggle, and do not cover the screen while the theme changes.

Quiz feedback that already exists (`.quiz-correct`, `.quiz-wrong`, `.gem-earned`) stays on quiz screens. Do not reuse those keyframes for marketing.

## Copy

Write for undergraduates preparing for CA and exams. Name the real objects: courses, quizzes, gems, leaderboards, results. Keep headlines to two lines. One eyebrow, one title, one sentence, then the action.

## Checklist for a new or restyled screen

1. Page sits on `bg-canvas text-ink`. Cards and bars sit on `bg-surface` with `border-line`.
2. Colors come from the token table. No new hex, no `purple-*`, no `gray-*`, no gradient wash.
3. One primary button, using `.btn-primary`.
4. Type uses the scale above. Geist only.
5. Icons are Lucide. Gems use the gem tokens. The logo file is `src/assets/testmancer-logo.png` at `h-7 w-auto`.
6. If the screen is long, reveal sections with `Reveal`. Skip motion when it would fire on every small control.
7. Check light and dark. `light-dark()` only works while `color-scheme` is set, which `ThemeContext` already does by toggling `.dark` on the document.
8. Check a phone width and a desktop width. The nav collapses below `lg`.

## Do not extend

These are leftovers. Leave them until the screen that uses them is restyled, then delete the use.

- `.gradient-bg`
- `.card-hover`
- `dark:bg-gray-900`, `dark:bg-gray-800`, and `text-purple-*` on new work
