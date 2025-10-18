# Cloudflare Turnstile Integration

This project includes Cloudflare Turnstile captcha for basic site-wide bot protection.

## Setup Instructions

### 1. Cloudflare Account Setup
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Sign up for a free account
3. Add your domain `jeet.ing` to Cloudflare
4. Update your domain's nameservers to use Cloudflare

### 2. Turnstile Widget Configuration
1. In Cloudflare Dashboard, go to "Turnstile" section
2. Create a new site with domain `jeet.ing`
3. Copy your Site Key
4. Update environment variable:

```bash
# Create .env.local file
VITE_TURNSTILE_SITE_KEY=your_site_key_here
```

### 3. Netlify Environment Variables
1. Go to Netlify Dashboard → Site Settings → Environment Variables
2. Add the following variable:
   - `VITE_TURNSTILE_SITE_KEY`: Your site key from Cloudflare

## Features Implemented

### ✅ Simple Site Captcha
- **Site-wide Protection**: Users must complete Turnstile challenge to access the site
- **Clean UI**: Minimal, non-intrusive captcha interface
- **Auto Theme**: Automatically matches user's system theme

### ✅ Components Created
- `SiteCaptcha`: Simple captcha component for site access
- `TurnstileProtection`: Core Turnstile widget component (simplified)

## Configuration

### Widget Themes
- `auto`: Automatically matches user's system theme
- `light`: Light theme
- `dark`: Dark theme

### Widget Sizes
- `normal`: Standard size
- `compact`: Smaller size for mobile
- `flexible`: Responsive size

## Testing

The current configuration uses Cloudflare's testing key:
- Site Key: `0x4AAAAAAABkMYinukE8nzYV0`

This key will always pass validation and is perfect for development/testing.

## Security Benefits

1. **Bot Prevention**: Stops automated access to your site
2. **DDoS Protection**: Cloudflare's infrastructure protects against attacks
3. **Performance**: CDN acceleration improves site speed globally
4. **Analytics**: Better insights into real vs. bot traffic

## Next Steps

1. **Deploy to Production**: Update environment variable with real key
2. **Monitor Analytics**: Check Turnstile dashboard for verification metrics
3. **Fine-tune Settings**: Adjust captcha behavior based on usage patterns

## Troubleshooting

### Common Issues
- **Widget not loading**: Check if Site Key is correct
- **CORS errors**: Ensure Cloudflare is properly configured

### Support
- [Cloudflare Turnstile Docs](https://developers.cloudflare.com/turnstile/)
- [Turnstile Testing Guide](https://developers.cloudflare.com/turnstile/get-started/testing/)
