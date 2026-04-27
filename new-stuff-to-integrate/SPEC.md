# What You Can Do — tab integration spec

A new top-level tab next to the existing field guide. Reorganizes the property's species by **action** (eat raw, brew tea, build with bamboo) instead of by species. Two top-level groupings — Kitchen and Workshop — eleven sub-buckets total.

## Files in this drop

- `SPEC.md` — this file. Decisions + integration map.
- `uses-data.js` — content as a JS data structure. Pure data, no rendering.
- `uses-tab-mockup.html` — standalone preview of the rendered tab. Open it in a browser. **This is the visual reference.** Match it.

## Visual reference

Open `uses-tab-mockup.html`. Every visual decision is locked there. The mockup reuses the parent file's CSS variables (`--accent`, `--rule`, etc.), Georgia + IBM Plex Sans + JetBrains Mono fonts, and existing chip / callout / section-rule vocabulary. No new fonts, no new color tokens, no new components.

## Integration into `property_field_guide.html`

### 1. Tab navigation

Insert immediately after the closing `</header>` of `.masthead`:

```html
<nav class="tab-nav" role="tablist" aria-label="Guide sections">
  <button type="button" class="tab is-active" data-tab="guide" role="tab" aria-selected="true">Field Guide</button>
  <button type="button" class="tab" data-tab="uses" role="tab" aria-selected="false">What You Can Do</button>
</nav>
```

### 2. Wrap existing content

Wrap everything from `<p class="lede">…` through `<footer>…</footer>` (i.e., the entire current body) in:

```html
<section class="tab-panel is-active" data-panel="guide" role="tabpanel">
  …existing content…
</section>
```

### 3. Add the uses panel

Immediately after the guide panel:

```html
<section class="tab-panel" data-panel="uses" role="tabpanel" hidden>
  <!-- rendered from uses-data.js on load -->
</section>
```

### 4. CSS additions

Append the `/* ============== USES TAB ============== */` block from the mockup's `<style>`. It's self-contained, reuses existing variables, no conflicts.

### 5. JS additions

Three pieces, in order:

1. **Render** — on `DOMContentLoaded`, read `window.usesData` and render into `[data-panel="uses"]`. The mockup includes the renderer; copy it as-is.
2. **Tab toggle** — clicking a `.tab` button hides all `.tab-panel`s, shows the matching one, updates `.is-active` and `aria-selected`. Mockup includes this.
3. **Cross-tab anchor handler** — when an `<a href="#sp-N">` inside the uses panel is clicked, switch to the guide tab first, then `scrollIntoView` the target after a 50ms timeout. Mockup includes this.

## Design decisions (locked, do not change)

- **Two top-level sections** — Kitchen and Workshop. Same `h2 + .num` kicker treatment as existing parts of the field guide ("PART I", "PART II"). The numbering restarts; this is its own document.
- **Timing tags** — small uppercase chips in each bucket header. Five values: `now`, `weeks`, `summer-fall`, `fall`, `anytime`. Separate class (`.timing`) from `.tag` so they read as metadata, not category.
- **Safety strip** — a `<details>` element above the buckets. Subtle by default (one line summary), expands to two short blocks: "Ask the landscaper" and "Don't eat / keep kids clear". Not a banner. Replaces what would otherwise be a 12th defensive bucket.
- **Plant cross-links** — every plant mentioned in a bucket links to its `#sp-N` field-guide entry by default. Click jumps to the Field Guide tab.
- **No emoji.** No icons. No filter UI. No expand/collapse on buckets.
- **No new fonts, no new variables.**

## Things explicitly chosen not to do

- No filter/search UI inside the uses tab. Timing is read by eye.
- No "Right now" landing view. The `now` and `anytime` tags carry that work.
- No Claude chat embed. Separate decision; deferred.
- No bucket collapse/expand. Flat is more scannable for ~5 items per bucket.
- No reordering of the field guide.

## Mobile

Mockup tested down to 360px. Tab nav wraps; bucket items stack naturally; chips reflow. The existing `@media (max-width: 600px)` block is sufficient — only one new rule needed (in mockup CSS).

## Behavior notes

- Tab state does not persist across reloads. Intentional — page always opens on Field Guide.
- Anchor jumps from uses → guide use `scrollIntoView({ behavior: 'smooth' })` with a small timeout to let the panel render. If the jump feels jumpy on slower devices, increase timeout to 100ms.
- If `window.usesData` fails to load, the uses panel falls back to a one-line "content unavailable" message. The renderer guards for this.
