# Reflection content model

This folder is a placeholder for future MDX or CMS-synced reflection entries. The live static site currently reads `content-reflections.js`, where each reflection supports:

- `titleKey`
- `excerptKey`
- `date`
- `categoryKey`
- `coverImage`
- `slug`
- `contentPath`
- rich-content translation keys for quote and prompt

When the site moves to Next.js, these fields can map directly into an MDX/content collection schema without changing the front-end card architecture.
