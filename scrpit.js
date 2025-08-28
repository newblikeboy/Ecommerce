
/* =========================
   DATA — 24 products (HD Unsplash)
   Each has: id, name, price, img, theme
========================= */
const CATALOG = [
  // UNICORN (4)
  {id:'u1', theme:'unicorn', name:'Unicorn Theme Cake', price:899, img:'https://source.unsplash.com/800x600/?unicorn,cake,party'},
  {id:'u2', theme:'unicorn', name:'Unicorn Foil Balloons', price:299, img:'https://source.unsplash.com/800x600/?unicorn,balloons'},
  {id:'u3', theme:'unicorn', name:'Pastel Backdrop Set', price:1099, img:'https://source.unsplash.com/800x600/?pastel,party,backdrop'},
  {id:'u4', theme:'unicorn', name:'Unicorn Return Gifts (Pack of 10)', price:499, img:'https://source.unsplash.com/800x600/?unicorn,gifts'},
  // BARBIE (4)
  {id:'b1', theme:'barbie', name:'Barbie Cake Topper Kit', price:349, img:'https://source.unsplash.com/800x600/?barbie,cake'},
  {id:'b2', theme:'barbie', name:'Pink Balloon Arch', price:799, img:'https://source.unsplash.com/800x600/?pink,balloons,party'},
  {id:'b3', theme:'barbie', name:'Barbie Banner & Props', price:399, img:'https://source.unsplash.com/800x600/?barbie,party,decor'},
  {id:'b4', theme:'barbie', name:'Princess Party Caps (Pack of 12)', price:199, img:'https://source.unsplash.com/800x600/?princess,party'},
  // SUPERHERO (4)
  {id:'s1', theme:'superhero', name:'Superhero Backdrop', price:999, img:'https://source.unsplash.com/800x600/?superhero,backdrop'},
  {id:'s2', theme:'superhero', name:'Hero Masks (Pack of 10)', price:259, img:'https://source.unsplash.com/800x600/?mask,party'},
  {id:'s3', theme:'superhero', name:'Comic Theme Balloons', price:279, img:'https://source.unsplash.com/800x600/?comic,balloons'},
  {id:'s4', theme:'superhero', name:'Action Cake Candles', price:149, img:'https://source.unsplash.com/800x600/?birthday,candles'},
  // FROZEN (4)
  {id:'f1', theme:'frozen', name:'Frozen Snowy Backdrop', price:949, img:'https://source.unsplash.com/800x600/?snow,backdrop,party'},
  {id:'f2', theme:'frozen', name:'Icy Blue Balloon Set', price:329, img:'https://source.unsplash.com/800x600/?blue,balloons,party'},
  {id:'f3', theme:'frozen', name:'Frozen Cake Topper', price:299, img:'https://source.unsplash.com/800x600/?frozen,cake'},
  {id:'f4', theme:'frozen', name:'Snowflake Fairy Lights', price:449, img:'https://source.unsplash.com/800x600/?snowflake,lights'},
  // JUNGLE (4)
  {id:'j1', theme:'jungle', name:'Jungle Leaf Backdrop', price:899, img:'https://source.unsplash.com/800x600/?jungle,backdrop'},
  {id:'j2', theme:'jungle', name:'Animal Print Balloons', price:289, img:'https://source.unsplash.com/800x600/?animal,balloons'},
  {id:'j3', theme:'jungle', name:'Safari Return Gifts (10)', price:559, img:'https://source.unsplash.com/800x600/?safari,gifts'},
  {id:'j4', theme:'jungle', name:'Leafy Table Runner', price:349, img:'https://source.unsplash.com/800x600/?green,table,decor'},
  // SPACE (4)
  {id:'p1', theme:'space', name:'Galaxy Backdrop', price:1049, img:'https://source.unsplash.com/800x600/?galaxy,backdrop,party'},
  {id:'p2', theme:'space', name:'Rocket Foil Balloons', price:329, img:'https://source.unsplash.com/800x600/?rocket,balloons'},
  {id:'p3', theme:'space', name:'Astronaut Cake Topper', price:279, img:'https://source.unsplash.com/800x600/?astronaut,cake'},
  {id:'p4', theme:'space', name:'Star String Lights', price:399, img:'https://source.unsplash.com/800x600/?star,lights,party'},
  /* EXTRA (make sure total >= 20; add 6 mixed items tagged to themes) */
  {id:'u5', theme:'unicorn', name:'Rainbow Tableware Set', price:389, img:'https://source.unsplash.com/800x600/?rainbow,party'},
  {id:'u6', theme:'unicorn', name:'Confetti Poppers (6)', price:219, img:'https://source.unsplash.com/800x600/?confetti,party'},
  {id:'s5', theme:'superhero', name:'City Skyline Banner', price:359, img:'https://source.unsplash.com/800x600/?city,night,skyline'},
  {id:'b5', theme:'barbie', name:'Glitter Cupcake Wrappers', price:189, img:'https://source.unsplash.com/800x600/?cupcakes,pink'},
  {id:'f5', theme:'frozen', name:'Crystal Table Confetti', price:179, img:'https://source.unsplash.com/800x600/?ice,crystal'},
  {id:'p5', theme:'space', name:'Moon Phase Garland', price:329, img:'https://source.unsplash.com/800x600/?moon,garland'}
];
// THEMES → hero banner + tagline
const THEME_META = {
  all:{title:'All Party Themes', tag:'Browse everything — pick your vibe!', hero:'https://images.unsplash.com/photo-1566261307871-76410ed4c0d8?q=80&w=1600&auto=format&fit=crop'},
  unicorn:{title:'Unicorn Dreamland', tag:'Pastels, rainbows & magic sparkle.', hero:'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=1600&auto=format&fit=crop'},
  barbie:{title:'Barbie Pink Party', tag:'Glam, glitter & doll vibes.', hero:'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop'},
  superhero:{title:'Superhero City', tag:'Masks on. Power up the party.', hero:'https://images.unsplash.com/photo-1520975916090-93a7d3c1b7ef?q=80&w=1600&auto=format&fit=crop'},
  frozen:{title:'Frozen Wonderland', tag:'Cool blues & snowy sparkle.', hero:'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600&auto=format&fit=crop'},
  jungle:{title:'Jungle Safari', tag:'Leafy greens & wild fun.', hero:'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop'},
  space:{title:'Space Odyssey', tag:'Stars, rockets & cosmic lights.', hero:'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1600&auto=format&fit=crop'}
};

