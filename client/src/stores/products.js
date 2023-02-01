import { defineStore } from 'pinia';
import axios from 'axios';

export const useProductsStore = defineStore('products', {
  state: () => {
    return {
      products: [],
    };
  },
  actions: {
    async getProducts() {
      try {
        const { data } = await axios.get('http://localhost:3000/products');
        this.products = data;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
