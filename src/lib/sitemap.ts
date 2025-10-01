// Sitemap generation utility for multilingual SEO
import { Language } from '@/data/translations';

export interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
  alternate?: Array<{
    hreflang: string;
    href: string;
  }>;
}

export class SitemapGenerator {
  private baseUrl: string;
  private languages: Language[];

  constructor(baseUrl: string = 'https://infofi-hub.com') {
    this.baseUrl = baseUrl;
    this.languages = ['en', 'es', 'fr', 'de', 'ja', 'ko', 'zh', 'ar'];
  }

  // Generate sitemap XML
  generateSitemap(): string {
    const urls = this.generateUrls();
    
    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" ';
    sitemap += 'xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';

    urls.forEach(url => {
      sitemap += '  <url>\n';
      sitemap += `    <loc>${url.loc}</loc>\n`;
      sitemap += `    <lastmod>${url.lastmod}</lastmod>\n`;
      sitemap += `    <changefreq>${url.changefreq}</changefreq>\n`;
      sitemap += `    <priority>${url.priority}</priority>\n`;
      
      if (url.alternate) {
        url.alternate.forEach(alt => {
          sitemap += `    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${alt.href}" />\n`;
        });
      }
      
      sitemap += '  </url>\n';
    });

    sitemap += '</urlset>';
    return sitemap;
  }

  // Generate robots.txt content
  generateRobotsTxt(): string {
    let robots = 'User-agent: *\n';
    robots += 'Allow: /\n\n';
    
    // Add sitemap references for each language
    this.languages.forEach(lang => {
      robots += `Sitemap: ${this.baseUrl}/${lang}/sitemap.xml\n`;
    });
    
    robots += `Sitemap: ${this.baseUrl}/sitemap.xml\n`;
    
    return robots;
  }

  // Generate individual language sitemaps
  generateLanguageSitemap(language: Language): string {
    const urls = this.generateUrlsForLanguage(language);
    
    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    urls.forEach(url => {
      sitemap += '  <url>\n';
      sitemap += `    <loc>${url.loc}</loc>\n`;
      sitemap += `    <lastmod>${url.lastmod}</lastmod>\n`;
      sitemap += `    <changefreq>${url.changefreq}</changefreq>\n`;
      sitemap += `    <priority>${url.priority}</priority>\n`;
      sitemap += '  </url>\n';
    });

    sitemap += '</urlset>';
    return sitemap;
  }

  // Generate sitemap index
  generateSitemapIndex(): string {
    let index = '<?xml version="1.0" encoding="UTF-8"?>\n';
    index += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    this.languages.forEach(lang => {
      index += '  <sitemap>\n';
      index += `    <loc>${this.baseUrl}/${lang}/sitemap.xml</loc>\n`;
      index += `    <lastmod>${new Date().toISOString()}</lastmod>\n`;
      index += '  </sitemap>\n';
    });

    index += '</sitemapindex>';
    return index;
  }

  private generateUrls(): SitemapUrl[] {
    const urls: SitemapUrl[] = [];
    const now = new Date().toISOString();

    // Generate URLs for each language
    this.languages.forEach(lang => {
      urls.push({
        loc: `${this.baseUrl}/${lang}`,
        lastmod: now,
        changefreq: 'daily',
        priority: 1.0,
        alternate: this.generateAlternateLinks(lang)
      });
    });

    return urls;
  }

  private generateUrlsForLanguage(language: Language): SitemapUrl[] {
    const urls: SitemapUrl[] = [];
    const now = new Date().toISOString();

    // Main page
    urls.push({
      loc: `${this.baseUrl}/${language}`,
      lastmod: now,
      changefreq: 'daily',
      priority: 1.0
    });

    // Add more pages as they're created
    // Example: About page, Contact page, etc.
    // urls.push({
    //   loc: `${this.baseUrl}/${language}/about`,
    //   lastmod: now,
    //   changefreq: 'monthly',
    //   priority: 0.8
    // });

    return urls;
  }

  private generateAlternateLinks(currentLang: Language): Array<{ hreflang: string; href: string }> {
    return this.languages.map(lang => ({
      hreflang: lang,
      href: `${this.baseUrl}/${lang}`
    }));
  }
}

// Export utility functions for easy use
export const generateSitemap = (baseUrl?: string): string => {
  const generator = new SitemapGenerator(baseUrl);
  return generator.generateSitemap();
};

export const generateRobotsTxt = (baseUrl?: string): string => {
  const generator = new SitemapGenerator(baseUrl);
  return generator.generateRobotsTxt();
};

export const generateLanguageSitemap = (language: Language, baseUrl?: string): string => {
  const generator = new SitemapGenerator(baseUrl);
  return generator.generateLanguageSitemap(language);
};

export const generateSitemapIndex = (baseUrl?: string): string => {
  const generator = new SitemapGenerator(baseUrl);
  return generator.generateSitemapIndex();
};
