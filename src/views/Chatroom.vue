<template>
    <div class="container">
        <Navbar />
        <chat-window />
        <chat-form />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import getUser from '@/helpers/getUser';
import { watch } from 'vue';
import { useRouter } from 'vue-router';
import ChatForm from '@/components/ChatForm.vue';
import ChatWindow from '@/components/ChatWindow.vue';

export default {
    components: { Navbar, ChatForm, ChatWindow },
    setup() {
        const { user } = getUser();

        const router = useRouter();

        watch(user, () => {
            if (!user.value) router.push({ name: 'Welcome' })
        })
    }
}
</script>

<style>
nav {
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav p {
    margin: 2px auto;
    font-size: 16px;
    color: #444;
}

nav p.email {
    font-size: 14px;
    color: #999;
}
</style>