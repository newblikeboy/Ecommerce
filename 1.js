/* ---------- DATA ---------- */
const CATALOG = [
  { id: 'u1', theme: 'unicorn', name: 'Unicorn Theme Cake', price: 899, img: 'https://source.unsplash.com/800x600/?unicorn,cake,party' },
  { id: 'u2', theme: 'unicorn', name: 'Unicorn Foil Balloons', price: 299, img: 'https://source.unsplash.com/800x600/?unicorn,balloons' },
  { id: 'u3', theme: 'unicorn', name: 'Pastel Backdrop Set', price: 1099, img: 'https://source.unsplash.com/800x600/?pastel,party,backdrop' },
  { id: 'u4', theme: 'unicorn', name: 'Unicorn Return Gifts (Pack of 10)', price: 499, img: 'https://source.unsplash.com/800x600/?unicorn,gifts' },
  { id: 'u5', theme: 'unicorn', name: 'Rainbow Tableware Set', price: 389, img: 'https://source.unsplash.com/800x600/?rainbow,party' },
  { id: 'u6', theme: 'unicorn', name: 'Confetti Poppers (6)', price: 219, img: 'https://source.unsplash.com/800x600/?confetti,party' },
  { id: 'b1', theme: 'barbie', name: 'Barbie Cake Topper Kit', price: 349, img: 'https://source.unsplash.com/800x600/?barbie,cake' },
  { id: 'b2', theme: 'barbie', name: 'Pink Balloon Arch', price: 799, img: 'https://source.unsplash.com/800x600/?pink,balloons,party' },
  { id: 'b3', theme: 'barbie', name: 'Barbie Banner & Props', price: 399, img: 'https://source.unsplash.com/800x600/?barbie,party,decor' },
  { id: 'b4', theme: 'barbie', name: 'Princess Party Caps (Pack of 12)', price: 199, img: 'https://source.unsplash.com/800x600/?princess,party' },
  { id: 'b5', theme: 'barbie', name: 'Glitter Cupcake Wrappers', price: 189, img: 'https://source.unsplash.com/800x600/?cupcakes,pink' },
  { id: 's1', theme: 'superhero', name: 'Superhero Backdrop', price: 999, img: 'https://source.unsplash.com/800x600/?superhero,backdrop' },
  { id: 's2', theme: 'superhero', name: 'Hero Masks (Pack of 10)', price: 259, img: 'https://source.unsplash.com/800x600/?mask,party' },
  { id: 's3', theme: 'superhero', name: 'Comic Theme Balloons', price: 279, img: 'https://source.unsplash.com/800x600/?comic,balloons' },
  { id: 's4', theme: 'superhero', name: 'Action Cake Candles', price: 149, img: 'https://source.unsplash.com/800x600/?birthday,candles' },
  { id: 's5', theme: 'superhero', name: 'City Skyline Banner', price: 359, img: 'https://source.unsplash.com/800x600/?city,night,skyline' },
  { id: 'f1', theme: 'frozen', name: 'Frozen Snowy Backdrop', price: 949, img: 'https://source.unsplash.com/800x600/?snow,backdrop,party' },
  { id: 'f2', theme: 'frozen', name: 'Icy Blue Balloon Set', price: 329, img: 'https://source.unsplash.com/800x600/?blue,balloons,party' },
  { id: 'f3', theme: 'frozen', name: 'Frozen Cake Topper', price: 299, img: 'https://source.unsplash.com/800x600/?frozen,cake' },
  { id: 'f4', theme: 'frozen', name: 'Snowflake Fairy Lights', price: 449, img: 'https://source.unsplash.com/800x600/?snowflake,lights' },
  { id: 'f5', theme: 'frozen', name: 'Crystal Table Confetti', price: 179, img: 'https://source.unsplash.com/800x600/?ice,crystal' },
  { id: 'j1', theme: 'jungle', name: 'Jungle Leaf Backdrop', price: 899, img: 'https://source.unsplash.com/800x600/?jungle,backdrop' },
  { id: 'j2', theme: 'jungle', name: 'Animal Print Balloons', price: 289, img: 'https://source.unsplash.com/800x600/?animal,balloons' },
  { id: 'j3', theme: 'jungle', name: 'Safari Return Gifts (10)', price: 559, img: 'https://source.unsplash.com/800x600/?safari,gifts' },
  { id: 'j4', theme: 'jungle', name: 'Leafy Table Runner', price: 349, img: 'https://source.unsplash.com/800x600/?green,table,decor' },
  { id: 'p1', theme: 'space', name: 'Galaxy Backdrop', price: 1049, img: 'https://source.unsplash.com/800x600/?galaxy,backdrop,party' },
  { id: 'p2', theme: 'space', name: 'Rocket Foil Balloons', price: 329, img: 'https://source.unsplash.com/800x600/?rocket,balloons' },
  { id: 'p3', theme: 'space', name: 'Astronaut Cake Topper', price: 279, img: 'https://source.unsplash.com/800x600/?astronaut,cake' },
  { id: 'p4', theme: 'space', name: 'Star String Lights', price: 399, img: 'https://source.unsplash.com/800x600/?star,lights,party' },
  { id: 'p5', theme: 'space', name: 'Moon Phase Garland', price: 329, img: 'https://source.unsplash.com/800x600/?moon,garland' }
];

