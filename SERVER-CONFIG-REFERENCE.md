# Server Configuration Reference Guide

**Last Updated**: February 15, 2026
**Project**: AVYRA - Kitchen & Wardrobe Interior Design

---

## 1. Server Requirements

### 1.1 Minimum Requirements

```
CPU: 2-core processor (minimum)
RAM: 2 GB (minimum)
Storage: 20 GB SSD
Bandwidth: Unmetered or 1 TB+ monthly
```

### 1.2 Recommended Requirements

```
CPU: 4-core processor or better
RAM: 4-8 GB
Storage: 50-100 GB NVMe SSD
Bandwidth: Unmetered
DDoS Protection: Yes
Daily Backups: Yes
CDN: Yes (CloudFlare, AWS CloudFront)
Monitoring: 24/7 uptime monitoring
```

---

## 2. Hosting Provider Configuration

### 2.1 Apache/cPanel Setup

**PHP Version**: 8.0 or higher (for WordPress blog)
**Apache Modules Required**:
- mod_rewrite (URL rewriting)
- mod_deflate (Gzip compression)
- mod_expires (Browser caching)
- mod_headers (Custom headers)
- mod_ssl (HTTPS/TLS)
- mod_remoteip (Real IP detection behind CDN)

**Enable Modules**:
```bash
a2enmod rewrite
a2enmod deflate
a2enmod expires
a2enmod headers
a2enmod ssl
a2enmod remoteip
systemctl restart apache2
```

### 2.2 Configuration Optimization

**PHP Configuration** (`php.ini`):
```ini
max_execution_time = 300
max_input_time = 300
memory_limit = 256M
post_max_size = 100M
upload_max_filesize = 100M
default_charset = "UTF-8"
```

**Apache Configuration** (`apache2.conf` or VirtualHost):
```apache
# Timeout settings
Timeout 300

# KeepAlive settings
KeepAlive On
KeepAliveTimeout 5
MaxKeepAliveRequests 100

# Connection settings
MaxConnectionsPerChild 10000
```

---

## 3. HTTPS/TLS Configuration

### 3.1 SSL Certificate Setup

**Recommended**: Let's Encrypt (Free, Auto-Renewal)

**Installation via Certbot**:
```bash
apt-get install certbot python3-certbot-apache
certbot certonly --apache -d www.avyra.co.in -d avyra.co.in
certbot renew --dry-run  # Test renewal
```

**Installation via cPanel**:
1. Navigate to cPanel > SSL/TLS Status
2. Click "Manage"
3. Select "Auto-Configure" or "Let's Encrypt"
4. Enter primary domain
5. Click "Issue Certificate"
6. Enable auto-renewal

### 3.2 TLS Version Configuration

**Minimum TLS Version**: 1.2
**Recommended TLS Version**: 1.3

```apache
# In VirtualHost or .htaccess
SSLProtocol -all +TLSv1.2 +TLSv1.3
SSLCipherSuite HIGH:!aNULL:!MD5
SSLPrefer
ServerCiphers ON
```

### 3.3 HSTS Configuration

```apache
Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
```

**Preload Submission**: https://hstspreload.org/

---

## 4. .htaccess Configuration

### 4.1 File Location

```
/public_html/.htaccess
/public_html/public/.htaccess (if applicable)
```

### 4.2 Key Sections

**Enable Rewrite Engine**:
```apache
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
</IfModule>
```

**Force HTTPS**:
```apache
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

**Remove www**:
```apache
RewriteCond %{HTTP_HOST} ^www\.avyra\.co\.in [NC]
RewriteRule ^(.*)$ https://avyra.co.in/$1 [L,R=301]
```

**Security Headers**:
```apache
Header always set X-Frame-Options "SAMEORIGIN"
Header always set X-Content-Type-Options "nosniff"
Header always set X-XSS-Protection "1; mode=block"
Header always set Referrer-Policy "strict-origin-when-cross-origin"
```

**Gzip Compression**:
```apache
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>
```

**Browser Caching**:
```apache
<FilesMatch "\.(jpg|jpeg|png|gif|webp|svg|ico|css|js|woff|woff2|ttf|otf)$">
    Header set Cache-Control "max-age=31536000, public"
</FilesMatch>

<FilesMatch "\.(html|json)$">
    Header set Cache-Control "no-cache, no-store, must-revalidate"
</FilesMatch>
```

**Security Protection**:
```apache
# Block vulnerable files
<FilesMatch "\.env$|^\.git|node_modules|composer\.(json|lock)|package\.(json|lock)">
    Order allow,deny
    Deny from all
