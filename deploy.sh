#!/bin/bash

echo "🚀 MA Transform Lab - GitHub & Vercel Deploy Script"
echo "=================================================="
echo ""

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Step 1: GitHub Username
echo -e "${YELLOW}Step 1: GitHub Setup${NC}"
echo "First, enter your GitHub username:"
read -p "GitHub Username: " GITHUB_USERNAME

if [ -z "$GITHUB_USERNAME" ]; then
    echo -e "${RED}Error: GitHub username is required!${NC}"
    exit 1
fi

echo ""
echo -e "${GREEN}✓ Great! Your repo will be at:${NC}"
echo "  https://github.com/$GITHUB_USERNAME/ma-transform-lab"
echo ""

# Step 2: Create GitHub repo reminder
echo -e "${YELLOW}Step 2: Create GitHub Repository${NC}"
echo "Please complete these steps:"
echo "1. Go to: https://github.com/new"
echo "2. Repository name: ma-transform-lab"
echo "3. Make it Public or Private (your choice)"
echo "4. ❌ DON'T add README, .gitignore, or license"
echo "5. Click 'Create repository'"
echo ""
read -p "Press ENTER after you've created the repo on GitHub..."

# Step 3: Add remote and push
echo ""
echo -e "${YELLOW}Step 3: Pushing code to GitHub...${NC}"

# Remove existing origin if it exists
git remote remove origin 2>/dev/null

# Add new origin
git remote add origin "https://github.com/$GITHUB_USERNAME/ma-transform-lab.git"

# Ensure we're on main branch
git branch -M main

# Push to GitHub
echo "Pushing code..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}✓ SUCCESS! Code is now on GitHub!${NC}"
    echo "  View at: https://github.com/$GITHUB_USERNAME/ma-transform-lab"
else
    echo ""
    echo -e "${RED}❌ Push failed. You may need to authenticate.${NC}"
    echo "Try running: git push -u origin main"
    exit 1
fi

# Step 4: Vercel Deploy
echo ""
echo -e "${YELLOW}Step 4: Deploy to Vercel${NC}"
echo "Choose your deployment method:"
echo "  A) Deploy via Vercel Dashboard (Recommended)"
echo "  B) Deploy via CLI"
echo ""
read -p "Choice (A/B): " DEPLOY_CHOICE

if [ "$DEPLOY_CHOICE" = "A" ] || [ "$DEPLOY_CHOICE" = "a" ]; then
    echo ""
    echo -e "${GREEN}Option A: Vercel Dashboard${NC}"
    echo "1. Go to: https://vercel.com/new"
    echo "2. Click 'Import Git Repository'"
    echo "3. Select: $GITHUB_USERNAME/ma-transform-lab"
    echo "4. Click 'Deploy' (Vercel auto-detects Next.js)"
    echo ""
    echo -e "${GREEN}🎉 Your site will be live in ~2 minutes!${NC}"
elif [ "$DEPLOY_CHOICE" = "B" ] || [ "$DEPLOY_CHOICE" = "b" ]; then
    echo ""
    echo -e "${GREEN}Option B: CLI Deploy${NC}"
    echo "Installing Vercel CLI..."
    npm install -g vercel
    echo ""
    echo "Deploying to Vercel..."
    vercel --prod
else
    echo "Invalid choice. Please run the script again."
    exit 1
fi

echo ""
echo -e "${GREEN}=================================================="
echo "🎉 DEPLOYMENT COMPLETE!"
echo "==================================================${NC}"
echo ""
echo "Your MA Transform Lab website is now:"
echo "  📦 On GitHub: https://github.com/$GITHUB_USERNAME/ma-transform-lab"
echo "  🌐 Live on Vercel: Check your Vercel dashboard"
echo ""
echo -e "${YELLOW}Next time you make changes:${NC}"
echo "  git add ."
echo "  git commit -m \"your changes\""
echo "  git push"
echo "  (Vercel will auto-deploy!)"
echo ""
