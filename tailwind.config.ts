import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FAF7F2",
        "paper-2": "#F2EEE6",
        "paper-3": "#E8E2D6",
        "paper-edge": "#DCD4C4",
        ink: "#1A1A1A",
        "ink-2": "#3A3733",
        "ink-3": "#6B665E",
        "ink-4": "#9C968A",
        rule: "#E2DCCE",
        "rule-strong": "#C9C0AD",
        accent: "#7A2E2A",
        "accent-hover": "#5C201D",
        "accent-tint": "#F0E2DF"
      },
      fontFamily: {
        serif: [
          "'Source Serif 4'",
          "'Source Serif Pro'",
          "'Iowan Old Style'",
          "Charter",
          "Georgia",
          "serif"
        ],
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "'Helvetica Neue'",
          "sans-serif"
        ],
        mono: [
          "'JetBrains Mono'",
          "'SF Mono'",
          "ui-monospace",
          "Menlo",
          "Consolas",
          "monospace"
        ]
      },
      maxWidth: {
        content: "1240px",
        prose: "64ch",
        narrow: "48ch"
      }
    }
  },
  plugins: []
};

export default config;
