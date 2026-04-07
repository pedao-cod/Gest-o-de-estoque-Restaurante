// ─────────────────────────────────────────────────────
//  DEFAULT DATA
// ─────────────────────────────────────────────────────
const DEFAULT_DATA = {
  cozinha: [
    { id: 1, name: "Cebola branca", unit: "kg", quantity: 3 },
    { id: 2, name: "Tomate", unit: "kg", quantity: 2 },
    { id: 3, name: "Pimentão verde", unit: "kg", quantity: 1 },
    { id: 4, name: "Pimentão vermelho", unit: "un", quantity: 3 },
    { id: 5, name: "Pimentão amarelo", unit: "un", quantity: 3 },
    { id: 6, name: "Pimenta de cheiro", unit: "g", quantity: 300 },
    { id: 7, name: "Cenoura", unit: "kg", quantity: 2 },
    { id: 8, name: "Batata doce", unit: "kg", quantity: 3 },
    { id: 9, name: "Inhame", unit: "un", quantity: 2 },
    { id: 10, name: "Maxixe", unit: "un", quantity: 10 },
    { id: 11, name: "Berinjela", unit: "un", quantity: 1 },
    { id: 12, name: "Abobrinha", unit: "un", quantity: 1 },
    { id: 13, name: "Alho", unit: "kg", quantity: 3 },
    { id: 14, name: "Banana da terra", unit: "un", quantity: 4 },
    { id: 15, name: "Coentro", unit: "maço", quantity: 2 },
    { id: 16, name: "Salsa", unit: "maço", quantity: 1 },
    { id: 17, name: "Manjericão", unit: "maço", quantity: 1 },
    { id: 18, name: "Alface", unit: "un", quantity: 1 },
    { id: 19, name: "Rúcula", unit: "un", quantity: 1 },
    { id: 20, name: "Hortelã", unit: "un", quantity: 1 },
    { id: 21, name: "Batata inglesa", unit: "kg", quantity: 3 },
    { id: 22, name: "Paleta bovina", unit: "kg", quantity: 3 },
    { id: 23, name: "Bisteca suína", unit: "kg", quantity: 3 },
    { id: 24, name: "Peito de frango", unit: "kg", quantity: 10 },
    { id: 25, name: "Sobrecoxa frango", unit: "kg", quantity: 5 },
    { id: 26, name: "Ovo", unit: "placa", quantity: 1 },
    { id: 27, name: "Camarão (filé)", unit: "kg", quantity: 15 },
    { id: 28, name: "Camarão (com casca)", unit: "kg", quantity: 10 },
    { id: 29, name: "Macarrão de yakisoba", unit: "pct", quantity: 10 },
    { id: 30, name: "Farinha de trigo", unit: "fardo", quantity: 1 },
    { id: 31, name: "Óleo 5L", unit: "un", quantity: 2 },
    { id: 32, name: "Creme de leite 1L", unit: "un", quantity: 5 },
    { id: 33, name: "Guioza", unit: "pct", quantity: 6 },
    { id: 34, name: "Palmito", unit: "un", quantity: 1 },
    { id: 35, name: "Brócolis congelado", unit: "pct", quantity: 2 },
    { id: 36, name: "Saco 1kg", unit: "rolo", quantity: "" },
    { id: 37, name: "Saco 3kg", unit: "rolo", quantity: "" },
    { id: 38, name: "Saco 5kg", unit: "rolo", quantity: "" },
  ],
  bar: [
    { id: 50, name: "Heineken", unit: "pack", quantity: 2 },
    { id: 51, name: "Stella Gold", unit: "pack", quantity: 1 },
    { id: 52, name: "Guaraná Zero", unit: "un", quantity: 2 },
    { id: 53, name: "Guaraná normal", unit: "un", quantity: 2 },
    { id: 54, name: "Coca normal", unit: "un", quantity: 4 },
    { id: 55, name: "Coca zero", unit: "un", quantity: 12 },
    { id: 56, name: "Água sem gás", unit: "un", quantity: 5 },
    { id: 57, name: "Tônica zero", unit: "un", quantity: 1 },
    { id: 58, name: "Absolut", unit: "garrafa", quantity: 2 },
    { id: 59, name: "Old Parr", unit: "garrafa", quantity: 1 },
    { id: 60, name: "Sake", unit: "garrafa", quantity: 2 },
  ],
  sushi: [
    { id: 100, name: "Couve", unit: "maço", quantity: 30 },
    { id: 101, name: "Cebolinha", unit: "maço", quantity: 15 },
    { id: 102, name: "Cebola roxa", unit: "kg", quantity: 3 },
    { id: 103, name: "Broto de alfafa", unit: "un", quantity: 4 },
    { id: 104, name: "Pepino japonês", unit: "kg", quantity: 10 },
    { id: 105, name: "Abacate", unit: "un", quantity: 1 },
    { id: 106, name: "Manga", unit: "un", quantity: 1 },
    { id: 107, name: "Salsa", unit: "maço", quantity: 1 },
    { id: 108, name: "Banana", unit: "dúzia", quantity: 3 },
    { id: 109, name: "Maracujá", unit: "un", quantity: 10 },
    { id: 110, name: "Gengibre normal", unit: "kg", quantity: 2 },
    { id: 111, name: "Shimeji", unit: "pct", quantity: 30 },
    { id: 112, name: "Cream cheese balde", unit: "un", quantity: 2 },
    { id: 113, name: "Cream cheese", unit: "un", quantity: 24 },
    { id: 114, name: "Doce de leite", unit: "un", quantity: 1 },
    { id: 115, name: "Açúcar", unit: "kg", quantity: 30 },
    { id: 116, name: "Vinagre", unit: "L", quantity: 26 },
    { id: 117, name: "Lâminas de salmão", unit: "un", quantity: 15 },
    { id: 118, name: "Atum fresco", unit: "kg", quantity: 3 },
    { id: 119, name: "Gengibre em conserva", unit: "kg", quantity: 3 },
  ],
  limpeza: [
    { id: 200, name: "Detergente", unit: "un", quantity: "" },
    { id: 201, name: "Esponja de Aço", unit: "pct", quantity: "" },
    { id: 202, name: "Esponja Comum", unit: "pct", quantity: "" },
    { id: 203, name: "Desengordurante", unit: "un", quantity: "" },
    { id: 204, name: "Pano de Prato", unit: "un", quantity: "" },
    { id: 205, name: "Luva de Borracha", unit: "un", quantity: "" },
    { id: 206, name: "Sabão em Pó", unit: "pct", quantity: "" },
    { id: 207, name: "Água Sanitária", unit: "L", quantity: "" },
    { id: 208, name: "Álcool 70%", unit: "L", quantity: "" },
    { id: 209, name: "Papel Toalha", unit: "pct", quantity: "" },
    { id: 210, name: "Saco de Lixo (50L)", unit: "pct", quantity: "" },
    { id: 211, name: "Saco de Lixo (100L)", unit: "pct", quantity: "" },
    { id: 212, name: "Vassoura", unit: "un", quantity: "" },
    { id: 213, name: "Rodo", unit: "un", quantity: "" },
    { id: 214, name: "Multiuso Spray", unit: "un", quantity: "" },
  ],
};

