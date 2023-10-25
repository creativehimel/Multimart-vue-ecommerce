<script setup>
import { authStore } from "../../store/authStore";
import { cartStore } from "../../store/cartStore";
import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { RouterLink } from "vue-router";
import {
  Cog6ToothIcon,
  PencilSquareIcon,
  ArrowRightOnRectangleIcon,
  ArrowLeftOnRectangleIcon,
  UserPlusIcon,
} from "@heroicons/vue/24/outline";
</script>
<template>
  <header class="bg-white py-3 shadow">
    <nav class="container mx-auto flex items-center justify-between">
      <div class="flex items-center gap-x-2">
        <img class="w-9" :src="logo" alt="Logo" />
        <div>
          <h1 class="text-heading text-xl font-[700] font-mon">Multimart</h1>
        </div>
      </div>
      <ul class="flex items-center gap-x-3">
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/shop">Shop</RouterLink>
        </li>
        <li>
          <RouterLink to="/cart">Cart</RouterLink>
        </li>
      </ul>
      <div class="flex items-center gap-x-3">
        <span>
          <RouterLink to="/wish-list">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </RouterLink>
        </span>
        <div class="relative">
          <RouterLink to="/cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </RouterLink>
          <p
            class="absolute -top-0.5 -right-0.5 text-[10px] font-semibold bg-indigo-400 w-4 h-4 flex items-center justify-center text-white rounded-full"
          >
            {{ cartStore.totalCartItems }}
          </p>
        </div>
        <div class="pt-1">
          <Menu as="div" class="relative inline-block text-left">
            <div>
              <MenuButton>
                <img class="w-9 h-9" :src="userIcon" alt="" />
              </MenuButton>
            </div>
            <transition
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <MenuItems
                class="absolute right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <div v-if="authStore.isAuthenticated" class="px-1 py-1">
                  <MenuItem v-slot="{ active }">
                    <button
                      :class="[
                        active ? 'bg-primary text-white' : 'text-gray-900',
                        'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                      ]"
                    >
                      <PencilSquareIcon
                        :active="active"
                        class="mr-2 w-4 h-4 text-gray-400"
                        aria-hidden="true"
                      />
                      Profile
                    </button>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <button
                      :class="[
                        active ? 'bg-primary text-white' : 'text-gray-900',
                        'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                      ]"
                    >
                      <Cog6ToothIcon
                        :active="active"
                        class="mr-2 w-4 h-4 text-gray-400"
                        aria-hidden="true"
                      />
                      Settings
                    </button>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <button
                      :class="[
                        active ? 'bg-primary text-white' : 'text-gray-900',
                        'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                      ]"
                    >
                      <ArrowRightOnRectangleIcon
                        :active="active"
                        class="mr-2 w-4 h-4 text-gray-400"
                        aria-hidden="true"
                      />
                      Sign out
                    </button>
                  </MenuItem>
                </div>
                <div v-if="!authStore.isAuthenticated" class="px-1 py-1">
                  <MenuItem v-slot="{ active }">
                    <button
                      :class="[
                        active ? 'bg-primary text-white' : 'text-gray-900',
                        'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                      ]"
                    >
                      <ArrowLeftOnRectangleIcon
                        :active="active"
                        class="mr-2 w-4 h-4 text-gray-400"
                        aria-hidden="true"
                      />
                      Sign in
                    </button>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <button
                      :class="[
                        active ? 'bg-primary text-white' : 'text-gray-900',
                        'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                      ]"
                    >
                      <UserPlusIcon
                        :active="active"
                        class="mr-2 w-4 h-4 text-gray-400"
                        aria-hidden="true"
                      />
                      Register
                    </button>
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped></style>
