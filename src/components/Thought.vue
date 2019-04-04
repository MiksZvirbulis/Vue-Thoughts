<template>
    <div>
        <div id="thought">
            <div class="title">{{ thought.title }}</div>
            <form v-if="editMode" @submit.prevent="noForm">
                <textarea v-model="editedContent"></textarea>
                <div class="actions">
                    <button type="button" class="small cancel" @click="editToText(false)">Discard</button>
                    <button type="button" class="small delete" @click="deleteThought">Delete</button>
                    <button type="button" class="small save" @click="saveThought">Save</button>
                </div>
            </form>
            <div v-else class="content" v-on:dblclick="textToEdit">{{ editedContent }}</div>

            <div class="date">{{ stampToDate(thought.date) }}</div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'

export default {
    name: 'Thought',
    props: ['thought'],
    data() {
        return {
            editMode: false,
            editedContent: this.thought.content
        }
    },
    methods: {
        ...mapActions(['removeThought', 'editThought']),
        stampToDate: timestamp => {
            const date = new Date(timestamp)
            return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
        },
        deleteThought: function() {
            const confirmDelete = confirm("Are you sure you want to delete this thought?")

            if (confirmDelete === true) {
                this.removeThought(this.thought.id)
            }
        },
        saveThought: function() {
            this.editThought({
                ...this.thought,
                content: this.editedContent
            })
            this.editToText(this.editedContent)
        },
        textToEdit: function() {
            this.editMode = true
        },
        editToText: function(newContent = false) {
            this.editMode = false
            this.editedContent = newContent ? newContent : this.thought.content
        },
        noForm: function() {
            return false
        }
    }
}
</script>

<style lang="scss" scoped>
#thought {
    display: flex;
    flex-direction: column;
    border: 2px solid #efe1c9;
    background-color: #f97f63;
    color: #ffffff;
    width: 250px;
    padding: 20px;
    margin: 10px;
    border-radius: 4px;
    height: 300px;

    textarea {
        font-size: 12px;
    }

    div {
        margin: 10px 0 10px 0;
    }

    .title {
        text-transform: uppercase;
        font-weight: bold;
    }

    .content {
        padding: 15px 0 15px 0;
    }

    .date {
        font-weight: bold;
    }

    form {
        display: flex;
        flex-direction: column;
    }

    form .actions {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }

    form .actions button {
        margin: 0 3px;
    }
    
}
</style>