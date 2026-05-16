/* ============================================
   PRODUCT DATABASE
   ============================================ */

const products = [
    // CLOTHING
    {
        id: 1,
        name: "Premium Cotton T-Shirt",
        category: "clothing",
        price: 499,
        originalPrice: 999,
        rating: 4.5,
        reviews: 234,
        image: "images/Premium Cotton T-Shirt.jpeg",
        description: "Comfortable and stylish premium cotton t-shirt perfect for everyday wear.",
        sizes: ["XS", "S", "M", "L", "XL", "XXL"]
    },
    {
        id: 2,
        name: "Elegant Denim Jeans",
        category: "clothing",
        price: 1299,
        originalPrice: 2499,
        rating: 4.8,
        reviews: 567,
        image: "images/Elegant Denim Jeans.jpeg",
        description: "High-quality denim jeans with perfect fit and durability.",
        sizes: ["XS", "S", "M", "L", "XL", "XXL"]
    },
    {
        id: 3,
        name: "Summer Shorts Collection",
        category: "clothing",
        price: 399,
        originalPrice: 799,
        rating: 4.3,
        reviews: 189,
        image: "images/Summer Shorts Collection.jpeg",
        description: "Lightweight and breathable shorts ideal for summer.",
        sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
        id: 4,
        name: "Stylish Skirt",
        category: "clothing",
        price: 699,
        originalPrice: 1299,
        rating: 4.6,
        reviews: 312,
        image: "images/Stylish Skirt.jpeg",
        description: "Modern and elegant skirt for all occasions.",
        sizes: ["XS", "S", "M", "L", "XL"]
    },
    {
        id: 5,
        name: "Casual Cord Set",
        category: "clothing",
        price: 899,
        originalPrice: 1699,
        rating: 4.7,
        reviews: 428,
        image: "images/Casual Cord Set.jpeg",
        description: "Trendy cord set with matching top and bottom.",
        sizes: ["XS", "S", "M", "L", "XL", "XXL"]
    },
    {
        id: 6,
        name: "Professional Shirt",
        category: "clothing",
        price: 799,
        originalPrice: 1499,
        rating: 4.5,
        reviews: 276,
        image: "images/Professional Shirt.jpeg",
        description: "Smart casual shirt perfect for office and outdoor events.",
        sizes: ["S", "M", "L", "XL", "XXL"]
    },

    // BEAUTY
    {
        id: 7,
        name: "Hydrating Face Serum",
        category: "beauty",
        price: 599,
        originalPrice: 1199,
        rating: 4.6,
        reviews: 512,
        image: "images/Hydrating Face Serum.jpeg",
        description: "Advanced hydrating serum with natural ingredients for glowing skin.",
        sizes: ["30ml"]
    },
    {
        id: 8,
        name: "Organic Face Wash",
        category: "beauty",
        price: 399,
        originalPrice: 799,
        rating: 4.4,
        reviews: 389,
        image: "images/Organic Face Wash.jpeg",
        description: "Gentle organic face wash suitable for all skin types.",
        sizes: ["100ml"]
    },
    {
        id: 9,
        name: "Premium Hair Oil",
        category: "beauty",
        price: 449,
        originalPrice: 899,
        rating: 4.7,
        reviews: 678,
        image: "images/Premium Hair Oil.jpeg",
        description: "Enriched hair oil for nourishment and shine.",
        sizes: ["200ml"]
    },
    {
        id: 10,
        name: "Shampoo & Conditioner Combo",
        category: "beauty",
        price: 699,
        originalPrice: 1399,
        rating: 4.5,
        reviews: 445,
        image: "images/Shampoo & Conditioner Combo.jpeg",
        description: "Complete hair care set for healthy and shiny hair.",
        sizes: ["250ml each"]
    },
    {
        id: 11,
        name: "Lipstick Collection",
        category: "beauty",
        price: 549,
        originalPrice: 999,
        rating: 4.8,
        reviews: 823,
        image: "images/Lipstick Collection.jpeg",
        description: "Long-lasting and vibrant lipstick in multiple shades.",
        sizes: ["5 shades"]
    },

    // FOOD
    {
        id: 12,
        name: "Organic Almonds",
        category: "food",
        price: 399,
        originalPrice: 799,
        rating: 4.6,
        reviews: 234,
        image: "images/Organic Almonds.jpeg",
        description: "Premium quality organic almonds rich in nutrients.",
        sizes: ["250g"]
    },
    {
        id: 13,
        name: "Healthy Granola Mix",
        category: "food",
        price: 349,
        originalPrice: 699,
        rating: 4.4,
        reviews: 167,
        image: "images/Organic Almonds.jpeg",
        description: "Nutritious granola with fresh fruits and nuts.",
        sizes: ["500g"]
    },
    {
        id: 14,
        name: "Fresh Fruit Juice",
        category: "food",
        price: 199,
        originalPrice: 399,
        rating: 4.5,
        reviews: 312,
        image: "images/Fresh Fruit Juice.jpeg",
        description: "Fresh and organic fruit juice with natural ingredients.",
        sizes: ["1L"]
    },
    {
        id: 15,
        name: "Energy Bars Pack",
        category: "food",
        price: 299,
        originalPrice: 599,
        rating: 4.3,
        reviews: 189,
        image: "images/Energy Bars Pack.jpeg",
        description: "Nutritious energy bars for active lifestyle.",
        sizes: ["pack of 6"]
    },
    {
        id: 16,
        name: "Green Tea Premium",
        category: "food",
        price: 449,
        originalPrice: 899,
        rating: 4.7,
        reviews: 423,
        image: "images/Green Tea Premium.jpeg",
        description: "Premium organic green tea for health and wellness.",
        sizes: ["50 bags"]
    },

    // ELECTRONICS
    {
        id: 17,
        name: "Smart Watch Pro",
        category: "electronics",
        price: 9999,
        originalPrice: 19999,
        rating: 4.7,
        reviews: 892,
        image: "images/Smart Watch Pro.jpeg",
        description: "Advanced smartwatch with health tracking and notifications.",
        sizes: ["One Size"]
    },
    {
        id: 18,
        name: "Premium Earbuds",
        category: "electronics",
        price: 4999,
        originalPrice: 9999,
        rating: 4.6,
        reviews: 756,
        image: "images/Premium Earbuds.jpeg",
        description: "High-quality wireless earbuds with noise cancellation.",
        sizes: ["One Size"]
    },
    {
        id: 19,
        name: "Flagship Smartphone",
        category: "electronics",
        price: 49999,
        originalPrice: 99999,
        rating: 4.8,
        reviews: 2341,
        image: "images/Tech Gadgets.jpeg",
        description: "Latest flagship smartphone with cutting-edge technology.",
        sizes: ["One Size"]
    },
    {
        id: 20,
        name: "Laptop Pro 15",
        category: "electronics",
        price: 89999,
        originalPrice: 179999,
        rating: 4.9,
        reviews: 1567,
        image: "images/Tech Gadgets.jpeg",
        description: "Powerful laptop for professional work and gaming.",
        sizes: ["One Size"]
    },
    {
        id: 21,
        name: "Bluetooth Speaker",
        category: "electronics",
        price: 2999,
        originalPrice: 5999,
        rating: 4.5,
        reviews: 634,
        image: "images/Bluetooth Speaker.jpeg",
        description: "Portable Bluetooth speaker with excellent sound quality.",
        sizes: ["One Size"]
    },
];

