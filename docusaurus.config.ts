import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import {ADRI_URLS} from './src/constants/urls';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Adri AI',
  tagline: 'AI Agents for SAP ABAP Development',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: ADRI_URLS.docs,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/', // changed from `/adri-docs/` to `/` on setting custom domain in GitHub pages

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'GetAdriAI', // Usually your GitHub org/user name.
  projectName: 'adri-docs', // Usually your repo name.

  onBrokenLinks: 'throw',

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/', 
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/GetAdriAI/adri-docs/tree/main/',
          showLastUpdateTime: true,
          // optionally also show who updated it:
          showLastUpdateAuthor: true,
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: 'ALL',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/GetAdriAI/adri-docs/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: ['/adri-mcp-server/'],
            to: '/adri-mcp-server/mcp-capabilities',
          },
        ],
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/adri-social-card.jpg',
    metadata: [
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Adri AI' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Adri AI',
      logo: {
        alt: 'Adri AI Logo',
        src: 'img/adri-logo-24.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/case-studies', label: 'Case Studies', position: 'left'},
        {to: '/comparisons/adri-vs-sap-joule', label: 'Compare', position: 'left'},
        {
          href: ADRI_URLS.research,
          label: 'Try Adri agents today',
          position: 'right',
          className: 'navbar-cta-button',
        },
        {
          href: 'https://www.linkedin.com/company/adri-ai/',
          label: 'LinkedIn',
          position: 'right',
        },
        {
          href: 'https://github.com/GetAdriAI/adri-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    //
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
