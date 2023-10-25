<script setup>
import { cartStore } from "../store/cartStore";
import { TrashIcon } from "@heroicons/vue/24/outline";
</script>
<template>
  <section
    v-if="cartStore.totalCartItems > 0"
    class="bg-slate-100 min-h-screen flex flex-col justify-center items-center"
  >
    <div class="container my-10">
      <div class="grid grid-cols-12 gap-x-8">
        <div class="col-span-9 bg-white p-8">
          <div>
            <table class="w-full">
              <thead class="bg-primary text-white rounded">
                <tr>
                  <th class="text-center font-semibold py-2 px-4">Image</th>
                  <th class="text-center font-semibold py-2 px-4">
                    Product Name
                  </th>
                  <th class="text-center font-semibold py-2 px-4">
                    Unit Price
                  </th>
                  <th class="text-center font-semibold py-2 px-4">Quantity</th>
                  <th class="text-center font-semibold py-2 px-4">
                    Total Price
                  </th>
                  <th class="text-center font-semibold py-2 px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="item in cartStore.items"
                  :key="item.id"
                  class="divide-y divide-gray-200"
                >
                  <td class="py-4">
                    <div class="flex items-center justify-center">
                      <RouterLink
                        :to="{
                          name: 'singleProduct',
                          params: { id: item.product.id },
                        }"
                      >
                        <img
                          class="h-16 w-16 mr-4"
                          :src="item.product.thumbnail"
                          alt="Product image"
                        />
                      </RouterLink>
                    </div>
                  </td>
                  <td class="py-4 text-center">
                    <RouterLink
                      :to="{
                        name: 'singleProduct',
                        params: { id: item.product.id },
                      }"
                    >
                      <h4>{{ item.product.title }}</h4>
                    </RouterLink>
                  </td>
                  <td class="py-4 text-center">
                    <h4>
                      $

                      {{
                        parseFloat(
                          item.product.price -
                            (item.product.price *
                              item.product.discountPercentage) /
                              100
                        ).toFixed(2)
                      }}
                    </h4>
                  </td>
                  <td class="py-4">
                    <div class="flex items-center justify-center">
                      <button
                        @click="cartStore.subtractQuantity(item.product)"
                        class="border rounded-md py-2 px-4 mr-2"
                      >
                        -
                      </button>
                      <span class="text-center w-8">
                        {{ item.quantity }}
                      </span>
                      <button
                        @click="cartStore.addQuantity(item.product)"
                        class="border rounded-md py-2 px-4 ml-2"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td class="py-4 text-center">
                    ${{
                      parseFloat(
                        parseFloat(
                          item.product.price -
                            (item.product.price *
                              item.product.discountPercentage) /
                              100
                        ).toFixed(2) * item.quantity
                      ).toFixed(2)
                    }}
                  </td>
                  <td class="py-4 text-center">
                    <button
                      @click="cartStore.removeFromCart(item.product)"
                      class="text-red-500"
                    >
                      <TrashIcon class="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-span-3 bg-white p-8 rounded space-y-8 h-[380px]">
          <h2 class="text-2xl font-[700] font-mon text-center mb-4">
            Order Summary
          </h2>
          <div class="space-y-2 divide-y-2">
            <div class="flex justify-between pt-2">
              <p class="text-lg font-semibold">Subtotal</p>
              <p class="text-lg font-semibold">
                ${{ cartStore.totalPrice.toFixed(2) }}
              </p>
            </div>
            <div class="flex justify-between pt-2">
              <p class="text-lg font-semibold">Shipping estimate</p>
              <p class="text-lg font-semibold">$ 0</p>
            </div>
            <div class="flex justify-between pt-2">
              <p class="text-lg font-semibold">Tax estimate</p>
              <p class="text-lg font-semibold">$ 0</p>
            </div>
            <div class="flex justify-between pt-2">
              <p class="text-xl font-[800]">Order total</p>
              <p class="text-xl font-[800]">
                ${{ cartStore.totalPrice.toFixed(2) }}
              </p>
            </div>
          </div>
          <button
            @click="cartStore.checkout()"
            class="bg-black text-white py-2 px-4 w-full rounded font-mon font-[800]"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  </section>
  <section v-else class="bg-slate-100 h-[600px] flex flex-col justify-center">
    <h1 class="text-3xl font-[700] font-mon text-center pt-8">
      Your cart is empty
    </h1>
  </section>
</template>

<style scoped></style>
