/* eslint-disable import/no-commonjs */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

require('dotenv-flow').config();

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Demo',
  tagline: 'Please make this work',
  url: 'https://demo.demo',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'Demo', // Usually your GitHub org/user name.
  projectName: 'Demo Developers', // Usually your repo name.
  customFields: {
    // eslint-disable-next-line no-process-env
    graphqlUrl: process.env.GRAPHQL_URL,
    // eslint-disable-next-line no-process-env
    githubToken: process.env.GITHUB_ACCESS_TOKEN,
    // eslint-disable-next-line no-process-env
    authToken: process.env.AUTH_TOKEN,
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: false,
        docs: {
          breadcrumbs: false,
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', // Serve the docs at the site's root
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        items: [
          {
            type: 'doc',
            docId: 'explorer',
            position: 'left',
            label: 'Explorer',
          }
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
