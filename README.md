# Recipe Archive

A static recipe archive built with [Jekyll](https://jekyllrb.com/). Recipes are Markdown files in `_posts`, with prep time, cook time, servings, and categories in the front matter.

## Requirements

Before you begin, install the [Jekyll prerequisites](https://jekyllrb.com/docs/installation/#requirements):

- **Ruby** 2.7.0 or higher (including development headers). Check with `ruby -v`.
- **RubyGems**. Check with `gem -v`.
- **GCC and Make**. Check with `gcc -v`, `g++ -v`, and `make -v`.

OS-specific setup guides (macOS, Ubuntu, Windows, and others) are linked from the [installation docs](https://jekyllrb.com/docs/installation/#requirements).

## Quickstart

These steps follow the [Jekyll quickstart](https://jekyllrb.com/docs/), adapted for this existing project.

1. **Install prerequisites** (see above).

2. **Clone or download** this repository and change into the project directory:

   ```bash
   cd recipe-archive
   ```

3. **Install dependencies** with Bundler:

   ```bash
   bundle install
   ```

4. **Serve the site locally**:

   ```bash
   bundle exec jekyll serve
   ```

5. **Open** [http://localhost:4000](http://localhost:4000) in your browser.

Optional flags:

- **Live reload** — refresh the browser when you edit files:

  ```bash
  bundle exec jekyll serve --livereload
  ```

- **Production build** — generate static files into `_site/`:

  ```bash
  bundle exec jekyll build
  ```

### Ruby 3.0+

If `bundle exec jekyll serve` fails on Ruby 3.0 or newer, add the `webrick` gem:

```bash
bundle add webrick
```

Then run `bundle exec jekyll serve` again. See the [quickstart notes](https://jekyllrb.com/docs/) for details.

## Adding recipes

Create a file in `_posts` named `YEAR-MONTH-DAY-slug.markdown` (for example, `2026-05-25-sourdough-bread.markdown`):

```yaml
---
title: "Your Recipe Name"
date: 2026-05-25
categories: main dinner
prep_time: 15 min
cook_time: 30 min
servings: 4
---

## Ingredients

- ...

## Instructions

1. ...
```

The `recipe` layout is applied automatically to all posts. Restart `jekyll serve` if you change `_config.yml`.

## Project layout

| Path | Purpose |
|------|---------|
| `_posts/` | Recipe Markdown files |
| `_layouts/` | Page layouts (`recipe`, `home`) |
| `_includes/` | Reusable fragments (e.g. recipe metadata) |
| `_config.yml` | Site title, description, defaults |
| `assets/` | Stylesheets |
| `index.markdown` | Home page |

## GitHub Pages

This repo is set up as a [GitHub Pages project site](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites).

1. Push to GitHub (repository name `recipe-archive` → site at `https://goebers.github.io/recipe-archive/`).
2. In the repo: **Settings → Pages → Build and deployment → Source**: choose **GitHub Actions**.
3. Push to `master`; the workflow in `.github/workflows/pages.yml` builds and deploys `_site`.

`url` and `baseurl` in `_config.yml` must match your GitHub username and repo name. If the repo name differs, update `baseurl` (e.g. `/my-repo-name`).

For local preview with the same paths as production:

```bash
bundle exec jekyll serve --baseurl /recipe-archive
```

Then open [http://localhost:4000/recipe-archive/](http://localhost:4000/recipe-archive/).

## Learn more

- [Jekyll documentation](https://jekyllrb.com/docs/)
- [Installation](https://jekyllrb.com/docs/installation/)
- [Posts](https://jekyllrb.com/docs/posts/)
- [Front matter](https://jekyllrb.com/docs/front-matter/)
