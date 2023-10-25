<script setup>
import { onBeforeMount } from "vue";
import { authStore } from "../store/authStore";
import { orderStore } from "../store/orderStore";
import router from "../router";
if (!authStore.isAuthenticated) {
  router.push({ name: "login" });
}
onBeforeMount(() => {
  orderStore.fetchOrders();
});
function toggleProduct(orderId) {
  const orderItem = orderStore.orders.find((order) => order.id === orderId);
  if (orderItem) {
    orderItem.showProducts = !orderItem.showProducts;
  }
}
</script>
<template>
  <section
    class="bg-slate-100 min-h-screen flex flex-col justify-center items-center"
  >
    <div>
      <h1 class="text-3xl font-[700] font-mon text-center pt-8">Your orders</h1>
      <div class="bg-white p-8 rounded container">
        <p>{{ orderStore.orders }}</p>
        <div v-for="order in orderStore.orders" :key="order.id">
          <div class="flex justify-between w-full space-y-2">
            <p class="w-1/3"><strong>Order ID:</strong> {{ order.id }}</p>
            <p class="w-1/3">
              <strong>Toal Amount:</strong> {{ order.totalAmount }}
            </p>
            <p class="text-right w-1/3">
              <button
                @click="toggleProduct(order.id)"
                class="bg-primary text-white font-bold py-2 px-4 rounded"
              >
                {{ order.showProducts ? "Hide" : "Show" }}
              </button>
            </p>
          </div>
          <!-- Show products for the current order when toggled -->
          <div v-if="order.showProducts" class="border my-5 p-5">
            <div
              class="flex items-center my-3"
              v-for="product in order.products"
              :key="product.id"
            >
              <p class="w-2/3">
                <router-link
                  :to="{ name: 'singleProduct', params: { id: product.id } }"
                >
                  {{ product.title }}
                </router-link>
              </p>
              <p class="w-[100px]">$ {{ product.price }}</p>
              <p>Quantity: {{ product.quantity }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
