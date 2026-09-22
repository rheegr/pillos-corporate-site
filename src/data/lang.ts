// Shared between src/proxy.ts (edge), the root layout (server) and the
// language context (client).
export const LANG_COOKIE = "pillos-lang";
export const LANG_HEADER = "x-pillos-lang";
export const LANG_COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year
