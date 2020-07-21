// Docs at https://v2.docusaurus.io/docs/configuration
module.exports = {
  title: 'Open Developer Platform',
  tagline: 'Delivering open source software development best practices whilst enforcing security and legal compliance for the financial services industry',
  url: 'https://odp.finos.org',
  baseUrl: '/',
  favicon: 'img/favicon/favicon-odp.ico',
  projectName: 'open-developer-platform',
  organizationName: 'finos',
  scripts: ['https://buttons.github.io/buttons.js'],

  // TODO - find a place for these
  // ogImage: 'img/undraw_online.svg',
  // twitterImage: 'img/undraw_tweetstorm.svg',
  // twitterUsername: 'FinosFoundation',

  themeConfig: {
    navbar: {
      title: 'Open Developer Platform',
      logo: {
        alt: 'ODP Logo',
        src: 'img/favicon/favicon-odp.ico',
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
      copyright: `Copyright © 2020 - Open Developer Platform - FINOS - The Fintech Open Source Foundation`,
      logo: {
        alt: 'FINOS Logo',
        src: 'img/favicon/favicon-finos.ico',
        href: 'https://finos.org'
      },
      style: 'dark',
      links: [
        {
          title: 'FINOS Initiatives',
          items: [
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
            title: 'Quick links',
            items: [
            {
              label: 'Contributing to ODP',
              to: 'https://odp.finos.org/docs/contributing',
            },
            {
              label: 'Cloud Service Certification Project',
              to: 'https://github.com/finos/cloud-service-certification/wiki',
            },
            {
              label: 'FINOS Project Landscape',
              to: 'http://landscape.finos.org',
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
            },
            {
              label: 'LinkedIn',
              to: 'https://www.linkedin.com/company/finosfoundation',
            },
            {
              label: 'Twitter',
              to: 'https://www.twitter.com/finosfoundation',
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