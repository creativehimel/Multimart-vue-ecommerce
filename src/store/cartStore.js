import { reactive, computed } from "vue";

const cartStore = reactive({
  items: {},
  totalCartItems: computed(() => {
    let total = 0;
    for (let item in cartStore.items) {
      total += cartStore.items[item].quantity;
    }
    return total;
  }),
  totalPrice: computed(() => {
    let total = 0;
    for (let id in cartStore.items) {
      total +=
        parseFloat(
          cartStore.items[id].product.price -
            (cartStore.items[id].product.price *
              cartStore.items[id].product.discountPercentage) /
              100
        ).toFixed(2) * cartStore.items[id].quantity;
    }
    return parseFloat(total.toFixed(2));
  }),
  addQuantity(product) {
    this.items[product.id].quantity++;
    this.saveCartInLocalStorage();
  },
  subtractQuantity(product) {
    if (this.items[product.id].quantity > 1) {
      this.items[product.id].quantity--;
    }
    this.saveCartInLocalStorage();
  },
  addToCart(product) {
    if (this.items[product.id]) {
      this.items[product.id].quantity++;
    } else {
      this.items[product.id] = {
        product,
        quantity: 1,
      };
    }
    this.saveCartInLocalStorage();
  },
  removeFromCart(product) {
    delete this.items[product.id];
    this.saveCartInLocalStorage();
  },
  clearCart() {},
  saveCartInLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(this.items));
  },
  loadCartFromLocalStorage() {
    this.items = JSON.parse(localStorage.getItem("cart") || "{}");
  },
});
cartStore.loadCartFromLocalStorage();
export { cartStore };
