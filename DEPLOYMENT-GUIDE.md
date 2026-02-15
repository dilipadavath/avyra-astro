# Deployment Guide - AVYRA

**Last Updated**: February 15, 2026  
**Version**: 1.0  
**Project**: AVYRA - Kitchen & Wardrobe Interior Design  
**Status**: Production Ready

---

## Overview

This guide provides step-by-step instructions for deploying AVYRA from development to production server. The deployment process is straightforward since this is a static Astro site with no server-side rendering.

### Deployment Summary
- **Build Tool**: Astro static site generator
- **Output**: Pure HTML/CSS/JavaScript files
- **Hosting**: Apache web server with cPanel
- **Domain**: avyra.co.in
- **Deployment Time**: ~15-30 minutes
- **Downtime**: Minimal (< 1 minute)

---

## Prerequisites

### Before You Start, Ensure You Have:

1. **Access Credentials**
   - [ ] cPanel username and password
   - [ ] SSH access (optional but recommended)
   - [ ] FTP/SFTP credentials
   - [ ] Domain registrar login access
   - [ ] SSL certificate email/account

2. **Local Development Setup**
   - [ ] Node.js 18+ installed (`node --version`)
   - [ ] npm or bun installed (`npm --version`)
   - [ ] Project cloned locally
   - [ ] All dependencies installed (`npm install`)
   - [ ] Project builds successfully locally (`npm run build`)

3. **Server Setup Complete**
   - [ ] Hosting account active and accessible
   - [ ] Domain points to server (DNS propagated)
   - [ ] SSL certificate installed and auto-renewal configured
   - [ ] Apache modules enabled (mod_rewrite, mod_deflate, mod_expires, mod_headers)
   - [ ] .htaccess configured in /public_html
   - [ ] File/folder permissions set correctly

4. **Documentation**
   - [ ] Server configuration documented
   - [ ] Backup procedures documented
   - [ ] Admin credentials secured
   - [ ] Emergency contact list prepared

---

## Pre-Deployment Verification (LOCAL)

**Duration**: 10-15 minutes

### Step 1: Verify Local Build

```bash
# Navigate to project directory
cd c:\Users\dilip\Downloads\avyra\estimates-made-easy

# Clean previous builds
rm -rf dist

# Install dependencies (if needed)
npm install

# Build the project
npm run build

# Expected output:
# ✓ built in 25.43s
# ✓ 10 pages
```

### Step 2: Preview Build

```bash
# Preview the static build
npm run preview

# Expected output:
# > Preview server running at: http://localhost:3000
# Press 'q' to quit
```

### Step 3: Test All Pages (in Preview Mode)

Open browser and test each page:

1. **Homepage**: http://localhost:3000
   - [ ] Hero slider loads
   - [ ] Service sections display
   - [ ] Footer visible
   - [ ] Navigation works

2. **Kitchen**: http://localhost:3000/kitchen
   - [ ] Page loads
   - [ ] Images visible
   - [ ] Contact CTA present

3. **Wardrobes**: http://localhost:3000/wardrobes
   - [ ] Page loads correctly
   - [ ] Responsive design works

4. **Gallery**: http://localhost:3000/gallery
   - [ ] Images load
   - [ ] Lazy loading works

5. **Blog**: http://localhost:3000/blog
   - [ ] Blog posts load
   - [ ] Post links work

6. **Blog Post**: http://localhost:3000/blog/[any-post]
   - [ ] Individual post loads
   - [ ] Content displays

7. **Contact**: http://localhost:3000/contact
   - [ ] Form loads
   - [ ] Form validation works
   - [ ] Test submission

8. **About**: http://localhost:3000/about
   - [ ] Page displays

9. **FAQ**: http://localhost:3000/faq
   - [ ] FAQ loads

10. **404**: http://localhost:3000/nonexistent
    - [ ] 404 page shows

### Step 4: Check Build Output Structure

