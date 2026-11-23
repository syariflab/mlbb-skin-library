const catalog = [];
const searchInput = document.querySelector("#search-input");
const grid = document.querySelector("#catalog-grid");
const emptyState = document.querySelector("#empty-state");
const resultCount = document.querySelector("#result-count");
const filterButtons = [...document.querySelectorAll(".filter")];
let activeFilter = "All";

function renderCatalog() {
  const query = searchInput.value.trim().toLowerCase();
  const items = catalog.filter(item => {
    const matchesQuery = (item.name + " " + item.hero + " " + item.type).toLowerCase().includes(query);
    const matchesFilter = activeFilter === "All" || item.type === activeFilter;
    return matchesQuery && matchesFilter;
  });
  resultCount.textContent = String(items.length).padStart(2, "0");
  grid.innerHTML = items.map(item => `
    <article class="skin-card">
      <div class="skin-card-top"><span class="skin-type">${escapeHTML(item.type)}</span><span class="skin-status">${escapeHTML(item.status || "Informasi")}</span></div>
      <div><h3>${escapeHTML(item.name)}</h3><div class="skin-hero">${escapeHTML(item.hero)}</div></div>
      <div class="skin-card-bottom"><span>${escapeHTML(item.version || "Detail belum tersedia")}</span><span>DETAIL ↗</span></div>
    </article>`).join("");
  emptyState.hidden = items.length > 0;
}
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
}
searchInput.addEventListener("input", renderCatalog);
filterButtons.forEach(button => button.addEventListener("click", () => {
  activeFilter = button.dataset.filter;
  filterButtons.forEach(item => item.classList.toggle("active", item === button));
  renderCatalog();
}));
document.addEventListener("keydown", event => {
  if (event.key === "/" && document.activeElement !== searchInput) {
    event.preventDefault();
    searchInput.focus();
  }
});
renderCatalog();