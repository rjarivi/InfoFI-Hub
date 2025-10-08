# Project Management Rules

## 🚨 CRITICAL RULES FOR ADDING NEW PROJECTS

### 1. NEW LABEL REQUIREMENT
**ALWAYS add NEW label to newly added projects:**
```javascript
additionalData: {
  isNew: "true"
}
```

### 2. POSITION REQUIREMENT
**ALWAYS move new projects to the TOP of their respective platform section:**
- Kaito projects → Top of `kaito: []` array
- Bantr projects → Top of `bantr: []` array  
- Wallchain projects → Top of `wallchain: []` array
- Xeet projects → Top of `xeet: []` array
- Pulse projects → Top of `pulse: []` array
- Cookie projects → Top of `cookie: []` array
- Rey projects → Top of `rey: []` array
- Aira projects → Top of `aira: []` array
- Breadcrumbs projects → Top of `breadcrumbs: []` array

### 3. TRANSLATION REQUIREMENT
**ALWAYS add translations for ALL 8 languages:**
- English (EN)
- Spanish (ES) 
- French (FR)
- German (DE)
- Japanese (JA)
- Korean (KO)
- Chinese (ZH)
- Arabic (AR)

### 4. COMPLETE PROJECT STRUCTURE
**Every new project MUST include:**
```javascript
{
  id: "platform-projectname",
  title: "Project Name",
  description: "Project description",
  rewardPool: "Reward details",
  participants: "Participant info",
  timeLeft: "Time remaining",
  category: "Category",
  platform: "Platform Name",
  link: "Project URL",
  logo: "Logo URL",
  source: "Source URL",
  referralLink: "Referral URL",
  claimPeriod: "Claim period",
  vestingSchedule: "Vesting schedule",
  distributionPlatform: "Platform",
  campaignRules: [
    "Rule 1",
    "Rule 2",
    "Rule 3"
  ],
  additionalData: {
    isNew: "true"  // ← ALWAYS ADD THIS
  }
}
```

## 📋 CHECKLIST FOR NEW PROJECTS

- [ ] Add project to main platform array at TOP position
- [ ] Add `additionalData: { isNew: "true" }` for NEW label
- [ ] Add translations for all 8 languages
- [ ] Include all required fields (id, title, description, etc.)
- [ ] Add campaign rules if applicable
- [ ] Test for linting errors
- [ ] Commit with descriptive message

## 🎯 EXAMPLES OF CORRECT IMPLEMENTATION

### ✅ CORRECT - KonaDeFi (Fixed)
```javascript
xeet: [
  {
    id: "xeet-kona",
    title: "KonaDeFi",
    // ... other fields
    additionalData: {
      isNew: "true"  // ← NEW label
    }
  },
  // ... other projects
]
```

### ❌ INCORRECT - Missing NEW label and wrong position
```javascript
xeet: [
  // ... other projects
  {
    id: "xeet-kona",
    title: "KonaDeFi",
    // ... other fields
    // Missing additionalData: { isNew: "true" }
  }
]
```

## 🔄 REMEMBER
**Every new project = NEW label + TOP position + ALL translations**

This ensures maximum visibility for new projects and consistent user experience across all languages.