const TAB_LABELS = {
  cozinha: "Cozinha",
  bar: "Bar",
  sushi: "Sushi",
  limpeza: "Limpeza",
};

const TAB_ICONS = {
  cozinha: "🍳",
  bar: "🍶",
  sushi: "🍣",
  limpeza: "🧹",
};

// ─────────────────────────────────────────────────────
//  STATE
// ─────────────────────────────────────────────────────
let state = {
  activeTab: "cozinha",
  data: {},
  quantities: {},
  modal: { open: false, mode: "add", editId: null, editTab: null },
  nextId: 300,
};

function loadState() {
  // Alterado para "v2" para forçar o navegador a ignorar a memória antiga
  const saved = localStorage.getItem("hiroki_data_v2");
  if (saved) {
    state.data = JSON.parse(saved);
  } else {
    state.data = JSON.parse(JSON.stringify(DEFAULT_DATA));
  }

  const savedQty = localStorage.getItem("hiroki_qty_v2");
  if (savedQty) {
    state.quantities = JSON.parse(savedQty);
  } else {
    // Carrega as quantidades padrão na primeira vez que o sistema for aberto
    Object.keys(state.data).forEach((tab) => {
      state.data[tab].forEach((item) => {
        if (item.quantity && item.quantity !== "") {
          state.quantities[item.id] = parseInt(item.quantity);
        }
      });
    });
  }

  const savedId = localStorage.getItem("hiroki_nextid_v2");
  if (savedId) state.nextId = parseInt(savedId);
}

function saveData() {
  // Alterado para "v2" também
  localStorage.setItem("hiroki_data_v2", JSON.stringify(state.data));
  localStorage.setItem("hiroki_qty_v2", JSON.stringify(state.quantities));
  localStorage.setItem("hiroki_nextid_v2", String(state.nextId));
}

