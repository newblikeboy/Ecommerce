

// Theme data
const themes = [
  { id: "all", name: "All Themes", icon: "star" },
  { id: "unicorn", name: "Unicorn", icon: "horse" },
  { id: "barbie", name: "Barbie", icon: "crown" },
  { id: "superhero", name: "Superhero", icon: "mask" },
  { id: "frozen", name: "Frozen", icon: "snowflake" },
  { id: "jungle", name: "Jungle", icon: "leaf" },
  { id: "space", name: "Space", icon: "rocket" },
];

// Product data
const products = [
  {
    id: "u1",
    theme: "unicorn",
    name: "Unicorn Theme Cake",
    price: 899,
    img: "https://source.unsplash.com/800x600/?unicorn,cake,party",
  },
  {
    id: "u2",
    theme: "unicorn",
    name: "Unicorn Foil Balloons",
    price: 299,
    img: "https://source.unsplash.com/800x600/?unicorn,balloons",
  },
  {
    id: "b1",
    theme: "barbie",
    name: "Barbie Cake Topper Kit",
    price: 349,
    img: "https://source.unsplash.com/800x600/?barbie,cake",
  },
  {
    id: "b2",
    theme: "barbie",
    name: "Pink Balloon Arch",
    price: 799,
    img: "https://source.unsplash.com/800x600/?pink,balloons,party",
  },
  {
    id: "s1",
    theme: "superhero",
    name: "Superhero Backdrop",
    price: 999,
    img: "https://source.unsplash.com/800x600/?superhero,backdrop",
  },
  {
    id: "s2",
    theme: "superhero",
    name: "Hero Masks (Pack of 10)",
    price: 259,
    img: "https://source.unsplash.com/800x600/?mask,party",
  },
  {
    id: "f1",
    theme: "frozen",
    name: "Frozen Snowy Backdrop",
    price: 949,
    img: "https://source.unsplash.com/800x600/?snow,backdrop,party",
  },
  {
    id: "f2",
    theme: "frozen",
    name: "Icy Blue Balloon Set",
    price: 329,
    img: "https://source.unsplash.com/800x600/?blue,balloons,party",
  },
  {
    id: "j1",
    theme: "jungle",
    name: "Jungle Leaf Backdrop",
    price: 899,
    img: "https://source.unsplash.com/800x600/?jungle,backdrop",
  },
  {
    id: "j2",
    theme: "jungle",
    name: "Animal Print Balloons",
    price: 289,
    img: "https://source.unsplash.com/800x600/?animal,balloons",
  },
  {
    id: "sp1",
    theme: "space",
    name: "Galaxy Backdrop",
    price: 1049,
    img: "https://source.unsplash.com/800x600/?galaxy,backdrop,party",
  },
  {
    id: "sp2",
    theme: "space",
    name: "Rocket Foil Balloons",
    price: 329,
    img: "https://source.unsplash.com/800x600/?rocket,balloons",
  },
];

// User data and cart
let userData = {
  name: "",
  dob: "",
  theme: "all",
};

let cart = [];
let currentStep = 1;
let musicPlaying = false;

// DOM elements
const progressElement = document.getElementById("progress");
const currentStepElement = document.getElementById("current-step");
const nameInput = document.getElementById("nameInput");
const dobInput = document.getElementById("dobInput");
const startBtn = document.getElementById("startBtn");
const themeOptions = document.getElementById("themeOptions");
const toStep3Btn = document.getElementById("toStep3");
const productGrid = document.getElementById("productGrid");
const toStep4Btn = document.getElementById("toStep4");
const cartItems = document.getElementById("cartItems");
const cartTotalElement = document.getElementById("cartTotal");
const checkoutBtn = document.getElementById("checkoutBtn");
const bgVideo = document.getElementById("bg-video");
const bgMusic = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");
const musicIcon = musicToggle.querySelector("i");

// Back buttons
const backToStep1Btn = document.getElementById("backToStep1");
const backToStep2Btn = document.getElementById("backToStep2");
const backToStep3Btn = document.getElementById("backToStep3");

// Initialize the application
function init() {
  renderThemes();
  setupEventListeners();
  updateProgress();
  setTheme("all");

  // Set today's date as max for date picker
  const today = new Date();
  const maxDate = today.toISOString().split("T")[0];
  dobInput.setAttribute("max", maxDate);

  // Set default date to today
  dobInput.valueAsDate = today;

  // Ensure video plays
  bgVideo.play().catch((e) => console.log("Video play failed:", e));
}

// Set theme
function setTheme(themeId) {
  document.body.className = themeId;
  userData.theme = themeId;
}

// Render theme options
function renderThemes() {
  themeOptions.innerHTML = "";
  themes.forEach((theme) => {
    const themeElement = document.createElement("div");
    themeElement.className = "theme-option";
    themeElement.dataset.id = theme.id;
    themeElement.innerHTML = `
                    <i class="fas fa-${theme.icon}"></i>
                    <div>${theme.name}</div>
                `;
    themeOptions.appendChild(themeElement);
  });
}

