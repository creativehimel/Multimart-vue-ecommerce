import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Blog from "../views/Blog.vue";
import BlogPost from "../views/BlogPost.vue";
import FAQ from "../views/FAQ.vue";
import Shop from "../views/Shop.vue";
import SingleProduct from "../views/SingleProduct.vue";
import Cart from "../views/Cart.vue";
import Checkout from "../views/CheckOut.vue";
import Wishlist from "../views/WishList.vue";
import OrderSuccess from "../views/OrderSuccess.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import UserProfile from "../views/UserProfile.vue";
import Orders from "../views/Orders.vue";
import NotFound from "../views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
    {
      path: "/blog",
      name: "blog",
      component: Blog,
    },
    {
      path: "/blog/:slug",
      name: "blog-post",
      component: BlogPost,
    },
    {
      path: "/faq",
      name: "faq",
      component: FAQ,
    },
    {
      path: "/shop",
      name: "shop",
      component: Shop,
    },
    {
      path: "/shop/:id",
      name: "singleProduct",
      component: SingleProduct,
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart,
    },
    {
      path: "/checkout",
      name: "checkout",
      component: Checkout,
    },
    {
      path: "/wishlist",
      name: "wishlist",
      component: Wishlist,
    },
    {
      path: "/order-success",
      name: "order-success",
      component: OrderSuccess,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/user-profile",
      name: "user-profile",
      component: UserProfile,
    },
    {
      path: "/orders",
      name: "orders",
      component: Orders,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFound,
    },
  ],
});

export default router;
