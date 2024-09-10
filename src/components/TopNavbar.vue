<template>
  <div class="bg-white py-7 rounded-0 shadow-sm">
    <div class="container">
      <div class="d-flex justify-content-end align-items-center px-4 py-3">
        <div class="d-flex align-items-center">
          <router-link class="position-relative me-5">
            <i class="fs-4 bi bi-bell"></i>
            <span
              class="position-absolute ms-2 top-0 start-100 translate-middle badge px-1 rounded-pill bg-danger"
            >
              99+
              <span class="visually-hidden">unread messages</span>
            </span>
          </router-link>
          <div class="dropdown text-end">
            <a
              href="#"
              class="d-block link-dark text-decoration-none dropdown-toggle"
              id="dropdownUser1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="../assets/avatar.png"
                alt="mdo"
                width="32"
                height="32"
                class="rounded-circle"
              />
              Account
            </a>
            <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1">
              <li><a class="dropdown-item" href="#">Settings</a></li>
              <li>
                <router-link class="dropdown-item">Profile</router-link>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#">Sign out</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

//
<script setup>
// import {ref} from "vue";
// import { useRouter } from "vue-router";

// import utils from "@/plugins/utils";
// import { catchAxiosExceptions } from "@/plugins/handleExceptions";
// import { useAuthStore } from "@/stores/auth";

// const router = useRouter();
// const authStore = useAuthStore();

// const formErrors = ref({});

// function logOut() {
//   authStore
//     .logout()
//     .then(() => {
//       router.push({ name: "login" });
//     })
//     .catch((error) => {
//       console.log(error);
//       let catchExceptions = catchAxiosExceptions(error);

//       formErrors.value = catchExceptions.formErrors;
//       utils.showToast(catchExceptions.msg, "error");
//     });
// }
</script>

<style scoped>
/* *{
  outline: 1px solid red;
} */
.counter {
  left: 0.9rem;
  bottom: 0.8rem;
}
</style>
