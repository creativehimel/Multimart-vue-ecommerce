<script setup>
import { authStore } from "../store/authStore";
import router from "../router";
if (!authStore.isAuthenticated) {
  router.push({ name: "login" });
}
</script>
<template>
  <section
    class="bg-slate-100 h-[600px] flex flex-col justify-center items-center"
  >
    <h1 class="text-3xl font-[700] font-mon text-center pt-8">
      Your order has been placed
    </h1>
  </section>
</template>

<style scoped></style>
