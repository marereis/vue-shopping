<template>
  <section>
    <h3>Comprovante de Venda</h3>
    <div ref="content" class="content" id="content">
      <table class="table" id="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col" style="width: 420px">Produtos</th>
            <th scope="col">Qtda</th>
            <th scope="col">Preço R$</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="product in cart" :key="product.id">
            <td><img :src="product.image" alt="..." /></td>
            <td style="max-width: 420px">{{ product.title }}</td>
            <td> 1 </td>
            <td>R$ {{ product.price }}</td>
          </tr>
        </tbody>
      </table>

      <hr />

      <table class="table table-sm" id="resume">
        <thead>
          <tr>
            <th colspan="2">Resumo da compra</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sub-total</td>
            <td>{{ calculateTotal()}}</td>
          </tr>
          <tr>
            <td>Frete</td>
            <td>Gratuito</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>{{ calculateTotal()}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <button class="btn btn-primary" @click="geraPdf()">Imprimir</button>
  </section>
</template>

<script setup>
import { useCart } from "../composables/useCart.js";
const { productsCart, addCart, cart, removeCart, calculateTotal, sumItensCart } = useCart();
import { ref, reactive, computed, onMounted } from "vue";
import jsPDF from "jspdf";
import "jspdf-autotable";


async function geraPdf() {
  const doc = jsPDF("p", "pt", "letter");

   var comprovante = " Comprovante  de Venda ";

  doc.text(comprovante, 200, 30, {
    width: 200,
  });

  doc.autoTable({ html: "#table" });

  doc.autoTable({ html: "#resume" });

  doc.save("comprovanteVenda.pdf");

 }
</script>

<style lang="scss" scoped>
section {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 100%;
  z-index: 0;
  background-color: #afa8a8;
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

aside {
  margin-left: 30px;
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
  color: white;
  background: #28a745;
  display: block;
  width: 100%;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 16px;
}

aside > button:hover {
  background: #3bc55b;
}
</style>