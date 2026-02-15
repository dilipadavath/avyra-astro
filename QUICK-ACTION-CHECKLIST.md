# Quick Action Checklist - AVYRA Deployment

**Last Updated**: February 15, 2026  
**Project**: AVYRA - Kitchen & Wardrobe Interior Design  
**Status**: Ready for Production Deployment

---

## 🚀 Pre-Deployment Checklist (Before Going Live)

### Code Quality
- [ ] Run build locally: `npm run build`
- [ ] Preview build: `npm run preview`
- [ ] Test all pages load correctly
- [ ] Check console for errors (F12)
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Test contact form submission
- [ ] Test blog post display
- [ ] Verify all images load

### SEO & Meta
- [ ] Verify meta titles on each page
- [ ] Verify meta descriptions present
- [ ] Check sitemap.xml in `/public`
- [ ] Check robots.txt in `/public`
- [ ] Verify Open Graph tags (og:image, og:title, etc.)
- [ ] Check schema.org structured data
- [ ] Verify canonical URLs

### Performance
- [ ] PageSpeed Insights score > 90
- [ ] Mobile Friendly Test: PASS
- [ ] Check Core Web Vitals (LCP, FID, CLS)
- [ ] Verify gzip compression enabled
- [ ] Test image optimization (WebP format)
- [ ] Check CSS/JS minification
- [ ] Verify caching headers

### Security
- [ ] HTTPS enabled (.htaccess configured)
- [ ] Security headers set (.htaccess)
- [ ] CSP header configured
- [ ] HSTS enabled
- [ ] Sensitive files protected (.env, node_modules, .git)
- [ ] .well-known/security.txt exists
- [ ] humans.txt exists
- [ ] No console errors showing credentials

---

## 🔧 Server Setup (Before Uploading Files)

### DNS Configuration
- [ ] Update domain nameservers (if needed)
- [ ] Verify A record points to server IP
- [ ] Verify www subdomain record
- [ ] Wait for DNS propagation (up to 48 hours)
- [ ] Test DNS: `nslookup avyra.co.in`

### SSL/TLS Certificate
- [ ] Generate Let's Encrypt certificate
- [ ] Enable auto-renewal
- [ ] Verify TLS 1.3 enabled
- [ ] Test HTTPS: Open site in browser
- [ ] Verify HTTPS redirect works

### Apache Configuration
- [ ] Enable mod_rewrite
- [ ] Enable mod_deflate
- [ ] Enable mod_expires
- [ ] Enable mod_headers
- [ ] Enable mod_ssl
- [ ] Enable mod_remoteip (if behind CDN)
- [ ] Restart Apache: `systemctl restart apache2`

### .htaccess Upload
- [ ] Upload .htaccess to /public_html/ or /public/
- [ ] Verify file permissions: `chmod 644 .htaccess`
- [ ] Test HTTPS redirect works
- [ ] Test trailing slash removal
- [ ] Test security headers present (Browser DevTools)

---

## 📤 Deployment Process

### Step 1: Build & Test
```bash
# Clean previous builds
rm -rf dist

# Install dependencies (if needed)
npm install

# Build project
npm run build

# Preview build locally
npm run preview

# Test at http://localhost:3000
```

### Step 2: Upload Files
```bash
# Option A: FTP Upload
# Use FileZilla or similar
# Upload /dist/* to /public_html/

# Option B: SSH Upload
scp -r dist/* user@server:/public_html/

# Option C: Github Actions (if configured)
# Push to main branch - CI/CD handles deployment
```

### Step 3: Upload SEO Files
```bash
# Upload these files to /public_html/public/ or root:
- robots.txt
- sitemap.xml
- .htaccess
- .well-known/security.txt
- humans.txt
```

### Step 4: Set File Permissions
```bash
# SSH into server
ssh user@server

# Set proper permissions
chmod 755 /public_html
chmod 644 /public_html/.htaccess
chmod 644 /public_html/robots.txt
chmod 644 /public_html/sitemap.xml

# If WordPress blog:
chmod 755 /public_html/wp-content/
chmod 755 /public_html/wp-content/uploads/
```

---

## ✅ Post-Deployment Testing

### Functionality Testing
- [ ] Homepage loads: https://avyra.co.in
- [ ] Kitchen page loads: https://avyra.co.in/kitchen
- [ ] Wardrobes page loads: https://avyra.co.in/wardrobes
- [ ] Gallery page loads: https://avyra.co.in/gallery
- [ ] Blog page loads: https://avyra.co.in/blog
- [ ] Blog post loads: https://avyra.co.in/blog/[any-slug]
- [ ] Contact page loads: https://avyra.co.in/contact
- [ ] About page loads: https://avyra.co.in/about
- [ ] FAQ page loads: https://avyra.co.in/faq
- [ ] 404 page shows: https://avyra.co.in/nonexistent

