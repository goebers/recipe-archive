# Recipe Archive

A static recipe site built with [Jekyll](https://jekyllrb.com/). Each recipe is a Markdown file in `_posts/`.

## Setup

Requires [Ruby, RubyGems, and GCC/Make](https://jekyllrb.com/docs/installation/#requirements). Then:

```bash
bundle install
```

> On Ruby 3.0+, if serving fails with a `webrick` error, run `bundle add webrick` once.

## Develop

Serve locally at [http://localhost:4000](http://localhost:4000)

```bash
bundle exec rake serve
```

That runs Jekyll with livereload and `_config_dev.yml`, which clears `baseurl` so you don't need `/recipe-archive/` in the URL while developing. Production builds still use `_config.yml` (GitHub Pages paths).

Other tasks: `bundle exec rake build` (static output to `_site/`).

## Add a recipe

Copy `YYYY-MM-DD-slug.markdown` at the repo root to `_posts/`, rename with a real date and slug, and edit. Restart the server after editing `_config.yml`.

## Update dependencies

Gem versions are pinned in `Gemfile` and locked in `Gemfile.lock`.

```bash
bundle update            # update all gems within Gemfile constraints
bundle update jekyll     # update a single gem
bundle outdated          # list gems with newer versions available
```

To move to a new major Jekyll version, bump the constraint in `Gemfile` (e.g. `gem "jekyll", "~> 4.5"`) then run `bundle update jekyll`. Commit the updated `Gemfile.lock`.

## Deploy (GitHub Pages)

Pushing to `master` triggers `.github/workflows/pages.yml`, which builds and deploys to `https://goebers.github.io/recipe-archive/`.

One-time: **Settings → Pages → Build and deployment → Source → GitHub Actions**. If the repo name isn't `recipe-archive`, update `url` and `baseurl` in `_config.yml` to match.

## Project layout

| Path                      | Purpose                                              |
| ------------------------- | ---------------------------------------------------- |
| `_posts/`                 | Published recipes                                    |
| `YYYY-MM-DD-slug.markdown`| Recipe template (excluded from the site build)         |
| `_layouts/`, `_includes/` | Templates and fragments                              |
| `assets/`                 | Styles (`main.scss`) and scripts                     |
| `_config.yml`             | Site config (`_config_dev.yml` overrides it locally) |
