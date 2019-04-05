<template>
    <div id="addThought">
        <form novalidate="true" @submit="validateForm">
            <h3>Add Thought</h3>

            <p v-if="errors.length">
                <ul id="errors">
                    <li v-bind:key="error" v-for="error in errors">― {{ error }}</li>
                </ul>
            </p>

            <label for="title">Title</label>
            <input type="Text" id="title" name="title" v-model="title" placeholder="Summarise your Thought" />

            <label for="content">Thought</label>
            <textarea id="content" name="content" v-model="content" placeholder="What's on your mind?"></textarea>

            <button>Add Thought</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'

export default {
    name: "addThought",
    data() {
        return {
            title: null,
            content: null,
            errors: []
        }
    },
    methods: {
        ...mapActions(['addThought']),
        validateForm: function (e) {
            e.preventDefault()
            this.errors = []

            const title = this.title
            const content = this.content

            if (!title) {
                this.errors.push("Title has been left empty!")
            } else {
                if (title.length <= 3) {
                    this.errors.push("The title should be longer than 3 characters!")
                } else if (title.length >= 50) {
                    this.errors.push("Title should be no longer than 50 characters!")
                }
            }

            if (!content) {
                this.errors.push("Thought has been left empty!")
            } else {
                if (content.length <= 5) {
                    this.errors.push("The content should be longer than 5 characters!")
                } else if (content.length >= 300) {
                    this.errors.push("The content should be no longer than 300 characters!")
                }
            }

            if (!this.errors.length) {
                const data = { title, content, date: new Date().toUTCString(), lastUpdated: new Date().toUTCString() }
                this.addThought(data)
                this.$router.push("/") 
            }
        }
    }
}
</script>

<style lang="scss">
#addThought {
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
