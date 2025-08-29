
    let currentTheme = 'default';
    let cart = [];

    // Sample product data by theme
    const products = {
      all: [
        { name: 'Party Balloons', category: 'Decorations', price: 10, img: 'https://via.placeholder.com/150?text=Balloons' },
        { name: 'Gift Box', category: 'Gifts', price: 20, img: 'https://via.placeholder.com/150?text=Gift+Box' },
        { name: 'Birthday Cake', category: 'Food', price: 30, img: 'https://via.placeholder.com/150?text=Cake' }
      ],
      unicorn: [
        { name: 'Unicorn Balloons', category: 'Decorations', price: 12, img: 'https://via.placeholder.com/150?text=Unicorn+Balloons' },
        { name: 'Rainbow Cake', category: 'Food', price: 35, img: 'https://via.placeholder.com/150?text=Rainbow+Cake' },
        { name: 'Unicorn Plush', category: 'Gifts', price: 25, img: 'https://via.placeholder.com/150?text=Unicorn+Plush' }
      ],
      barbie: [
        { name: 'Pink Balloons', category: 'Decorations', price: 10, img: 'https://via.placeholder.com/150?text=Pink+Balloons' },
        { name: 'Barbie Doll', category: 'Gifts', price: 22, img: 'https://via.placeholder.com/150?text=Barbie+Doll' },
        { name: 'Pink Cupcakes', category: 'Food', price: 28, img: 'https://via.placeholder.com/150?text=Cupcakes' }
      ],
      frozen: [
        { name: 'Snowflake Decor', category: 'Decorations', price: 15, img: 'https://via.placeholder.com/150?text=Snowflake+Decor' },
        { name: 'Elsa Doll', category: 'Gifts', price: 24, img: 'https://via.placeholder.com/150?text=Elsa+Doll' },
        { name: 'Ice Blue Cake', category: 'Food', price: 32, img: 'https://via.placeholder.com/150?text=Ice+Cake' }
      ],
      superhero: [
        { name: 'Superhero Masks', category: 'Decorations', price: 12, img: 'https://via.placeholder.com/150?text=Masks' },
        { name: 'Action Figure', category: 'Gifts', price: 20, img: 'https://via.placeholder.com/150?text=Action+Figure' },
        { name: 'Hero Cake', category: 'Food', price: 30, img: 'https://via.placeholder.com/150?text=Hero+Cake' }
      ],
      jungle: [
        { name: 'Jungle Balloons', category: 'Decorations', price: 11, img: 'https://via.placeholder.com/150?text=Jungle+Balloons' },
        { name: 'Animal Plush', category: 'Gifts', price: 18, img: 'https://via.placeholder.com/150?text=Animal+Plush' },
        { name: 'Safari Cake', category: 'Food', price: 29, img: 'https://via.placeholder.com/150?text=Safari+Cake' }
      ]
    };

    function submitForm() {
      const name = document.getElementById('name-input').value;
      const birthday = document.getElementById('birthday-input').value;
      if (name && birthday) {
        document.getElementById('video-container').style.display = 'none';
        document.getElementById('content').style.display = 'block';
        document.body.classList.add('default');
      } else {
        alert('Please enter your name and birthday!');
      }
    }

    function setTheme(theme) {
      document.body.className = theme;
      currentTheme = theme;
      document.getElementById('theme-name').textContent = theme.charAt(0).toUpperCase() + theme.slice(1);
    }

    function showProducts() {
      document.querySelector('.theme-selection').style.display = 'none';
      const productSection = document.querySelector('.product-suggestion');
      productSection.style.display = 'block';
      const productGrid = document.getElementById('product-grid');
      productGrid.innerHTML = '';
      const categories = [...new Set(products[currentTheme].map(p => p.category))];
      categories.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.innerHTML = `<h3>${category}</h3>`;
        const categoryProducts = products[currentTheme].filter(p => p.category === category);
        categoryProducts.forEach(product => {
          const productDiv = document.createElement('div');
          productDiv.className = 'product-card';
          productDiv.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h4>${product.name}</h4>
            <p>${product.price}</p>
            <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
          `;
          categoryDiv.appendChild(productDiv);
        });
        productGrid.appendChild(categoryDiv);
      });
    }

    function addToCart(name, price) {
      cart.push({ name, price });
      alert(`${name} added to cart!`);
    }

    function showCart() {
      document.querySelector('.product-suggestion').style.display = 'none';
      const cartSection = document.querySelector('.cart-preview');
      cartSection.style.display = 'block';
      const cartItems = document.getElementById('cart-items');
      cartItems.innerHTML = '';
      cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price}`;
        cartItems.appendChild(li);
      });
    }

    function goToCheckout() {
      // Redirect to actual website for login and payment
      window.location.href = 'https://your-actual-website.com/checkout';
    }

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('birthday-video');
  const audio = document.getElementById('birthday-audio');
  const nameInput = document.getElementById('name-input');
  const birthdayInput = document.getElementById('birthday-input');

  // Initially pause video and audio if they have autoplay
  video.pause();
  audio.pause();

  // Function to play video once and audio in loop
  const playMedia = () => {
    if (video.paused) {
      video.play();  // Play video once (no loop)
    }
    if (audio.paused) {
      audio.play();  // Play audio in loop
    }
  };


  // Add click event listeners to inputs
  nameInput.addEventListener('click', playMedia);
  birthdayInput.addEventListener('click', playMedia);

  })

  // Ensure audio continues playing even after overlay/video is hidden
  // (Hiding elements doesn't stop media playback)
