<template>
    <div id="signup">
        <form novalidate="true" @submit="validateForm">
            <h3>Signup</h3>

            <p v-if="errors.length">
                <ul id="errors">
                    <li v-bind:key="error" v-for="error in errors">― {{ error }}</li>
                </ul>
            </p>

            <label for="email">Email</label>
            <input type="text" id="email" name="email" v-model="email" placeholder="Your email address..." />

            <label for="password">Password</label>
            <input type="password" id="password" name="password" v-model="password" placeholder="Password here..."/>

            <button>Signup</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'

export default {
    name: "signup",
    data() {
        return {
            email: null,
            password: null,
            errors: []
        }
    },
    methods: {
        ...mapActions(['signupUser']),
        validateForm: function (e) {
            e.preventDefault()
            this.errors = []

            const email = this.email
            const password = this.password

            if (!email) {
                this.errors.push("Email has been left empty!")
            }

            if (!password) {
                this.errors.push("Password has been left empty!")
            } else {
                if (password.length <= 8) {
                    this.errors.push("The password should be longer than 8 characters!")
                } else if (password.length >= 25) {
                    this.errors.push("The password should be no longer than 25 characters!")
                }
            }

            if (!this.errors.length) {
                const data = { email, password, signedUpDate: new Date().toUTCString() }
                this.signupUser(data)
                this.$router.push("/login")
            }
        }
    }
}
</script>

<style lang="scss">
#signup {
    display: flex;
    background-color: #f97f63;
    margin: 100px auto;
    padding: 20px 20px 0 20px;
    width: 1000px;
    justify-content: center;
    flex-direction: row;
    font: inherit;

    @media screen and (max-width: 360px) {
        width: 300px;
        font-size: 14px;
    }

    @media screen and (min-width: 361px) and (max-width: 768px) {
        width: 500px;
    }

    @media screen and (min-width: 770px) and (max-width: 1024px) {
        width: 780px;
    }

    h3 {
        display: flex;
        justify-content: center;
    }
}
</style>
