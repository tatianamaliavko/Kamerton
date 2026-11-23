const currency = new Intl.NumberFormat("ru-BY", {
  style: "currency",
  currency: "BYN",
  maximumFractionDigits: 2
});
const money = value => currency.format(value);
const byId = id => products.find(product => product.id === id);
const storageKey = "kamerton-cart-v1";
const maxQuantity = 20;

function readCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    return Object.fromEntries(products.flatMap(({ id }) => {
      const quantity = saved?.[id];
      return Number.isInteger(quantity) && quantity > 0 ? [[id, Math.min(quantity, maxQuantity)]] : [];
    }));
  } catch {
    return {};
  }
}

let cart = readCart();

function updateCounter() {
  const count = Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
  document.querySelector("[data-cart-count]").textContent = count;
}

function saveCart() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(cart));
  } catch {
    // Состояние корзины доступно до закрытия текущей страницы.
  }
  updateCounter();
}

function productUrl(id) {
  return `product.html?id=${encodeURIComponent(id)}`;
}

function media(product, eager = false) {
  const source = product.image.replaceAll("&", "&amp;");
  const fallback = product.imageFallback
    ? ` data-fallback="${product.imageFallback.replaceAll("&", "&amp;")}"`
    : "";
  return `<span class="instrument-media">
    <img src="${source}" alt="${product.name}"${fallback} ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">
  </span>`;
}

function markUnavailable(image) {
  if (image.dataset.fallback) {
    const source = image.dataset.fallback;
    delete image.dataset.fallback;
    if (image.dataset.fallbackAlt) image.alt = image.dataset.fallbackAlt;
    image.src = source;
    return;
  }
  image.classList.add("image-unavailable");
  image.parentElement.classList.add("photo-unavailable");
}

document.addEventListener("error", event => {
  if (event.target instanceof HTMLImageElement) markUnavailable(event.target);
}, true);
document.querySelectorAll("img").forEach(image => {
  if (image.complete && !image.naturalWidth) markUnavailable(image);
});

function card(product) {
  const url = productUrl(product.id);
  return `<article class="product-card">
    <a class="product-card__image" href="${url}" aria-label="${product.name}">${media(product)}</a>
    <div class="product-card__body">
      <p class="product-card__category">${categories[product.category]}</p>
      <h3><a href="${url}">${product.name}</a></h3>
      <div class="product-card__bottom">
        <strong>${money(product.price)}</strong>
        <button class="button button--small" data-add="${product.id}" aria-label="В корзину: ${product.name}">В корзину</button>
      </div>
    </div>
  </article>`;
}

const featured = document.querySelector("[data-featured]");
if (featured) featured.innerHTML = ["cort-ad810", "yamaha-p45", "metro"].map(byId).map(card).join("");

const catalog = document.querySelector("[data-catalog]");
if (catalog) {
  const filters = Array.from(document.querySelectorAll("[data-category]"));
  const picker = document.getElementById("sort-picker");
  const summary = picker.querySelector("summary");
  const options = Array.from(picker.querySelectorAll("[data-sort]"));
  const sortValue = document.getElementById("sort-value");
  const count = document.querySelector(".results-count");
  const params = new URLSearchParams(location.search);
  const requested = params.get("category");
  let selected = Object.hasOwn(categories, requested) ? requested : "all";
  const requestedSort = params.get("sort");
  let sort = options.some(option => option.dataset.sort === requestedSort) ? requestedSort : "default";

  function renderCatalog() {
    const visible = products.filter(product => selected === "all" || selected === product.category);
    if (sort === "price-up") visible.sort((a, b) => a.price - b.price);
    if (sort === "price-down") visible.sort((a, b) => b.price - a.price);
    filters.forEach(button => button.setAttribute("aria-pressed", String(selected === button.dataset.category)));
    options.forEach(button => button.setAttribute("aria-pressed", String(sort === button.dataset.sort)));
    sortValue.textContent = options.find(button => button.dataset.sort === sort).textContent;
    count.textContent = `Товаров: ${visible.length}`;
    catalog.innerHTML = visible.map(card).join("");
  }

  function updateCatalog() {
    const url = new URL(location.href);
    if (selected === "all") url.searchParams.delete("category");
    else url.searchParams.set("category", selected);
    if (sort === "default") url.searchParams.delete("sort");
    else url.searchParams.set("sort", sort);
    try {
      history.replaceState(null, "", url);
    } catch {
      // При открытии локального файла параметры в адресе могут оставаться прежними.
    }
    renderCatalog();
  }

  filters.forEach(button => button.addEventListener("click", () => {
    selected = button.dataset.category;
    updateCatalog();
  }));
  options.forEach(option => option.addEventListener("click", () => {
    sort = option.dataset.sort;
    picker.open = false;
    summary.focus();
    updateCatalog();
  }));

  document.addEventListener("click", event => {
    if (!picker.contains(event.target)) picker.open = false;
  });
  picker.addEventListener("focusout", event => {
    if (event.relatedTarget && !picker.contains(event.relatedTarget)) picker.open = false;
  });
  picker.addEventListener("keydown", event => {
    if (event.key === "Escape" && picker.open) {
      event.preventDefault();
      picker.open = false;
      summary.focus();
      return;
    }
    if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    picker.open = true;
    const index = options.indexOf(event.target);
    const next = event.key === "Home" || (index < 0 && event.key === "ArrowDown") ? 0
      : event.key === "End" || index < 0 ? options.length - 1
      : (index + (event.key === "ArrowDown" ? 1 : -1) + options.length) % options.length;
    options[next].focus();
  });
  renderCatalog();
}

