const SERIES_LABELS = {
  "IA aplicada": "Serie IA aplicada",
  "Guías académicas": "Serie Guías académicas",
  "Fundamentos": "Serie Fundamentos",
  "Manual de Patología Médica": "Serie Médica",
};

function seriesLabel(collection) {
  return SERIES_LABELS[collection] || collection;
}

function bookCardHtml(book, base) {
  const cover = book.cover || "assets/img/chauxlab-logo.png";
  const author = book.author ? `<p class="book-card__author">${book.author}</p>` : "";
  const inner = `<img class="book-card__cover" src="${base}${cover}" alt="Tapa de ${book.title}" loading="lazy" width="300" height="450" />
    <h3 class="book-card__title">${book.title}</h3>
    ${author}`;

  if (book.available && book.url_pagopar) {
    return `<li class="book-card">
      <a class="book-card__link" href="${book.url_pagopar}" rel="noopener noreferrer" target="_blank">
        ${inner}
      </a>
    </li>`;
  }

  return `<li class="book-card is-unavailable">
    ${inner}
    <p class="book-card__status muted">Próximamente</p>
  </li>`;
}

async function renderCatalog({ rootId, base, filter }) {
  const root = document.getElementById(rootId);
  try {
    const res = await fetch(base + "data/libros.json", { cache: "no-cache" });
    if (!res.ok) throw new Error("No se pudo cargar el catálogo");
    const books = await res.json();
    const titles = filter ? books.filter((book) => book.collection === filter) : books;

    if (!Array.isArray(titles) || titles.length === 0) {
      root.innerHTML = '<p class="muted">Todavía no hay títulos publicados en esta serie.</p>';
      return;
    }

    if (filter) {
      root.innerHTML = `<ul class="book-grid">${titles.map((book) => bookCardHtml(book, base)).join("")}</ul>`;
      return;
    }

    const groups = new Map();
    titles.forEach((book) => {
      const collection = book.collection || "Editorial";
      if (!groups.has(collection)) groups.set(collection, []);
      groups.get(collection).push(book);
    });

    root.innerHTML = [...groups.entries()]
      .map(([collection, group]) => {
        const cards = group.map((book) => bookCardHtml(book, base)).join("");
        return `<div class="book-group">
          <h2 class="book-group__title">${seriesLabel(collection)}</h2>
          <ul class="book-grid">${cards}</ul>
        </div>`;
      })
      .join("");
  } catch (err) {
    root.innerHTML = `<p class="muted">No se pudo cargar el catálogo. (${err.message})</p>`;
  }
}
