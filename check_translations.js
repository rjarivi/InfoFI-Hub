import fs from 'fs';

// Read the projects.ts file
const content = fs.readFileSync('src/data/projects.ts', 'utf8');

// Extract all project IDs from projectsData
const projectIdMatches = content.match(/id: "([^"]+)"/g);
const allProjectIds = projectIdMatches ? projectIdMatches.map(match => match.replace('id: "', '').replace('"', '')) : [];

console.log('=== ALL PROJECT IDs IN PROJECTSDATA ===');
console.log(`Total projects: ${allProjectIds.length}`);
allProjectIds.forEach(id => console.log(`- ${id}`));

// Extract project IDs from each language section in projectTranslations
const languages = ['en', 'es', 'fr', 'de', 'ja', 'ko', 'zh', 'ar'];

languages.forEach(lang => {
  console.log(`\n=== ${lang.toUpperCase()} TRANSLATIONS ===`);

  // Find the language section
  const langStartPattern = new RegExp(`${lang}:\\s*{`);
  const langStartMatch = content.match(langStartPattern);

  if (langStartMatch) {
    const startIndex = langStartMatch.index + langStartMatch[0].length;

    // Find the end of this language section
    let braceCount = 1;
    let endIndex = startIndex;

    while (endIndex < content.length && braceCount > 0) {
      if (content[endIndex] === '{') braceCount++;
      if (content[endIndex] === '}') braceCount--;
      endIndex++;
    }

    const langContent = content.substring(startIndex, endIndex - 1);

    // Extract project IDs from this language section
    const translationMatches = langContent.match(/"([^"]+)":\s*{/g);
    const translatedIds = translationMatches ? translationMatches.map(match => {
      const matchResult = match.match(/"([^"]+)":\s*{/);
      return matchResult ? matchResult[1] : '';
    }).filter(id => id) : [];

    console.log(`Projects with translations: ${translatedIds.length}`);
    
    // Find missing translations
    const missingIds = allProjectIds.filter(id => !translatedIds.includes(id));
    if (missingIds.length > 0) {
      console.log(`\nMISSING TRANSLATIONS:`);
      missingIds.forEach(id => console.log(`- ${id}`));
    } else {
      console.log(`\n✅ All projects have translations!`);
    }
  } else {
    console.log('Language section not found');
  }
});