// ─────────────────────────────────────────────────────
//  RENDER
// ─────────────────────────────────────────────────────
function render() {
  const tab = state.activeTab;
  const items = state.data[tab] || [];
  const main = document.getElementById("main-content");

  main.innerHTML = `
    <div class="section-header">
      <div class="section-title">${TAB_ICONS[tab]} ${TAB_LABELS[tab]}</div>
      <button class="btn-add" onclick="openModal('add')">+ Adicionar Item</button>
    </div>
    ${
      items.length === 0
        ? `
      <div class="empty-state">
        <div class="empty-icon">📦</div>
        <p>Nenhum item neste setor.<br>Clique em "+ Adicionar Item" para começar.</p>
      </div>
    `
        : `
      <table class="items-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Un.</th>
            <th style="text-align:center; min-width:150px;">Qtd. a Pedir</th>
            <th style="text-align:center; min-width:86px;">Ações</th>
          </tr>
        </thead>
        <tbody>
          ${items.map((item) => renderRow(item)).join("")}
        </tbody>
      </table>
    `
    }
  `;
}

function renderRow(item) {
  const qty = state.quantities[item.id] || "";
  const hasVal = qty !== "" && qty > 0;
  return `
    <tr>
      <td class="item-name">${escHtml(item.name)}</td>
      <td class="item-unit">${escHtml(item.unit)}</td>
      <td>
        <div class="qty-control">
          <button class="qty-btn" onclick="changeQty(${item.id}, -1)" aria-label="Diminuir">−</button>
          <input
            class="qty-input ${hasVal ? "has-value" : ""}"
            type="number"
            min="0"
            value="${qty}"
            placeholder="0"
            onchange="setQty(${item.id}, this.value)"
            oninput="setQty(${item.id}, this.value)"
          >
          <button class="qty-btn" onclick="changeQty(${item.id}, 1)" aria-label="Aumentar">+</button>
        </div>
      </td>
      <td>
        <div class="row-actions">
          <button class="btn-icon edit" onclick="openModal('edit', ${item.id})" title="Editar">✏️</button>
          <button class="btn-icon delete" onclick="deleteItem(${item.id})" title="Apagar">🗑️</button>
        </div>
      </td>
    </tr>
  `;
}

// ─────────────────────────────────────────────────────
//  QUANTITY LOGIC
// ─────────────────────────────────────────────────────
function setQty(id, val) {
  const n = parseInt(val);
  if (!val || isNaN(n) || n <= 0) {
    delete state.quantities[id];
  } else {
    state.quantities[id] = n;
  }
  saveData();
  // update class live
  const input = document.querySelector(`input[onchange*="setQty(${id},"]`);
  if (input) input.classList.toggle("has-value", !!state.quantities[id]);
}

function changeQty(id, delta) {
  const current = state.quantities[id] || 0;
  const next = Math.max(0, current + delta);
  if (next === 0) {
    delete state.quantities[id];
  } else {
    state.quantities[id] = next;
  }
  saveData();
  render();
}

// ─────────────────────────────────────────────────────
//  CRUD
// ─────────────────────────────────────────────────────
function openModal(mode, id) {
  state.modal.mode = mode;
  state.modal.editId = id || null;
  state.modal.editTab = state.activeTab;

  const overlay = document.getElementById("modal-overlay");
  const title = document.getElementById("modal-title");
  const nameInput = document.getElementById("modal-name");
  const unitSelect = document.getElementById("modal-unit");

  if (mode === "edit" && id) {
    const item = state.data[state.activeTab].find((i) => i.id === id);
    if (!item) return;
    title.textContent = "Editar Item";
    nameInput.value = item.name;
    unitSelect.value = item.unit;
  } else {
    title.textContent = "Novo Item";
    nameInput.value = "";
    unitSelect.value = "kg";
  }

  overlay.classList.add("open");
  setTimeout(() => nameInput.focus(), 100);
}

function closeModal() {
  document.getElementById("modal-overlay").classList.remove("open");
}

function confirmModal() {
  const name = document.getElementById("modal-name").value.trim();
  const unit = document.getElementById("modal-unit").value;

  if (!name) {
    showToast("Digite o nome do item.", "error");
    return;
  }

  const tab = state.modal.editTab;

  if (state.modal.mode === "add") {
    const newItem = { id: state.nextId++, name, unit };
    state.data[tab].push(newItem);
    showToast("Item adicionado!", "success");
  } else {
    const item = state.data[tab].find((i) => i.id === state.modal.editId);
    if (item) {
      item.name = name;
      item.unit = unit;
    }
    showToast("Item atualizado!", "success");
  }

  saveData();
  closeModal();
  render();
}

