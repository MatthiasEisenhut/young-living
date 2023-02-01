<template>
  <q-dialog v-model="loginDialogOpen">
    <div style="background-color: white; width: 500px" class="q-pa-sm">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
          filled
          v-model="firstName"
          label="Your first name *"
          hint="First name"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type your first name']"
        />

        <q-input
          filled
          v-model="lastName"
          label="Your last name *"
          hint="Last name"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type your last name']"
        />

        <q-input
          filled
          type="number"
          v-model="age"
          label="Your age *"
          lazy-rules
          :rules="[
            (val) => (val !== null && val !== '') || 'Please type your age',
            (val) => (val > 0 && val < 100) || 'Please type a real age',
          ]"
        />

        <q-toggle v-model="accept" label="I accept the license and terms" />

        <div>
          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
          <q-btn label="Close" color="negative" v-close-popup />
        </div>
      </q-form>
    </div>
  </q-dialog>
</template>

<script setup>
import { ref } from 'vue';
import { useVModel } from '@vueuse/core';
import { useUserStore } from '@/stores/user.js';
import { notifyWarning, notifySuccess } from '@/composables/notify.js';

const firstName = ref('');
const lastName = ref('');
const age = ref(null);
const accept = ref(false);

const userStore = useUserStore();
const user = userStore.user;

const onSubmit = () => {
  if (accept.value == false) {
    notifyWarning('You need to accept the license and terms first');
    return;
  } else {
    if (userStore.verifyUser(firstName.value, lastName.value)) {
      notifySuccess('Login successful');
      user.firstName = firstName.value;
      user.lastName = lastName.value;
      user.isLoggedIn = true;
      onReset();
    } else {
      notifyWarning('Login failed');
    }
  }
};

const onReset = () => {
  firstName.value = '';
  lastName.value = '';
  age.value = null;
  accept.value = false;
};

const props = defineProps({ showDialog: { type: Boolean, required: true, default: false } });
const emit = defineEmits(['update:showDialog']);
const loginDialogOpen = useVModel(props, 'showDialog', emit);
</script>
