# Adding a portfolio project

Use [the project template](templates/portfolio-project.md) to turn a repository into a concise, evidence-based portfolio case study. Every Markdown file in `src/content/projects` becomes a live project automatically, so keep drafts elsewhere and only copy the completed file into that directory.

## AI workflow prompt

Give the AI access to the current project repository, then use this prompt:

```text
Inspect the current repository and create a portfolio case study using
docs/templates/portfolio-project.md.

Base every statement on evidence in the repository. Inspect the README, package
manifest, source structure, key user flows, tests, deployment configuration,
assets, and git history when available. Do not invent metrics, users, business
results, responsibilities, dates, or technical decisions. Mark genuinely missing
information with a clear TODO for me.

Write for a hiring manager and a technical reviewer. Emphasize the problem,
my contribution, important decisions and trade-offs, user value, and verified
outcomes. Use clear first-person language, short paragraphs, and specific examples.
Avoid generic claims, marketing filler, and a section that merely repeats the
technology list.

Select 5–8 screenshots that tell a story. Recommend the exact page, state,
viewport, and detail to capture for each one. Prefer meaningful workflows,
responsive states, difficult interactions, before/after evidence, accessibility or
performance evidence, and technically distinctive features over several similar
homepage images. Name the proposed files in narrative order using a numeric prefix.

Derive a restrained portfolio theme from the project's visual identity. Propose:
- themeColor: the recognizable accent/brand color used by headers and input borders;
- themeBgColor: a calm page background that supports long-form reading;
- themeTextColor: a high-contrast text/border color on that background.
Use CSS color values and verify that themeTextColor against themeBgColor reaches at
least WCAG AA contrast for normal text (4.5:1). If no brand system exists, derive a
coherent palette from the UI and explain the choice outside the finished Markdown.

Return:
1. the completed Markdown file;
2. a screenshot capture checklist, including anything that must be staged or
   anonymized;
3. a short list of TODOs or claims that need my confirmation.
```

## Frontmatter reference

The filename and `link` should match: `src/content/projects/my-project.md` uses `link: 'my-project'`. The site uses these fields as follows:

| Field | Purpose |
| --- | --- |
| `title` | Project name shown on its card and detail page. |
| `picture` | Card/logo image, stored in `public/images/projects/`. Use a public path beginning with `/images/projects/`. |
| `description` | Short card description. Make it understandable without opening the project. |
| `shortText` | Additional project summary retained by the project data model. Keep it useful even though the current card does not render it. |
| `link` | URL slug and image-folder name. It should match the Markdown filename. |
| `type` | Compact category such as `Front-end`, `Full-stack`, or `Design system`. |
| `tech` | A short list of technologies that materially shaped the work. |
| `images` | Gallery filenames only, not full paths. Images resolve from `public/images/projectImages/<link>/`. The first is the large lead image; up to four following images appear as previews, and all are available in the modal gallery. |
| `links.demoLink` | Optional live product/demo URL. Remove the property if unavailable. |
| `links.sourceLink` | Optional repository URL. Remove it for private source. |
| `links.readMe` | Optional raw, publicly fetchable README URL. Supplying it enables the README panel. |
| `startDate` | Optional project start date. Prefer ISO `YYYY-MM-DD`. |
| `launchDate` | Used to sort the projects listing newest first. Prefer ISO `YYYY-MM-DD`. |
| `themeColor` | Project accent applied to the page header and input borders. |
| `themeBgColor` | Optional project page background. It is only applied when `themeTextColor` is also present. |
| `themeTextColor` | Optional main text and border color. It is only applied when `themeBgColor` is also present. |

Use valid YAML values. Keep the `links` object even when it contains only one link, because the project page reads from it. Remove unused link properties rather than leaving placeholder URLs.

## Writing the case study body

The content below the closing `---` is the project’s main case study. Existing projects range from a one-line summary to a detailed account; the strongest existing pattern is the Silvester case study, which combines a concrete goal, personal context, measured before/after results, screenshots, feature highlights, and technical takeaways. The template turns that pattern into a consistent narrative:

1. **Overview:** Orient the reader quickly—product, audience, and value.
2. **Challenge:** Establish the problem and constraints so later decisions have meaning.
3. **My role:** Make personal ownership unambiguous, especially for team projects.
4. **Solution:** Explain the approach and trade-offs, supported by the strongest screenshot.
5. **Highlights:** Offer a scannable mix of user-facing and engineering achievements.
6. **Technical approach:** Show judgment and depth, not just familiarity with tools.
7. **Outcome:** Close the loop with verified impact or an honest shipped status.
8. **What I learned:** Add a brief personal reflection and demonstrate growth.

The body supports headings, paragraphs, lists, links, emphasis, blockquotes, inline code, and images. Reference body images with full public paths such as:

```md
![Search results grouped by content type](/images/projectImages/my-project/04-search-results.png)
_Search results use different layouts for pages, locations, and videos._
```

Use descriptive alt text instead of `![image]`. Captions should tell the reader what to notice rather than restating the alt text.

## Screenshot plan

Aim for 5–8 distinct images in a logical sequence:

1. A polished desktop or device-framed view that communicates the product immediately.
2. The primary user workflow at its most informative state—not an empty screen.
3. A second feature that demonstrates breadth or complexity.
4. A responsive/mobile or accessibility-focused state.
5. A technically distinctive detail, admin workflow, visualization, or integration.
6. Verified evidence such as a before/after comparison or performance result, when available.

Use consistent dimensions when practical, crop out browser clutter, and remove secrets and personal data. Keep text legible at the gallery’s displayed size. Put filenames in the frontmatter `images` array; embed only the most useful supporting images again in the body where the prose discusses them.

## Theme colors

Choose the accent from the project’s logo, primary action, or most recognizable UI color. Choose the background and text as a readable pair rather than using highly saturated brand colors for the whole page. Check contrast with browser developer tools or a WCAG contrast checker:

- Normal text: at least `4.5:1`.
- Large text: at least `3:1`.
- UI boundaries and meaningful graphics: at least `3:1` against adjacent colors.

If only `themeColor` is set, the portfolio retains its normal background and text colors. To customize the page background, always provide both `themeBgColor` and `themeTextColor`.

## Publish checklist

- Save the final file as `src/content/projects/<link>.md`.
- Add the card image to `public/images/projects/`.
- Add gallery/body images to `public/images/projectImages/<link>/`.
- Confirm every filename and its capitalization match exactly.
- Remove placeholders, unverified claims, private information, and unavailable links.
- Check that the first gallery image is the strongest one.
- Preview the listing and `/projects/<link>` page at desktop and mobile widths.
- Verify links, image modal behavior, color contrast, and project ordering.
- Run the project’s lint/build checks before publishing.
