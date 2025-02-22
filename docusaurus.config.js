// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const theme = require("shiki/themes/nord.json");
const { remarkCodeHike } = require("@code-hike/mdx");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Serverless Java",
  tagline: "Build serverless applications on AWS with Java",
  url: "https://serverlessjava.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "jeastham1993", // Usually your GitHub org/user name.
  projectName: "serverlessjava.github.io", // Usually your repo name.
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  themes: ["mdx-v2"],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          beforeDefaultRemarkPlugins: [[remarkCodeHike, { theme }]],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: [
            require.resolve("@code-hike/mdx/styles.css"),
            require.resolve("./src/css/custom.css"),
          ],
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          filename: "sitemap.xml",
        },
        gtag: {
          trackingID: "G-FSSGF9229H",
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: "keywords",
          content: "java, serverless, aws, aws lambda, spring boot",
        },
      ],
      navbar: {
        title: "Serverless Java",
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Docs",
          },
          {
            href: "https://github.com/jeastham1993/serverless-java.github.io",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Docs",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Built by @plantpowerjames",
            items: [
              {
                label: "@plantpowerjames",
                to: "https://twitter.com/plantpowerjames",
              },
              {
                label: "Report Issues on GitHub",
                to: "https://github.com/jeastham1993/serverless-java.github.io",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Serverless Java. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
