// Turnstile configuration for site-wide captcha
export const TURNSTILE_CONFIG = {
  // You'll need to get these from Cloudflare Dashboard
  SITE_KEY: process.env.VITE_TURNSTILE_SITE_KEY || '0x4AAAAAAABkMYinukE8nzYV0', // Testing key
  
  // Widget configurations
  THEMES: {
    AUTO: 'auto',
    LIGHT: 'light',
    DARK: 'dark'
  } as const,
  
  SIZES: {
    NORMAL: 'normal',
    COMPACT: 'compact',
    FLEXIBLE: 'flexible'
  } as const
};

// Environment configuration
export const isDevelopment = process.env.NODE_ENV === 'development';
export const isProduction = process.env.NODE_ENV === 'production';

export default TURNSTILE_CONFIG;
