# chauxlab-web

Sitio estático de **ChauxLab Institute** (`chauxlab.com`).

**Repositorio:** [`chauxlab/chauxlab-web`](https://github.com/chauxlab/chauxlab-web) (público, org ChauxLab).

**Sitio en vivo:** https://chauxlab.com/  
**Mirror Pages:** https://chauxlab.github.io/chauxlab-web/

Handoff para la siguiente sesión (diseño): [`docs/HANDOFF.md`](docs/HANDOFF.md).

## Objetivo

Mostrar con claridad:

1. **Servicios OJS** (M1 Nube · M2 Gestión · M3 Integral) — sin precios públicos; cotización por cliente.
2. **Catálogo editorial** — compra vía enlace a PagoPar (`data/libros.json`).
3. Publicaciones, investigación (proyectos de envergadura) y contacto.

No incluye carrito ni Shopify. La integración profunda con la API de PagoPar es fase posterior.

## Stack

- HTML / CSS / JS mínimo (sin build).
- Publicación: **GitHub Pages** (`.github/workflows/pages.yml`) — cada push a `main` despliega.
- Dominio custom: archivo `CNAME` = `chauxlab.com`. DNS en DreamHost (apex A → IPs de GitHub Pages; `www` CNAME → `chauxlab.github.io`). HTTPS forzado en Pages.

## Desarrollo local

Desde la raíz del repo:

```bash
python3 -m http.server 8080
```

Abrir `http://localhost:8080`.

## Catálogo de libros

Fuente web: [`data/libros.json`](data/libros.json).

| Campo | Uso |
|-------|-----|
| `slug` | Id estable |
| `title` | Título |
| `collection` | Colección / serie |
| `available` | Si `true` y hay URL, muestra Comprar |
| `url_pagopar` | Página de pago del producto en PagoPar |
| `note` | Nota opcional |

El contenido editorial vive en `chauxlab-books`; este JSON es el puente hacia la web y PagoPar.

## DNS (resumen)

1. Pages source = GitHub Actions; custom domain = `chauxlab.com`; Enforce HTTPS.
2. DreamHost (DNS Only): apex **A** a las IPs de GitHub Pages; **CNAME** `www` → `chauxlab.github.io`.
3. Detalle y aprendizajes: [`docs/HANDOFF.md`](docs/HANDOFF.md).

## Contacto

`editorial@chauxlab.com`
