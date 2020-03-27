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

  // ogImage: 'img/undraw_online.svg',
  // twitterImage: 'img/undraw_tweetstorm.svg',
  // twitterUsername: 'FinosFoundation',

  themeConfig: {
    navbar: {
      title: 'Open Developer Platform',
      logo: {
        alt: 'FINOS Logo',
        src: 'img/favicon/favicon-finos.ico',
      },
      links: [
        {to: 'docs/what-is-odp', label: 'Docs', position: 'right'},
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
      copyright: `Copyright © 2018 - Open Developer Platform - FINOS - The Fintech Open Source Foundation`,
      logo: {
        alt: 'FINOS Logo',
        src: 'img/favicon/favicon-finos.ico',
        href: 'https://finos.org'
      },
      style: 'dark',
      links: [
        {
          title: 'FINOS Programs',
          items: [
            {
              label: 'FinServ Delivery Accelerator',
              to: 'https://finosfoundation.atlassian.net/wiki/spaces/FDX/overview',
            },
            {
              label: 'Open Source Readiness',
              to: 'https://finosfoundation.atlassian.net/wiki/spaces/OSR',
            },
            {
              label: 'Data Technologies',
              to: 'https://www.finos.org/dt',
            },
            {
              label: 'FDC3',
              to: 'https://www.finos.org/fdc3',
            }]
          },
          {
            title: 'FDX Links',
            items: [    
            {
              label: 'Cloud Service Certification Project',
              to: 'https://github.com/finos/cloud-service-certification/wiki',
            },
            {
              label: 'Project Catalogue',
              to: 'http://finos.github.io',
            }]
          },
          {
            title: 'FINOS Community',
            items: [    
            {
              label: 'Community Handbook',
              to: 'https://finosfoundation.atlassian.net/wiki/spaces/FINOS/pages/80642059/Community+Handbook',
            },
            {
              label: 'FINOS Governance',
              to: 'https://finosfoundation.atlassian.net/wiki/spaces/FINOS/pages/75530783/Community+Governance',
            }
          ]
        }
      ]
    },
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