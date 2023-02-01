import { defineStore } from 'pinia';
import axios from 'axios';

export const useArticleStore = defineStore('articles', {
  state: () => {
    return {
      articles: [],
    };
  },
  actions: {
    async getArticles() {
      try {
        const { data } = await axios.get('http://localhost:3000/articles');
        console.log(data);
        this.articles = data;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
