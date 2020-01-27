/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.

const users = require('./data/users.json');

const siteConfig = {
  title: 'Open Developer Platform', // Title for your website.
  tagline: 'Open Developer Platform',
  url: 'https://your-docusaurus-test-site.com', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'ODP',
  organizationName: 'FINOS',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'finos-home', label: 'Docs'},   
    {doc: 'odp-service-catalog', label: 'Use Cases'},
    {doc: 'finos-developer-identity', label: 'Get Involved'},
    {doc: 'odp-service-catalog', label: 'Why ODP'}
   //, {blog: true, label: 'News'}
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/favicon/favicon-finos.ico',   /* change to program/project icon logo */
  footerIcon: 'img/favicon/favicon-finos.ico',  /* change to program/project icon + wordmark logo */
  favicon: 'img/favicon/favicon-finos.ico',  /* change to program/project favicon logo .ico */

  /* Colors for website */
  colors: {
    primaryColor: '#0086bf', /* This changes the top FINOS banner & all links - DO NOT CHANGE */
    secondaryColor: '#0033A0' /* This does not change anything - but keep as the project / program main color */
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} ODP`,  /* CHANGE THIS TO PROJECT / PROGRAM NAME */

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',
  twitterUsername: 'FinosFoundation',

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  // docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/finos/open-developer-platform',
};

module.exports = siteConfig;