Verify `/dist` folder contains:

```
dist/
├── index.html          (Homepage)
├── kitchen/
│   └── index.html      (Kitchen page)
├── wardrobes/
│   └── index.html      (Wardrobes page)
├── gallery/
│   └── index.html      (Gallery page)
├── blog/
│   ├── index.html      (Blog listing)
│   └── [slug]/
│       └── index.html  (Individual posts)
├── about/
│   └── index.html      (About page)
├── faq/
│   └── index.html      (FAQ page)
├── 404.html            (404 page)
├── css/                (Minified stylesheets)
├── js/                 (Minified JavaScript)
└── images/             (Optimized images)
```

### Step 5: Verify SEO Files Exist

Check `/public` folder contains:

```bash
public/
├── robots.txt                    # SEO crawl rules
├── sitemap.xml                   # SEO site map
├── .htaccess                     # Apache configuration
├── .well-known/
│   └── security.txt              # Security contact
├── humans.txt                    # Team info
├── favicon.ico                   # Icon
└── manifest.json                 # PWA manifest
```

### Step 6: Developer Console Check

In preview (`npm run preview`), open browser DevTools (F12):

- [ ] Console tab: No errors (only warnings acceptable)
- [ ] Network tab: No failed requests
- [ ] Security tab: No mixed content warnings
- [ ] Elements: HTML structure correct

---

## Server Pre-Preparation (BEFORE DEPLOYMENT)

**Duration**: 5-10 minutes

### Step 1: SSH Access (if not using cPanel)

```bash
# Connect to server via SSH
ssh username@avyra.co.in

# Verify connection
ls -la

# Create backup directory if not exists
mkdir -p /backups
```

### Step 2: Verify Apache Configuration

Via cPanel OR SSH:

```bash
# Check Apache status
systemctl status apache2

# Expected: active (running)

# Verify modules are enabled
apache2ctl -M | grep rewrite
apache2ctl -M | grep deflate
apache2ctl -M | grep expires
apache2ctl -M | grep headers

# All should show "loaded"
```

### Step 3: Backup Current Site (if exists)

```bash
# Create backup of current site
tar -czf /backups/website_backup_$(date +%Y%m%d_%H%M%S).tar.gz /public_html

# Verify backup created
ls -lah /backups/ | head -5
```

### Step 4: Prepare Directories

```bash
# Create temporary deployment directory
mkdir -p /public_html_new

# Set proper permissions
chmod 755 /public_html_new
```

---

## Deployment Methods

Choose ONE of the following methods:

---

## METHOD A: FTP Upload (Easiest for Beginners)

**Duration**: 10-20 minutes

### Step 1: Download FTP Client

Download and install one of:
- FileZilla (free) - https://filezilla-project.org/
- WinSCP (free) - https://winscp.net/
- CyberDuck (free) - https://cyberduck.io/

### Step 2: Configure FTP Connection

**Connection Details**:
```
Host: Your Server IP or Domain
Port: 21 (FTP) or 22 (SFTP - recommended)
Username: FTP username from cPanel
Password: FTP password from cPanel
```

### Step 3: Upload Files

```
1. Open FTP client
2. Connect using credentials
3. Navigate to: /public_html or /home/username/public_html
4. Upload all files from /dist folder:
   - Select all files in /dist
   - Drag to remote /public_html folder
   - Wait for upload complete
5. Upload SEO files separately:
   - robots.txt → /public_html
   - sitemap.xml → /public_html
   - .htaccess → /public_html
   - .well-known/security.txt → /public_html/.well-known/
   - humans.txt → /public_html
```

### Step 4: Verify Upload

In FTP client:
- [ ] /public_html contains index.html
- [ ] /public_html/css contains CSS files
- [ ] /public_html/js contains JavaScript files
- [ ] /public_html/images contains image files
- [ ] All HTML pages uploaded (kitchen/, wardrobes/, blog/, etc.)

