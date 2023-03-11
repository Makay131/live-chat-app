<template>
    <div class="welcome container">
        <p>welcome</p>
        <div v-if="showLogin">
            <login-form @login="enterChat" />
            <p>No account yet? <span @click="switchSignup">Signup</span> here</p>
        </div>
        <div v-else>
            <signup-form @signup="enterChat" />
            <p>Already have an account? <span @click="switchSignup">Login</span> here</p>
        </div>
    </div>
</template>
  
<script>

import SignupForm from '../components/SignupForm'
import LoginForm from '../components/LoginForm'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
    components: { SignupForm, LoginForm },
    setup() {
        const showLogin = ref(true);
        const router = useRouter();

        const switchSignup = () => showLogin.value = !showLogin.value;

        const enterChat = () => {
            router.push({ name: 'Chatroom' })
        }

        return { showLogin, switchSignup, enterChat }
    }
}
</script>
  
<style>
.welcome {
    text-align: center;
    padding: 20px 0;
}

/* form styles */
.welcome form {
    width: 300px;
    margin: 20px auto;
}

.welcome label {
    display: block;
    margin: 20px 0 10px;
}

.welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
}

.welcome span {
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
}

.welcome button {
    margin: 20px auto;
}
</style>