</FilesMatch>

# Prevent directory listing
Options -Indexes

# Basic SQL Injection protection
RewriteCond %{QUERY_STRING} (\*|union|select|insert|update|delete|drop|create|alter) [NC]
RewriteRule .* - [F,L]
```

---

## 5. DNS Configuration

### 5.1 A Records

```
Domain: avyra.co.in
Type: A
Value: [Your Server IP]
TTL: 3600 (1 hour)

Subdomain: www
Type: A
Value: [Your Server IP]
TTL: 3600
```

### 5.2 MX Records (Email)

```
Priority: 10
Value: mail.avyra.co.in
TTL: 3600

Priority: 20
Value: secondary.avyra.co.in (backup)
TTL: 3600
```

### 5.3 TXT Records

**DMARC Record**:
```
Name: _dmarc
Value: v=DMARC1; p=quarantine; rua=mailto:admin@avyra.co.in
```

**SPF Record**:
```
Name: @ (or avyra.co.in)
Value: v=spf1 include:sendgrid.net ~all
```

**DKIM Record**:
```
Provided by email service provider
Add to DNS under _domainkey subdomain
```

### 5.4 CAA Records (SSL Certificate Authorization)

```
Type: CAA
Flags: 0
Tag: issue
Value: "letsencrypt.org"