// Setup event listeners
function setupEventListeners() {
  // Step 1
  startBtn.addEventListener("click", goToStep2);

  // Input events for music
  nameInput.addEventListener("focus", startMusic);
  dobInput.addEventListener("focus", startMusic);

  // Step 2
  themeOptions.addEventListener("click", function (e) {
    const themeOption = e.target.closest(".theme-option");
    if (themeOption) {
      selectTheme(themeOption);
    }
  });

  toStep3Btn.addEventListener("click", goToStep3);
  backToStep1Btn.addEventListener("click", () => goToStep(1));

  // Step 3
  toStep4Btn.addEventListener("click", goToStep4);
  backToStep2Btn.addEventListener("click", () => goToStep(2));

  // Step 4
  checkoutBtn.addEventListener("click", completeCheckout);
  backToStep3Btn.addEventListener("click", () => goToStep(3));

  // Music controls
  musicToggle.addEventListener("click", toggleMusic);
}

// Start music when user interacts with inputs
function startMusic() {
  if (!musicPlaying) {
    bgMusic
      .play()
      .then(() => {
        musicPlaying = true;
        musicIcon.className = "fas fa-volume-up";
      })
      .catch((error) => {
        console.log("Audio play failed:", error);
      });
  }

  // Remove event listeners after first interaction
  nameInput.removeEventListener("focus", startMusic);
  dobInput.removeEventListener("focus", startMusic);
}

// Toggle music on/off
function toggleMusic() {
  if (musicPlaying) {
    bgMusic.pause();
    musicIcon.className = "fas fa-volume-mute";
  } else {
    bgMusic
      .play()
      .then(() => {
        musicIcon.className = "fas fa-volume-up";
      })
      .catch((error) => {
        console.log("Audio play failed:", error);
      });
  }
  musicPlaying = !musicPlaying;
}

// Save user data and go to step 2
function goToStep2() {
  if (!nameInput.value || !dobInput.value) {
    alert("Please enter your name and date of birth");
    return;
  }

  userData.name = nameInput.value;
  userData.dob = dobInput.value;

  goToStep(2);
}

// Go to a specific step
function goToStep(stepNumber) {
  currentStep = stepNumber;
  showStep(stepNumber);
  updateProgress();
}

// Select a theme
function selectTheme(themeElement) {
  // Remove selected class from all themes
  document.querySelectorAll(".theme-option").forEach((option) => {
    option.classList.remove("selected");
  });

  // Add selected class to clicked theme
  themeElement.classList.add("selected");

  // Set theme
  setTheme(themeElement.dataset.id);

  // Enable the next button
  toStep3Btn.disabled = false;
}

// Go to step 3
function goToStep3() {
  if (!userData.theme) {
    alert("Please select a theme");
    return;
  }

  renderProducts();
  goToStep(3);
}

// Render products based on selected theme
function renderProducts() {
  productGrid.innerHTML = "";
  const themeProducts =
    userData.theme === "all"
      ? products
      : products.filter((product) => product.theme === userData.theme);

  themeProducts.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.className = "product-card";
    productElement.innerHTML = `
                    <div class="product-img" style="background-image: url('${product.img}')"></div>
                    <div class="product-info">
                        <div class="product-title">${product.name}</div>
                        <div class="product-price">₹${product.price}</div>
                        <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                    </div>
                `;
    productGrid.appendChild(productElement);
  });

  // Add event listeners to Add to Cart buttons
  productGrid.addEventListener("click", function (e) {
    if (e.target.classList.contains("add-to-cart")) {
      addToCart(e.target.dataset.id);
    }
  });
}

// Add product to cart
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      img: product.img,
      quantity: 1,
    });
  }

  // Show confirmation
  const confirmation = document.createElement("div");
  confirmation.textContent = `${product.name} added to cart!`;
  confirmation.style.cssText = `
                position: fixed;
                bottom: 80px;
                right: 20px;
                background: var(--accent);
                color: white;
                padding: 10px 20px;
                border-radius: 8px;
                z-index: 1000;
            `;
  document.body.appendChild(confirmation);

  setTimeout(() => {
    document.body.removeChild(confirmation);
  }, 3000);
}

// Go to step 4
function goToStep4() {
  renderCart();
  goToStep(4);
}

// Render cart items
function renderCart() {
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Your cart is empty</p>";
    cartTotalElement.textContent = "0";
    return;
  }

  let total = 0;

  cart.forEach((item) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
                    <div class="product-img" style="background-image: url('${item.img}'); width: 80px; height: 80px; border-radius: 8px;"></div>
                    <div class="cart-item-info">
                        <div class="cart-item-title">${item.name}</div>
                        <div class="cart-item-price">₹${item.price} x ${item.quantity}</div>
                    </div>
                    <div>₹${itemTotal}</div>
                `;
    cartItems.appendChild(cartItem);
  });

  cartTotalElement.textContent = total;
}

// Complete checkout
function completeCheckout() {
  // Save cart to localStorage for the main site
  localStorage.setItem("celebrationCart", JSON.stringify(cart));
  localStorage.setItem("celebrationTheme", userData.theme);

  // Redirect to main site
  alert("Your items have been added to cart! Redirecting to main site...");
  window.location.href = "/1.html";
}

// Show a specific step
function showStep(stepNumber) {
  document.querySelectorAll(".step").forEach((step) => {
    step.classList.remove("active");
  });

  document.getElementById(`step${stepNumber}`).classList.add("active");
}

// Update progress bar
function updateProgress() {
  const progressPercentage = (currentStep / 4) * 100;
  progressElement.style.width = `${progressPercentage}%`;
  currentStepElement.textContent = currentStep;
}

// Initialize the app when the DOM is loaded
document.addEventListener("DOMContentLoaded", init);
