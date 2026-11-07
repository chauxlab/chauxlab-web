/**
 * Formulario de compra por transferencia → Worker /orders/transfer
 */
(function () {
  const WORKER_URL = "https://chauxlab-ebooks.alcides-chaux.workers.dev/orders/transfer";
  // Absolute from site root — this page lives at /libros/comprar/, so ../data would 404.
  const LIBROS_URL = "/data/libros.json";

  const SERIES_LABELS = {
    "IA aplicada": "Serie IA aplicada",
    "Guías académicas": "Serie Guías académicas",
    Fundamentos: "Serie Fundamentos",
    "Manual de Patología Médica": "Serie Médica",
  };

  const form = document.getElementById("buy-form");
  if (!form) return;

  const select = document.getElementById("bf-libro");
  const priceEl = document.getElementById("bf-precio");
  const facturaCheck = document.getElementById("bf-factura");
  const facturaFields = document.getElementById("bf-factura-fields");
  const documento = document.getElementById("bf-documento");
  const statusEl = document.getElementById("bf-status");
  const submitBtn = document.getElementById("bf-submit");
  const successEl = document.getElementById("bf-success");
  const successPedido = document.getElementById("bf-success-pedido");
  const checkoutEl = document.getElementById("bf-checkout");
  const titleEl = document.getElementById("bf-title");
  const eyebrowEl = document.getElementById("bf-eyebrow");

  function showSuccess(pedido) {
    if (checkoutEl) checkoutEl.hidden = true;
    if (form) {
      form.hidden = true;
      form.setAttribute("aria-hidden", "true");
    }
    if (titleEl) titleEl.textContent = "Pedido enviado";
    if (eyebrowEl) eyebrowEl.textContent = "Listo";
    if (successEl) {
      successEl.hidden = false;
      if (successPedido) successPedido.textContent = pedido;
    }
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Enviar pedido";
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  let books = [];

  function setStatus(text, tone) {
    if (!statusEl) return;
    statusEl.hidden = !text;
    statusEl.textContent = text || "";
    statusEl.dataset.tone = tone || "";
  }

  function updatePrice() {
    const book = books.find((b) => b.slug === select.value);
    if (priceEl) {
      priceEl.textContent = book?.price || "—";
    }
  }

  function toggleFactura() {
    const on = Boolean(facturaCheck?.checked);
    if (facturaFields) facturaFields.hidden = !on;
    if (documento) {
      documento.required = on;
      if (!on) documento.value = "";
    }
    const razon = document.getElementById("bf-razon");
    if (razon && !on) razon.value = "";
  }

  async function loadBooks() {
    const res = await fetch(LIBROS_URL, { cache: "no-cache" });
    if (!res.ok) {
      throw new Error(`No se pudo cargar el catálogo (HTTP ${res.status})`);
    }
    let data;
    try {
      data = await res.json();
    } catch {
      throw new Error("No se pudo leer el catálogo");
    }
    books = (Array.isArray(data) ? data : []).filter((b) => b.available !== false);
    if (!books.length) {
      throw new Error("El catálogo está vacío");
    }

    const groups = new Map();
    books.forEach((book) => {
      const key = book.collection || "Editorial";
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(book);
    });

    const pref = new URLSearchParams(location.search).get("libro");
    select.innerHTML = "";
    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = "Elegí un título";
    select.appendChild(placeholder);

    for (const [collection, group] of groups.entries()) {
      const optgroup = document.createElement("optgroup");
      optgroup.label = SERIES_LABELS[collection] || collection;
      for (const book of group) {
        const opt = document.createElement("option");
        opt.value = book.slug;
        opt.textContent = book.title;
        if (pref && pref === book.slug) opt.selected = true;
        optgroup.appendChild(opt);
      }
      select.appendChild(optgroup);
    }

    if (pref && !books.some((b) => b.slug === pref)) {
      setStatus("Ese título no está disponible. Elegí otro del listado.", "error");
    }
    updatePrice();
  }

  select.addEventListener("change", updatePrice);
  facturaCheck?.addEventListener("change", toggleFactura);
  toggleFactura();

  loadBooks().catch((err) => {
    setStatus(err.message || "Error al cargar el catálogo", "error");
    select.disabled = true;
    if (submitBtn) submitBtn.disabled = true;
  });

  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    setStatus("");

    if (!select.value) {
      setStatus("Elegí el libro que querés adquirir.", "error");
      return;
    }

    const fileInput = document.getElementById("bf-comprobante");
    const file = fileInput?.files?.[0];
    if (!file) {
      setStatus("Adjuntá el comprobante de la transferencia (PDF o imagen).", "error");
      return;
    }
    if (file.size > 8 * 1024 * 1024) {
      setStatus("El comprobante no puede superar 8 MB.", "error");
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Enviando…";
    }

    const body = new FormData(form);
    body.set("slug", select.value);
    body.set("factura", facturaCheck?.checked ? "1" : "0");

    try {
      const res = await fetch(WORKER_URL, { method: "POST", body });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        const map = {
          missing_name: "Completá nombre y apellido.",
          invalid_email: "Revisá el correo electrónico.",
          missing_slug: "Elegí un libro.",
          missing_documento: "Indicá CI o RUC para la factura.",
          missing_comprobante: "Adjuntá el comprobante.",
          comprobante_too_large: "El comprobante supera 8 MB.",
          comprobante_type: "El comprobante debe ser PDF, JPG, PNG o WebP.",
          unknown_book: "Ese libro no está disponible.",
        };
        throw new Error(map[data.error] || "No se pudo enviar el pedido. Probá de nuevo o escribinos a editorial@chauxlab.com.");
      }

      showSuccess(data.pedido);
    } catch (err) {
      setStatus(err.message || "Error de red", "error");
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = "Enviar pedido";
      }
    }
  });
})();
