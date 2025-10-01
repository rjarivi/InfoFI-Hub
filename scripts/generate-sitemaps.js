#!/usr/bin/env node

/**
 * Build script to generate sitemaps and robots.txt for multilingual SEO
 * Run this script after building your static site
 */

import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';
import { 
  generateSitemap, 
  generateRobotsTxt, 
  generateLanguageSitemap, 
  generateSitemapIndex 
} from './src/lib/sitemap';
import { Language } from './src/data/translations';

const languages: Language[] = ['en', 'es', 'fr', 'de', 'ja', 'ko', 'zh', 'ar'];
const baseUrl = process.env.VITE_BASE_URL || 'https://infofi-hub.com';
const distDir = process.env.VITE_DIST_DIR || 'dist';

console.log('🗺️  Generating sitemaps for multilingual SEO...');
console.log(`📍 Base URL: ${baseUrl}`);
console.log(`📁 Dist directory: ${distDir}`);

try {
  // Create dist directory if it doesn't exist
  mkdirSync(distDir, { recursive: true });

  // Generate main sitemap
  console.log('📄 Generating main sitemap...');
  const mainSitemap = generateSitemap(baseUrl);
  writeFileSync(join(distDir, 'sitemap.xml'), mainSitemap);

  // Generate sitemap index
  console.log('📋 Generating sitemap index...');
  const sitemapIndex = generateSitemapIndex(baseUrl);
  writeFileSync(join(distDir, 'sitemap-index.xml'), sitemapIndex);

  // Generate robots.txt
  console.log('🤖 Generating robots.txt...');
  const robotsTxt = generateRobotsTxt(baseUrl);
  writeFileSync(join(distDir, 'robots.txt'), robotsTxt);

  // Generate language-specific sitemaps
  console.log('🌍 Generating language-specific sitemaps...');
  languages.forEach(lang => {
    const langSitemap = generateLanguageSitemap(lang, baseUrl);
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
