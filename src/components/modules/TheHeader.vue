<script setup>
import { RouterLink } from "vue-router";
import { ref, reactive, computed, onMounted } from "vue";
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary z-3">
      <div class="container-fluid titleHeder btn-sm">
        <a class="navbar-brand z-3" href="#">Shopping - Vue</a>
        <button
          class="navbar-toggler z-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon z-3 btn-sm"></span>
        </button>
        <div class="collapse navbar-collapse z-3" id="navbarSupportedContent">
          <ul class="navbar-nav ms-5">
            <li class="nav-item ms-2">
              <a
                class="btn btn-outline-warning btn-sm z-3 tm-bt"
                aria-current="page"
                href=""
                ><router-link to="/">Loja</router-link></a
              >
            </li>
            <li class="nav-item ms-2">
              <a
                class="btn btn-outline-warning btn-sm z-3 tm-bt"
                aria-current="page"
                href="#"
                ><router-link to="/dashboard">Dashboard</router-link></a
              >
            </li>
            <li class="nav-item ms-2">
              <a
                class="btn btn-outline-warning btn-sm z-3 tm-bt"
                aria-current="page"
                href="#"
                ><router-link to="/login">Login</router-link></a
              >
            </li>
          </ul>
        </div>

      </div> 
      <div class="header-car"><div><img src="/img/cart-img.png" alt="Carrinho de compras"></div><span>0</span></div>
    </nav>
   
  </header>
</template>

<style scoped>
.titleHeder {
  display: flex !important;
  flex-flow: row nowrap !important;
  justify-content: space-around !important;
  align-items: center !important;
}
.tm-bt{
  width: 100px;
}
.header-car{
  display: flex;
   flex-flow: column wrap !important;
  justify-content: space-around !important;
  margin: 0 20px;
  height: 40px;
  top:0;
  right: 0;
background-color: rgb(245, 239, 239);
align-self: center !important;
}
.header-car img{
  width: 30px;
  height: 30px;
}
.header-car span{
  width: 100px;
  text-align: center;
  font-size: 28px;
  color: rgb(36, 34, 34);
}
</style>