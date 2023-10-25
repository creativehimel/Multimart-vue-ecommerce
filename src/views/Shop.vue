<script setup>
import { ref, onBeforeMount } from "vue";
import axios from "axios";
import ProductCard from "../components/Product/ProductCard.vue";
const products = ref([]);
onBeforeMount(() => {
  axios
    .get("https://dummyjson.com/products")
    .then((response) => {
      products.value = response.data.products;
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>
<template>
  <section
    class="bg-slate-50 min-h-screen flex flex-col justify-center items-center"
  >
    <div class="container">
      <h1 class="text-3xl font-[700] font-mon text-center pt-8">
        All Products
      </h1>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-3 gap-y-5 my-8"
      >
        <ProductCard
          :product="product"
          v-for="product in products"
          :key="product.id"
        />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
