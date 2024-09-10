<template>
    <div class="dashboard-layout">
      <Sidebar class="sidebar" @closeSidebar="handleCloseSidebar" />
  
      <div class="content-wrapper">
        <div class="bg-light2 position-sticky" style="z-index: 999">
          <button
            class="menu-toggle position-absolute mt-3"
            @click="toggleMenu"
          >
          <img src="../../assets/hamburgerMenu.svg" alt="" width="35" />
          </button>
          <TopNavbar class="" />
        </div>
  
        <!-- main -->
        <main class="content">
          <div class="w-90 mx-auto py-5">
            <div class="container">
              <!-- actions -->
              <div class="text-end mb-3">
                <slot name="actions"></slot>
              </div>
              <router-view />
  
              <!-- title -->
              <!-- <div>
                <h2 class="heading">
                  {{ title }}
                </h2>
              </div>
  
              <div v-if="isLoading" class="text-center mt-5">
                <br />
                <Spinner :isLoading="isLoading"></Spinner>
              </div> -->
  
              <!-- main -->
              <template >
                <slot name="content" />
              </template>
            </div>
          </div>
        </main>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  import Sidebar from "@/components/Sidebar.vue";
  import TopNavbar from "@/components/TopNavbar.vue";
  
  defineProps({
    isLoading: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
  });
  
  const is_expanded = ref(true);
  
  function toggleMenu() {
    is_expanded.value = !is_expanded.value;
  
    document.querySelector(".sidebar").classList.toggle("active");
    document.querySelector(".content-wrapper").classList.toggle("active");
  }
  
  const handleCloseSidebar = () => {
    document.querySelector(".sidebar").classList.toggle("active");
  };
  </script>
  
  <style lang="scss" scoped>
  // *{
  //   outline: 1px solid red;
  // }
  .dashboard-layout {
    display: flex;
    min-height: 100vh;
  }
  
  .bg-light2 {
    background-color: #fdfdfd;
  }
  
  ::-webkit-scrollbar {
    width: 0;
  }
  
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    // outline: 1px solid red;
    z-index: 9999;
  
    width: 300px;
    min-height: 100vh;
    overflow-x: hidden;
    transition: transform 0.5s ease-in-out;
    transform: translate(0);
  
    @media only screen and (max-width: 567px) {
      transform: translate(-100%);
      width: 300px;
      z-index: 9999;
      overflow-x: visible;
      height: 100%;
  
      &.active {
        transform: translate(-0);
      }
    }
  
    @media only screen and (min-width: 568px) and (max-width: 991px) {
      transform: translate(-100%);
      width: 300px;
      z-index: 9999;
      overflow-x: visible;
      // min-height: 100vh;
  
      &.active {
        transform: translate(-0);
      }
    }
  
    &.active {
      width: 0;
      transform: translate(-0);
    }
  }
  
  .content-wrapper {
    display: flex;
    flex-direction: column;
    width: calc(100% - 300px);
    margin-left: 280px;
    width: 100%;
    // transition: width 0.3s ease-in-out;
    transition: margin-left 0.3s ease-in-out, width 0.3s ease-in-out;
  
    @media only screen and (max-width: 596px) {
      width: 100%;
      margin-left: 0;
    }
    @media only screen and (min-width: 568px) and (max-width: 991px) {
      width: 100%;
      margin-left: 0;
    }
  
    &.active {
      margin-left: 0;
      width: 100%;
    }
  }
  
  .content {
    position: sticky;
  }
  
  .menu-toggle {
    background: transparent;
    border: none;
    transition: 0.5s ease-in-out;
  
    &:hover {
      transform: translateY(-0.15rem);
    }
  }
  </style>
  