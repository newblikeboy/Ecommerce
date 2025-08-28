const products = [
  {id:1, title:"Unicorn Birthday Cake", price:1200, description:"Magical unicorn cake with rainbow frosting", image:"https://source.unsplash.com/400x300/?unicorn,cake", theme:"unicorn"},
  {id:2, title:"Barbie Doll Set", price:800, description:"Barbie doll with accessories", image:"https://source.unsplash.com/400x300/?barbie,doll", theme:"barbie"},
  {id:3, title:"Superhero Costume", price:1500, description:"Kids superhero costume for party", image:"https://source.unsplash.com/400x300/?superhero,costume", theme:"superhero"},
  {id:4, title:"Elegant Balloon Set", price:500, description:"Black and gold premium balloons", image:"https://source.unsplash.com/400x300/?balloons,party", theme:"elegant"}
];

function renderProducts() {
  const list = document.getElementById('product-list');
  if (!list) return;
  list.innerHTML = '';
  products.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${p.image}" alt="${p.title}" />
      <h3>${p.title}</h3>
      <p>₹${p.price}</p>
      <button onclick="viewProduct(${p.id})">View Details</button>
      <button>Add to Cart</button>
    `;
    list.appendChild(card);
  });
}

function viewProduct(id) {
  window.location.href = `product.html?id=${id}`;
}

function loadProductDetail() {
  const detail = document.getElementById('product-detail');
  if (!detail) return;
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  const product = products.find(p => p.id === id);
  if (!product) { detail.innerHTML = '<p>Product not found.</p>'; return; }
  detail.innerHTML = `
    <img src="${product.image}" alt="${product.title}" />
    <h2>${product.title}</h2>
    <p>${product.description}</p>
    <h3>₹${product.price}</h3>
    <button>Add to Cart</button>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  loadProductDetail();
});
