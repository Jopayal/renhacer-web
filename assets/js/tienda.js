// Estado del carrito
let cart = [];

// Elementos DOM
const cartToggle = document.getElementById('cartToggle');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartClose = document.getElementById('cartClose');
const continueShopping = document.getElementById('continueShopping');
const cartCount = document.getElementById('cartCount');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const addToCartButtons = document.querySelectorAll('.btn-add-cart');
const filtroButtons = document.querySelectorAll('.filtro-btn');

// Abrir/cerrar carrito
cartToggle.addEventListener('click', openCart);
cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);
continueShopping.addEventListener('click', closeCart);

function openCart() {
  cartSidebar.classList.add('active');
  cartOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  cartSidebar.classList.remove('active');
  cartOverlay.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Agregar al carrito
addToCartButtons.forEach(btn => {
  btn.addEventListener('click', function() {
    const id = this.dataset.id;
    const name = this.dataset.name;
    const price = parseInt(this.dataset.price);
    
    addToCart(id, name, price);
  });
});

function addToCart(id, name, price) {
  const existingItem = cart.find(item => item.id === id);
  
  if (existingItem) {
    alert('Este producto ya está en tu carrito');
    return;
  }
  
  cart.push({ id, name, price });
  updateCart();
  
  // Feedback visual
  const btn = document.querySelector(`[data-id="${id}"]`);
  const originalText = btn.textContent;
  btn.textContent = '✓ Agregado';
  btn.style.background = '#4CAF50';
  
  setTimeout(() => {
    btn.textContent = originalText;
    btn.style.background = '';
  }, 1500);
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  updateCart();
}

function updateCart() {
  // Actualizar contador
  cartCount.textContent = cart.length;
  
  // Actualizar items
  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="cart-empty">Tu carrito está vacío</p>';
    cartTotal.textContent = '$0';
    return;
  }
  
  cartItems.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-img">🛍️</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">$${item.price.toLocaleString()}</div>
        <button class="cart-item-remove" onclick="removeFromCart('${item.id}')">
          Eliminar
        </button>
      </div>
    </div>
  `).join('');
  
  // Actualizar total
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  cartTotal.textContent = `$${total.toLocaleString()}`;
}

// Filtros
filtroButtons.forEach(btn => {
  btn.addEventListener('click', function() {
    filtroButtons.forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    
    const filter = this.dataset.filter;
    const productos = document.querySelectorAll('.producto-tienda');
    
    productos.forEach(producto => {
      if (filter === 'todos') {
        producto.style.display = 'block';
      } else {
        if (producto.dataset.tipo === filter) {
          producto.style.display = 'block';
        } else {
          producto.style.display = 'none';
        }
      }
    });
  });
});

// Proceder al pago
document.querySelector('.btn-checkout').addEventListener('click', function() {
  if (cart.length === 0) {
    alert('Tu carrito está vacío');
    return;
  }
  
  alert('Redirigiendo a pasarela de pago... (Integrar Webpay, PayPal, etc.)');
  // Aquí integrarías tu pasarela de pago
});
