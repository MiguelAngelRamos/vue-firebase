<script setup>
  import { useForm, useField } from 'vee-validate';
  import { loginSchema as validationSchema } from '../validation/loginSchema';
  import { useAuthStore } from '@/stores/auth';

  const { handleSubmit } = useForm({validationSchema});
  const email = useField('email')
  const password = useField('password')

  const auth = useAuthStore();

  const submit = handleSubmit((values) => {
    // console.log(values);
    // const { email, password } = values;
    auth.login(values);
  });

</script>

<template>
  <v-card flat max-width="500" class="mx-auto my-10">
    <v-card-title class="text-center text-h4 font-weight-bold" tag="h4">Iniciar Sesión</v-card-title>
    <v-alert v-if="auth.hasError" :title="auth.errorMsg" type="error" color="error" icon="$error"></v-alert>
 
    <v-form>
      <v-text-field type="email" label="Email" class="mb-3" v-model="email.value.value" :error-messages="email.errorMessage.value"/>
      <v-text-field type="password" label="Password" v-model="password.value.value" :error-messages="password.errorMessage.value"/>
      <v-btn block color="deep-purple-darken-3" @click="submit">Iniciar Sesión</v-btn>
    </v-form>
  </v-card>
</template>


<style scoped>
</style>