Type: CAA
Flags: 0
Tag: issuewild
Value: "letsencrypt.org"
```

---

## 6. CDN Configuration

### 6.1 CloudFlare Setup

**DNS Configuration**:
1. Update domain nameservers to CloudFlare
2. Add A record pointing to server IP
3. Enable orange cloud icon (proxied)

**Caching Rules**:
```
Path: /static/*
Cache Level: Cache Everything
Browser TTL: 1 month

Path: /
Cache Level: Standard
Browser TTL: 30 minutes
Cache on Cache Key: Default
```

**Page Rules** (Legacy) / Rules (New):
```
Rule 1: Allow /sitemap.xml
Rule 2: Allow /robots.txt
Rule 3: Cache static assets (/images/*, /css/*, /js/*, /fonts/*)
Rule 4: No cache for /api/* or /admin/*
```

**Security Settings**:
- SSL/TLS: Full (strict)
- HSTS: Enable (max-age: 1 year)
- Minimum TLS Version: 1.2
- Bot Management: Enable (Enterprise)
- DDoS Protection: Enabled

**Performance Settings**:
- Minification: Enable HTML, CSS, JavaScript
- Rocket Loader: Disabled (to avoid conflicts)
- Polish: Enabled (Image optimization)
- Rocket Loader: Off (use CloudFlare Workers instead)

### 6.2 AWS CloudFront Setup

**Origin Configuration**:
```
Domain Name: avyra.co.in (S3 bucket or custom origin)
Protocol: HTTPS only
HTTP Port: 80
HTTPS Port: 443
```

**Caching Behavior**:
```
Path Pattern: /* (default)
Viewer Protocol Policy: Redirect HTTP to HTTPS
Allowed Methods: GET, HEAD, OPTIONS
Cache Policy: CachingOptimized (or custom)
Origin Request Policy: AllViewerExceptHostHeader
```

**Custom Headers**:
```
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
```

---

## 7. Database Configuration

### 7.1 MySQL/MariaDB (for WordPress)

**Version**: 5.7 or higher / MariaDB 10.5 or higher

**Connection String**:
```
Host: localhost
Port: 3306
Database: avyra_db
User: avyra_user
Password: [Strong password]
```

**Backup Configuration**:
```bash
# Auto backup daily
mysqldump -u avyra_user -p avyra_db > /backups/avyra_db_$(date +%Y%m%d).sql
```

**Performance Settings** (`my.cnf`):
```ini
[mysqld]
max_connections = 200
max_allowed_packet = 256M
thread_stack = 192K
query_cache_type = 1
query_cache_size = 16M
innodb_buffer_pool_size = 1G
innodb_log_file_size = 256M
```

---

## 8. Backup & Recovery

### 8.1 Backup Schedule

**Daily Backup**:
```bash
# Schedule via cron
0 2 * * * /usr/bin/backup.sh > /var/log/backup.log
```

**Backup Destinations**:
- Local server: /backups/ directory
- Offsite: AWS S3, Google Cloud Storage, or dedicated backup service
- Retained: Last 30 days of daily backups

### 8.2 Backup Content

- Database (MySQL/MariaDB)
- Website files (/public_html)
- Configuration files (.htaccess, php.ini)
- SSL certificates
- Custom code & customizations

### 8.3 Recovery Procedure

**Step 1**: Stop website
```bash
systemctl stop apache2
```

**Step 2**: Restore database
```bash
mysql -u avyra_user -p avyra_db < /backups/avyra_db_YYYYMMDD.sql
```

**Step 3**: Restore files
```bash
rm -rf /public_html/*
cp -r /backups/public_html_YYYYMMDD/* /public_html/
```

**Step 4**: Verify & restart
```bash
systemctl start apache2
```

---

## 9. Monitoring & Logging

### 9.1 Error Logging

**Apache Error Log**:
```
/var/log/apache2/error.log
/var/log/apache2/avyra-error.log (if configured)
```

**Monitor High Errors**:
```bash
tail -f /var/log/apache2/error.log | grep "error"
```

### 9.2 Access Logging

**Apache Access Log**:
```
/var/log/apache2/access.log
/var/log/apache2/avyra-access.log (if configured)
```

**Monitor Access Patterns**:
```bash
tail -f /var/log/apache2/access.log
```

### 9.3 Performance Monitoring

**Uptime Monitoring**:
- Service: Uptime Robot, Pingdom, or DataDog
- Check every 5 minutes
- Alert on downtime

**Performance Metrics**:
- Response time
- CPU usage
- Memory usage
- Disk space
- Bandwidth usage

**Tool Recommendations**:
- New Relic
- DataDog
- Prometheus + Grafana
- Apache Bench

### 9.4 Security Monitoring

**File Integrity Monitoring**:
```bash
aide --init
aide --check
```

**Log Analysis**:
- Failed login attempts
- SQL injection attempts
- XSS attempts
- Unusual traffic patterns

**Tools**:
- ModSecurity (WAF)
- Fail2Ban (Intrusion detection)
- OSSEC (Host-based intrusion detection)

---

## 10. Performance Optimization

### 10.1 Astro Build Optimization

**Build Configuration** (astro.config.mts):
```typescript
export default defineConfig({
  output: 'static',
  adapter: undefined,
  vite: {
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
    },
  },
});
```

### 10.2 JavaScript Minification

**Enabled by default** in production build:
```bash
npm run build
```

### 10.3 Image Optimization

- Use WebP format with PNG fallback
- Lazy loading on images
- Responsive images with srcset
- Optimize at build time via Astro

### 10.4 CSS Minimization

- Tailwind CSS only includes used classes
- PurgeCSS removes unused CSS
- CSS-in-JS minimized
- Critical CSS inlined

---

## 11. Development to Production Workflow

### 11.1 Development Environment

```
Location: Local machine or staging server
Node Version: 18+ 
Package Manager: npm or bun
Dependencies: Installed locally
Build: npm run build (creates static files)
```

### 11.2 Staging Environment

```
Location: Staging server
Purpose: Testing before production
Build: npm run build
Test: Full functionality testing
```

### 11.3 Production Deployment

**Files to Deploy**:
```
/dist/* (All static files from Astro build)
/public/robots.txt
/public/sitemap.xml
/public/.htaccess
/public/.well-known/security.txt
/public/humans.txt
```

**Deployment Steps**:
```bash
# 1. Build locally
npm run build

# 2. Test locally
npm run preview

# 3. Deploy to server (via FTP, SSH, GitHub Actions, etc.)
# Option A: Manual FTP upload
# Option B: GitHub Actions CI/CD
# Option C: SSH deployment script

# 4. Verify on production
# - Check homepage
# - Check service pages
# - Check blog pages
# - Check form submission
# - Verify HTTPS
# - Check Core Web Vitals
```

### 11.4 Zero-Downtime Deployment

```bash
# Deploy to temporary directory
cp -r dist /tmp/avyra_new

# Test temporary deployment
# If successful, swap directories
rm -rf /public_html/current
mv /tmp/avyra_new /public_html/current

# If failed, keep old version running
```

---

## 12. Email Configuration

### 12.1 SMTP Configuration (WordPress/Forms)

**Provider**: SendGrid, AWS SES, or Mailgun

**SMTP Settings**:
```
Host: smtp.sendgrid.net
Port: 587 or 465
Encryption: TLS or SSL
Username: apikey
Password: [SendGrid API key]
From Address: noreply@avyra.co.in
```

### 12.2 Contact Form Email Integration (Formspree)

**Configuration**:
```
Email Recipient: support@avyra.co.in
Reply-To: form@formspree.io
```

---

## 13. Subdomain Configuration

### 13.1 Blog Subdomain (Optional)

```
Subdomain: blog.avyra.co.in
Type: A Record
Value: [Server IP]
Setup: WordPress installation on subdomain
```

### 13.2 Admin Subdomain (Optional)

```
Subdomain: admin.avyra.co.in
Type: A Record
Value: [Server IP]
Setup: Private admin control panel
Security: Password protected
```

---

## 14. Security Best Practices

### 14.1 File Permissions

```bash
# Web root
chmod 755 /public_html
chmod 755 /public_html/*

# Sensitive files (hidden)
chmod 600 /public_html/.env
chmod 600 /public_html/.htaccess

# WordPress if applicable
chmod 644 /public_html/wp-config.php
chmod 755 /public_html/wp-content/
```

### 14.2 User Accounts

```bash
# Create unprivileged user for web server
useradd -r -s /bin/false avyra_web

# Change ownership
chown -R avyra_web:avyra_web /public_html

# Restrict sudo permissions
```

### 14.3 Firewall Configuration

```bash
# Enable UFW firewall
ufw enable

# Allow SSH
ufw allow 22/tcp

# Allow HTTP
ufw allow 80/tcp

# Allow HTTPS
ufw allow 443/tcp

# Block everything else by default
ufw default deny incoming
ufw default allow outgoing
```

### 14.4 CSP Headers (Content Security Policy)

```apache
Header set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' *.google-analytics.com *.googletagmanager.com *.formspree.io; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:;"
```

---

## 15. Troubleshooting

### 15.1 Common Issues

**Issue**: 404 errors on all pages except homepage
- **Solution**: Enable mod_rewrite, verify .htaccess configuration, check RewriteBase path

**Issue**: HTTPS redirect loop
- **Solution**: Check .htaccess rewrite rules, verify server configuration, clear browser cache

**Issue**: Slow page load
- **Solution**: Check gzip compression, verify browser caching, check CDN configuration

**Issue**: Database connection errors
- **Solution**: Verify MySQL credentials, check database name, verify PHP MySQL module

**Issue**: Email not sending
- **Solution**: Verify SMTP credentials, check firewall rules for SMTP port, verify sender domain

### 15.2 Performance Troubleshooting

```bash
# Check server load
uptime
top

# Check disk space
df -h

# Check memory usage
free -h

# Check Apache processes
ps aux | grep apache

# Check MySQL processes
ps aux | grep mysql
```

---

## 16. Security Checklist

- [ ] HTTPS/TLS 1.3 enabled
- [ ] SSL certificate installed & auto-renewal configured
- [ ] Firewall enabled with proper rules
- [ ] Fail2Ban or similar protection installed
- [ ] File permissions set correctly (755 for dirs, 644 for files)
- [ ] .env file protected (not accessible via web)
- [ ] .htaccess security headers configured
- [ ] ModSecurity or WAF installed
- [ ] Backup system automated & tested
- [ ] Monitoring & alerting configured
- [ ] Log rotation configured
- [ ] Regular updates scheduled
- [ ] Security tools installed (aide, rkhunter, etc.)
- [ ] Admin interface password protected
- [ ] Database user permissions restricted

---

## 17. Performance Checklist

- [ ] Gzip compression enabled
- [ ] Browser caching configured
- [ ] CDN configured & working
- [ ] Database indexed properly
- [ ] PHP opcache enabled
- [ ] Static files minified
- [ ] Images optimized
- [ ] Database backups automated
- [ ] Monitoring tools configured
- [ ] Core Web Vitals in "Good" range
- [ ] Page load time < 3 seconds
- [ ] Lighthouse score > 90

---

## 18. Deployment Checklist

- [ ] Build tested locally
- [ ] All environment variables set
- [ ] Database migrated
- [ ] SSL certificate installed
- [ ] DNS records updated
- [ ] .htaccess uploaded
- [ ] robots.txt & sitemap.xml updated
- [ ] Forms tested
- [ ] Email notifications tested
- [ ] Analytics configured
- [ ] Monitoring & alerts setup
- [ ] Backup system verified
- [ ] Fire through crawlers
- [ ] Google Search Console updated

---

## Contact & Support

For server configuration questions or issues, contact:

**Hosting Provider Support**: [Provider website]
**System Administrator**: [Admin email]
**Technical Support**: support@avyra.co.in

---

**Last Updated**: February 15, 2026
**Next Review**: February 15, 2027
**Version**: 1.0

© 2026 AVYRA. Confidential.
