import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

// Serve static assets from build output
app.use(express.static(path.join(__dirname, 'dist')));

// Proxy endpoint for dakwah.id Khutbah Jum'at API
app.get('/api/khutbah', async (req, res) => {
  try {
    const page = req.query.page || '1';
    const perPage = req.query.per_page || '12';
    const search = req.query.search || '';
    
    const targetUrl = new URL('https://www.dakwah.id/wp-json/wp/v2/posts');
    targetUrl.searchParams.set('tags', '120');
    targetUrl.searchParams.set('per_page', String(perPage));
    targetUrl.searchParams.set('page', String(page));
    targetUrl.searchParams.set('_embed', 'true');
    if (search) {
      targetUrl.searchParams.set('search', String(search));
    }

    const response = await fetch(targetUrl.toString(), {
      headers: {
        'User-Agent': 'TarbiyahDigital/1.0',
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: 'Failed to fetch from dakwah.id' });
    }

    const totalCount = response.headers.get('x-wp-total');
    const totalPages = response.headers.get('x-wp-totalpages');
    if (totalCount) res.setHeader('X-WP-Total', totalCount);
    if (totalPages) res.setHeader('X-WP-TotalPages', totalPages);

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Khutbah API proxy error:', error);
    res.status(500).json({ error: 'Internal server error while fetching khutbah data' });
  }
});

// Proxy endpoint for dakwah.id Sejarah (Category 13) API
app.get('/api/sejarah', async (req, res) => {
  try {
    const page = req.query.page || '1';
    const perPage = req.query.per_page || '12';
    const search = req.query.search || '';
    
    const targetUrl = new URL('https://www.dakwah.id/wp-json/wp/v2/posts');
    targetUrl.searchParams.set('categories', '13');
    targetUrl.searchParams.set('per_page', String(perPage));
    targetUrl.searchParams.set('page', String(page));
    targetUrl.searchParams.set('_embed', 'true');
    if (search) {
      targetUrl.searchParams.set('search', String(search));
    }

    const response = await fetch(targetUrl.toString(), {
      headers: {
        'User-Agent': 'TarbiyahDigital/1.0',
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: 'Failed to fetch from dakwah.id' });
    }

    const totalCount = response.headers.get('x-wp-total');
    const totalPages = response.headers.get('x-wp-totalpages');
    if (totalCount) res.setHeader('X-WP-Total', totalCount);
    if (totalPages) res.setHeader('X-WP-TotalPages', totalPages);

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Sejarah API proxy error:', error);
    res.status(500).json({ error: 'Internal server error while fetching sejarah data' });
  }
});

// Proxy endpoint for dakwah.id Fikih (Category 2) API
app.get('/api/fikih', async (req, res) => {
  try {
    const page = req.query.page || '1';
    const perPage = req.query.per_page || '12';
    const search = req.query.search || '';
    
    const targetUrl = new URL('https://www.dakwah.id/wp-json/wp/v2/posts');
    targetUrl.searchParams.set('categories', '2');
    targetUrl.searchParams.set('per_page', String(perPage));
    targetUrl.searchParams.set('page', String(page));
    targetUrl.searchParams.set('_embed', 'true');
    const slug = req.query.slug;
    if (slug) {
      targetUrl.searchParams.delete('categories');
      targetUrl.searchParams.set('slug', String(slug));
    } else if (search) {
      targetUrl.searchParams.set('search', String(search));
    }

    const response = await fetch(targetUrl.toString(), {
      headers: {
        'User-Agent': 'TarbiyahDigital/1.0',
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: 'Failed to fetch from dakwah.id' });
    }

    const totalCount = response.headers.get('x-wp-total');
    const totalPages = response.headers.get('x-wp-totalpages');
    if (totalCount) res.setHeader('X-WP-Total', totalCount);
    if (totalPages) res.setHeader('X-WP-TotalPages', totalPages);

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Fikih API proxy error:', error);
    res.status(500).json({ error: 'Internal server error while fetching fikih data' });
  }
});

// Proxy endpoint for Qul Tarteel Tafsir As-Sa'di (Resource 503)
app.get('/api/tafsir', async (req, res) => {
  try {
    const ayah = req.query.ayah || '73:2';
    const targetUrl = new URL('https://qul.tarteel.ai/resources/translation/503/docs');
    targetUrl.searchParams.set('ayah', String(ayah));

    const response = await fetch(targetUrl.toString(), {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
      }
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: 'Failed to fetch from Qul Tarteel' });
    }

    const html = await response.text();
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.send(html);
  } catch (error) {
    console.error('Tafsir API proxy error:', error);
    res.status(500).json({ error: 'Internal server error while fetching tafsir data' });
  }
});

// SPA fallback for client-side routing
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server listening on http://0.0.0.0:${PORT}`);
});
