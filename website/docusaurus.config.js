// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects using ODP
// TODO - make it work here
const projects = require('./data/projects.json');

module.exports = {
  title: 'Open Developer Platform',
  tagline: 'Delivering open source software development best practices while enforcing security and legal compliance for the financial services industry',
  url: 'https://finos.github.io',
  baseUrl: '/open-developer-platform/',
  favicon: 'img/favicon/favicon-finos.ico',
  projectName: 'open-developer-platform',
  organizationName: 'finos',
  scripts: ['https://buttons.github.io/buttons.js'],
  themeConfig: {
    navbar: {
      title: 'Open Developer Platform',
      logo: {
        alt: 'FINOS Logo',
        src: 'img/favicon/favicon-finos.ico',
      },
      links: [
        {to: 'docs/docs-intro', label: 'Docs', position: 'right'},
        {to: 'docs/roadmap', label: 'Roadmap', position: 'right'},
        {to: 'docs/team', label: 'Team', position: 'right'},
        {
          href: 'https://github.com/finos/open-developer-platform',
          label: 'GitHub',
          position: 'right',
        }
      ],
    },
    footer: {
      logo: {
        alt: 'FINOS Logo',
        src: 'img/favicon/favicon-finos.ico',
        href: 'https://finos.org'
      },
      style: 'dark',
      links: [
        {
          title: 'Comminity',
          items: [
            {
              label: 'OSR Program',
              to: 'https://finosfoundation.atlassian.net/wiki/spaces/OSR',
            },
            {
              label: 'FINOS Project Catalogue',
              to: 'http://finos.github.io',
            },
            {
              label: 'FINOS Community Handbook',
              to: 'https://finosfoundation.atlassian.net/wiki/spaces/FINOS/pages/80642059/Community+Handbook',
            },
            {
              label: 'FINOS Community Governance',
              to: 'https://finosfoundation.atlassian.net/wiki/spaces/FINOS/pages/75530783/Community+Governance',
            },
          ],
        },
      ],
      copyright: `Copyright © 2018 - Open Developer Platform - FINOS - The Fintech Open Source Foundation`,
      ogImage: 'img/undraw_online.svg',
      twitterImage: 'img/undraw_tweetstorm.svg',
      twitterUsername: 'FinosFoundation'    
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: '../docs',
          editUrl:
            'https://github.com/finos/open-developer-platform/edit/master/website/',
          sidebarPath: require.resolve('./sidebars.js')
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        }
      }
    ]
  ]
};