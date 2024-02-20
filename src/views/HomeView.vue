<script setup>
import { ref, reactive, computed, onMounted } from "vue";
import SlidePanelModal from "../components/shared/SlidePanelModel.vue";
import { useCart } from "../composables/useCart.js";
const { productsCart, addCart, cart } = useCart();

// config model cart
const cartVisible = ref(false);
// open modal
const changeCartVisibility = () => {
  cartVisible.value = !cartVisible.value;
  //console.log(cartVisible.value);
};
</script>

<template>
  <section>
    <div class="titleCard">
      <div>
        <h1>Shopping</h1>
      </div>
      <div>
        <button class="btn btn-warning" @click="changeCartVisibility()">
          cart
        </button>
      </div>
    </div>
   
    <ul class="p-card">
      <li v-for="product in productsCart" :key="product.id">
        <div class="card card2 mt-0 mb-0" style="width: 18rem">
          <img :src=product.image  alt="..." />
          <div class="card-body">
            <h6 class="card-title">{{ product.title }}</h6>
             <h5 class="mt-0 mb-0">Valor R$ {{ product.price }}</h5>
            <p>Código: 789000{{ product.id }}</p>
             <button class="btn btn-primary btn" @click="addCart(product)">
            Comprar
          </button>
          </div>
        </div>
      </li>
    </ul>
    
    <SlidePanelModal
      title="Cart"
      :visible="cartVisible"
      @update:visible="changeCartVisibility()"
    >
    </SlidePanelModal>

  </section>
</template>

<style>
section {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 100%;
  z-index: 0;
}
.card2 {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  width: 240px;
   height: 380px;
  /*height: 200px; */
  margin: 10px 10px !important;
  padding: 10px;
  border-radius: 1rem;
  box-sizing: border-box;
  text-align: center;
  align-items: center;
  cursor: pointer;
}
.card:hover {
  /* background-color: var(--text-orange); */
  transition: 0.3s ease-out;
  width: 280px;
  height: 400px;
}
.p-card {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  justify-content: center !important;
}

ul li {
  list-style: none;
}

.limit {
  height: 160px;
  overflow-x: auto;
  margin: 1px;
  text-align: inherit;
}

.titleCard {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  padding: 15px 15px;
  width: 100%;
}
img{
  width: 90%;
  height: 60%;
  position: inherit;
  top:10px
}
@media screen and (max-width:700px){
    :root{
     font-size: 76%;
    } 

.card2 {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  width: 200px;
   height: 320px;
   }
   .card:hover {
  /* background-color: var(--text-orange); */
  transition: 0.3s ease-out;
  width: 210px;
  height: 330px;
}
}
</style>