### Form Testing
- [ ] Contact form loads without errors
- [ ] Form validation works (try empty submission)
- [ ] Name validation works (min 2 chars)
- [ ] Email validation works (invalid format rejected)
- [ ] Mobile validation works (10 digits only)
- [ ] Form submission shows success message
- [ ] Email received in inbox

### HTTPS & Redirects
- [ ] HTTP automatically redirects to HTTPS
- [ ] www redirects to non-www (or vice versa)
- [ ] HTTPS certificate valid (green lock icon)
- [ ] Mixed content warnings: NONE
- [ ] Security headers present (check DevTools)

### SEO & Indexing
- [ ] Show in search: `site:avyra.co.in`
- [ ] robots.txt accessible: https://avyra.co.in/robots.txt
- [ ] sitemap.xml accessible: https://avyra.co.in/sitemap.xml
- [ ] security.txt accessible: https://avyra.co.in/.well-known/security.txt
- [ ] humans.txt accessible: https://avyra.co.in/humans.txt

### Performance Testing
- [ ] Page load time < 3 seconds
- [ ] Lighthouse score > 90
- [ ] Core Web Vitals: All "Good"
- [ ] Images load properly (WebP + PNG fallback)
- [ ] CSS/JS minified
- [ ] Gzip compression working

### Mobile Testing
- [ ] Responsive design works (test at 320px, 768px, 1024px)
- [ ] Touch targets are 44px minimum
- [ ] No horizontal scrolling
- [ ] Fast on 4G connection
- [ ] Mobile Friendly Test: PASS

---

## 🔍 Google Search Console Setup

### Initial Setup
- [ ] Add property: https://search.google.com/search-console
- [ ] Verify ownership (HTML file or DNS record)
- [ ] Submit sitemap: https://avyra.co.in/sitemap.xml
- [ ] Submit robots.txt

### Monitoring
- [ ] Monitor Coverage (indexing status)
- [ ] Check Core Web Vitals
- [ ] Monitor Search Performance
- [ ] Check Mobile Usability
- [ ] Review Crawl stats
- [ ] Monitor Search Appearance (rich snippets)

### Common Setup Issues
**Issue**: Property not verified
- **Solution**: Add verification HTML file to root or use DNS record

**Issue**: Some pages not indexed
- **Solution**: Submit pages via Google Search Console

**Issue**: Mobile Usability errors
- **Solution**: Fix responsive design issues identified

---

## 📊 Analytics Setup

### Google Analytics 4
- [ ] Create GA4 property
- [ ] Add measurement ID to site
- [ ] Verify traffic is being tracked
- [ ] Set up conversion goals (form submission)
- [ ] Test goal tracking (submit form, check in GA4)

### Events to Track
```javascript
// Form submission
gtag('event', 'form_submit', {
  'form_name': 'contact_form',
  'form_id': 'contact-form'
});

// Page view
gtag('event', 'page_view');

// Service click
gtag('event', 'service_click', {
  'service': 'kitchen_design'
});
```

---

## 🔐 Security Hardening

### After Deployment
- [ ] Run security scan (SSL Labs: https://www.ssllabs.com/)
- [ ] Check security headers (securityheaders.com)
- [ ] Verify CSP policy working
- [ ] Test HSTS preload (hstspreload.org)
- [ ] Scan for vulnerabilities (OWASP ZAP)
- [ ] Set up fail2ban or WAF protection

### Security Scan Results Target
- [ ] SSL Labs Rating: A or A+
- [ ] Security Headers: A+ preferred
- [ ] No CSP violations in console
- [ ] No security policy errors

---

## 📱 Browser Testing

Test on major browsers:

### Desktop
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Mobile
- [ ] iOS Safari (latest)
- [ ] Chrome Mobile (latest)
- [ ] Samsung Internet (latest)

### Devices
- [ ] Desktop (1920x1080)
- [ ] Laptop (1366x768)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x667)

---

## 🎯 Content Verification

### Homepage
- [ ] Hero slider displays
- [ ] Service cards show correctly
- [ ] CTA buttons are clickable
- [ ] Footer displays properly
- [ ] Navigation menu works
- [ ] Social links work

### Service Pages (Kitchen, Wardrobes)
- [ ] Images load correctly
- [ ] Heading hierarchy proper
- [ ] Description text readable
- [ ] Contact CTA visible
- [ ] Gallery integration works

### Gallery
- [ ] Images load with lazy loading
- [ ] Lightbox opens on click
- [ ] Smooth scrolling works
- [ ] Mobile view accessible