### Step 5: Set File Permissions

Via cPanel File Manager:
1. Right-click `/public_html/.htaccess`
2. Select "Change Permissions"
3. Set to: `644`
4. Repeat for `robots.txt`, `sitemap.xml`, `humans.txt`, `security.txt`

OR via SSH:
```bash
chmod 644 /public_html/.htaccess
chmod 644 /public_html/robots.txt
chmod 644 /public_html/sitemap.xml
chmod 644 /public_html/humans.txt
chmod 755 /public_html/.well-known
chmod 644 /public_html/.well-known/security.txt
```

---

## METHOD B: SSH/SCP Upload (Recommended)

**Duration**: 5-10 minutes

### Step 1: Prepare Files

On your local machine:
```bash
# Navigate to project
cd c:\Users\dilip\Downloads\avyra\estimates-made-easy

# Create deployment package
zip -r deployment.zip dist/ public/

# OR use tar
tar -czf deployment.tar.gz dist/ public/
```

### Step 2: Upload via SCP

```bash
# Upload to server
scp deployment.zip username@avyra.co.in:/tmp/

# SSH into server
ssh username@avyra.co.in

# Extract files
cd /tmp
unzip deployment.zip

# Copy dist to destination
cp -r dist/* /public_html/

# Copy public files
cp public/robots.txt /public_html/
cp public/sitemap.xml /public_html/
cp public/.htaccess /public_html/
cp public/humans.txt /public_html/
mkdir -p /public_html/.well-known
cp public/.well-known/security.txt /public_html/.well-known/
```

### Step 3: Set Permissions

```bash
# Set directory permissions
chmod 755 /public_html
chmod 755 /public_html/*

# Set file permissions
chmod 644 /public_html/*.html
chmod 644 /public_html/.htaccess
chmod 644 /public_html/robots.txt
chmod 644 /public_html/sitemap.xml
chmod 644 /public_html/humans.txt
chmod 755 /public_html/.well-known
chmod 644 /public_html/.well-known/security.txt

# Verify
ls -la /public_html | head
```

---

## METHOD C: GitHub Actions CI/CD (Automated)

**Duration**: 5-10 minutes (first time setup), automated thereafter

### Step 1: Create SSH Key

```bash
# On your local machine
ssh-keygen -t rsa -b 4096 -f deploy_key -N ""

# This creates:
# - deploy_key (private - keep secret)
# - deploy_key.pub (public - add to server)
```

### Step 2: Add Public Key to Server

```bash
# SSH into server
ssh username@avyra.co.in

# Create .ssh directory
mkdir -p ~/.ssh

# Add public key
echo "$(cat deploy_key.pub)" >> ~/.ssh/authorized_keys

# Set permissions
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys
```

### Step 3: Add GitHub Secrets

1. Go to GitHub repository settings
2. Navigate to "Secrets and variables" → "Actions"
3. Create new secret:
   - Name: `DEPLOY_KEY`
   - Value: Content of `deploy_key` (private key)

### Step 4: Create GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3
      
      - name: Install Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Build project
        run: npm run build
      
      - name: Deploy to server
        env:
          DEPLOY_KEY: ${{ secrets.DEPLOY_KEY }}
          SERVER_HOST: avyra.co.in
          SERVER_USER: username
          SERVER_PATH: /public_html
        run: |
          mkdir -p ~/.ssh
          echo "$DEPLOY_KEY" > ~/.ssh/deploy_key
          chmod 600 ~/.ssh/deploy_key
          ssh-keyscan avyra.co.in >> ~/.ssh/known_hosts
          rsync -avz --delete \
            -e "ssh -i ~/.ssh/deploy_key" \
            dist/ ${SERVER_USER}@${SERVER_HOST}:${SERVER_PATH}/
```

### Step 5: Test Deployment

```bash
# Push to main branch
git add .
git commit -m "Deploy to production"
git push origin main

