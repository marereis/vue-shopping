<template>
  <!-- <div>
    <pre class="text-center text-white">{{cart}}</pre>-->
     <!--<h1>This is an Dastboard page</h1> 
    <ul>
      <li v-for="product in productsCart" :key="product.id">
        <h6>{{ product.title }}</h6>
        <h4>Valor R$ {{ product.price }}</h4>
        <button class="" @click="addCart">Comprar</button>
      </li>
    </ul>
  </div> -->

  <div class="contentPainel">
    <input type="hidden" id="pag" value="Dashboard Financeiro" />

    <!-- Painel  -->
    <div class="div_d_painel">
      <div class="painelDash" style="background: #6c757d; width: 100%">
        <h2 class="font-500 font-pop font-sz24 cor-white">Vendas do Dia</h2>
        <h1 class="font-700 font-pop font-sz36 cor-black"></h1>
      </div>
      <div class="painelDash" style="background: #dee2e6; width: 100%">
        <h2 class="font-500 font-pop font-sz24 cor-grey-es">Vendas Mes</h2>
        <h1 class="font-700 font-pop font-sz36 cor-black"></h1>
      </div>
      <div class="painelDash" style="background: #ced4da; width: 100%">
        <h3 class="font-500 font-pop font-sz24 cor-grey-es">
          Vendas Mes Anterior
        </h3>
        <h1 class="font-700 font-pop font-sz36 cor-black"></h1>
      </div>
      <div class="painelDash" style="background: #dee2e6; width: 100%">
        <h3 class="font-500 font-pop font-sz24 cor-grey-es">
          Projeção Vendas %
        </h3>
        <h1 class="font-700 font-pop font-sz36 cor-black"></h1>
      </div>
      <div class="painelDash" style="background: #6c757d; width: 100%">
        <h2 class="font-500 font-pop font-sz24 cor-white">
          Média Vendas Diária
        </h2>
        <h1 class="font-700 font-pop font-sz36 cor-black"></h1>
      </div>
    </div>

    <!-- Graficos -->
    <!-- <div class="contentGrafico">
      <div class="graficos">
        <img src="" />
      </div>
      <div class="graficos">
        <img src="" />
        <hr
          style="
            margin: 0.2em 0.2em;
            border: 1px solid rgba(238, 147, 10, 0.925);
            max-width: 100%;
          "
        />
        <img src="" />
      </div>
    </div> -->
    
  </div>
</template>

<script setup>
import { useCart } from "../composables/useCart.js";
const { productsCart, cart } = useCart();
// const {cart} = useCart();
</script>

<style scoped>
/* Dashboard  FINANCEIRO*/
.contentPainel {
  display: flex;
  flex-flow: column nowrap;
  flex: 1;
  height: 70%;
  margin-top: 1%;
}
.div_d_painel {
  display: flex;
  flex-flow: row wrap;
  flex: 1;
  height: 50%;
  align-items: center;
  justify-content: center;
}
.painelDash {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  width: 250px !important;
  height: 140px;
  padding: 8px 8px;
  margin: 2px 8px;
  text-align: center;
}
.contentGrafico {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  margin: 1px 7px;
}
.graficos {
  flex: 70%;
  text-align: center;
  align-self: center;
  justify-content: center;
  position: initial;
  padding: 5px 5px;
  margin: 5px 5px;
  border: 1px solid #ddd;
}
.graficos img {
  width: auto;
  height: auto;
}
.painelcontrolform {
  display: flex;
  width: 100%;
  max-height: 8%;
  padding: 1px 1px;
  justify-content: space-around;
  background: #adb5bd;
}
</style>