/* ============================================
   GLOBAL VARIABLES
   ============================================ */

let cart = [];
let wishlist = [];
let filteredProducts = [...products];
let currentSlide = 0;
let selectedSize = null;
let selectedProduct = null;

/* ============================================
   DOM ELEMENTS
   ============================================ */

const cartIcon = document.getElementById("cartIcon");
const cartCount = document.getElementById("cartCount");
const cartSidebar = document.getElementById("cartSidebar");
const cartOverlay = document.getElementById("cartOverlay");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const closeCart = document.getElementById("closeCart");
const checkoutBtn = document.getElementById("checkoutBtn");

const wishlistIcon = document.getElementById("wishlistIcon");
const wishlistModal = document.getElementById("wishlistModal");
const wishlistItems = document.getElementById("wishlistItems");
const closeWishlist = document.getElementById("closeWishlist");

const themeToggle = document.getElementById("themeToggle");
const backToTop = document.getElementById("backToTop");
const navbar = document.getElementById("navbar");
const searchInput = document.getElementById("searchInput");

const trendingProducts = document.getElementById("trendingProducts");
const bestSellerProduct = document.getElementById("bestSellerProduct");
const flashSaleProducts = document.getElementById("flashSaleProducts");

const quickViewModal = document.getElementById("quickViewModal");
const closeModal = document.getElementById("closeModal");
const addToCartModal = document.getElementById("addToCartModal");
const addToWishlistModal = document.getElementById("addToWishlistModal");