### Blog
- [ ] Blog posts load from WordPress
- [ ] Featured images display
- [ ] Post content renders correctly
- [ ] Links in posts work
- [ ] Metadata (author, date) display

### Contact Page
- [ ] Form displays completely
- [ ] Form fields accept input
- [ ] Validation messages appear
- [ ] Success message shows after submit
- [ ] Phone and email visible

---

## 🚨 Incident Response

### If Site Goes Down
```bash
# 1. SSH into server
ssh user@server

# 2. Check Apache status
systemctl status apache2

# 3. Check error logs
tail -50 /var/log/apache2/error.log

# 4. Check disk space
df -h

# 5. Check memory
free -h

# 6. Restart Apache if needed
systemctl restart apache2

# 7. Restore from backup if needed
# Contact hosting provider for help
```

### If Site Is Slow
```bash
# Check current processes
top

# Check network
netstat -an | grep ESTABLISHED | wc -l

# Check Apache process count
ps aux | grep apache2 | wc -l

# If too many processes, restart Apache
systemctl restart apache2
```

### If Forms Not Working
- [ ] Check email configuration
- [ ] Test form submission
- [ ] Check Formspree dashboard
- [ ] Verify server SMTP settings
- [ ] Check spam folder for test emails

---

## 📝 Weekly Maintenance Tasks

Every Monday:
```bash
# Check error logs
tail -100 /var/log/apache2/error.log

# Check disk space
df -h

# Verify backups completed
ls -la /backups/ | head -10

# Check for security updates
apt list --upgradable
```

---

## 📋 Monthly Maintenance Tasks

First Friday of Month:
- [ ] Review Google Search Console (crawl errors, coverage)
- [ ] Check Google Analytics (traffic, behavior)
- [ ] Monitor Core Web Vitals
- [ ] Check keyword rankings
- [ ] Review 404 errors
- [ ] Update content if needed
- [ ] Test backup restoration

---

## 🔄 Backup & Recovery

### Daily Backup Verification
```bash
# Check last backup
ls -la /backups/ | head -1

# Expected: avyra_db_YYYYMMDD.sql from today

# If no recent backup: Contact sysadmin
```

### Monthly Backup Test
- [ ] Restore database to test server
- [ ] Verify data integrity
- [ ] Test file restoration
- [ ] Document time to restore

---

## 📞 Emergency Contacts

```
Hosting Provider Support: [Info from hosting]
System Administrator: [Admin email/phone]
Technical Support: support@avyra.co.in
Domain Registrar: [Registrar info]
SSL Certificate: Let's Encrypt (free auto-renewal)
```

---

## ✨ Post-Launch Optimization (First Month)

### Week 1
- [ ] Monitor error logs daily
- [ ] Check Google Search Console for crawl errors
- [ ] Verify all pages indexed
- [ ] Monitor form submissions

### Week 2
- [ ] Review Google Analytics first week data
- [ ] Check average page load time
- [ ] Monitor Core Web Vitals
- [ ] Testing any necessary fixes

### Week 3
- [ ] Conduct comprehensive security audit
- [ ] Test all functionality once more
- [ ] Review competitor performance
- [ ] Plan optimization tasks

### Week 4
- [ ] Full analytics report review
- [ ] SEO performance check
- [ ] Content optimization ideas
- [ ] Plan next period improvements

---

## 🎓 Documentation

### Keep Organized
- [ ] Server IP documented
- [ ] Admin credentials stored securely
- [ ] Database credentials stored securely
- [ ] FTP/SFTP credentials stored securely
- [ ] Domain registrar login saved
- [ ] SSL certificate renewal date noted
- [ ] Backup recovery procedures documented
- [ ] Contact list maintained

### Location to Store
- [ ] Password manager (LastPass, 1Password, KeePass)
- [ ] Secure shared document (Google Drive with encryption)
- [ ] Team documentation wiki
- [ ] Backup documentation location

---

## 🎉 Deployment Complete Verification

When all items are checked:
- ✅ Site is live and accessible
- ✅ All pages load correctly
- ✅ HTTPS working (no mixed content)
- ✅ Forms functional
- ✅ Analytics tracking
- ✅ SEO setup complete
- ✅ Backups automated
- ✅ Security hardened
- ✅ Performance optimized
- ✅ Monitoring active

**Status**: 🟢 **READY FOR PRODUCTION**

---

**Template Last Updated**: February 15, 2026  
**Next Review**: February 15, 2027  
**Deployment Date**: [Your Date Here]  
**Deployed By**: [Your Name]  
**Verification Date**: [Date Verified]  
**Verified By**: [Verifier Name]

**Notes**:
```
[Add any specific notes about your deployment here]
```
