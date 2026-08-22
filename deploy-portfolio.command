#!/bin/bash
# Portfolio Deploy — double-click me in Finder
cd "$(dirname "$0")"
cd "$HOME/Desktop/Portfolio/vite-react-portfolio"

echo "🔧 Clearing git lock..."
rm -f .git/index.lock

echo "📦 Staging changes..."
git add -A

echo "💾 Committing..."
git commit -m "redesign: premium dark theme across all sections"

echo "🚀 Pushing to GitHub..."
git push

echo ""
echo "✅ Done! GitHub Actions will deploy in ~1-2 minutes."
echo "   Watch: https://github.com/HemanthK7227/vite-react-portfolio/actions"
echo ""
read -p "Press Enter to close..."