# Watch GitHub Actions tab for deployment status
```

---

## Post-Deployment Verification (PRODUCTION)

**Duration**: 10-15 minutes

### Step 1: Basic Functionality

Test in browser:

```
1. Homepage: https://avyra.co.in
2. Kitchen: https://avyra.co.in/kitchen
3. Wardrobes: https://avyra.co.in/wardrobes
4. Gallery: https://avyra.co.in/gallery
5. Blog: https://avyra.co.in/blog
6. Blog Post: https://avyra.co.in/blog/[any-post]
7. Contact: https://avyra.co.in/contact
8. About: https://avyra.co.in/about
9. FAQ: https://avyra.co.in/faq
10. 404: https://avyra.co.in/nonexistent
```

**Checklist for each page**:
- [ ] Page loads (no 404 error)
- [ ] No JavaScript errors (F12 console)
- [ ] Images load properly
- [ ] Links work
- [ ] Responsive design works (test mobile view)

### Step 2: HTTPS & Redirects

```
1. Test HTTP redirect:
   - Enter: http://avyra.co.in
   - Should redirect to: https://avyra.co.in
   
2. Check SSL certificate:
   - Green lock icon visible
   - Certificate valid
   - No mixed content warnings
   
3. Test www redirect:
   - Enter: https://www.avyra.co.in
   - Should redirect to: https://avyra.co.in (or stay at www, depending on config)
```

### Step 3: SEO Files Verification

Test file accessibility:

```bash
# Test in browser:
1. https://avyra.co.in/robots.txt
2. https://avyra.co.in/sitemap.xml
3. https://avyra.co.in/.well-known/security.txt
4. https://avyra.co.in/humans.txt
```

**All should return content (not 404)**

### Step 4: Security Headers Check

Use https://securityheaders.com/:
1. Enter: https://avyra.co.in
2. Verify all security headers present:
   - [ ] X-Frame-Options
   - [ ] X-Content-Type-Options
   - [ ] Strict-Transport-Security
   - [ ] Content-Security-Policy
   - [ ] X-XSS-Protection

### Step 5: Performance Check

Use https://pagespeed.web.dev/:
1. Enter: https://avyra.co.in
2. Check scores:
   - [ ] Performance: > 90
   - [ ] Accessibility: > 90
   - [ ] Best Practices: > 90
   - [ ] SEO: > 90
3. Review recommendations

### Step 6: Mobile Friendly Test

Use Google's Mobile-Friendly Test:
1. https://search.google.com/test/mobile-friendly
2. Enter: https://avyra.co.in
3. Result should be: ✅ **Page is mobile friendly**

### Step 7: Form Testing

On Contact page:
1. [ ] Form loads without errors
2. [ ] Try submitting empty form (should fail validation)
3. [ ] Try invalid email (should fail validation)
4. [ ] Try short name (should fail validation)
5. [ ] Submit valid form (should show success message)
6. [ ] Check email received in inbox

---

## Post-Deployment Configuration (PRODUCTION)

**Duration**: 15-20 minutes

### Step 1: Google Search Console

```
1. Go to: https://search.google.com/search-console
2. Add property (if not already added)
   - Select "URL prefix"
   - Enter: https://avyra.co.in
3. Verify ownership (HTML file or DNS)
4. Submit sitemap:
   - Go to "Sitemaps" section
   - Enter: https://avyra.co.in/sitemap.xml
   - Click Submit
5. Verify robots.txt:
   - Go to "Settings" → "Crawl stats"
   - Should show data if crawling
6. Monitor Coverage:
   - Wait 1-2 days for initial crawl
   - Check indexing status
```

### Step 2: Google Analytics

```
1. Go to: https://analytics.google.com
2. Create property (if not already created)
3. Add measurement ID to website (already in code)
4. Verify tracking:
   - Open website
   - Go to "Real-time" in Analytics
   - Should see active user