const categoryFilter = document.getElementById("categoryFilter");
const priceRange = document.getElementById("priceRange");
const priceValue = document.getElementById("priceValue");
const ratingFilter = document.getElementById("ratingFilter");
const sortBy = document.getElementById("sortBy");
const resetFilters = document.getElementById("resetFilters");

const toastContainer = document.getElementById("toastContainer");
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

const heroPrev = document.getElementById("heroPrev");
const heroNext = document.getElementById("heroNext");
const indicators = document.querySelectorAll(".indicator");

/* ============================================
   INITIALIZATION
   ============================================ */

document.addEventListener("DOMContentLoaded", () => {
    initializeApp();
});

function initializeApp() {
    loadCartFromStorage();
    loadWishlistFromStorage();
    applyTheme();
    renderProducts();
    setupEventListeners();
    startCountdown();
    setupHeroSlider();
}

/* ============================================
   EVENT LISTENERS
   ============================================ */

function setupEventListeners() {
    // Cart
    cartIcon.addEventListener("click", openCart);
    closeCart.addEventListener("click", closeCartSidebar);
    cartOverlay.addEventListener("click", closeCartSidebar);

    // Wishlist
    wishlistIcon.addEventListener("click", openWishlist);
    closeWishlist.addEventListener("click", closeWishlistModal);

    // Theme
    themeToggle.addEventListener("click", toggleTheme);

    // Back to Top
    backToTop.addEventListener("click", scrollToTop);
    window.addEventListener("scroll", toggleBackToTop);

    // Navbar scroll effect
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            navbar.style.boxShadow = "var(--shadow-lg)";
        } else {
            navbar.style.boxShadow = "var(--shadow-md)";
        }
    });

    // Search
    searchInput.addEventListener("input", handleSearch);

    // Filters
    categoryFilter.addEventListener("change", applyFilters);
    priceRange.addEventListener("input", (e) => {
        priceValue.textContent = e.target.value;
        applyFilters();
    });
    ratingFilter.addEventListener("change", applyFilters);
    sortBy.addEventListener("change", applyFilters);
    resetFilters.addEventListener("click", resetAllFilters);

    // Modal
    closeModal.addEventListener("click", closeQuickViewModal);
    quickViewModal.addEventListener("click", (e) => {
        if (e.target === quickViewModal) closeQuickViewModal();
    });

    // Size buttons
    document.querySelectorAll(".size-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            document.querySelectorAll(".size-btn").forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");
            selectedSize = e.target.dataset.size;
        });
    });

    // Quantity buttons
    document.getElementById("decreaseQty")?.addEventListener("click", () => {
        const qty = document.getElementById("modalQuantity");
        if (qty.value > 1) qty.value--;
    });

    document.getElementById("increaseQty")?.addEventListener("click", () => {
        const qty = document.getElementById("modalQuantity");
        if (qty.value < 10) qty.value++;
    });

    // Add to cart from modal
    addToCartModal.addEventListener("click", () => {
        if (!selectedSize) {
            showToast("Please select a size", "error");
            return;
        }
        const quantity = parseInt(document.getElementById("modalQuantity").value);
        addToCart(selectedProduct, quantity, selectedSize);
        closeQuickViewModal();
    });

    // Add to wishlist from modal
    addToWishlistModal.addEventListener("click", () => {
        toggleWishlist(selectedProduct);
    });

    // Hamburger menu
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
    });

    // Close menu when link clicked
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.style.display = "none";
        });
    });
}

