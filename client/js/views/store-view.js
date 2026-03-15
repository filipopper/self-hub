export class StoreView {
  constructor() {
    this.content = document.getElementById("content");
    if (!this.content) {
      console.error("Element with id 'content' not found.");
    }
    this.cart = [];
    this.cartVisible = false;
    this.products = [];

    // Bind de métodos para mantener el contexto
    this.toggleCart = this.toggleCart.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.buyNow = this.buyNow.bind(this);
    this.toggleProductDetails = this.toggleProductDetails.bind(this);
    this.validateProductForm = this.validateProductForm.bind(this);
    this.getSelectedVariations = this.getSelectedVariations.bind(this);
    this.updateCartUI = this.updateCartUI.bind(this);
    this.showCheckoutModal = this.showCheckoutModal.bind(this);
    this.processCheckout = this.processCheckout.bind(this);
    this.showToast = this.showToast.bind(this);
    this.calculateSubtotal = this.calculateSubtotal.bind(this);
    this.updateCheckoutSummary = this.updateCheckoutSummary.bind(this);
    this.closeCheckoutModal = this.closeCheckoutModal.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  render() {
    this.products = [
      {
        id: 1,
        name: "Taza cerámica",
        baseImage: "../client/assets/img/taza-base.webp",
        description: "Taza de cerámica de alta calidad",
        variations: [
          {
            name: "diseño",
            options: [
              {
                name: "Nicolás Filipovich",
                image: "../client/assets/img/taza-nicolas.webp",
              },
              {
                name: "Con logo",
                image: "../client/assets/img/taza-logo.webp",
              },
              {
                name: "Blanca",
                image: "../client/assets/img/taza-blanca.webp",
              },
            ],
            required: true,
          },
          {
            name: "tamaño",
            options: [
              { name: "Standard", image: null },
              {
                name: "Grande",
                image: "../client/assets/img/taza-grande.webp",
              },
            ],
            required: true,
          },
        ],
        price: 800.0,
      },
      {
        id: 2,
        name: "Gorra",
        baseImage: "../client/assets/img/gorra-base.webp",
        price: 500.0,
        description: "Gorra con logo bordado en la parte frontal",
        variations: [
          {
            name: "color",
            options: [
              { name: "Negro", image: "../client/assets/img/gorra-negra.webp" },
              {
                name: "Blanco",
                image: "../client/assets/img/gorra-blanca.webp",
              },
            ],
            required: true,
          },
        ],
      },
      {
        id: 3,
        name: "Stickers - 50 unidades",
        baseImage: "../client/assets/img/stickers.webp",
        price: 60.0,
        description: "50 unidades de stickers de alta calidad surtidos",
        variations: [],
      },
    ];

    let productHTML = `
      <div class="cart-container">
        <button id="toggle-cart" class="cart-toggle">
          <span id="cart-count">0</span> 🛒
        </button>
        <div id="cart-dropdown" class="cart-dropdown">
          <div class="cart-dropdown-header">
            <span>Tu Carrito</span>
            <span id="cart-items-count">0 items</span>
          </div>
          <div id="cart-items" class="cart-items"></div>
          <div class="cart-footer">
            <div class="cart-total">
              <span>Total:</span>
              <span id="cart-total-amount">$0.00</span>
            </div>
            <button id="checkout-button" class="checkout-button">Finalizar Compra</button>
          </div>
        </div>
      </div>
    <div class="announcement">
    <h3>Compra con propósito y apoya la causa</h3>
    <p>Explora nuestra tienda y adquiere productos diseñados para apoyar nuestra misión y valores. Cada compra no solo te conecta con la comunidad, sino que también contribuye a fortalecer nuestra campaña y a financiar obras de beneficencia. <strong>El 100% de las ganancias se destina a proyectos sociales y actividades de apoyo a las comunidades más necesitadas.</strong></p>
    <p>Al elegir nuestros productos, estás ayudando a generar un cambio real y significativo. Desde ropa hasta artículos de uso cotidiano, todos nuestros productos son una forma de mostrar tu apoyo y compromiso con la causa.</p>
    </div>
      <div class="product-container">
    `;

    this.products.forEach((product) => {
      let variationsHTML = "";
      if (product.variations && product.variations.length > 0) {
        product.variations.forEach((variation, index) => {
          variationsHTML += `
            <div class="variation-group">
              <label for="variation-${product.id}-${index}">${
            variation.name.charAt(0).toUpperCase() + variation.name.slice(1)
          }:</label>
              <select id="variation-${
                product.id
              }-${index}" class="input variation-select" 
                data-product-id="${product.id}" 
                ${variation.required ? "required" : ""}>
                <option value="" disabled selected>Seleccione una opción</option>
                ${variation.options
                  .map(
                    (option, optIndex) =>
                      `<option value="${optIndex}" 
                    data-image="${option.image || ""}">${option.name}</option>`
                  )
                  .join("")}
              </select>
              ${
                variation.required
                  ? '<span class="validation-error hidden">Este campo es requerido</span>'
                  : ""
              }
            </div>
          `;
        });
      }

      productHTML += `
        <div class="product-card">
          <img src="${product.baseImage}" alt="${product.name}" 
            class="product-image" 
            id="product-image-${product.id}" />
          <div class="product-info">
            <h4>${product.name}</h4>
            <p class="description">${product.description}</p>
            <p class="price" id="price-${product.id}">$${product.price.toFixed(
        2
      )}</p>

            <button class="interest-button" id="interest-button-${
              product.id
            }">Me interesa</button>

            <div class="product-details" id="product-details-${product.id}">
              ${variationsHTML}
              
              <div class="quantity-control">
                <label for="quantity-${product.id}">Cantidad:</label>
                <input type="number" id="quantity-${
                  product.id
                }" value="1" min="1" max="10" class="input" />
              </div>

              <button class="add-to-cart-button" id="add-to-cart-${
                product.id
              }" data-id="${product.id}">
                Agregar al carrito
              </button>

              <button class="buy-now-button" id="buy-now-${
                product.id
              }" data-id="${product.id}">
                Comprar ahora
              </button>
            </div>
          </div>
        </div>
      `;
    });

    productHTML += "</div>";
    this.content.innerHTML = productHTML;
    this.setupEventListeners();
  }

  setupEventListeners() {
    // Configurar eventos para variaciones que cambian imágenes
    this.products.forEach((product) => {
      if (product.variations && product.variations.length > 0) {
        product.variations.forEach((variation, index) => {
          const select = document.getElementById(
            `variation-${product.id}-${index}`
          );
          if (select) {
            select.addEventListener("change", () => {
              const selectedOption = select.options[select.selectedIndex];
              const imageUrl = selectedOption.getAttribute("data-image");
              if (imageUrl) {
                document.getElementById(`product-image-${product.id}`).src =
                  imageUrl;
              }
              this.validateProductForm(product.id);
            });
          }
        });
      }

      const interestButton = document.getElementById(
        `interest-button-${product.id}`
      );
      const addToCartButton = document.getElementById(
        `add-to-cart-${product.id}`
      );
      const buyNowButton = document.getElementById(`buy-now-${product.id}`);

      if (interestButton) {
        interestButton.addEventListener("click", () =>
          this.toggleProductDetails(product.id)
        );
      }
      if (addToCartButton) {
        addToCartButton.addEventListener("click", () =>
          this.addToCart(product.id)
        );
      }
      if (buyNowButton) {
        buyNowButton.addEventListener("click", () => this.buyNow(product.id));
      }
    });

    // Configurar eventos del carrito
    const toggleCartBtn = document.getElementById("toggle-cart");
    const checkoutBtn = document.getElementById("checkout-button");

    if (toggleCartBtn) {
      toggleCartBtn.addEventListener("click", this.toggleCart);
    }
    if (checkoutBtn) {
      checkoutBtn.addEventListener("click", this.showCheckoutModal);
    }
  }

  toggleCart() {
    const cartDropdown = document.getElementById("cart-dropdown");
    const cartToggle = document.getElementById("toggle-cart");

    if (!cartDropdown || !cartToggle) return;

    this.cartVisible = !this.cartVisible;

    if (this.cartVisible) {
      cartDropdown.classList.add("visible");
      cartToggle.classList.add("active");
    } else {
      cartDropdown.classList.remove("visible");
      cartToggle.classList.remove("active");
    }
  }

  validateProductForm(productId) {
    const product = this.products.find((p) => p.id === parseInt(productId));
    if (!product) return false;

    let isValid = true;

    if (product.variations && product.variations.length > 0) {
      product.variations.forEach((variation, index) => {
        const select = document.getElementById(
          `variation-${productId}-${index}`
        );
        if (!select) return;

        const errorElement =
          select.parentElement.querySelector(".validation-error");

        if (variation.required && (!select.value || select.value === "")) {
          if (errorElement) errorElement.classList.remove("hidden");
          isValid = false;
        } else {
          if (errorElement) errorElement.classList.add("hidden");
        }
      });
    }

    return isValid;
  }

  getSelectedVariations(productId) {
    const product = this.products.find((p) => p.id === parseInt(productId));
    if (!product) return [];

    const variations = [];

    if (product.variations && product.variations.length > 0) {
      product.variations.forEach((variation, index) => {
        const select = document.getElementById(
          `variation-${productId}-${index}`
        );
        if (!select) return;

        const selectedOption = select.options[select.selectedIndex];

        if (select.value && select.value !== "") {
          variations.push({
            name: variation.name,
            value: selectedOption.text,
            image: selectedOption.getAttribute("data-image") || "",
          });
        }
      });
    }

    return variations;
  }

  addToCart(productId) {
    if (!this.validateProductForm(productId)) {
      this.showToast("Por favor complete todas las opciones requeridas");
      return;
    }

    const quantityInput = document.getElementById(`quantity-${productId}`);
    const quantity = quantityInput ? parseInt(quantityInput.value) || 1 : 1;
    const variations = this.getSelectedVariations(productId);
    const product = this.products.find((p) => p.id === parseInt(productId));
    if (!product) return;

    const productImage = document.getElementById(`product-image-${productId}`);
    const imageSrc = productImage ? productImage.src : product.baseImage;

    // Buscar si el producto ya está en el carrito con las mismas variaciones
    const existingItemIndex = this.cart.findIndex(
      (item) =>
        item.id === product.id &&
        JSON.stringify(item.variations) === JSON.stringify(variations)
    );

    if (existingItemIndex >= 0) {
      this.cart[existingItemIndex].quantity += quantity;
    } else {
      this.cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: quantity,
        variations: variations,
        image: imageSrc,
      });
    }

    this.updateCartUI();
    this.toggleProductDetails(productId);
    this.showToast("Producto agregado al carrito");
  }

  buyNow(productId) {
    if (!this.validateProductForm(productId)) {
      this.showToast("Por favor complete todas las opciones requeridas");
      return;
    }

    this.addToCart(productId);
    this.toggleCart();
    this.showCheckoutModal();
  }

  calculateSubtotal() {
    return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  updateCartUI() {
    const cartItemsElement = document.getElementById("cart-items");
    const cartCountElement = document.getElementById("cart-count");
    const cartItemsCountElement = document.getElementById("cart-items-count");
    const cartTotalElement = document.getElementById("cart-total-amount");
    const checkoutButton = document.getElementById("checkout-button");

    if (
      !cartItemsElement ||
      !cartCountElement ||
      !cartItemsCountElement ||
      !cartTotalElement ||
      !checkoutButton
    )
      return;

    // Actualizar contador
    const totalItems = this.cart.reduce(
      (total, item) => total + item.quantity,
      0
    );
    cartCountElement.textContent = totalItems;
    cartItemsCountElement.textContent = `${totalItems} ${
      totalItems === 1 ? "item" : "items"
    }`;

    // Actualizar lista de items
    cartItemsElement.innerHTML = this.cart
      .map(
        (item, index) => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-image">
        <div class="cart-item-details">
          <h5>${item.name}</h5>
          ${
            item.variations.length > 0
              ? `<div class="cart-item-variations">
              ${item.variations
                .map((v) => `<span>${v.name}: ${v.value}</span>`)
                .join("")}
            </div>`
              : ""
          }
          <div class="cart-item-quantity">
            <button class="quantity-btn" data-index="${index}" data-action="decrease">-</button>
            <span>${item.quantity}</span>
            <button class="quantity-btn" data-index="${index}" data-action="increase">+</button>
          </div>
          <span class="cart-item-price">$${(item.price * item.quantity).toFixed(
            2
          )}</span>
        </div>
        <button class="remove-item" data-index="${index}">×</button>
      </div>
    `
      )
      .join("");

    // Calcular total
    const total = this.calculateSubtotal();
    cartTotalElement.textContent = `$${total.toFixed(2)}`;

    // Habilitar/deshabilitar botón de checkout
    if (this.cart.length === 0) {
      checkoutButton.classList.add("empty");
      checkoutButton.disabled = true;
    } else {
      checkoutButton.classList.remove("empty");
      checkoutButton.disabled = false;
    }

    // Agregar eventos a los botones de cantidad y eliminar
    document.querySelectorAll(".quantity-btn").forEach((button) => {
      button.addEventListener("click", (e) => {
        const index = parseInt(e.target.getAttribute("data-index"));
        const action = e.target.getAttribute("data-action");

        if (action === "increase") {
          this.cart[index].quantity += 1;
        } else if (action === "decrease") {
          if (this.cart[index].quantity > 1) {
            this.cart[index].quantity -= 1;
          } else {
            this.cart.splice(index, 1);
          }
        }

        this.updateCartUI();
      });
    });

    document.querySelectorAll(".remove-item").forEach((button) => {
      button.addEventListener("click", (e) => {
        const index = parseInt(e.target.getAttribute("data-index"));
        this.cart.splice(index, 1);
        this.updateCartUI();
        this.showToast("Producto eliminado del carrito");
      });
    });
  }

  showCheckoutModal() {
    if (this.cart.length === 0) {
      this.showToast("El carrito está vacío");
      return;
    }

    // Eliminar modal existente si hay uno
    const existingModal = document.getElementById("checkout-modal");
    if (existingModal) {
      document.body.removeChild(existingModal);
    }

    // Crear estructura completa del modal
    const modalHTML = `
    <div id="checkout-modal" class="modal-overlay">
      <div class="modal-container">
        <div class="modal-content">
          <div class="modal-header">
            <h3>Finalizar Compra</h3>
            <button class="modal-close">&times;</button>
          </div>
          <div class="modal-body">
            <div class="checkout-items">
              ${this.cart
                .map(
                  (item) => `
                <div class="checkout-item">
                  <div class="checkout-item-name">
                    <span>${item.name} x${item.quantity}</span>
                    ${
                      item.variations.length > 0
                        ? `
                      <div class="checkout-item-variations">
                        ${item.variations
                          .map((v) => `<span>${v.name}: ${v.value}</span>`)
                          .join("")}
                      </div>`
                        : ""
                    }
                  </div>
                  <span class="checkout-item-price">$${(
                    item.price * item.quantity
                  ).toFixed(2)}</span>
                </div>
              `
                )
                .join("")}
            </div>
            
            <div class="checkout-summary">
              <div class="summary-row">
                <span>Subtotal:</span>
                <span>$${this.calculateSubtotal().toFixed(2)}</span>
              </div>
              <div class="summary-row" id="payment-surcharge-row">
                <span>Recargo por pago:</span>
                <span>$0.00</span>
              </div>
              <div class="summary-row" id="delivery-cost-row">
                <span>Costo de envío:</span>
                <span>$0.00</span>
              </div>
              <div class="checkout-total">
                <span>Total:</span>
                <span>$${this.calculateSubtotal().toFixed(2)}</span>
              </div>
            </div>
            
            <form id="checkout-form">
              <div class="form-group">
                <label for="checkout-payment">Método de Pago:</label>
                <select id="checkout-payment" class="form-control" required>
                  <option value="" disabled selected>Seleccione método</option>
                  <option value="Transferencia">Transferencia vía Prex</option>
                  <option value="Efectivo">Efectivo al recibir</option>
                  <option value="MercadoPago">MercadoPago (10% adicional)</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="checkout-delivery">Método de Entrega:</label>
                <select id="checkout-delivery" class="form-control" required>
                  <option value="" disabled selected>Seleccione método</option>
                  <option value="A coordinar">A coordinar</option>
                  <option value="Retiro en persona">Retiro en persona</option>
                  <option value="Envío a domicilio">Envío rápido ($5)</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="checkout-name">Nombre completo:</label>
                <input type="text" id="checkout-name" class="form-control" required />
              </div>
              
              <div class="form-group hidden" id="address-group">
                <label for="checkout-address">Dirección de envío:</label>
                <input type="text" id="checkout-address" class="form-control" />
                <span class="validation-error hidden">La dirección es requerida para envío a domicilio</span>
              </div>
              
              <div class="form-group">
                <label for="checkout-comments">Comentarios adicionales:</label>
                <textarea id="checkout-comments" class="form-control" rows="3"></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button id="cancel-checkout" class="btn btn-secondary">Cancelar</button>
            <button id="confirm-checkout" class="btn btn-primary">Confirmar Compra</button>
          </div>
        </div>
      </div>
    </div>
    `;

    // Insertar el modal en el body
    document.body.insertAdjacentHTML("beforeend", modalHTML);
    document.body.classList.add("modal-open");

    // Configurar eventos
    const modal = document.getElementById("checkout-modal");
    const closeModal = () => {
      document.body.classList.remove("modal-open");
      modal.style.opacity = "0";
      setTimeout(() => {
        if (modal.parentNode) {
          modal.parentNode.removeChild(modal);
        }
      }, 300);
    };

    // Mostrar con animación
    setTimeout(() => {
      document.getElementById("checkout-modal").style.opacity = "1";
    }, 10);

    // Eventos de cierre
    modal.querySelector(".modal-close").addEventListener("click", closeModal);
    modal
      .querySelector("#cancel-checkout")
      .addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    });

    // Eventos de los selects
    document
      .getElementById("checkout-delivery")
      .addEventListener("change", (e) => {
        this.updateCheckoutSummary();
        const addressGroup = document.getElementById("address-group");
        if (e.target.value === "Envío a domicilio") {
          addressGroup.classList.remove("hidden");
          document
            .getElementById("checkout-address")
            .setAttribute("required", "true");
        } else {
          addressGroup.classList.add("hidden");
          document
            .getElementById("checkout-address")
            .removeAttribute("required");
        }
      });

    document
      .getElementById("checkout-payment")
      .addEventListener("change", () => {
        this.updateCheckoutSummary();
      });

    document
      .getElementById("confirm-checkout")
      .addEventListener("click", () => {
        this.processCheckout();
      });

    // Actualizar resumen inicial
    this.updateCheckoutSummary();
  }

  handleKeyDown(e) {
    if (e.key === "Escape") {
      const overlay = document.getElementById("modal-overlay");
      if (overlay) {
        this.closeCheckoutModal(overlay);
      }
    }
  }

  updateCheckoutSummary() {
    const paymentMethod = document.getElementById("checkout-payment")?.value;
    const deliveryMethod = document.getElementById("checkout-delivery")?.value;
    const subtotal = this.calculateSubtotal();

    let paymentSurcharge = 0;
    if (paymentMethod === "MercadoPago") {
      paymentSurcharge = subtotal * 0.1;
    }

    let deliveryCost = 0;
    if (deliveryMethod === "Envío a domicilio") {
      deliveryCost = 5;
    }

    const total = subtotal + paymentSurcharge + deliveryCost;

    // Actualizar resumen
    const paymentSurchargeElement = document.querySelector(
      "#payment-surcharge-row span:last-child"
    );
    const deliveryCostElement = document.querySelector(
      "#delivery-cost-row span:last-child"
    );
    const totalElement = document.querySelector(
      ".checkout-total span:last-child"
    );

    if (paymentSurchargeElement) {
      paymentSurchargeElement.textContent = `$${paymentSurcharge.toFixed(2)}`;
    }
    if (deliveryCostElement) {
      deliveryCostElement.textContent = `$${deliveryCost.toFixed(2)}`;
    }
    if (totalElement) {
      totalElement.textContent = `$${total.toFixed(2)}`;
    }
  }

  closeCheckoutModal(overlay) {
    if (!overlay) return;

    // Animación de salida
    overlay.style.opacity = "0";
    const modal = overlay.querySelector(".modal");
    if (modal) {
      modal.style.transform = "translateY(20px)";
    }

    // Eliminar después de la animación
    setTimeout(() => {
      document.body.classList.remove("no-scroll");
      document.removeEventListener("keydown", this.handleKeyDown);
      if (overlay && overlay.parentNode) {
        overlay.parentNode.removeChild(overlay);
      }
    }, 300);
  }

  processCheckout() {
    const paymentMethod = document.getElementById("checkout-payment")?.value;
    const deliveryMethod = document.getElementById("checkout-delivery")?.value;
    const name = document.getElementById("checkout-name")?.value.trim();
    const address = document.getElementById("checkout-address")?.value.trim();
    const comments = document.getElementById("checkout-comments")?.value.trim();

    // Validaciones
    if (!paymentMethod || paymentMethod === "Seleccione método") {
      this.showToast("Por favor seleccione un método de pago");
      return;
    }

    if (!deliveryMethod || deliveryMethod === "Seleccione método") {
      this.showToast("Por favor seleccione un método de entrega");
      return;
    }

    if (!name) {
      this.showToast("Por favor ingrese su nombre completo");
      return;
    }

    if (deliveryMethod === "Envío a domicilio" && !address) {
      const addressError = document.querySelector(
        "#address-group .validation-error"
      );
      if (addressError) addressError.classList.remove("hidden");
      this.showToast("Por favor ingrese su dirección de envío");
      return;
    }

    // Calcular total con recargos
    const subtotal = this.calculateSubtotal();
    let paymentSurcharge = 0;
    if (paymentMethod === "MercadoPago") {
      paymentSurcharge = subtotal * 0.1;
    }

    let deliveryCost = 0;
    if (deliveryMethod === "Envío a domicilio") {
      deliveryCost = 5;
    }

    const total = subtotal + paymentSurcharge + deliveryCost;

    // Construir mensaje
    const message = `*Solicitud de Compra*
-------------------------------------
Productos:
${this.cart
  .map((item) => {
    return `${item.name} x${item.quantity} - $${(
      item.price * item.quantity
    ).toFixed(2)}
  ${item.variations.map((v) => `- ${v.name}: ${v.value}`).join("\n  ")}`;
  })
  .join("\n")}
-------------------------------------
Subtotal: $${subtotal.toFixed(2)}
${
  paymentSurcharge > 0
    ? `Recargo por pago (${paymentMethod}): $${paymentSurcharge.toFixed(2)}\n`
    : ""
}
${deliveryCost > 0 ? `Costo de envío: $${deliveryCost.toFixed(2)}\n` : ""}
Total: $${total.toFixed(2)}
-------------------------------------
Método de pago: ${paymentMethod}
Método de entrega: ${deliveryMethod}
Nombre: ${name}
${deliveryMethod === "Envío a domicilio" ? `Dirección: ${address}\n` : ""}
Comentarios: ${comments || "Sin comentarios"}
Fecha: ${new Date().toLocaleDateString()}
Hora: ${new Date().toLocaleTimeString()}`;

    const whatsappUrl = `https://wa.me/59892955928?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");

    // Cerrar modal y limpiar carrito
    this.closeCheckoutModal(document.getElementById("modal-overlay"));
    this.cart = [];
    this.updateCartUI();
    this.toggleCart();
    this.showToast("Compra realizada con éxito");
  }

  showToast(message) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.classList.add("show");
    }, 10);

    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => {
        document.body.removeChild(toast);
      }, 300);
    }, 3000);
  }

  toggleProductDetails(productId) {
    // Cerrar otros abiertos
    document.querySelectorAll(".product-details.active").forEach((el) => {
      if (el.id !== `product-details-${productId}`) {
        el.classList.remove("active");
        const id = el.id.split("product-details-")[1];
        const interestButton = document.getElementById(`interest-button-${id}`);
        if (interestButton) interestButton.classList.remove("hidden");
      }
    });

    const details = document.getElementById(`product-details-${productId}`);
    const interestButton = document.getElementById(
      `interest-button-${productId}`
    );

    if (!details || !interestButton) return;

    if (!details.classList.contains("active")) {
      details.classList.add("active");
      interestButton.classList.add("hidden");
    } else {
      details.classList.remove("active");
      interestButton.classList.remove("hidden");
    }
  }
}
