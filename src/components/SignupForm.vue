<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" required placeholder="display name" v-model="displayName">
    <input type="email" required placeholder="email" v-model="email">
    <input type="password" required placeholder="password" v-model="password">
    <div class="error">{{ error }}</div>
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useSignup from '@/helpers/useSignup'
export default {
  setup(props, context) {
    const displayName = ref('')
    const password = ref('')
    const email = ref('')

    const { error, signup } = useSignup();

    const handleSubmit = async () => {
      await signup(email.value, password.value, displayName.value)
      if (!error.value)
        context.emit('signup')
    }

    return { displayName, password, email, handleSubmit, error }
  }
}
</script>


<style scoped></style>
