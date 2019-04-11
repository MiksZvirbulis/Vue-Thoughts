<template>
    <div>
        <h3>Logging out...</h3>
    </div>
</template>

<script>
import axios from 'axios'
import { mapActions, mapState } from 'vuex'

export default {
    name: "logout",
    computed: {
        ...mapState(['auth'])
    },
    methods: {
        ...mapActions(['logoutUser'])
    },
    created() {
        if (this.auth.loggedIn === true) {
            this.logoutUser()
        }
        this.$router.push("/login")
    }
}
</script>