/* ============================================
   HERO SLIDER
   ============================================ */

function setupHeroSlider() {
    heroPrev.addEventListener("click", () => changeSlide(-1));
    heroNext.addEventListener("click", () => changeSlide(1));
    
    indicators.forEach(indicator => {
        indicator.addEventListener("click", (e) => {
            currentSlide = parseInt(e.target.dataset.slide);
            updateHeroSlide();
        });
    });

    // Auto slide every 5 seconds
    setInterval(() => changeSlide(1), 5000);
}

function changeSlide(direction) {
    const slides = document.querySelectorAll(".hero-slide");
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    updateHeroSlide();
}

function updateHeroSlide() {
    const slides = document.querySelectorAll(".hero-slide");
    slides.forEach((slide, index) => {
        slide.classList.toggle("active", index === currentSlide);
    });

    indicators.forEach((indicator, index) => {
        indicator.classList.toggle("active", index === currentSlide);
    });
}

/* ============================================
   PRODUCT RENDERING
   ============================================ */

function renderProducts() {
    renderTrendingProducts();
    renderBestSellerProducts();
    renderFlashSaleProducts();
}

function renderTrendingProducts() {
    const trendingProds = filteredProducts.slice(0, 8);
    trendingProducts.innerHTML = trendingProds.map(product => createProductCard(product)).join("");
    attachProductEventListeners();
}

function renderBestSellerProducts() {
    const bestSellers = filteredProducts.slice(0, 6).sort((a, b) => b.reviews - a.reviews);
    const container = document.getElementById("bestSellerProduct");
    if (container) {
        container.innerHTML = bestSellers.map(product => createProductCard(product)).join("");
        attachProductEventListeners();
    }
}

function renderFlashSaleProducts() {
    const flashSale = products
        .filter(p => (p.originalPrice - p.price) / p.originalPrice > 0.4)
        .slice(0, 8);
    flashSaleProducts.innerHTML = flashSale.map(product => createProductCard(product)).join("");
    attachProductEventListeners();
}

function createProductCard(product) {
    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    const isWishlisted = wishlist.some(w => w.id === product.id);
    
    return `
        <div class="product-card fade-in">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-badges">
                    <span class="sale-badge">-${discount}%</span>
                    <button class="wishlist-btn ${isWishlisted ? "active" : ""}" data-product-id="${product.id}">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">
                    <div class="stars">
                        ${createStars(product.rating)}
                    </div>
                    <span class="review-count">(${product.reviews})</span>
                </div>
                <div class="product-price">
                    <span class="current-price">₹${product.price}</span>
                    <span class="original-price">₹${product.originalPrice}</span>
                    <span class="discount-badge">-${discount}%</span>
                </div>
                <div class="product-sizes">
                    ${product.sizes.slice(0, 3).map(size => `<span class="size-option">${size}</span>`).join("")}
                </div>
                <div class="product-actions">
                    <button class="add-to-cart-btn" data-product-id="${product.id}">Add to Cart</button>
                    <button class="quick-view-btn" data-product-id="${product.id}">Quick View</button>
                </div>
            </div>
        </div>
    `;
}

function createStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let starsHtml = "";
    
    for (let i = 0; i < fullStars; i++) {
        starsHtml += '<i class="fas fa-star"></i>';
    }
    if (hasHalfStar) {
        starsHtml += '<i class="fas fa-star-half-alt"></i>';
    }
    for (let i = fullStars + (hasHalfStar ? 1 : 0); i < 5; i++) {
        starsHtml += '<i class="far fa-star"></i>';
    }
    
    return starsHtml;
}

