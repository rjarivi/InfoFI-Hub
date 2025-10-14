#!/usr/bin/env node

/**
 * Build script to generate sitemaps and robots.txt for multilingual SEO
 * Run this script after building your static site
 */

import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const languages = ['en', 'es', 'fr', 'de', 'ja', 'ko', 'zh', 'ar'];
const baseUrl = process.env.VITE_BASE_URL || 'https://jeet.ing';
const distDir = process.env.VITE_DIST_DIR || 'dist';

console.log('🗺️  Generating sitemaps for multilingual SEO...');
console.log(`📍 Base URL: ${baseUrl}`);
console.log(`📁 Dist directory: ${distDir}`);

// Simple sitemap generator class
class SitemapGenerator {
  constructor(baseUrl = 'https://jeet.ing') {
    this.baseUrl = baseUrl;
    this.languages = languages;
  }

  generateSitemap() {
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

  generateRobotsTxt() {
    let robots = 'User-agent: *\n';
    robots += 'Allow: /\n\n';
    
    // Add sitemap references for each language
    this.languages.forEach(lang => {
      robots += `Sitemap: ${this.baseUrl}/${lang}/sitemap.xml\n`;
    });
    
    robots += `Sitemap: ${this.baseUrl}/sitemap.xml\n`;
    
    return robots;
  }

  generateLanguageSitemap(language) {
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

  generateSitemapIndex() {
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

  generateUrls() {
    const urls = [];
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

  generateUrlsForLanguage(language) {
    const urls = [];
    const now = new Date().toISOString();

    // Main page
    urls.push({
      loc: `${this.baseUrl}/${language}`,
      lastmod: now,
      changefreq: 'daily',
      priority: 1.0
    });

    return urls;
  }

  generateAlternateLinks(currentLang) {
    return this.languages.map(lang => ({
      hreflang: lang,
      href: `${this.baseUrl}/${lang}`
    }));
  }
}

try {
  // Create dist directory if it doesn't exist
  mkdirSync(distDir, { recursive: true });

  // Initialize sitemap generator
  const generator = new SitemapGenerator(baseUrl);

  // Generate main sitemap
  console.log('📄 Generating main sitemap...');
  const mainSitemap = generator.generateSitemap();
  writeFileSync(join(distDir, 'sitemap.xml'), mainSitemap);

  // Generate sitemap index
  console.log('📋 Generating sitemap index...');
  const sitemapIndex = generator.generateSitemapIndex();
  writeFileSync(join(distDir, 'sitemap-index.xml'), sitemapIndex);

  // Generate robots.txt
  console.log('🤖 Generating robots.txt...');
  const robotsTxt = generator.generateRobotsTxt();
  writeFileSync(join(distDir, 'robots.txt'), robotsTxt);

  // Generate language-specific sitemaps
  console.log('🌍 Generating language-specific sitemaps...');
  languages.forEach(lang => {
    const langSitemap = generator.generateLanguageSitemap(lang);
    const langDir = join(distDir, lang);
    
    // Create language directory
    mkdirSync(langDir, { recursive: true });
    
    // Write language sitemap
    writeFileSync(join(langDir, 'sitemap.xml'), langSitemap);
    
    console.log(`✅ Generated sitemap for ${lang}`);
  });

  console.log('🎉 Sitemap generation completed successfully!');
  console.log('\n📊 Generated files:');
  console.log('  - sitemap.xml (main sitemap)');
  console.log('  - sitemap-index.xml (sitemap index)');
  console.log('  - robots.txt (robots file)');
  languages.forEach(lang => {
    console.log(`  - ${lang}/sitemap.xml (${lang} sitemap)`);
  });

} catch (error) {
  console.error('❌ Error generating sitemaps:', error);
  process.exit(1);
}
