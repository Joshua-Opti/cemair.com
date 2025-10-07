#!/usr/bin/env node

/**
 * Deployment verification script for CemAir website
 * Checks that all required files are present and properly configured
 */

const fs = require('fs');
const path = require('path');

const REQUIRED_FILES = [
  'dist/index.html',
  'dist/assets',
  'dist/favicon.ico',
  'dist/site.webmanifest',
  'dist/robots.txt',
  'dist/sitemap.xml'
];

const REQUIRED_CONFIG_FILES = [
  '.github/workflows/deploy.yml',
  '.github/workflows/build.yml',
  'vite.config.js',
  'package.json'
];

function checkFileExists(filePath) {
  return fs.existsSync(filePath);
}

function checkDirectoryContents(dirPath) {
  if (!fs.existsSync(dirPath)) {
    return false;
  }
  
  const files = fs.readdirSync(dirPath);
  return files.length > 0;
}

function verifyDeployment() {
  console.log('🔍 Verifying CemAir deployment configuration...\n');
  
  let allChecksPassed = true;
  
  // Check required files
  console.log('📁 Checking required files:');
  REQUIRED_FILES.forEach(file => {
    const exists = checkFileExists(file);
    const status = exists ? '✅' : '❌';
    console.log(`  ${status} ${file}`);
    if (!exists) allChecksPassed = false;
  });
  
  // Check config files
  console.log('\n⚙️  Checking configuration files:');
  REQUIRED_CONFIG_FILES.forEach(file => {
    const exists = checkFileExists(file);
    const status = exists ? '✅' : '❌';
    console.log(`  ${status} ${file}`);
    if (!exists) allChecksPassed = false;
  });
  
  // Check vite config
  console.log('\n🔧 Checking Vite configuration:');
  if (checkFileExists('vite.config.js')) {
    const viteConfig = fs.readFileSync('vite.config.js', 'utf8');
    const hasCorrectBase = viteConfig.includes("base: '/cemair.com/'");
    const status = hasCorrectBase ? '✅' : '❌';
    console.log(`  ${status} Base path configured for GitHub Pages`);
    if (!hasCorrectBase) allChecksPassed = false;
  }
  
  // Check package.json scripts
  console.log('\n📦 Checking package.json scripts:');
  if (checkFileExists('package.json')) {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    const hasGhPagesScript = packageJson.scripts && packageJson.scripts['build:gh-pages'];
    const status = hasGhPagesScript ? '✅' : '❌';
    console.log(`  ${status} GitHub Pages build script present`);
    if (!hasGhPagesScript) allChecksPassed = false;
  }
  
  // Final result
  console.log('\n' + '='.repeat(50));
  if (allChecksPassed) {
    console.log('🎉 All deployment checks passed!');
    console.log('✅ Your CemAir website is ready for GitHub Pages deployment.');
    console.log('\n📋 Next steps:');
    console.log('1. Push your code to GitHub');
    console.log('2. Enable GitHub Pages in repository settings');
    console.log('3. Your site will be available at: https://joshua-opti.github.io/cemair.com/');
  } else {
    console.log('❌ Some deployment checks failed.');
    console.log('Please fix the issues above before deploying.');
    process.exit(1);
  }
}

// Run verification
verifyDeployment();
