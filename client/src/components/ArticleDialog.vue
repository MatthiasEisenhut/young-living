<template>
  <q-dialog v-model="openDialog">
    <q-card class="q-px-md q-py-md">
      <q-card-section horizontal>
        <q-card-section>
          <q-img
            :src="`http://localhost:3000/images/articles/${article.image}`"
            style="width: 10vw"
          />
        </q-card-section>
        <q-card-section class="q-mt-xl">
          <div class="text-h6" v-html="article.title"></div>
        </q-card-section>
      </q-card-section>
      <q-card-section>
        {{ article.text }}
      </q-card-section>
      <q-card-section horizontal>
        <q-card-section>
          <q-chip>
            <q-avatar icon="fa-regular fa-heart" class="text-negative"></q-avatar>
            <div class="text-body1">{{ article.likes }}</div>
          </q-chip>
        </q-card-section>
        <q-card-section class="q-mt-sm">{{ article.date }}</q-card-section>
      </q-card-section>
      <q-card-section style="text-align: right"
        ><q-btn unelevated outline color="primary" v-close-popup>OK</q-btn></q-card-section
      >
    </q-card>
  </q-dialog>
</template>

<script setup>
import { useVModel } from '@vueuse/core';

const props = defineProps({
  toggle: { type: Boolean, required: true, default: false },
  article: { type: Array, required: true },
});
const emit = defineEmits(['update:toggle']);
const openDialog = useVModel(props, 'toggle', emit);
</script>
