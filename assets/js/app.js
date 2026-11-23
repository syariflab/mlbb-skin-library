const searchInput = document.querySelector("#search-input");
const grid = document.querySelector("#catalog-grid");
const emptyState = document.querySelector("#empty-state");
const resultCount = document.querySelector("#result-count");
const filterButtons = [...document.querySelectorAll(".filter")];
let catalog = [];
let activeFilter = "All";

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
}
function renderCatalog() {
  if (!grid) return;
  const query = searchInput.value.trim().toLowerCase();
  const items = catalog.filter(item => {
    const text = [item.name, item.hero, item.type].join(" ").toLowerCase();
    return text.includes(query) && (activeFilter === "All" || item.type === activeFilter);
  });
  resultCount.textContent = String(items.length).padStart(2, "0");
  grid.innerHTML = items.map(item => `
    <a class="skin-card skin-card-link" href="pages/detail.html?id=${encodeURIComponent(item.id)}">
      <div class="skin-card-top"><span class="skin-type">${escapeHTML(item.type)}</span><span class="skin-status">${escapeHTML(item.status || "Informasi")}</span></div>
      <div><h3>${escapeHTML(item.name)}</h3><div class="skin-hero">${escapeHTML(item.hero)}</div></div>
      <div class="skin-card-bottom"><span>${escapeHTML(item.release || "Detail koleksi")}</span><span>DETAIL ↗</span></div>
    </a>`).join("");
  emptyState.hidden = items.length > 0;
}
if (searchInput) {
  fetch("data/skins.json").then(response => {
    if (!response.ok) throw new Error("Data katalog tidak dapat dimuat");
    return response.json();
  }).then(data => { catalog = Array.isArray(data) ? data : []; renderCatalog(); })
    .catch(() => { catalog = []; renderCatalog(); });
  searchInput.addEventListener("input", renderCatalog);
  filterButtons.forEach(button => button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach(item => item.classList.toggle("active", item === button));
    renderCatalog();
  }));
  document.addEventListener("keydown", event => {
    if (event.key === "/" && document.activeElement !== searchInput) {
      event.preventDefault(); searchInput.focus();
    }
  });
}