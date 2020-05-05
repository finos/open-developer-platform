This website was created with [Docusaurus v2](https://v2.docusaurus.io/).

# What's In This Document

- [Get Started in 5 Minutes](#get-started-in-5-minutes)
- [Directory Structure](#directory-structure)
- [Editing Content](#editing-content)
- [Adding Content](#adding-content)
- [Full Documentation](#full-documentation)

# Get Started in 5 Minutes

1. Ensure NodeJS is installed
```sh
$ node -v
$ npm -v
```

2. Install and run Docusaurus locally

```sh
$ git clone git@github.com:<your fork>/open-developer-platform.git
$ cd open-developer-platform

# Download dependencies
$ yarn --cwd website install

# Generate contributing.md page
./scripts/build-contribute-page.sh

$ yarn --cwd website start
```
This will open a browser on http://localhost:3300

# Editing Content

## Editing an existing docs page

Edit docs by navigating to `docs/` and editing the corresponding document:

`docs/doc-to-be-edited.md`

```markdown
---
id: page-needs-edit
title: This Doc Needs To Be Edited
---

Edit me...
```

For more information about docs, click [here](https://v2.docusaurus.io/docs/installation#project-structure)

# Adding Content

## Adding a new docs page to an existing sidebar

1. Create the doc as a new markdown file in `/docs`, example `docs/newly-created-doc.md`:

```md
---
id: newly-created-doc
title: This Doc Needs To Be Edited
---

My new content here..
```

2. Refer to that doc's ID in an existing sidebar in `website/sidebars.js`:

```javascript
// Add newly-created-doc to the Getting Started category of docs
module.exports = {
  mainSidebar: {
    'Getting Started': ["what-is-odp", "project-collaboration", "newly-created-doc"]
    ...
  }
  ...
}
```

For more information about adding new docs, click [here](https://v2.docusaurus.io/docs/docs#sidebar)

## Adding items to your site's top navigation bar

1. Add links to docs, custom pages or external links by editing the headerLinks field of `website/docusaurus.config.js`:

```javascript
{
  links: [
    {to: 'docs/what-is-odp', label: 'Docs', position: 'right'},
    {to: 'docs/roadmap', label: 'Roadmap', position: 'right'},
    {to: 'docs/team', label: 'Team', position: 'right'},
    {
      href: 'https://github.com/finos/open-developer-platform',
      label: 'GitHub',
      position: 'right',
    }
  ]
}
```

# Full Documentation

Full documentation can be found on the [Docusaurus v2 website](https://v2.docusaurus.io/).
