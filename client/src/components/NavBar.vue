<template>
  <q-header elevated class="bg-white text-primary gt-xs" height-hint="98">
    <q-toolbar>
      <q-btn dense flat round icon="menu" @click="toggle = !toggle" />
      <q-toolbar-title class="text-center">
        <q-img
          src="/Young-Living-Logo.svg"
          alt="Logo"
          height="75px"
          width="260px"
          class="q-my-md"
        />
      </q-toolbar-title>
      <q-btn
        v-if="!user.isLoggedIn"
        @click="showDialog = true"
        class="text-primary q-mr-lg q-pa-md"
        dense
        flat
        >Please login
      </q-btn>
      <div v-else>
        <q-btn @click="user.isLoggedIn = false" flat class="text-primary q-mr-md">
          <div class="gt-xs">{{ userStore.userFullName }}</div>
          <q-icon class="q-ml-sm" size="1.1rem" name="fa-solid fa-key" />
        </q-btn>
        <q-btn class="text-primary q-mr-lg q-pa-md" dense flat icon="fa-solid fa-shopping-cart">
          <q-badge class="bg-negative q-pa-xs" floating>{{
            Math.round(Math.random() * 20)
          }}</q-badge>
        </q-btn>
      </div>
    </q-toolbar>
  </q-header>

  <q-header elevated class="bg-white text-primary lt-sm" height-hint="98">
    <q-toolbar>
      <q-btn dense flat round icon="menu" @click="toggle = !toggle" />
      <q-toolbar-title class="text-center">
        <q-img src="/Young-Living-Logo small.svg" alt="Logo" width="30px" class="q-my-sm" />
      </q-toolbar-title>
      <span>PLEASE LOGIN</span>
    </q-toolbar>
  </q-header>

  <SideBar v-model:toggle="toggle"></SideBar>
  <LoginDialog v-model:showDialog="showDialog"></LoginDialog>
</template>

<script setup>
import SideBar from '@/components/SideBar.vue';
import LoginDialog from '@/components/LoginDialog.vue';
import { ref } from 'vue';
import { useUserStore } from '@/stores/user.js';

const toggle = ref(false);
const showDialog = ref(false);

const userStore = useUserStore();
const user = userStore.user;
</script>