function deleteItem(id) {
  if (!confirm("Remover este item da lista?")) return;
  const tab = state.activeTab;
  state.data[tab] = state.data[tab].filter((i) => i.id !== id);
  delete state.quantities[id];
  saveData();
  render();
  showToast("Item removido.", "");
}

// ─────────────────────────────────────────────────────
//  CLEAR ALL
// ─────────────────────────────────────────────────────
function clearAll() {
  if (!confirm("Zerar todas as quantidades? Isso não remove os itens.")) return;
  
  state.quantities = {};
  saveData();
  render();
  showToast("Quantidades zeradas!", "success");
}

  saveData();
  render(); // Atualiza a tela
  showToast("Quantidades restauradas para o padrão.", "success");
}
// ─────────────────────────────────────────────────────
//  GENERATE PDF (print)
// ─────────────────────────────────────────────────────
function generatePDF() {
  const sectors = Object.keys(state.data);
  const result = {};
  let hasAny = false;

  sectors.forEach((tab) => {
    // Filtra itens com quantidade > 0 para imprimir
    const items = state.data[tab].filter(
      (item) => (state.quantities[item.id] || 0) > 0,
    );
    if (items.length > 0) {
      result[tab] = items;
      hasAny = true;
    }
  });

  if (!hasAny) {
    showToast("Nenhuma quantidade preenchida para imprimir.", "error");
    return;
  }

  const now = new Date();
  const dateStr = now.toLocaleDateString("pt-BR");
  const timeStr = now.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  let sectionsHtml = "";
  sectors.forEach((tab) => {
    if (!result[tab]) return;
    sectionsHtml += `
      <div style="margin-top: 20px;">
        <h3 style="border-bottom: 2px solid #333; padding-bottom: 5px;">${TAB_ICONS[tab]} ${TAB_LABELS[tab]}</h3>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 10px;">
          <thead>
            <tr style="background: #f2f2f2;">
              <th style="border: 1px solid #ccc; padding: 8px; text-align: left;">Item</th>
              <th style="border: 1px solid #ccc; padding: 8px; text-align: center;">Un.</th>
              <th style="border: 1px solid #ccc; padding: 8px; text-align: center;">Qtd.</th>
            </tr>
          </thead>
          <tbody>
            ${result[tab]
              .map(
                (item) => `
              <tr>
                <td style="border: 1px solid #ccc; padding: 8px;">${escHtml(item.name)}</td>
                <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">${escHtml(item.unit)}</td>
                <td style="border: 1px solid #ccc; padding: 8px; text-align: center; font-weight: bold;">${state.quantities[item.id]}</td>
              </tr>
            `,
              )
              .join("")}
          </tbody>
        </table>
      </div>`;
  });

  // CRITICAL: Preenche a área de impressão
  const printArea = document.getElementById("print-area");
  printArea.innerHTML = `
    <div style="padding: 20px; font-family: Arial, sans-serif;">
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 3px solid #000; padding-bottom: 10px;">
        <div>
          <h1 style="margin: 0;">HIROKI</h1>
          <p style="margin: 0;">Controle de Pedidos</p>
        </div>
        <div style="text-align: right;">
          <strong>Data:</strong> ${dateStr}<br>
          <strong>Hora:</strong> ${timeStr}
        </div>
      </div>
      ${sectionsHtml}
    </div>
  `;

  // Dispara a impressão
  window.print();
}

// ─────────────────────────────────────────────────────
//  TOAST
// ─────────────────────────────────────────────────────
let toastTimer;
function showToast(msg, type) {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.className = `toast ${type} show`;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    el.classList.remove("show");
  }, 2800);
}

// ─────────────────────────────────────────────────────
//  HELPERS
// ─────────────────────────────────────────────────────
function escHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// ─────────────────────────────────────────────────────
//  EVENTS
// ─────────────────────────────────────────────────────
document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".tab-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    state.activeTab = btn.dataset.tab;
    render();
  });
});

document.getElementById("modal-cancel").addEventListener("click", closeModal);
document
  .getElementById("modal-confirm")
  .addEventListener("click", confirmModal);
document.getElementById("modal-overlay").addEventListener("click", (e) => {
  if (e.target === document.getElementById("modal-overlay")) closeModal();
});
document.getElementById("modal-name").addEventListener("keydown", (e) => {
  if (e.key === "Enter") confirmModal();
});

document
  .getElementById("btn-generate-pdf")
  .addEventListener("click", generatePDF);
document.getElementById("btn-clear-all").addEventListener("click", clearAll);

// ─────────────────────────────────────────────────────
//  INIT
// ─────────────────────────────────────────────────────
loadState();
render();
