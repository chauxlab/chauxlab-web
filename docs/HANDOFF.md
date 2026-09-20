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
2. **OJS (prioridad 1)** — M1/M2/M3 con precio base publicado en guaraníes (2026-09-19, reemplaza decisión anterior de no publicar precios). Servicios diferenciados, no niveles incrementales. Clientes internacionales: misma tabla de precios; la pasarela de pago convierte a moneda local al momento de pagar. Excedentes también publicados (Gs. 60.000/DOI extra en M1; Gs. 120.000/artículo extra en M2 y M3). Naming M1/M2/M3 + denominación comercial actual se mantiene (no Go/Plus/Pro). Pendiente: definir si Libros e Investigación siguen el mismo criterio.
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
- **Resuelto (2026-09-19):** ISSN incluido en el precio en M1/M2/M3, sin excepción. Si la institución ya tiene ISSN propio, se mantiene el suyo; no hay cargo aparte ni descuento por no requerir el trámite.
- **Resuelto (2026-09-19):** descuento de 10% en M2 y M3 por pago anual adelantado (Gs. 54.000.000/año en M2; Gs. 108.000.000/año en M3, IVA incluido). Publicado en `ojs/index.html` y FAQ. M1 no aplica (ya es anual).
- **Resuelto (2026-09-19):** vigencia contractual se comunica como "12 meses, prorrogable de común acuerdo" en el sitio (antes "sin renovación automática", que daba impresión de corte fijo). No implica cambio en la mecánica real de renovación (sigue sin ser automática).
- Requisito M2 documentado en FAQ del sitio: la institución debe dar acceso de administrador a su instancia OJS y acceso al servidor (cPanel o equivalente) antes de iniciar la gestión editorial.
- **Resuelto (2026-09-20):** portabilidad de datos documentada en FAQ de `ojs/index.html`: en las tres modalidades la institución recibe exportación completa, suficiente para reinstalar en otro servidor; es política y consta en contrato.
- **Resuelto (2026-09-20):** backups periódicos con restitución en caso de falla, incluidos como parte del soporte técnico en las tres modalidades. Documentado en FAQ.
- **Pendiente — próxima sesión (no diseño, contenido/estrategia):** mencionar Scripta Scientia en `ojs/index.html` (o en el sitio en general) como revista real gestionada por ChauxLab — no una demo — para poder mostrarla como referencia. Motivo estratégico: Scripta Scientia necesita una página web institucional para poder solicitar ingreso al directorio Latindex. **No mencionar** las otras revistas en gestión (Medicina Familiar, UniNorte) sin autorización expresa de esas instituciones.

## Dev local

```bash
python3 -m http.server 8080
```

Abrir `http://localhost:8080`.
