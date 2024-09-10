<template>
  <div class="">
    <aside class="sidebar shadow-sm d-flex">
      <div class="px-4 py-3 sidebar-top position-sticky top-0 shadow-sm" style="z-index: 999">
        <div class="d-flex b justify-content-between align-center">
          <img src="../assets/app-logo.png" width="140" alt="ICDL Logo" />
          <img
            src="../assets/forbidden-2.png"
            alt=""
            width="30"
            height="30"
            class="d-lg-none"
            @click="closeSidebar"
          />
        </div>
      </div>

      <!--  -->
      <div class="sidebar-body pt-4 flex-grow-1">
       
        <!-- Dashboard -->
        <div class="m-2 ">
          <router-link
            class="fs-5 mt-2 py-2 text-decoration-none accordion-button rounded"
          >
            <i class="bi bi-speedometer ms-3"></i>
            <span class="fs-6 ms-3 fw-medium">Dashboard</span>
          </router-link>
        </div>

        
        <!-- Profile -->
        <div class=" m-2 ">
          <router-link
            class="fs-5 mt-3 py-2 text-decoration-none accordion-button rounded"
          >
            <i class="bi bi-inbox-fill ms-3"></i>
            <span class="fs-6 ms-3 fw-medium">Inbox </span>
          </router-link>
        </div>
        
        <!-- Profile -->
        <div class=" m-2 ">
          <router-link
            class="fs-5 mt-3 py-2 text-decoration-none accordion-button rounded"
          >
          <i class="bi bi-send-check ms-3"></i>
            <span class="fs-6 ms-3 fw-medium">Sent</span>
          </router-link>
        </div>
        
        <!-- Profile -->
        <div class=" m-2 ">
          <router-link
            class="fs-5 mt-3 py-2 text-decoration-none accordion-button rounded"
          >
          <i class="bi bi-pencil-square ms-3"></i>
            <span class="fs-6 ms-3 fw-medium">Drafts</span>
          </router-link>
        </div>
        
        <!-- Profile -->
        <div class=" m-2 ">
          <router-link
            class="fs-5 mt-3 py-2 text-decoration-none accordion-button rounded"
          >
          <i class="bi bi-star-half ms-3"></i>
            <span class="fs-6 ms-3 fw-medium">Starred</span>
          </router-link>
        </div>
        
        <!-- Profile -->
        <div class=" m-2 ">
          <router-link
            class="fs-5 mt-3 py-2 text-decoration-none accordion-button rounded"
          >
          <i class="bi bi-trash3-fill ms-3"></i>
            <span class="fs-6 ms-3 fw-medium">Trash</span>
          </router-link>
        </div>
        
        <!-- Profile -->
        <div class=" m-2 ">
          <router-link
            class="fs-5 mt-3 py-2 text-decoration-none accordion-button rounded"
          >
          <i class="bi bi-slash-circle-fill ms-3"></i>
            <span class="fs-6 ms-3 fw-medium">Spam</span>
          </router-link>
        </div>
        

        <div class="position-relative logout mx-2">
          <router-link
            class="fs-5 mt-5 py-2 text-decoration-none accordion-button rounded"
          >
          <i class="bi bi-gear ms-3"></i>
            <span class="fs-6 ms-3 fw-medium">Settings</span>
          </router-link>
        </div>
      </div>
    </aside>
  </div>
</template>

<script setup>
// import { useAuthStore } from "@/stores/auth";
// import { useNavStore } from "@/stores/menu";
import { computed, defineEmits } from "vue";

// const user = computed(() => useAuthStore().user);
// const navigationItems = computed(() => useNavStore().items);

const emits = defineEmits(["closeSidebar"]);

// const getImageUrl = (path) => {
//   return new URL(`../assets/SVG/${path}`, import.meta.url).href;
// };

const closeSidebar = () => {
  emits("closeSidebar");
};
</script>

<style lang="scss" scoped>
.sidebar {
  min-height: 100vh;
  height: 100%;
  // outline: 1px solid red;
  width: 280px;
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  // overflow: hidden;
  // padding: 1rem;
  transition: transform 0.6s ease-in-out;

  // @media (max-width: 768px) {
  //   position: fixed;
  //   // height: 100%;
  //   min-height: 100vh;
  //   top: 0;
  //   z-index: 99;
  // }
  // outline: 1px solid green;

  .sidebar-top {
    background-color: #1579D0;
    padding: 25px 0;
  }
  .sidebar-body {
    background-color: #1579D0;
    flex-grow: 3;
    overflow-y: auto;
    // height: 100%;
    // outline: 1px solid red;

    @media screen and (max-width: 596px) {
      min-height: 100vh;
      height: 100%;
      // overflow-y:scroll;
    }

    @media screen and (min-width: 598px) and (max-width: 992px) {
      min-height: 100vh;
    }
  }

  .accordion-body {
    background-color: #e00707;
    padding-top: 0;
    padding-bottom: 0;
    // padding: 0 !important;
  }

  .accordion-button:not(.collapsed) {
    color: #fff;
    background-color: transparent;
  }

  // .router-link-exact-active {
  // color: #FF3E6C;
  // }
  a {
    color: black;
    font-family: montserrat;
  }
  a:hover {
    color: #FF3E6C;
  }

  .accordion-button:hover {
    background-color: #000000 !important;
    color: rgb(255, 255, 255) !important;
    // padding: 1rem 0.9rem !important;
    display: flex !important;

    &:hover {
      span {
        color: #ffffff;
      }

      &::after,
      img {
        filter: invert(44%) sepia(41%) saturate(6117%) hue-rotate(323deg)
          brightness(101%) contrast(104%);
      }
    }
  }

  .accordion-button:focus {
    background-color: #000000 !important;
    color: rgb(255, 255, 255) !important;
    outline: none !important;
    box-shadow: none !important;
  }

  .accordion-button::after {
    background-image: url("../assets/SVG/chevron-right.svg");
    // outline: 1px solid green;
  }

  .accordion-button:not(.collapsed)::after {
    background-image: url("../assets/SVG/chevron-up.svg");
  }

  .accordion-header {
    padding: 0;
  }

  .logout {
    bottom: -5.5rem;
  }

}
</style>
