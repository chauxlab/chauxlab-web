/**
 * Contact form → Web3Forms (no mailto client required).
 * Access key is public by design; create/rotate at https://web3forms.com/
 */
(function () {
  const ACCESS_KEY = window.CHAUXLAB_WEB3FORMS_KEY || "";

  const servicioPorParametro = {
    m1: {
      value: "Nube OJS (M1)",
      label: "M1 · Nube OJS",
      blurb:
        "Cotización para infraestructura OJS en la nube, con tu equipo editorial a cargo de la revista.",
      message:
        "Solicito cotización de la modalidad M1 (Nube OJS).\n\nContexto de la revista / institución:\n",
    },
    m2: {
      value: "Gestión editorial OJS (M2)",
      label: "M2 · Gestión editorial",
      blurb:
        "Cotización para externalizar la operación editorial sobre una instancia OJS existente.",
      message:
        "Solicito cotización de la modalidad M2 (Gestión editorial).\n\nURL o datos de la instancia OJS actual:\n",
    },
    m3: {
      value: "Nube OJS Integral (M3)",
      label: "M3 · Integral",
      blurb:
        "Cotización para instancia OJS + gestión editorial con un solo interlocutor.",
      message:
        "Solicito cotización de la modalidad M3 (Integral).\n\nContexto de la revista / institución:\n",
    },
  };

  const form = document.getElementById("contact-form");
  if (!form) return;

  const statusEl = document.getElementById("cf-status");
  const submitBtn = document.getElementById("cf-submit");

  const parametroServicio = new URLSearchParams(location.search).get("servicio");
  const servicioElegido = parametroServicio && servicioPorParametro[parametroServicio];

  if (servicioElegido) {
    const selectServicio = document.getElementById("cf-servicio");
    const mensaje = document.getElementById("cf-mensaje");
    const context = document.getElementById("cotizacion-context");

    selectServicio.value = servicioElegido.value;
    document.getElementById("cotizacion-eyebrow").textContent = "Cotización seleccionada";
    document.getElementById("cotizacion-title").textContent = servicioElegido.label;
    document.getElementById("cotizacion-lede").textContent =
      "Completá tus datos. El servicio ya está preseleccionado según la modalidad elegida.";
    if (context) {
      context.hidden = false;
      context.textContent = servicioElegido.blurb;
    }
    if (mensaje && !mensaje.value) mensaje.value = servicioElegido.message;
    if (submitBtn) {
      submitBtn.textContent = "Enviar consulta";
    }
  }

  function setStatus(text, tone) {
    if (!statusEl) return;
    statusEl.hidden = !text;
    statusEl.textContent = text;
    statusEl.dataset.tone = tone || "";
  }

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    if (!ACCESS_KEY || ACCESS_KEY === "YOUR_ACCESS_KEY_HERE") {
      setStatus(
        "El formulario aún no está conectado. Escribí a editorial@chauxlab.com.",
        "error"
      );
      return;
    }

    const data = new FormData(form);
    if (data.get("botcheck")) {
      setStatus("Consulta enviada. Te responderemos a la brevedad.", "ok");
      form.reset();
      return;
    }

    const nombre = String(data.get("nombre") || "").trim();
    const email = String(data.get("contacto") || "").trim();
    const institucion = String(data.get("institucion") || "").trim();
    const servicio = String(data.get("servicio") || "").trim();
    const mensaje = String(data.get("mensaje") || "").trim();

    const payload = {
      access_key: ACCESS_KEY,
      subject: "Consulta ChauxLab — " + servicio,
      from_name: "chauxlab.com",
      name: nombre,
      email: email,
      replyto: email,
      Institución: institucion || "(sin indicar)",
      "Servicio de interés": servicio,
      message: mensaje || "(sin mensaje)",
    };

    const originalLabel = submitBtn ? submitBtn.textContent : "";
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Enviando…";
    }
    setStatus("Enviando tu consulta…", "");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "No se pudo enviar el formulario.");
      }

      form.reset();
      if (servicioElegido) {
        document.getElementById("cf-servicio").value = servicioElegido.value;
      }
      setStatus(
        "Listo. Recibimos tu consulta y te responderemos a " + email + ".",
        "ok"
      );
    } catch (err) {
      setStatus(
        "No pudimos enviar ahora. Escribí a editorial@chauxlab.com o reintentá en unos minutos.",
        "error"
      );
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = originalLabel || "Enviar consulta";
      }
    }
  });
})();