5. Set up goals:
   - Create goal: "Contact Form Submission"
   - Set conversion tracking
6. Wait 24-48 hours for data
```

### Step 3: Monitoring & Alerts

Set up uptime monitoring:

**Option A: Uptime Robot**
1. Go to: https://uptimerobot.com/
2. Create account
3. Add monitor:
   - Type: HTTP(s)
   - URL: https://avyra.co.in
   - Interval: Every 5 minutes
4. Set alert contacts (email)

**Option B: Pingdom**
1. Go to: https://www.pingdom.com/
2. Create account
3. Add check:
   - URL: https://avyra.co.in
   - Check every: 5 minutes
4. Add contacts for alerts

### Step 4: Backup Verification

Verify backups are working:

```bash
# SSH into server
ssh username@avyra.co.in

# Check backup directory
ls -lah /backups/

# Verify recent backup exists
ls -lah /backups/ | head -5

# Test backup restoration (on test server only)
```

### Step 5: Monitoring Setup

Monitor error logs:

```bash
# SSH into server
# Watch Apache error log
tail -f /var/log/apache2/error.log

# Watch access log
tail -f /var/log/apache2/access.log

# Check for any errors in first hour
```

---

## Common Deployment Issues & Fixes

### Issue: 404 Errors on All Pages

**Symptom**: Only homepage works, other pages show 404

**Solution**:
```bash
# Verify .htaccess exists
ls -la /public_html/.htaccess

# Verify mod_rewrite enabled
apache2ctl -M | grep rewrite

# If not enabled:
a2enmod rewrite
systemctl restart apache2

# Test rewrite rules:
curl -I https://avyra.co.in/kitchen
# Should return 200, not 404
```

### Issue: HTTPS Redirect Loop

**Symptom**: Browser shows "redirect loop" or "too many redirects"

**Solution**:
```bash
# Check .htaccess HTTPS rewrite rule
grep -n "HTTPS" /public_html/.htaccess

# If behind CloudFlare, add this first:
# RewriteCond %{HTTP:CF-Visitor} !https

# Modify .htaccess:
RewriteCond %{HTTP:CF-Visitor} !https
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Restart Apache
systemctl restart apache2
```

### Issue: Images Not Loading

**Symptom**: Broken image icons or "404 for image files"

**Solution**:
```bash
# Verify images uploaded
ls -la /public_html/images/