function attachProductEventListeners() {
    // Add to cart buttons
    document.querySelectorAll(".add-to-cart-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const productId = parseInt(e.currentTarget.dataset.productId);
            const product = products.find(p => p.id === productId);
            if (product.sizes.length > 1) {
                openQuickView(product);
            } else {
                addToCart(product, 1, product.sizes[0]);
            }
        });
    });

    // Quick view buttons
    document.querySelectorAll(".quick-view-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const productId = parseInt(e.currentTarget.dataset.productId);
            const product = products.find(p => p.id === productId);
            openQuickView(product);
        });
    });

    // Wishlist buttons
    document.querySelectorAll(".wishlist-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const productId = parseInt(e.currentTarget.dataset.productId);
            const product = products.find(p => p.id === productId);
            toggleWishlist(product);
            e.currentTarget.classList.toggle("active");
        });
    });
}

/* ============================================
   QUICK VIEW MODAL
   ============================================ */

function openQuickView(product) {
    selectedProduct = product;
    selectedSize = null;
    
    document.getElementById("modalImage").src = product.image;
    document.getElementById("modalName").textContent = product.name;
    document.getElementById("modalPrice").textContent = "₹" + product.price;
    document.getElementById("modalOriginalPrice").textContent = "₹" + product.originalPrice;
    
    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    document.getElementById("modalDiscount").textContent = `-${discount}%`;
    
    document.getElementById("modalDescription").textContent = product.description;
    document.getElementById("modalQuantity").value = 1;
    
    // Clear previous stars
    const modalStars = document.getElementById("modalStars");
    modalStars.innerHTML = createStars(product.rating);
    
    document.getElementById("modalReviewCount").textContent = `${product.reviews} reviews`;
    
    // Update size buttons
    const sizeBtns = document.querySelectorAll(".size-btn");
    sizeBtns.forEach((btn, index) => {
        if (index < product.sizes.length) {
            btn.textContent = product.sizes[index];
            btn.dataset.size = product.sizes[index];
            btn.style.display = "inline-block";
            btn.classList.remove("active");
        } else {
            btn.style.display = "none";
        }
    });
    
    // Update wishlist button
    const isWishlisted = wishlist.some(w => w.id === product.id);
    addToWishlistModal.style.color = isWishlisted ? "var(--accent-color)" : "";
    
    quickViewModal.classList.add("active");
}

function closeQuickViewModal() {
    quickViewModal.classList.remove("active");
    selectedSize = null;
}

/* ============================================
   CART FUNCTIONALITY
   ============================================ */

function addToCart(product, quantity = 1, size = null) {
    const existingItem = cart.find(item => item.id === product.id && item.size === size);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...product,
            quantity,
            size: size || product.sizes[0]
        });
    }
    
    saveCartToStorage();
    updateCart();
    showToast(`${product.name} added to cart!`, "success");
}

function removeFromCart(productId, size) {
    cart = cart.filter(item => !(item.id === productId && item.size === size));
    saveCartToStorage();
    updateCart();
    showToast("Item removed from cart", "info");
}

function updateCartItemQuantity(productId, size, quantity) {
    const item = cart.find(item => item.id === productId && item.size === size);
    if (item) {
        if (quantity <= 0) {
            removeFromCart(productId, size);
        } else {
            item.quantity = quantity;
            saveCartToStorage();
            updateCart();
        }
    }
}

function updateCart() {
    updateCartCount();
    renderCartItems();
    updateCartTotal();
}

function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = count;
}

function renderCartItems() {
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        return;
    }

    cartItems.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-info">
                <h4 class="cart-item-name">${item.name}</h4>
                <p style="font-size: 12px; color: #999;">${item.size}</p>
                <p class="cart-item-price">₹${item.price}</p>
                <div class="quantity-input">
                    <button onclick="updateCartItemQuantity(${item.id}, '${item.size}', ${item.quantity - 1})">
                        <i class="fas fa-minus"></i>
                    </button>
                    <input type="number" value="${item.quantity}" readonly>
                    <button onclick="updateCartItemQuantity(${item.id}, '${item.size}', ${item.quantity + 1})">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${item.id}, '${item.size}')">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join("");
}

