#!/bin/bash

# Deployment script for Jeet.ing Leaderboards
echo "🚀 Deploying Jeet.ing Leaderboards to Netlify..."

# Check if git is clean
if [[ -n $(git status -s) ]]; then
    echo "❌ Git has uncommitted changes. Please commit first."
    exit 1
fi

# Push to GitHub
echo "📤 Pushing to GitHub..."
git push origin main

echo "✅ Code pushed to GitHub!"
echo ""
echo "🔧 Next steps:"
echo "1. Go to https://app.netlify.com"
echo "2. Click 'Add new site' → 'Import an existing project'"
echo "3. Connect your GitHub repository"
echo "4. Set build settings:"
echo "   - Build command: npm run build"
echo "   - Publish directory: dist"
echo "   - Functions directory: netlify/functions"
echo "5. Click 'Deploy site'"
echo ""
echo "🎯 After deployment:"
echo "- Test: https://your-site.netlify.app/leaderboards"
echo "- Search for 'vitalikbuterin' to see real API data"
echo "- Leaderboards are hidden from navigation menu"
echo "- Still accessible via direct URL"
