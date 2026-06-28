/**
 * Lunara IT — Design Tokens
 * Fuente única de verdad para colores, tipografía y escalas.
 * Conectar estos valores a tailwind.config.ts (theme.extend).
 */

export const colors = {
  // Acento principal — violeta lunar
  violet: {
    DEFAULT: "#7C3AED",
    dark: "#5B21B6",   // hover, profundidad
    light: "#EDE9FE",  // fondos suaves
  },
  // Base oscura — noche, no negro plano
  night: "#0F0E17",
  // Texto sobre fondo claro
  ink: "#1A1A2E",
  // Neutros
  gray: {
    50: "#FAFAFA",
    100: "#F4F4F5",
    200: "#E4E4E7",
    400: "#A1A1AA",
    600: "#52525B",
    800: "#27272A",
  },
  white: "#FFFFFF",
};

export const fonts = {
  // Nombre de marca y títulos de impacto
  serif: ['"Playfair Display"', "Georgia", "serif"],
  // UI, cuerpo, navegación
  sans: ['"Inter"', "system-ui", "sans-serif"],
  // Detalles técnicos, etiquetas, código
  mono: ['"JetBrains Mono"', "monospace"],
};

export const radii = {
  sm: "6px",
  md: "10px",
  lg: "16px",
  pill: "999px",
};

export const spacing = {
  section: "6rem", // separación vertical entre secciones
};

export const brand = {
  name: "Lunara",
  full: "Lunara IT",
  handle: "@lunarait",
  tagline: "Tecnología cercana para personas y empresas.", // placeholder, ajustar
};
