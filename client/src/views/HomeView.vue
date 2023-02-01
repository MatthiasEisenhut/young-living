<template>
  <div>
    <q-responsive :ratio="1.777">
      <q-carousel
        :autoplay="autoplay"
        v-model="slide"
        infinite
        animated
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = 0"
        @mouseleave="autoplay = 4000"
      >
        <q-carousel-slide :name="1" img-src="../assets/slideshow/1.jpg"></q-carousel-slide>
        <q-carousel-slide :name="2" img-src="../assets/slideshow/2.jpg"></q-carousel-slide>
        <q-carousel-slide :name="3" img-src="../assets/slideshow/3.jpg"></q-carousel-slide>
        <q-carousel-slide :name="4" img-src="../assets/slideshow/4.jpg"></q-carousel-slide>
        <q-carousel-slide :name="5" img-src="../assets/slideshow/5.jpg"></q-carousel-slide>
      </q-carousel>
    </q-responsive>
    <div class="q-pa-md row justify-center q-gutter-md">
      <q-card class="my-card" v-for="a in articles" :key="a.id">
        <q-img
          width="300px"
          height="300px"
          :src="`http://localhost:3000/images/articles/${a.image}`"
        />

        <q-card-section class="card-title-box">
          <div class="text-h6 text-primary" v-html="a.title"></div>
        </q-card-section>

        <q-card-section class="q-pt-none"> {{ a.text.substring(0, 150) }}... </q-card-section>

        <q-card-section class="q-pt-none text-primary text-bold" style="text-align: right"
          ><q-btn unelevated @click="openDialog(a.id)">READ MORE...</q-btn></q-card-section
        >
      </q-card>
    </div>
    <ArticleDialog :article="article" v-model:toggle="toggle"></ArticleDialog>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useArticleStore } from '@/stores/articles.js';
import ArticleDialog from '@/components/ArticleDialog.vue';

const articles = ref([]);

const articleStore = useArticleStore();

onMounted(async () => {
  await articleStore.getArticles();
  articles.value = articleStore.articles;
});

console.log(articles.value);

const slide = ref(1);
const autoplay = ref(4000);
const toggle = ref(false);

const article = ref();

const openDialog = (id) => {
  article.value = articles.value.find((a) => a.id == id);
  articleStore.article = article;
  toggle.value = !toggle.value;
  console.log(article.value);
};
</script>

<style lang="sass">
.my-card
  width: 300px
  height: 530px
.card-title-box
  height: 80px
</style>
