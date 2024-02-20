<template>
  <div class="panel-wrap" :class="{ visible: visible }">
    <div class="panel">
      <div class="titleCard">
        <div>
          <h2>{{ title }}</h2>
        </div>
        <div>
          <button class="btn btn-danger error--outline" @click="closePanel()">
            Close
          </button>
        </div>
      </div>
      <slot name="content">
        <table class="table table-dark table-striped-columns">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col" style="width: 420px">Produtos</th>
              <th scope="col">Qtda</th>
              <th scope="col">Preço R$</th>
              <th scope="col"></th>
            </tr>
          </thead>
         
          <tbody>
            <tr v-for="product in cart" :key="product.id">
              <td><img :src="product.image" alt="..." /></td>
              <td style="max-width: 420px">{{ product.title }}</td>
              <td>
                <div class="qty">
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </div>
              </td>
              <td class="priceTotal" >{{ product.price }}</td>
              <td>
                <button
                  class="btn btn-primary btn2"
                  @click="removeCart(product.id)"
                >
                  Remover
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <hr />
       <aside>
          <div class="box">
            <header>Resumo da compra</header>
            <div class="info">
              <div><span>Sub-total</span><span>R$ 418</span></div>
              <div><span>Frete</span><span>Gratuito</span></div>
              <div>
                <button>
                  Adicionar cupom de desconto
                  <i class="bx bx-right-arrow-alt"></i>
                </button>
              </div>
            </div>
            <footer>
              <span>Total</span>
              <span>R$ 418</span>
            </footer>
          </div>
          <button><router-link to="/compras">Finalizar Compra</router-link></button>
        </aside>
      </slot>
    </div>
   </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { useCart } from "../../composables/useCart.js";
const { productsCart, addCart, cart, removeCart } = useCart();
import { ref, reactive, computed, onMounted } from "vue";

// const total = ref();
// const totalPrice = ref([]);
// const sumCart = reactive([]);

// const listaCart = ()=>{
//   total == cart.value;
//   return total
// }

// alert(Array.isArray(total));

let tdsValores = document.querySelectorAll('.priceTotal');

const numeros =  [0,100,20,10];
let soma = 0;
for (let n of numeros) {
soma  += n;
}
console.log(soma);

// props
defineProps({
  title: {
    type: String,
    required: true,
  },
  visible: {
    type: Boolean,
    required: true,
  },
});
// props visible como emit
const emit = defineEmits(["update:visible"]);
//function close
const closePanel = () => {
  emit("update:visible", false);
};


</script>

<style lang="scss" scoped>
.panel {
  display: flex;
  flex-flow: column nowrap;
  position: absolute;
  top: 46px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #333;
  color: #eee;
  overflow: auto;
  padding: 1em;
  &-wrap {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    width: 60em;
    transform: translateX(100%);
    transition: 0.3s ease-out;
    &.visible {
      transform: translateX(0);
    }
  }
}
.titleCard {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  padding: 15px 15px;
  width: 100%;
}

img {
  width: 50px;
  height: 50px;
  position: inherit;
}
td {
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: wrap;
}

.qty {
  background: #eee;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  padding: 0 0;
  -ms-flex-pack: distribute;
      justify-content: space-around;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  min-width: 60px;
  border-radius: 20px;
  overflow: hidden;
  height: 30px;
}
.qty span {
  margin: 0 15px;
  color: #000;
}

.qty button {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  background: transparent;
  border: 0;
  padding: 0 10px;
  font-size: 20px;
  height: 100%;
}

.qty button:hover {
  background: #ddd;
}
aside {
  margin-left: 15px;
  font-size: 90%;
  width: 50%;
}

aside .box {
  margin-bottom: 15px;
  border: 1px solid #ccc;
  background: #eee;
  color: #222;
}

aside .box header {
  padding: 15px 20px;
  font-size: 18px;
  border-bottom: 1px solid #ccc;
}

aside .box .info {
  padding: 20px;
  font-size: 16px;
}

aside .box .info > div {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  margin-bottom: 10px;
  color: #555;
}

aside .box .info > div:last-child {
  margin: 0;
}

aside .box .info button {
  color: #28a745;
  background: transparent;
  border: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  font-size: 16px;
}

aside .box footer {
  padding: 15px 20px;
  background: #ddd;
  font-size: 18px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}

aside > button {
  border: 0;
  padding: 15px 0;
  background: #FF9800;
  display: block;
  width: 100%;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 20px;
  color: white !important;
}

aside > button:hover {
  background: #d37f00;
}



@media screen and (max-width:700px){
    :root{
     font-size: 60%;
    }   
    table{
        width: 95%;
        border: 1px solid #555555;
        margin: 1rem auto;
        padding: 0;
        font: 600 1.2rem Verdana;
    }

    .panel {
   flex-flow: row wrap;
  position: absolute;
     top: 80px;
    bottom: 0;
    right: 0;
    &-wrap {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    transform: translateX(100%);
    transition: 0.3s ease-out;
    &.visible {
      transform: translateX(0);
    }
  }
}
aside {
  font-size: 40%;
  width: 95%;
  margin: auto;
}
}

</style>