---
id: docusaurus-build-action
title: Docusaurus Build (GitHub) Action
---

The [docusaurus workflow](.github/workflows/docusaurus.yml) defines a GitHub Action that automatically builds the Docusaurus website after any commit.

If a `Push` event occurs on the a Docusaurus file (`website/**`, `docs/**` or `docusaurus.yml`) on a FINOS master branch, the action will simply invoke the `docusaurus-build` command and push the (HTML) result into the `gh-pages` branch.

If the `Push` event occurs on a fork of a repo with this action, the same workflow will follow, and the Docusaurus configuration (`siteConfig.js`) will be patched prior to the build, in order to serve the pages using the personal GitHub account that forked the repo.

If a `Pull Request` is submitted (related to Docusaurus files) against a FINOS repository with this action, beyond following the process described above, the action also adds a comment to the PR with the link to the preview website, containing the changes to the PR (still work in progress).

**IMPORTANT!** After forking the repository, make sure to enable the action, by accessing the `Actions` tab on your fork; Actions of forked repos are not enabled by default for security reasons.

![Enable GitHub Actions on a forked repo](img/enable-actions.png)

No other configuration is needed (no Personal Tokens, as done in Travis CI), this should work out of the box; you can track builds on https://github.com/maoo/finos-fo/actions .