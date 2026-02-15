# WordPress API Integration - Fix Guide

## Issues Fixed
1. **URL Bug**: The WP_API_BASE was including `/posts` at the end, causing double `/posts` in final URLs
2. **Error Handling**: Added better error messages to distinguish between JSON parsing and CORS errors

## Current Status

### Localhost (localhost:4321)
The code now checks if running on localhost and attempts to connect to:
- **Primary**: `http://localhost:8000/wp-json/wp/v2` (if you have WordPress running locally)
- **Fallback**: You can uncomment the CORS proxy option

**Solution options:**

#### Option A: Set up local WordPress (Recommended for development)
```bash
# Using Docker (easiest)
docker run --name wordpress -p 8000:80 -e WORDPRESS_DB_PASSWORD=password wordpress

# Then install the REST API (comes with WordPress 4.7+)
# Navigate to http://localhost:8000 and install WordPress
```

#### Option B: Use a CORS Proxy (Quick temporary fix)
Uncomment this line in `src/services/wordpress.ts`:
```typescript
// return "https://cors-anywhere.herokuapp.com/https://avyra.co.in/blog/wp-json/wp/v2";
```
Then comment out the localhost:8000 line.

---

### Live URL (avyra.co.in)
Getting **CORS errors** means the WordPress API responses are missing proper CORS headers.

**Solution: Enable CORS on WordPress**

Do ONE of the following:

#### Option A: Install WP REST API CORS Plugin (Easiest)
1. Go to WordPress admin dashboard
2. Plugins → Search for "REST API CORS"
3. Install and activate "Allow REST API Origins CORS"
4. Configure to allow `https://avyra.co.in`

#### Option B: Add CORS headers via .htaccess
Add this to your WordPress `.htaccess` or nginx config:

**.htaccess (Apache):**
```apache
<IfModule mod_headers.c>
    Header set Access-Control-Allow-Origin "https://avyra.co.in"
    Header set Access-Control-Allow-Methods "GET, POST, OPTIONS"
    Header set Access-Control-Allow-Headers "Content-Type, Authorization"
</IfModule>
```

**nginx config:**
```nginx
location /blog/wp-json/ {
    add_header 'Access-Control-Allow-Origin' 'https://avyra.co.in' always;
    add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS' always;
    add_header 'Access-Control-Allow-Headers' 'Content-Type, Authorization' always;
}
```

#### Option C: Create a Backend Proxy (Most Secure)
Create a server-side endpoint that proxies requests to WordPress:

```typescript
// src/api/blog-posts.ts (or similar)
export async function GET() {
  const response = await fetch(
    "https://avyra.co.in/blog/wp-json/wp/v2/posts?_embed&per_page=100",
    {
      headers: { "Accept": "application/json" }
    }
  );
  
  return response.json();
}
```

Then update `wordpress.ts` to call your endpoint instead:
```typescript
// In wordpress.ts
const WP_API_BASE = "/api/blog-posts";
```

---

## Testing

After applying a fix, test with these browser console commands:

```javascript
// Test the API endpoint directly
fetch('https://avyra.co.in/blog/wp-json/wp/v2/posts?_embed&per_page=3')
  .then(r => r.json())
  .then(d => console.log('Success:', d))
  .catch(e => console.error('Error:', e.message))
```

---

## Error Messages Explained

| Error | Cause | Fix |
|-------|-------|-----|
| `Unexpected token '<'` | API returned HTML instead of JSON | Check if WordPress API is enabled/accessible |
| `CORS policy blocked` | No `Access-Control-Allow-Origin` header | Enable CORS on WordPress (see above) |
| `301 Moved Permanently` | URL might be redirecting | Check WordPress URL configuration |
| `Content-Type: text/html` | WordPress is returning error page | Check WordPress logs for errors |

---

## WordPress API Verification

To verify WordPress API is working, visit these URLs:
- **Live**: `https://avyra.co.in/blog/wp-json/wp/v2/` (should return JSON)
- **Localhost**: `http://localhost:8000/wp-json/wp/v2/` (if using local WordPress)

Both should return JSON starting with `{"version":...}` not HTML.
