import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FAFAF9",
        "paper-2": "#F3F3F1",
        "paper-3": "#EAEAE7",
        "paper-edge": "#DDDDD9",
        ink: "#1A1A1A",
        "ink-2": "#36373A",
        "ink-3": "#65666B",
        "ink-4": "#97989E",
        rule: "#E6E6E3",
        "rule-strong": "#C7C7C2",
        accent: "#2C4A5E",
        "accent-hover": "#21384A",
        "accent-tint": "#E3EAEF"
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
