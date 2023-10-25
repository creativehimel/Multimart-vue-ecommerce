<script setup>
import { ref, onBeforeMount } from "vue";
const categories = ref([]);
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
  <div></div>
</template>

<style scoped></style>
