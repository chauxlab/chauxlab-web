# chauxlab-web

Sitio estático de **ChauxLab Institute** (`chauxlab.com`).

**Repositorio:** [`chauxlab/chauxlab-web`](https://github.com/chauxlab/chauxlab-web) (público, org ChauxLab).

**Sitio publicado:** https://chauxlab.github.io/chauxlab-web/

## Objetivo

Mostrar con claridad:

1. **Servicios OJS** (M1 Nube · M2 Gestión · M3 Integral) — sin precios públicos; cotización por cliente.
2. **Catálogo editorial** — compra vía enlace a PagoPar (`data/libros.json`).
3. Publicaciones, investigación (proyectos de envergadura) y contacto.

No incluye carrito ni Shopify. La integración profunda con la API de PagoPar es fase posterior.

## Stack

- HTML / CSS / JS mínimo (sin build).
- Publicación: **GitHub Pages** (`.github/workflows/pages.yml`) — cada push a `main` despliega.
- Dominio custom (pendiente DNS): `CNAME` → `chauxlab.com` (DreamHost → GitHub Pages).

## Desarrollo local

Desde la raíz del repo:

```bash
python3 -m http.server 8080
```

Abrir `http://localhost:8080`.

## Catálogo de libros

Fuente web: [`data/libros.json`](data/libros.json).

Campos:

| Campo | Uso |
|-------|-----|
| `slug` | Id estable |
| `title` | Título |
| `collection` | Colección / serie |
| `available` | Si `true` y hay URL, muestra Comprar |
| `url_pagopar` | Página de pago del producto en PagoPar |
| `note` | Nota opcional |

El contenido editorial vive en `chauxlab-books`; este JSON es el puente hacia la web y PagoPar.

## DNS (DreamHost → GitHub Pages)

Tras crear el repo en GitHub y activar Pages:

1. En el repo: **Settings → Pages** → source = GitHub Actions.
2. En DreamHost, para `chauxlab.com`:
   - registro **A** a las IPs de GitHub Pages, o
   - **CNAME** de `www` a `<user>.github.io` según la [documentación actual de GitHub](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site).
3. Esperar propagación y verificar el dominio en Settings → Pages.

## Contacto

`editorial@chauxlab.com`