/* =========================
   RENDERING
========================= */
const $grid = document.getElementById('productGrid');
const $hero = document.getElementById('hero');
const $heroTitle = document.getElementById('heroTitle');
const $heroTag = document.getElementById('heroTag');
const $prodHeading = document.getElementById('prodHeading');

function money(n){ return Number(n).toLocaleString('en-IN'); }

function render(theme='unicorn'){
  // body class for color tokens
  document.body.className = theme==='all' ? 'unicorn' : theme; // keep a pretty default when "all"
  // hero meta
  const meta = THEME_META[theme];
  if(meta){
    $hero.style.backgroundImage = `url('${meta.hero}')`;
    $heroTitle.textContent = meta.title;
    $heroTag.textContent = meta.tag;
    $prodHeading.textContent = theme==='all' ? '🎯 All Featured Products' : `🎯 ${meta.title} — Picks`;
  }
  // list
  const data = theme==='all' ? CATALOG : CATALOG.filter(p=>p.theme===theme);
  $grid.innerHTML = '';
  data.forEach(p=>{
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="img" style="background-image:url('${p.img}')"></div>
      <div class="info">
        <div class="title">${p.name}</div>
        <div class="meta">
          <div class="price">₹${money(p.price)}</div>
          <div style="opacity:.6;text-transform:capitalize">${p.theme}</div>
        </div>
        <button class="add" data-id="${p.id}">Add to Cart</button>
      </div>
    `;
    $grid.appendChild(card);
  });
  // bind add-to-cart
  [...document.querySelectorAll('.add')].forEach(btn=>{
    btn.onclick = ()=> addToCart(btn.dataset.id);
  });
}

/* =========================
   THEME SWITCH
========================= */
[...document.querySelectorAll('.theme-btn')].forEach(b=>{
  b.addEventListener('click', ()=>{
    const t = b.dataset.theme;
    render(t);
  });
});

// initial
render('unicorn');

/* =========================
   CART (local state + localStorage)
========================= */
const cartKey = 'celebration_cart_v1';
let CART = JSON.parse(localStorage.getItem(cartKey) || '[]');
const $cartCount = document.getElementById('cartCount');
const $drawer = document.getElementById('drawer');
const $items = document.getElementById('cartItems');
const $total = document.getElementById('cartTotal');

function syncCart(){
  localStorage.setItem(cartKey, JSON.stringify(CART));
  $cartCount.textContent = CART.length;
}
function addToCart(id){
  const item = CATALOG.find(x=>x.id===id);
  if(!item) return;
  CART.push({id:item.id, name:item.name, price:item.price, img:item.img});
  syncCart();
  renderCart();
  openCart();
}
function removeFromCart(idx){
  CART.splice(idx,1);
  syncCart();
  renderCart();
}
function sumCart(){ return CART.reduce((a,b)=>a+b.price,0); }
function renderCart(){
  $items.innerHTML = '';
  if(!CART.length){
    $items.innerHTML = '<p style="opacity:.7;text-align:center;margin-top:12px">Your cart is empty.</p>';
  } else {
    CART.forEach((it,idx)=>{
      const row = document.createElement('div');
      row.className = 'row';
      row.innerHTML = `
        <div class="thumb" style="background-image:url('${it.img}')"></div>
        <div>
          <h4>${it.name}</h4>
          <div style="opacity:.7">₹${money(it.price)}</div>
        </div>
        <button class="rm">Remove</button>
      `;
      row.querySelector('.rm').onclick = ()=>removeFromCart(idx);
      $items.appendChild(row);
    });
  }
  $total.textContent = money(sumCart());
}
function openCart(){ $drawer.classList.add('show'); }
function closeCart(){ $drawer.classList.remove('show'); }
document.getElementById('openCart').onclick = ()=>{ renderCart(); openCart(); };
document.getElementById('closeCart').onclick = closeCart;
document.getElementById('xCart').onclick = closeCart;
document.getElementById('checkoutBtn').onclick = ()=>{
  alert('Proceeding to checkout (hook your payment gateway here).');
};

syncCart();

/* =========================
   AUTH MODALS (frontend only)
========================= */
const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');
document.getElementById('btnLogin').onclick = ()=> loginModal.classList.add('open');
document.getElementById('btnSignup').onclick = ()=> signupModal.classList.add('open');
document.querySelectorAll('[data-close]').forEach(el=>{
  el.onclick = ()=> document.querySelector(el.dataset.close).classList.remove('open');
});
loginModal.addEventListener('click', e=>{ if(e.target===loginModal) loginModal.classList.remove('open'); });
signupModal.addEventListener('click', e=>{ if(e.target===signupModal) signupModal.classList.remove('open'); });
// submit stubs
document.getElementById('loginSubmit').onclick = ()=>{ alert('Logged in (demo). Connect backend auth here.'); loginModal.classList.remove('open'); };
document.getElementById('signupSubmit').onclick = ()=>{ alert('Signed up (demo). Connect backend auth here.'); signupModal.classList.remove('open'); };