# Check permissions
chmod 644 /public_html/images/*

# Verify in browser console (F12)
# Check if image URLs are correct
```

### Issue: Forms Not Submitting

**Symptom**: "Error submitting form" or no response

**Solution**:
```bash
# Check SMTP settings
# Verify email configuration

# Test form manually:
curl -X POST https://formspree.io/f/YOUR_FORM_ID \
  -H "Content-Type: application/json" \
  -d '{"name":"test","email":"test@example.com"}'

# If no response, might be blocked by firewall
# Check with hosting provider
```

### Issue: Slow Page Load

**Symptom**: Pages take > 3 seconds to load

**Solution**:
```bash
# Verify gzip compression enabled
curl -I -H "Accept-Encoding: gzip" https://avyra.co.in | grep Content-Encoding

# Should return: "Content-Encoding: gzip"

# If not, check .htaccess:
grep -n "deflate" /public_html/.htaccess

# Restart Apache
systemctl restart apache2

# Check server resources
ssh username@avyra.co.in
top
free -h
df -h
```

### Issue: Security Headers Missing

**Symptom**: Failed security header test

**Solution**:
```bash
# Verify .htaccess has security headers
grep -n "Header set" /public_html/.htaccess

# Verify mod_headers enabled
apache2ctl -M | grep headers

# If not enabled:
a2enmod headers
systemctl restart apache2

# Test headers:
curl -I https://avyra.co.in | grep -i "x-frame\|x-content\|strict"
```

---

## Rollback Procedure (If Something Goes Wrong)

**Duration**: 5-10 minutes

### Option 1: Restore from Backup

```bash
# SSH into server
ssh username@avyra.co.in

# List backups
ls -lah /backups/

# Stop Apache
systemctl stop apache2

# Backup current (broken) version
mv /public_html /public_html_broken_$(date +%Y%m%d)

# Extract backup
tar -xzf /backups/website_backup_YYYYMMDD_HHMMSS.tar.gz
mv public_html /public_html

# Start Apache
systemctl start apache2

# Verify
curl https://avyra.co.in
```

### Option 2: Quick Manual Fix

```bash
# If only specific pages broken:
# Re-upload those files via FTP/SCP

# If .htaccess broken:
# Temporarily rename .htaccess
mv /public_html/.htaccess /public_html/.htaccess.bak
systemctl restart apache2

# If all broken, restore from backup
# See Option 1 above
```

---

## Post-Deployment Checklist

After successful deployment, verify:

### Immediate (First Hour)
- [ ] All pages load (no 404s)
- [ ] HTTPS works (green lock)
- [ ] No console errors (F12)
- [ ] Forms submit successfully
- [ ] Mobile view works
- [ ] Images load correctly

### First 24 Hours
- [ ] Google Search Console shows data
- [ ] Google Analytics shows traffic
- [ ] Uptime monitoring shows 100%
- [ ] No error log spikes
- [ ] Email alerts not triggered

### First Week
- [ ] Monitor error logs daily
- [ ] Check Google Search Console for crawl errors
- [ ] Verify pages are being indexed
- [ ] Monitor performance metrics
- [ ] Test backup restoration capability

### First Month
- [ ] Run comprehensive security audit
- [ ] Review Google Analytics data
- [ ] Check keyword rankings
- [ ] Monitor Core Web Vitals
- [ ] Plan optimization tasks

---

## Deployment Checklist

```
Pre-Deployment:
☐ Build successful locally (npm run build)
☐ Preview works (npm run preview)
☐ All pages tested locally
☐ Dev console: no errors
☐ SEO files present in /public
☐ .htaccess configured

Server Preparation:
☐ Apache modules enabled
☐ SSL certificate installed & auto-renewal
☐ Current site backed up
☐ SSH/FTP access verified
☐ Disk space available

Deployment:
☐ Files uploaded (~dist)
☐ SEO files uploaded (robots.txt, sitemap.xml, etc.)
☐ .htaccess uploaded with correct permissions
☐ File permissions set correctly
☐ Apache restarted

Post-Deployment:
☐ All pages load (no 404s)
☐ HTTPS redirect works
☐ Forms functional
☐ Images display
☐ Security headers present
☐ robots.txt accessible
☐ sitemap.xml accessible
☐ Google Search Console updated
☐ Google Analytics tracking
☐ Monitoring/alerts configured
☐ Backup system verified

Status: ✅ **LIVE & OPERATIONAL**
```

---

## Support & Troubleshooting

If deployment fails:

1. **Check error logs**:
   ```bash
   ssh username@avyra.co.in
   tail -50 /var/log/apache2/error.log
   ```

2. **Verify Apache**:
   ```bash
   systemctl status apache2
   apache2ctl configtest
   ```

3. **Check disk space**:
   ```bash
   df -h
   ```

4. **Contact hosting provider** if server issues

---

## Maintenance After Deployment

### Weekly
- [ ] Check error logs
- [ ] Monitor uptime alerts
- [ ] Verify backups

### Monthly
- [ ] Google Search Console review
- [ ] Analytics review
- [ ] Content updates
- [ ] Security update check

### Quarterly
- [ ] Full security audit
- [ ] Performance review
- [ ] Backup restoration test

---

**Deployment Date**: [Your Date]  
**Deployed By**: [Your Name]  
**Version Deployed**: [Version]  
**Status**: ✅ Ready for Production

For questions: support@avyra.co.in

---

© 2026 AVYRA. All rights reserved.
