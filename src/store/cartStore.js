import { reactive, computed } from "vue";

const cartStore = reactive({
  items: {},
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
  removeFromCart(product) {},
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