const THEME_META = {
  all: { title: 'All Party Themes', tag: 'Browse everything — pick your vibe!', hero: 'https://images.unsplash.com/photo-1566261307871-76410ed4c0d8?q=80&w=1600&auto=format&fit=crop' },
  unicorn: { title: 'Unicorn Dreamland', tag: 'Pastels, rainbows & magic sparkle.', hero: 'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=1600&auto=format&fit=crop' },
  barbie: { title: 'Barbie Pink Party', tag: 'Glam, glitter & doll vibes.', hero: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop' },
  superhero: { title: 'Superhero City', tag: 'Masks on. Power up the party.', hero: 'https://images.unsplash.com/photo-1520975916090-93a7d3c1b7ef?q=80&w=1600&auto=format&fit=crop' },
  frozen: { title: 'Frozen Wonderland', tag: 'Cool blues & snowy sparkle.', hero: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600&auto=format&fit=crop' },
  jungle: { title: 'Jungle Safari', tag: 'Leafy greens & wild fun.', hero: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop' },
  space: { title: 'Space Odyssey', tag: 'Stars, rockets & cosmic lights.', hero: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1600&auto=format&fit=crop' }
};

/* ---------- DOM ELEMENTS ---------- */
const $grid = document.getElementById('productGrid');
const $hero = document.getElementById('hero');
const $heroTitle = document.getElementById('heroTitle');
const $heroTag = document.getElementById('heroTag');
const $prodHeading = document.getElementById('prodHeading');
const $themeSelect = document.getElementById('themeSelect');
const $cartCount = document.getElementById('cartCount');
const $drawer = document.getElementById('drawer');
const $items = document.getElementById('cartItems');
const $total = document.getElementById('cartTotal');
const $openCart = document.getElementById('openCart');
const $closeCart = document.getElementById('closeCart');
const $xCart = document.getElementById('xCart');
const $checkoutBtn = document.getElementById('checkoutBtn');
const $btnLogin = document.getElementById('btnLogin');
const $btnSignup = document.getElementById('btnSignup');
const $loginModal = document.getElementById('loginModal');
const $signupModal = document.getElementById('signupModal');
const $loginSubmit = document.getElementById('loginSubmit');
const $signupSubmit = document.getElementById('signupSubmit');
const $hamburgerToggle = document.getElementById('hamburgerToggle');
const $navLinks = document.getElementById('navLinks');

/* ---------- UTILITY FUNCTIONS ---------- */
const money = (n) => Number(n).toLocaleString('en-IN');

/* ---------- RENDERING FUNCTIONS ---------- */
function render(theme = 'all') {
  document.body.className = theme;
  const meta = THEME_META[theme];
  if (meta) {
    $hero.style.backgroundImage = `url('${meta.hero}')`;
    $heroTitle.textContent = meta.title;
    $heroTag.textContent = meta.tag;
    $prodHeading.innerHTML = `<i class="fa-solid fa-star"></i> ${theme === 'all' ? 'All Featured Products' : `${meta.title} — Picks`}`;
  }
  const data = theme === 'all' ? CATALOG : CATALOG.filter(p => p.theme === theme);
  $grid.innerHTML = '';
  data.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="img" style="background-image: url('${p.img}');" role="img" aria-label="${p.name}"></div>
      <div class="info">
        <div class="title">${p.name}</div>
        <div class="meta">
          <div class="price">₹${money(p.price)}</div>
          <div style="opacity: 0.6; text-transform: capitalize">${p.theme}</div>
        </div>
        <button class="add" data-id="${p.id}" aria-label="Add ${p.name} to cart"><i class="fa-solid fa-cart-plus"></i> Add to Cart</button>
      </div>
    `;
    $grid.appendChild(card);
  });
  document.querySelectorAll('.add').forEach(btn => {
    btn.addEventListener('click', () => addToCart(btn.dataset.id));
    btn.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        addToCart(btn.dataset.id);
      }
    });
  });
}

/* ---------- CART MANAGEMENT ---------- */
const cartKey = 'celebration_cart_v1';
let CART = JSON.parse(localStorage.getItem(cartKey) || '[]');

function syncCart() {
  localStorage.setItem(cartKey, JSON.stringify(CART));
  $cartCount.textContent = CART.length;
}

function addToCart(id) {
  const item = CATALOG.find(x => x.id === id);
  if (!item) return;
  CART.push({ id: item.id, name: item.name, price: item.price, img: item.img });
  syncCart();
  renderCart();
}

function removeFromCart(idx) {
  CART.splice(idx, 1);
  syncCart();
  renderCart();
}

function sumCart() {
  return CART.reduce((a, b) => a + b.price, 0);
}

function renderCart() {
  $items.innerHTML = CART.length
    ? ''
    : '<p style="opacity: 0.7; text-align: center; margin-top: 12px">Your cart is empty.</p>';
  CART.forEach((it, idx) => {
    const row = document.createElement('div');
    row.className = 'row';
    row.innerHTML = `
      <div class="thumb" style="background-image: url('${it.img}');" role="img" aria-label="${it.name}"></div>
      <div>
        <h4>${it.name}</h4>
        <div style="opacity: 0.7">₹${money(it.price)}</div>
      </div>
      <button class="rm" aria-label="Remove ${it.name} from cart"><i class="fa-solid fa-trash"></i> Remove</button>
    `;
    row.querySelector('.rm').addEventListener('click', () => removeFromCart(idx));
    row.querySelector('.rm').addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        removeFromCart(idx);
      }
    });
    $items.appendChild(row);
  });
  $total.textContent = money(sumCart());
}

/* ---------- CART TOGGLE ---------- */
function openCart() {
  renderCart();
  $drawer.classList.add('show');
  $items.querySelector('button')?.focus();
}

function closeCart() {
  $drawer.classList.remove('show');
  $openCart.focus();
}

/* ---------- MODAL HANDLING ---------- */
function openModal(modal) {
  modal.classList.add('open');
  modal.querySelector('input').focus();
}

function closeModal(modal) {
  modal.classList.remove('open');
}

/* ---------- EVENT LISTENERS ---------- */
$themeSelect.addEventListener('change', (e) => render(e.target.value));

$openCart.addEventListener('click', openCart);
$openCart.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    openCart();
  }
});

[$closeCart, $xCart].forEach(el => {
  el.addEventListener('click', closeCart);
  el.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      closeCart();
    }
  });
});

$checkoutBtn.addEventListener('click', () => {
  alert('Proceeding to checkout (hook your payment gateway here).');
});

$btnLogin.addEventListener('click', () => openModal($loginModal));
$btnSignup.addEventListener('click', () => openModal($signupModal));

document.querySelectorAll('[data-close]').forEach(el => {
  el.addEventListener('click', () => closeModal(document.querySelector(el.dataset.close)));
  el.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      closeModal(document.querySelector(el.dataset.close));
    }
  });
});

[$loginModal, $signupModal].forEach(modal => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal(modal);
  });
  modal.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal(modal);
  });
});

$loginSubmit.addEventListener('click', () => {
  alert('Logged in (demo). Connect backend auth here.');
  closeModal($loginModal);
});

$signupSubmit.addEventListener('click', () => {
  alert('Signed up (demo). Connect backend auth here.');
  closeModal($signupModal);
});

$hamburgerToggle.addEventListener('click', () => {
  const isExpanded = $hamburgerToggle.getAttribute('aria-expanded') === 'true';
  $hamburgerToggle.setAttribute('aria-expanded', !isExpanded);
  $hamburgerToggle.classList.toggle('active');
  $navLinks.classList.toggle('active');
  if (!isExpanded) $navLinks.querySelector('a').focus();
});

$hamburgerToggle.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    const isExpanded = $hamburgerToggle.getAttribute('aria-expanded') === 'true';
    $hamburgerToggle.setAttribute('aria-expanded', !isExpanded);
    $hamburgerToggle.classList.toggle('active');
    $navLinks.classList.toggle('active');
    if (!isExpanded) $navLinks.querySelector('a').focus();
  }
});

/* ---------- INITIALIZATION ---------- */
render('all');
syncCart();