const detail = document.querySelector("[data-product]");
if (detail) {
  const id = new URLSearchParams(location.search).get("id");
  const product = id === null ? products[0] : byId(id);
  if (!product) {
    detail.classList.add("product-detail--empty");
    detail.innerHTML = '<h1>Инструмент не найден</h1><p><a href="catalog.html">Вернуться в каталог</a></p>';
  } else {
    document.title = `${product.name} — Камертон`;
    document.querySelector("[data-crumb]").textContent = product.name;
    detail.innerHTML = `${media(product, true)}
      <div class="product-detail__body">
        <p class="eyebrow">${categories[product.category]}</p>
        <h1>${product.name}</h1>
        <p class="product-detail__description">${product.description}</p>
        <p class="product-detail__price">${money(product.price)}</p>
        <button class="button button--primary" data-add="${product.id}">В корзину</button>
        <h2>Характеристики</h2>
        <ul>${product.specs.map(spec => `<li>${spec}</li>`).join("")}</ul>
      </div>`;
    document.querySelector("[data-related-section]").hidden = false;
    document.querySelector("[data-related]").innerHTML = products
      .filter(item => item.category === product.category && item.id !== product.id)
      .slice(0, 3).map(card).join("");
  }
}

const items = document.querySelector("[data-cart-items]");
const orderForm = document.getElementById("order-form");

function renderCart() {
  if (!items) return;
  const entries = Object.entries(cart);
  document.querySelector("[data-empty]").hidden = entries.length > 0;
  document.querySelector("[data-cart-layout]").hidden = entries.length === 0;
  let total = 0;
  items.innerHTML = entries.map(([id, quantity]) => {
    const product = byId(id);
    const lineTotal = product.price * quantity;
    total += lineTotal;
    return `<article class="cart-row">
      <a class="cart-row__image" href="${productUrl(id)}" aria-label="${product.name}">${media(product)}</a>
      <div class="cart-row__name"><h2><a href="${productUrl(id)}">${product.name}</a></h2><p>${money(product.price)} за штуку</p></div>
      <div class="quantity">
        <button data-change="-1" data-id="${id}" aria-label="Уменьшить количество товара ${product.name}" ${quantity === 1 ? "disabled" : ""}>−</button>
        <output aria-label="Количество">${quantity}</output>
        <button data-change="1" data-id="${id}" aria-label="Увеличить количество товара ${product.name}" ${quantity === maxQuantity ? "disabled" : ""}>+</button>
      </div>
      <strong class="cart-row__price">${money(lineTotal)}</strong>
      <button class="remove" data-remove="${id}" aria-label="Удалить ${product.name}">Удалить</button>
    </article>`;
  }).join("");
  document.querySelector("[data-total]").textContent = money(total);
}

const toast = document.createElement("p");
toast.className = "toast";
toast.role = "status";
document.body.append(toast);
let toastTimer;
function announce(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

document.addEventListener("click", event => {
  const button = event.target.closest("button[data-add], button[data-change], button[data-remove]");
  if (!button) return;
  const { add, change, id, remove } = button.dataset;
  if (add) {
    if ((cart[add] ?? 0) >= maxQuantity) {
      announce(`В корзине уже ${maxQuantity} штук этой модели.`);
      return;
    }
    cart[add] = (cart[add] ?? 0) + 1;
    saveCart();
    announce("Товар добавлен в корзину.");
    return;
  }

  if (remove) delete cart[remove];
  if (change) cart[id] = Math.min(maxQuantity, Math.max(1, cart[id] + Number(change)));
  saveCart();
  renderCart();
  const sameControl = change && items.querySelector(`[data-id="${id}"][data-change="${change}"]:not(:disabled)`);
  const nextControl = sameControl || items.querySelector("button:not(:disabled)") || document.querySelector("[data-empty] a");
  nextControl?.focus({ preventScroll: true });
});

if (orderForm) {
  const customer = orderForm.elements.customer;
  const email = orderForm.elements.email;
  const fields = [customer, email];

  function showError(field, text) {
    const error = document.getElementById(field.getAttribute("aria-describedby"));
    error.hidden = !text;
    error.textContent = text;
    if (text) field.setAttribute("aria-invalid", "true");
    else field.removeAttribute("aria-invalid");
  }

  fields.forEach(field => field.addEventListener("input", () => showError(field, "")));
  orderForm.addEventListener("submit", event => {
    event.preventDefault();
    showError(customer, customer.value.trim() ? "" : "Введи имя.");
    showError(email, email.validity.valid ? "" : "Введи электронную почту в формате name@example.com.");
    const firstInvalid = fields.find(field => field.hasAttribute("aria-invalid"));
    if (firstInvalid) {
      firstInvalid.focus();
      return;
    }
    if (!Object.keys(cart).length) return;
    const total = Object.entries(cart).reduce((sum, [id, quantity]) => sum + byId(id).price * quantity, 0);
    cart = {};
    saveCart();
    orderForm.reset();
    renderCart();
    const message = document.querySelector("[data-order-status]");
    message.hidden = false;
    message.textContent = `Заказ подготовлен. Сумма заказа — ${money(total)}.`;
    message.tabIndex = -1;
    message.focus();
  });
}

updateCounter();
renderCart();
