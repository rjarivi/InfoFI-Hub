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
  timeLeft: "YYYY-MM-DD to YYYY-MM-DD", // Time Period
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
    isNew: "true",  // ← ALWAYS ADD THIS
    startsAt: "2025-10-01", // Optional ISO start date
    endsAt: "2025-12-31"    // Optional ISO end date (used for days-left calc)
  }
}
```

## 📋 CHECKLIST FOR NEW PROJECTS

- [ ] Add project to main platform array at TOP position
- [ ] Add `additionalData: { isNew: "true" }` for NEW label
- [ ] Add translations for all 8 languages
- [ ] Include all required fields (id, title, description, etc.)
- [ ] Use Time Period format `YYYY-MM-DD to YYYY-MM-DD`
- [ ] Prefer ISO `additionalData.startsAt` and `additionalData.endsAt` when available
- [ ] Verify status shows "Active (N days left)" when applicable
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
**Every new project = NEW label + TOP position + ALL translations + Time Period**

### Time Period and Status Guidance
- Display uses the label "Time Period" and shows `start → end` dates in `YYYY-MM-DD`.
- If the end date is known, the status shows `Active (N days left)` until the end.
- If the end is `TBD/TBA/Ongoing`, the status remains `Active` without days left.
- Backward compatibility: free-form `timeLeft` strings are parsed when possible; using ISO dates in `additionalData.startsAt`/`endsAt` is recommended for accuracy.

This ensures maximum visibility for new projects and consistent user experience across all languages.
