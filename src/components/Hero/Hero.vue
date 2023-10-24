<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="bg-hero h-[550px] flex justify-center">
    <div class="container mx-auto flex items-center justify-between">
      <div class="w-1/2 space-y-3">
        <h4 class="text-sm text-gray-600 font-[600] font-mon">
          Trending Products in 2023
        </h4>
        <h1 class="text-heading text-5xl font-[800] font-mon">
          Make Your Interior More Minimalistic & Modern
        </h1>
        <p class="text-sm text-gray-600 font-[400] font-mon">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, iure
          consequuntur, reiciendis quidem placeat iste voluptatem vitae, non
          molestias earum magni animi amet? Reprehenderit consequuntur qui
          placeat officia eum aut?
        </p>
        <button>
          <RouterLink
            to="/shop"
            class="bg-primary text-white py-2 px-4 rounded"
          >
            Shop Now
          </RouterLink>
        </button>
      </div>
      <div>
        <img src="../../assets/images/hero-img.png" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
