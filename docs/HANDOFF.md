# Handoff — listo para diseño (sesión siguiente)

## Cierre de sesión — 2026-09-22 (tarde) — hub personal

### Hecho

- **Hub estático** [`alcideschaux/alcideschaux-web`](https://github.com/alcideschaux/alcideschaux-web) → preview https://alcideschaux.github.io/alcideschaux-web/
- Una página: identidad, trayectoria, ORCID/Scholar/LinkedIn, CTA a ChauxLab + Blog (Substack). Sin catálogo.
- Redirects legado Google Sites: `/recursos/libros/` → chauxlab libros; IA → `libros/ia-aplicada/`; webinarios/biblioteca → Substack; `/inicio/` → `/`.
- DreamHost: dominio **DNS Only**; apex A → GitHub Pages; `www` CNAME → `alcideschaux.github.io`.
- En vivo por HTTP: **http://alcideschaux.com/** (hub). `www` → apex.
- ChauxLab `/quienes-somos/`: enlace «Sitio personal» → alcideschaux.com (`c1b5558`).
- Solicitudes ID: ROR enviada antes; Ringgold+ISNI enviada (formulario CCC).
- **Shopify DNS eliminado** (2026-09-22): en `chauxlab.com` y `alcideschaux.com` quitados CNAME `tienda`, `cuenta`, `mailer*`, `*_domainkey` → myshopify. Quedan solo Pages + correo/MX. Canal de venta = PagoPar vía `chauxlab.com/libros/`.
- Enlaces tienda: `copyright.typ` → catálogo chauxlab; post blog actualizado (sin `tienda.chauxlab.com`).

### Pendiente / seguimiento

1. **HTTPS** en alcideschaux.com: esperar cert de GitHub Pages → Enforce HTTPS (aún `*.github.io`).
2. Opcional: 4º A `185.199.111.153` en alcideschaux; despublicar Google Site cuando HTTPS OK.
3. Anotar ROR / Ringgold / ISNI en sitio+HANDOFF cuando lleguen.
4. Shopify: plan en cancelación (tienda puede seguir online hasta fin de suscripción); no reactivar CNAMEs.

### Frontera de marca

- `alcideschaux.com` = persona (hub mínimo).
- `chauxlab.com` = instituto + oferta (libros, revistas, OJS, investigación).

---

## Cierre de sesión — 2026-09-22

Sitio en vivo: **https://chauxlab.com/** · branch `main`.

### Hecho en esta sesión

- Home: **sin CTAs en el hero** (quitados “Solicitar cotización” y “Ver qué ofrecemos”). Cotización queda en footer / OJS / contacto — no como primer gesto.
- **Tres páginas pilar de descubrimiento** bajo `/recursos/` (fuera del nav):
  - [`/recursos/migrar-revista-ojs/`](https://chauxlab.com/recursos/migrar-revista-ojs/)
  - [`/recursos/issn-doi/`](https://chauxlab.com/recursos/issn-doi/)
  - [`/recursos/m1-vs-m2/`](https://chauxlab.com/recursos/m1-vs-m2/)
- Footer ampliado en todo el sitio: ChauxLab · Servicios · Recursos · Institución (incluye Quiénes somos y Solicitar cotización).
- **Investigación:** pubs internacionales de cáncer (Receptors, Discovery Medicine) + bioética internacional (Explor Target); en `/investigacion/` además 3 papers Britos/Chaux de bioética (MedFam, UniNorte), agrupados por línea.
- **Auditoría de contenido** (diseño pausado): ver canvas de hallazgos P0–P2.
- **Verdades operativas (2026-09-22):**
  - FAQ **portabilidad** restaurada en `/ojs/` (`#faq-portabilidad`): exportación completa en M1/M2/M3; política contractual.
  - FAQ **soporte** precisa M2 (soporte sobre servidor de la institución) vs M1/M3 (hosting ChauxLab).
  - Tabla ISSN: «Incluido en el precio» (el «cuando corresponda» del trámite sigue en FAQ).
  - Naming M3 unificado a **Integral (M3)** en formulario y `contact.js` (alineado a la tabla).
- **Catálogo libros:** sin CTA «Adquirir PDF» por tarjeta (ruido). En encabezados: formato digital + clic en el título para info y precio (PagoPar).
- **Home lede:** nombra la oferta (OJS, libros digitales, revistas, investigación); sin CTAs en hero.
- **P1 (2026-09-22):**
  - `/publicaciones/`: title/H1/eyebrow alineados a **Revistas científicas** (URL legacy `/publicaciones/` se mantiene).
  - `/quienes-somos/`: CTA a Solicitar cotización.
  - `/investigacion/`: líneas con roles de equipo; publicaciones agrupadas por línea; CTA `contacto/?servicio=investigacion`.
  - Serie Médica: H1/nav = Serie Médica; eyebrow/contenido = Manual de Patología Médica (relación explícita).
  - Logos uni: autorizados vía contrato (ver arriba).
- **P2 sitio (2026-09-22):**
  - OJS: sección «Guías breves» + enlace ISSN FAQ → `/recursos/`; M1 vs M2 se presenta como guía (precios en `/ojs/#tabla`).
  - Nav Revistas: «Todas las revistas» + Scripta.
  - `/legal/ebooks/`: pasarela externa (sin nombrar proveedor); sin datos personales en chauxlab.com; copyright compartido; entrega/devoluciones.
  - Dirección legal publicada: **Herrera 3991 · CP 001230 · Asunción, Paraguay** (única dirección postal; CDE = oficina, no domicilio legal).
  - Fichas por libro: **no** (aún no se justifican). Operativo PDF/KB/DNS: **sesión nueva**.

### Próxima sesión — sitio web (prioridad)

1. **Operativo (sesión aparte, diferido):** prueba de entrega PDF post-PagoPar + `PRC-EBOOK-DELIVERY`; KB sin Shopify; DNS CNAMEs Shopify / `www`.
2. **Diseño visual** — pausado a pedido.
3. Fichas por libro — **fuera** hasta que el catálogo lo justifique.

### No reabrir sin motivo

- Mostrar precio en tarjetas del catálogo (precio en PagoPar).
- Sandbox OJS aparte (evidencia = revistas en producción).
- Precios OJS/libros en USD (base Gs.; conversión en pasarela).
- CTAs de cotización en el hero de la home.
- Quinto ítem “Recursos” en el nav principal (viven en el footer).

---

## Cierre de sesión — 2026-09-21

Sitio en vivo: **https://chauxlab.com/** · último push web `8ef30e0`.

### Hecho en esta sesión

- Catálogo editorial **24/24** con links PagoPar (IA aplicada Gs. 45.000; Guías Gs. 45.000; Fundamentos Gs. 75.000; Patología vols. Gs. 150.000; Casos Gs. 75.000). Sync vía `herramientas/pagopar` (`sync_serie.py`).
- DNS `www.chauxlab.com` OK (CNAME → `chauxlab.github.io`; HTTPS → apex).
- Home: quitada sección **Método / Cómo trabajamos** (no calzaba con oferta concreta).
- `/ojs/`: puente corto a Revistas científicas (sin duplicar contenido).
- `/publicaciones/`: logo **Scripta Scientia** en grilla 2×2 con las revistas universitarias; copy “Revistas en línea”.
- Decisiones de producto confirmadas: precio en cards de libros **no** (vive en PagoPar); sin demo OJS aparte (Scripta + revistas en producción); moneda base **Gs.**; PagoPar acepta pagos internacionales; “Serie Médica” OK; Fundamentos/Patología aprobados editorialmente.

### Próxima sesión — sitio web (prioridad) — *actualizado 2026-09-22*

~~1. Páginas pilar de descubrimiento~~ → **hecho** (ver cierre 2026-09-22).
2. **Prueba de entrega PDF** post-compra PagoPar (flujo operativo + ajustar `PRC-EBOOK-DELIVERY` sin Shopify).
3. **KB:** actualizar procedimientos de venta/entrega; Shopify ya no es canal web.

### No reabrir sin motivo

- Mostrar precio en tarjetas del catálogo (precio en PagoPar).
- Sandbox OJS aparte (evidencia = revistas en producción).
- Precios OJS/libros en USD (base Gs.; conversión en pasarela).

---

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
| Shopify | Descontinuado; CNAMEs DreamHost eliminados (2026-09-22). Venta = PagoPar. |


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
ojs/  libros/  publicaciones/  investigacion/  contacto/  quienes-somos/
recursos/                 # pilares de descubrimiento (footer, no nav)
  migrar-revista-ojs/
  issn-doi/
  m1-vs-m2/
assets/css/site.css
assets/img/chauxlab-logo.png
data/libros.json
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
- Actualizar KB / procedimientos que mencionen Shopify como canal web.
- Fase 2: API PagoPar (Worker u otro backend); no en este repo estático.
- `copyright.typ` apunta a `chauxlab.com/libros/` (ya no tienda Shopify).
- **Resuelto (2026-09-19):** ISSN incluido en el precio en M1/M2/M3, sin excepción. Si la institución ya tiene ISSN propio, se mantiene el suyo; no hay cargo aparte ni descuento por no requerir el trámite.
- **Resuelto (2026-09-19):** descuento de 10% en M2 y M3 por pago anual adelantado (Gs. 54.000.000/año en M2; Gs. 108.000.000/año en M3, IVA incluido). Publicado en `ojs/index.html` y FAQ. M1 no aplica (ya es anual).
- **Resuelto (2026-09-19):** vigencia contractual se comunica como "12 meses, prorrogable de común acuerdo" en el sitio (antes "sin renovación automática", que daba impresión de corte fijo). No implica cambio en la mecánica real de renovación (sigue sin ser automática).
- Requisito M2 documentado en FAQ del sitio: la institución debe dar acceso de administrador a su instancia OJS y acceso al servidor (cPanel o equivalente) antes de iniciar la gestión editorial.
- **Resuelto (2026-09-20):** portabilidad de datos documentada en FAQ de `ojs/index.html`: en las tres modalidades la institución recibe exportación completa, suficiente para reinstalar en otro servidor; es política y consta en contrato.
- **Resuelto (2026-09-20):** backups periódicos con restitución en caso de falla, incluidos como parte del soporte técnico en las tres modalidades. Documentado en FAQ.
- **Resuelto (2026-09-20; aclarado 2026-09-22):** Scripta Scientia enlace directo; nav «Libros académicos» / «Revistas científicas» / «Servicios OJS». La grilla de revistas universitarias en `/publicaciones/` (UniNorte, MedFam UNA, UCP) **sí está autorizada** como parte del contrato de gestión editorial con cada institución — no retirar.
- **Ajustado (2026-09-20):** el desplegable de "Revistas científicas" quedó minimalista — solo el enlace a Scripta Scientia, sin el párrafo descriptivo que tenía antes (esa descripción ahora vive en la página `/publicaciones/`).
- **Investigación rediseñada (2026-09-20):** el foco pasó a ChauxLab como instituto de investigación (antes solo era "acompañamos proyectos"). Nueva sección "Líneas de investigación" con las dos líneas propias (Biología molecular del cáncer, Bioética aplicada, definidas por los investigadores de ChauxLab) y nueva sección "Publicaciones internacionales" con los 2 artículos reales con afiliación ChauxLab Institute (verificados en PubMed y Discovery Medicine, autor Alcides Chaux):
  - Chaux A. "Bioethical challenges in the implementation of targeted anti-tumor therapies in low-resource settings: a perspective from Latin America." Explor Target Antitumor Ther. 2026;7:1002397. DOI 10.37349/etat.2026.1002397.
  - Chaux A. "Targeted Therapy Resistance in Genitourinary Cancers: From Molecular Mechanisms to Clinical Strategies." Discovery Medicine. 2026. DOI 10.24976/Discov.Med.202638205.28.
  El acompañamiento a proyectos institucionales (contenido previo) se mantuvo pero pasó a sección secundaria, al final de la página. Nota de la página: "varios más en cola de publicación, algunos aceptados, otros en revisión" — sin cifra exacta porque no se dio un número.
- **Investigación — pubs por línea + roles de equipo (2026-09-22):** `/investigacion/` mantiene **2 líneas**. El lede menciona la síntesis de evidencia como parte del método en ambas (sin decir “no es una tercera línea”). Cada línea muestra **equipo** (roles), no un único responsable — preparado para papers de cáncer en cola con Paola en RS/integrativas. Publicaciones **agrupadas por línea**: (1) cáncer — Receptors + Discovery Medicine + nota de cola editorial; (2) bioética — Explor Target + 3 papers Britos/Chaux (MedFam ×2, UniNorte). Sin fotos (viven en Quiénes somos); enlace “Conocer al equipo”. No se listó el resto del corpus clínico de Paola (infectología/GI/AP) para no diluir la agenda.
- **Home title (2026-09-22):** `<title>` / OG / Twitter → **Investigación y edición científica** (reemplaza «Laboratorio de innovación científica»). H1 del hero → **ChauxLab Institute** (antes el eslogan de «impacto institucional»).
- **Personería jurídica + copyright (2026-09-22):** en `/quienes-somos/`, bloque «La institución» (E.A.S. constituida en **2026**, personería; edita/publica *Scripta Scientia*; sin repetir dirección). Bios: afiliación explícita ChauxLab + link a 1 publicación con esa afiliación. Footer: encabezado único **ChauxLab Institute E.A.S.** + `© 2026 ChauxLab Institute E.A.S.`. JSON-LD: `foundingDate` 2026 + description E.A.S./Scripta. Sin Wikidata/ISNI en el sitio.
- **Nueva sección "Quiénes somos" (2026-09-20):** en vez de agregar un ítem al menú, se renombró "Contacto" → **"Quiénes somos"** (misma URL `/contacto/`) y se le agregó, arriba del formulario, el equipo real con foto, cargo y bio corta: Dr. Alcides Chaux (Presidente) y Dra. Paola Britos (Directora). Fotos copiadas y optimizadas desde `chauxlab-editorial/chauxlab-books/shared/assets/` (`chaux-foto.jpeg`, `britos-foto.png`) a `assets/img/equipo/`. Bios abreviadas a partir de los textos completos "Sobre el autor/a" (`AUTOR.typ`/`AUTORES.typ`) de ese mismo repositorio — cargos confirmados también en `chauxlab-kb/operaciones/gobierno/base-maestra-institucional.md`.
- **Home actualizado tras auditoría (2026-09-20):** hero, meta description y "Qué ofrecemos" no reflejaban las secciones de Revistas científicas/Gestión editorial ni Investigación agregadas hoy. Se sumaron 2 tarjetas a "Qué ofrecemos" (ahora 4: OJS, Editorial, Revistas, Investigación) y se reescribió el lede del hero + meta description para mencionar las 4 líneas. Las 2 CTA del hero (Servicios OJS, Catálogo editorial) se dejaron igual a propósito, para no saturarlo — la visibilidad de las 4 líneas ahora la da "Qué ofrecemos". **Pendiente de verificar visualmente:** BrowserOS neo no estaba disponible al cierre de esta sesión; el cambio se verificó leyendo el HTML (estructura válida, mismo patrón que las tarjetas ya probadas), pero falta una captura de pantalla real antes de dar por bueno el layout con 4 tarjetas.
- **Catálogo de libros reconstruido (2026-09-20), fuente correcta:** `data/libros.json` ahora tiene los **24 títulos vigentes** según el repositorio editorial `chauxlab-editorial/chauxlab-books` (carpeta `books/`, metadata `clb-book-title` en cada `main.typ`), no según `tienda.chauxlab.com` (que está desactualizada). Colecciones: **IA aplicada** (12, serie cerrada), **Guías académicas** (5), **Fundamentos** (4, incl. "Fundamentos de inteligencia artificial" que la propia tienda nunca tuvo), **Manual de Patología Médica** (3, incl. "Casos clínicos" que tampoco estaba en la tienda). Tapas (`cover.png` de cada libro) copiadas y optimizadas a `assets/img/libros/`. Todos `available:false` hasta tener URL de PagoPar por título; con eso alcanza para activar "Comprar", sin tocar código.
  - **Precio:** para los 19 títulos que coinciden con la tienda, mantuve el precio ahí publicado. Para los 5 títulos nuevos (no estaban en la tienda: `ia-aplicada-10/11/12`, `fundamentos-04-inteligencia-artificial`, `patologia-casos`) dejé precio vacío — falta definirlo.
  - **Discrepancia a resolver:** la tienda tenía un título, *"La redacción de reportes y series de casos: Transformando la práctica clínica en conocimiento científico"* (Gs. 65.000), que **no existe** en `chauxlab-books`. Lo saqué del catálogo nuevo por no encontrar su fuente editorial. Confirmar si está descontinuado o si vive en otro repo que no revisé.
  - **Cambio de texto detectado:** el título de la tienda "Navegando el **mundo** de la publicación académica" pasó a "Navegando el **universo** de la publicación académica" en `chauxlab-books` (fuente vigente). Usé la versión del repo.
- `libros/index.html` rediseñado: agrupado por colección, tarjetas con tapa, autor, precio, botón "Comprar" solo si hay URL de PagoPar.
- **Menú de series + botón "Adquirir PDF" (2026-09-20):** "Libros" en la nav de las 10 páginas del sitio ahora tiene un desplegable (`assets/js/nav.js`) con enlace a cada serie: `/libros/ia-aplicada/`, `/libros/guias-academicas/`, `/libros/fundamentos/`, `/libros/patologia-medica/` (rótulo "Serie Médica" — nombre tentativo mío para "Manual de Patología Médica", confirmar). Cada página de serie filtra `data/libros.json` por colección usando el nuevo `assets/js/catalog.js` (lógica de render compartida entre las 5 páginas de catálogo). El botón que antes decía "Próximamente" ahora es siempre un botón "Adquirir PDF": deshabilitado mientras `url_pagopar` esté vacío, activo automáticamente en cuanto se complete — no hace falta tocar el HTML cuando lleguen los enlaces de pago.

## Dev local

```bash
python3 -m http.server 8080
```

Abrir `http://localhost:8080`.
