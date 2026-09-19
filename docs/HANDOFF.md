# Handoff — listo para diseño (sesión siguiente)

Cierre de la fase de **infraestructura y publicación**. El sitio estático v1 está en vivo; la próxima sesión puede centrarse en **diseño / contenido visual** sin desbloquear hosting.

## Estado actual (2026-09-19)

| Ítem | Estado |
|------|--------|
| Repo | [`chauxlab/chauxlab-web`](https://github.com/chauxlab/chauxlab-web) · org · **público** (Free + Pages) |
| Live | **https://chauxlab.com/** (HTTPS forzado) |
| Mirror Pages | https://chauxlab.github.io/chauxlab-web/ |
| `CNAME` en repo | `chauxlab.com` (necesario para custom domain estable) |
| Apex DNS | A → `185.199.108–111.153` (GitHub Pages) en DreamHost |
| `www` | CNAME → `chauxlab.github.io` **creado en panel DreamHost**; si aún no resuelve, esperar publicación/propagación (SOA puede tardar) |
| `academia.chauxlab.com` | Hosting viejo quitado; público NXDOMAIN |
| Shopify | Descontinuado en el sitio (pueden quedar CNAMEs huérfanos en DreamHost: `cuenta`, `tienda`, etc.) |

## Decisiones de producto (no reabrir sin motivo)

1. **Sitio estático mínimo** — HTML/CSS/JS, sin build, sin carrito.
2. **OJS (prioridad 1)** — M1/M2/M3 sin precios públicos; CTA = cotización (nacional / internacional).
3. **Libros (prioridad 2)** — catálogo vía `data/libros.json` → enlace PagoPar por título (API PagoPar = fase 2).
4. **Publicaciones / investigación** — secundarios; investigación solo proyectos de envergadura.
5. **Hosting v1** — GitHub Pages (Actions). DreamHost = DNS only. Cloudflare diferido (útil si quieren repo privado + Pages sin Team).
6. **Marca tipográfica v1** — Literata + Source Sans 3; navy/gold (ver `assets/css/site.css`).

## Aprendizajes operativos

### GitHub Pages + org Free
- Pages **no** publica repos **privados** en plan Free de org.
- Solución elegida: hacer **público** solo este repo (sin secretos). Alternativa futura: Cloudflare Pages + repo privado.

### Custom domain
- Archivo `CNAME` en la raíz del deploy hace que `*.github.io/chauxlab-web` redirija al dominio custom.
- Si el DNS apex aún apunta a hosting viejo (Google Sites / academia), quitar `CNAME` del repo temporalmente para poder usar el mirror `github.io`.
- Cuando apex A apunta a GitHub: restaurar `CNAME`, configurar Pages `cname=chauxlab.com`, luego **Enforce HTTPS**.
- HTTP sin enforce puede devolver 404 de GitHub aunque HTTPS ya sirva el sitio.

### DreamHost
- Dominio en modo **DNS Only**.
- Tras cambios grandes (quitar Fully Hosted / academia), la UI bloquea ediciones con `disable-on-domain-in-progress` (minutos).
- “Agregar Registro” abre tipos (A, AAAA, ALIAS, CNAME…); CNAME se agrega con **AÑADIR** bajo CNAME (Host=`www`, Apunta a=`chauxlab.github.io`).
- El panel puede mostrar un registro antes de que los NS autoritativos lo publiquen (serial SOA sin subir).
- BrowserOS neo sirve para editar el panel con sesión ya logueada.

### Rutas del sitio
- Usar **rutas relativas** (`assets/…`, `ojs/`) para que funcione tanto en apex como en project Pages (`/chauxlab-web/`).

## Estructura del repo

```text
index.html
ojs/  libros/  publicaciones/  investigacion/  contacto/
assets/css/site.css
assets/img/chauxlab-logo.png
data/libros.json          # stubs; available:false hasta URLs PagoPar
CNAME                     # chauxlab.com
.github/workflows/pages.yml
```

## Próxima sesión — diseño (sugerido)

1. Rediseñar **home** (hero de marca, una composición, CTAs OJS + editorial) respetando reglas de diseño del proyecto.
2. Unificar tipografía/color/espaciado en `assets/css/site.css`; revisar mobile.
3. Páginas interiores: una idea visual clara por sección (OJS primero).
4. Contenido real: textos, fotos de contexto (no solo gradientes).
5. Cuando haya links: completar `url_pagopar` + `available:true` en `data/libros.json`.

## Pendientes no-diseño (backlog)

- Confirmar propagación de `www` y que el certificado Pages incluya `www.chauxlab.com`.
- Limpiar CNAMEs Shopify residuales en DreamHost si ya no se usan.
- Actualizar KB / procedimientos que mencionen Shopify como canal web.
- Fase 2: API PagoPar (Worker u otro backend); no en este repo estático.
- `copyright.typ` / tienda URL en repos editoriales cuando el dominio quede estable.

## Dev local

```bash
python3 -m http.server 8080
```

Abrir `http://localhost:8080`.
