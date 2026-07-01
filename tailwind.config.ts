import type { Config } from "tailwindcss";

/**
 * Custom Tailwind theme — referenced from app/globals.css via @config.
 * Extend here instead of using default palette utilities everywhere.
 */
const config: Config = {
  theme: {
    extend: {
      colors: {
        // Restrained palette: deep slate primary, warm accent, soft sage secondary
        primary: {
          DEFAULT: "#1e3a5f",
          light: "#2d4a6f",
          dark: "#152a45",
        },
        accent: {
          DEFAULT: "#e07a5f",
          light: "#eba08c",
          dark: "#c4624a",
        },
        sage: {
          DEFAULT: "#84a98c",
          light: "#a8c4ae",
          dark: "#6b8f73",
        },
        surface: {
          DEFAULT: "#faf9f7",
          muted: "#f0eeea",
          elevated: "#ffffff",
        },
        ink: {
          DEFAULT: "#1a1a1a",
          muted: "#5c5c5c",
          subtle: "#8a8a8a",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      spacing: {
        section: "5rem",
        "section-lg": "7rem",
      },
      maxWidth: {
        content: "72rem",
      },
      borderRadius: {
        card: "0.75rem",
      },
      boxShadow: {
        card: "0 4px 24px -4px rgba(30, 58, 95, 0.08)",
        "card-hover": "0 12px 40px -8px rgba(30, 58, 95, 0.16)",
      },
    },
  },
};

export default config;
