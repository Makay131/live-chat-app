<template>
    <form>
        <textarea placeholder="Type a message and press enter" v-model="message"
            @keypress.enter.prevent="handleSubmit"></textarea>
        <div class="error">{{ error }}</div>
    </form>
</template>

<script>
import { ref } from 'vue'
import getUser from '@/helpers/getUser';
import useCollection from '@/helpers/useCollection';
import { timestamp } from '@/firebase/config';

export default {
    setup() {
        const { user } = getUser();
        const { addDoc, error } = useCollection('messages')

        const message = ref('');
        const handleSubmit = async () => {
            const chat = {
                message: message.value,
                name: user.value.displayName,
                createdAt: timestamp()
            }

            await addDoc(chat)
            if (!error.value)
                message.value = '';
        }

        return { message, handleSubmit, error }
    }
}
</script>

<style scoped>
form {
    margin: 10px;
}

textarea {
    width: 100%;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 10px;
    box-sizing: border-box;
    border: 0;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
}
</style>