function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = "₹" + total;
}

function openCart() {
    cartSidebar.classList.add("active");
    cartOverlay.classList.add("active");
}

function closeCartSidebar() {
    cartSidebar.classList.remove("active");
    cartOverlay.classList.remove("active");
}

function saveCartToStorage() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function loadCartFromStorage() {
    const stored = localStorage.getItem("cart");
    if (stored) {
        cart = JSON.parse(stored);
        updateCart();
    }
}

/* ============================================
   WISHLIST FUNCTIONALITY
   ============================================ */

function toggleWishlist(product) {
    const existingIndex = wishlist.findIndex(item => item.id === product.id);
    
    if (existingIndex > -1) {
        wishlist.splice(existingIndex, 1);
        showToast("Removed from wishlist", "info");
    } else {
        wishlist.push(product);
        showToast("Added to wishlist", "success");
    }
    
    saveWishlistToStorage();
    updateWishlistCount();
    renderWishlistItems();
}

function updateWishlistCount() {
    document.querySelector(".icon-badge").textContent = wishlist.length;
}

function renderWishlistItems() {
    if (wishlist.length === 0) {
        wishlistItems.innerHTML = '<p class="empty-wishlist">Your wishlist is empty</p>';
        return;
    }

    wishlistItems.innerHTML = wishlist.map(item => `
        <div class="wishlist-item">
            <div class="wishlist-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="wishlist-item-info">
                <h4 class="wishlist-item-name">${item.name}</h4>
                <p class="wishlist-item-price">₹${item.price}</p>
            </div>
            <div class="wishlist-item-actions">
                <button class="btn btn-primary btn-sm" onclick="addWishlistToCart(${item.id})">
                    <i class="fas fa-shopping-bag"></i>
                </button>
                <button class="btn btn-secondary btn-sm" onclick="removeFromWishlist(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join("");
}

function addWishlistToCart(productId) {
    const product = wishlist.find(p => p.id === productId);
    if (product) {
        if (product.sizes.length > 1) {
            openQuickView(product);
        } else {
            addToCart(product, 1, product.sizes[0]);
        }
        closeWishlistModal();
    }
}

function removeFromWishlist(productId) {
    const product = wishlist.find(p => p.id === productId);
    if (product) {
        toggleWishlist(product);
    }
}

function openWishlist() {
    renderWishlistItems();
    wishlistModal.classList.add("active");
}

function closeWishlistModal() {
    wishlistModal.classList.remove("active");
}

function saveWishlistToStorage() {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
}

function loadWishlistFromStorage() {
    const stored = localStorage.getItem("wishlist");
    if (stored) {
        wishlist = JSON.parse(stored);
        updateWishlistCount();
    }
}

/* ============================================
   FILTERING & SEARCHING
   ============================================ */

function applyFilters() {
    let filtered = [...products];

    // Category filter
    const category = categoryFilter.value;
    if (category) {
        filtered = filtered.filter(p => p.category === category);
    }

    // Price range filter
    const maxPrice = parseInt(priceRange.value);
    filtered = filtered.filter(p => p.price <= maxPrice);

    // Rating filter
    const minRating = ratingFilter.value;
    if (minRating) {
        filtered = filtered.filter(p => p.rating >= parseInt(minRating));
    }

    // Sort
    const sortOption = sortBy.value;
    switch (sortOption) {
        case "price-low":
            filtered.sort((a, b) => a.price - b.price);
            break;
        case "price-high":
            filtered.sort((a, b) => b.price - a.price);
            break;
        case "rating":
            filtered.sort((a, b) => b.rating - a.rating);
            break;
        case "popular":
            filtered.sort((a, b) => b.reviews - a.reviews);
            break;
        case "latest":
        default:
            filtered.sort((a, b) => b.id - a.id);
    }

    filteredProducts = filtered;
    renderTrendingProducts();
}

function handleSearch(e) {
    const query = e.target.value.toLowerCase();
    
    if (query === "") {
        filteredProducts = [...products];
    } else {
        filteredProducts = products.filter(p => 
            p.name.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query)
        );
    }
    
    renderTrendingProducts();
}

function resetAllFilters() {
    categoryFilter.value = "";
    priceRange.value = 50000;
    priceValue.textContent = 50000;
    ratingFilter.value = "";
    sortBy.value = "latest";
    searchInput.value = "";
    filteredProducts = [...products];
    renderProducts();
    showToast("Filters reset", "info");
}

/* ============================================
   THEME TOGGLE
   ============================================ */

function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
    updateThemeIcon();
}

function applyTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }
    updateThemeIcon();
}

function updateThemeIcon() {
    const isDark = document.body.classList.contains("dark-mode");
    themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
}

/* ============================================
   BACK TO TOP
   ============================================ */

function toggleBackToTop() {
    if (window.scrollY > 300) {
        backToTop.classList.add("visible");
    } else {
        backToTop.classList.remove("visible");
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ============================================
   COUNTDOWN TIMER
   ============================================ */

function startCountdown() {
    setInterval(() => {
        const now = new Date().getTime();
        const endTime = new Date().setHours(23, 59, 59, 999);
        const distance = endTime - now;

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("hours").textContent = String(hours).padStart(2, "0");
        document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
        document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
    }, 1000);
}

/* ============================================
   TOAST NOTIFICATIONS
   ============================================ */

function showToast(message, type = "info") {
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    
    let icon = "fa-check-circle";
    if (type === "error") icon = "fa-exclamation-circle";
    if (type === "info") icon = "fa-info-circle";
    
    toast.innerHTML = `
        <i class="fas ${icon}"></i>
        <div class="toast-message">${message}</div>
        <button class="toast-close"><i class="fas fa-times"></i></button>
    `;
    
    toastContainer.appendChild(toast);
    
    toast.querySelector(".toast-close").addEventListener("click", () => {
        toast.remove();
    });
    
    setTimeout(() => {
        toast.style.animation = "slideInRight 0.3s ease reverse";
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

/* ============================================
   SCROLL ANIMATIONS
   ============================================ */

const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll(".section-header").forEach(el => observer.observe(el));
document.querySelectorAll(".product-card").forEach(el => observer.observe(el));
document.querySelectorAll(".category-card").forEach(el => observer.observe(el));
document.querySelectorAll(".offer-card").forEach(el => observer.observe(el));

// Add smooth scroll to buttons
document.querySelectorAll(".scroll-to").forEach(btn => {
    btn.addEventListener("click", () => {
        const target = btn.dataset.target;
        const element = document.getElementById(target);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});

/* ============================================
   NEWSLETTER SUBSCRIPTION
   ============================================ */

document.addEventListener("DOMContentLoaded", () => {
    const newsletterForm = document.querySelector(".newsletter-form");
    const newsletterEmail = document.getElementById("newsletterEmail");
    
    if (newsletterForm) {
        newsletterForm.addEventListener("submit", (e) => {
            e.preventDefault();
            if (newsletterEmail.value) {
                showToast("Thank you for subscribing!", "success");
                newsletterEmail.value = "";
            }
        });
        
        const subscribeBtn = newsletterForm.querySelector("button");
        subscribeBtn.addEventListener("click", (e) => {
            e.preventDefault();
            if (newsletterEmail.value) {
                showToast("Thank you for subscribing!", "success");
                newsletterEmail.value = "";
            } else {
                showToast("Please enter your email", "error");
            }
        });
    }
});

/* ============================================
   CHECKOUT
   ============================================ */

checkoutBtn.addEventListener("click", () => {
    if (cart.length === 0) {
        showToast("Your cart is empty", "error");
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    closeCartSidebar();
    showToast(`Processing payment of ₹${total}... (Demo Mode)`, "success");
    
    setTimeout(() => {
        showToast("Order placed successfully! 🎉", "success");
        cart = [];
        saveCartToStorage();
        updateCart();
    }, 2000);
});
