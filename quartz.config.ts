import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Thoughts.",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "moseskjw.github.github.io/moses-digital-garden",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Inter",
        body: "Inter",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#ECEFF4",    // Nord Snow Storm — page background
          lightgray: "#D8DEE9", // Nord Snow Storm — borders
          gray: "#9aa5b8",     // muted — graph links
          darkgray: "#4C566A", // Nord Polar Night — body text
          dark: "#2E3440",     // Nord Polar Night — headings, icons
          secondary: "#5E81AC", // Nord Frost — links
          tertiary: "#81A1C1", // Nord Frost — hover
          highlight: "rgba(94, 129, 172, 0.12)",
          textHighlight: "#EBCB8B88", // Nord Aurora yellow
        },
        darkMode: {
          light: "#2E3440",    // Nord Polar Night — page background
          lightgray: "#3B4252", // Nord Polar Night — borders
          gray: "#4C566A",     // Nord Polar Night — graph links
          darkgray: "#D8DEE9", // Nord Snow Storm — body text
          dark: "#ECEFF4",     // Nord Snow Storm — headings, icons
          secondary: "#88C0D0", // Nord Frost — links
          tertiary: "#81A1C1", // Nord Frost — hover
          highlight: "rgba(136, 192, 208, 0.12)",
          textHighlight: "#EBCB8B88", // Nord Aurora yellow
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
