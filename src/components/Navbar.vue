<template>
    <nav v-if="user">
        <div>
            <p>Username: {{ user.displayName }}</p>
            <p>Logged in via: {{ user.email }}</p>
        </div>
        <button @click="handleLogout">Logout</button>
    </nav>
</template>

<script>
import useLogout from '@/helpers/useLogout';
import getUser from '@/helpers/getUser';
export default {
    setup() {
        const { logout, error } = useLogout();
        const { user } = getUser();

        const handleLogout = async () => {
            await logout();
            if (!error.value) {
                //console.log('user logged out')
            }
        }

        return { error, handleLogout, user }
    }
}
</script>

<style></style>