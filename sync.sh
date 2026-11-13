#!/usr/bin/env bash
set -e

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd "$DIR"

echo "=================================================="
echo "⚡ BPSC TRE 4.0 - FAST UPLOAD & AUTO-SYNC PIPELINE"
echo "=================================================="
echo "📁 Scanning: incoming_questions/"
echo ""

# 1. Run Python auto-ingest
python3 scripts/auto_ingest.py

# 2. Build production bundle with TypeScript & Vite
echo ""
echo "🔨 Building high-speed production bundle..."
npm run build

# 3. Mirror assets to root
cp -r dist/assets .

# 4. Git commit and push to live repository
echo ""
echo "🚀 Pushing updates to GitHub (Live on Render in ~30s)..."
git add .
COMMIT_MSG="Update BPSC PYQ sets ($(date '+%Y-%m-%d %H:%M:%S'))"
git commit -m "$COMMIT_MSG" || echo "No git changes to commit"
git push origin main

echo ""
echo "=================================================="
echo "✅ SYNC COMPLETE!"
echo "🌐 Live Deployment: https://bpsc-tre-pyq.onrender.com"
echo "📦 Hostinger Ready:  'dist/' folder is 100% ready to upload"
echo "=================================================="
