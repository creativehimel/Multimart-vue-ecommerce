<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <section class="bg-primary py-14">
    <div class="container">
      <div class="grid grid-cols-10 gap-x-12">
        <div class="col-span-3 space-y-4">
          <h2 class="text-white text-2xl font-[700] font-mon">Multimart</h2>
          <p class="text-white font-[500] text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
            rem doloremque possimus ex? Omnis, est error voluptatum facere
            doloribus earum fugit esse.
          </p>
        </div>
        <div class="col-span-2 space-y-4 text-white">
          <h4 class="text-lg font-[700] font-mon">Top Categories</h4>
          <ul class="space-y-1 list-inside list-disc">
            <li class="pt-1">
              <RouterLink to="/">Mobile Phones</RouterLink>
            </li>
            <li class="pt-1">
              <RouterLink to="/">Laptop</RouterLink>
            </li>
            <li class="pt-1">
              <RouterLink to="/">Camera</RouterLink>
            </li>
            <li class="pt-1">
              <RouterLink to="/">Watch</RouterLink>
            </li>
          </ul>
        </div>
        <div class="col-span-2 space-y-4 text-white">
          <h4 class="text-lg font-[700] font-mon">Useful Links</h4>
          <ul class="space-y-1 list-inside list-disc">
            <li class="pt-1">
              <RouterLink to="/shop">Shop</RouterLink>
            </li>
            <li class="pt-1">
              <RouterLink to="/cart">Cart</RouterLink>
            </li>
            <li class="pt-1">
              <RouterLink to="/login">Login</RouterLink>
            </li>
            <li class="pt-1">
              <RouterLink to="/">Privacy Policy</RouterLink>
            </li>
          </ul>
        </div>
        <div class="col-span-3 space-y-4 text-white">
          <h4 class="text-lg font-[700] font-mon">Contact Us</h4>
          <ul class="space-y-2">
            <li class="pt-1 flex items-center gap-x-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>

              <RouterLink to="/">123 Main Street, New York NY 10001</RouterLink>
            </li>
            <li class="pt-1 flex items-center gap-x-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>

              <RouterLink to="/">+1 (123) 456-7890</RouterLink>
            </li>
            <li class="pt-1 flex items-center gap-x-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>

              <RouterLink to="/">+1 (123) 456-7891</RouterLink>
            </li>
            <li class="pt-1 flex items-center gap-x-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>

              <RouterLink to="/">contact@multimart.com</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
