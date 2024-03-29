import { ref, reactive, onMounted } from 'vue'
import http from "@/Services/api.js";

const productsCart = ref([]);
const cart = ref([]);

http
  .get("/products")
  .then((result) => {
    productsCart.value = result.data;
    //  console.log(result.data);
  })
  .catch((err) => {
    console.log("error");
  });

export const useCart = () => {

  function addCart(productsCart) {
    const inCart = cart.value.some(obj => obj.id === productsCart.id);
    if (!inCart) {
      cart.value.push(productsCart);
      alert('Produto: ' + productsCart.title + ' ,Inserido no Carrinho')
    }
  }

  function removeCart(id) {
    const index = cart.value.findIndex(obj => obj.id === id);
    cart.value.splice(index, 1);
    alert('Produto Removido no Carrinho')
  }

  const sumItensCart = () => {
    return cart.value.length;
  }

  const calculateTotal = () => {
    return cart.value.reduce((acc, item) => acc + item.price, 0);
  };

  function LimparCart() {
    this.cart = [];
  }

  return {
    productsCart,
    cart,
    addCart,
    removeCart,
    LimparCart,
    calculateTotal,
    sumItensCart
  }
}