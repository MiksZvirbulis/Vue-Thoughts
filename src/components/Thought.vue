<template>
    <div>
        <div id="thought">
            <form v-if="editMode" @submit.prevent="noForm">
                <input type="text" v-model="editedTitle"/>
                <textarea v-model="editedContent"></textarea>
                <div class="actions">
                    <button type="button" class="small cancel" @click="editToText(false)">Discard</button>
                    <button type="button" class="small delete" @click="deleteThought">Delete</button>
                    <button type="button" class="small save" @click="saveThought">Save</button>
                </div>
            </form>
            <div v-else>
                <div class="title" v-on:click="textToEdit">{{ editedTitle }}</div>
                <div class="content" v-on:click="textToEdit">{{ limitContent(editedContent, 220) }}</div>
            </div>

            <div class="date">Last Updated: {{ thought.lastUpdated.slice(0, -4) }}</div>
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
            editedContent: this.thought.content,
            editedTitle: this.thought.title
        }
    },
    methods: {
        ...mapActions(['removeThought', 'editThought']),
        limitContent: (content, limit) => {
            return (content.length >= limit) ? (content.substring(0, limit) + '...') : content;
        },
        deleteThought: function() {
            const confirmDelete = confirm("Are you sure you want to delete this thought?")

            if (confirmDelete === true) {
                this.removeThought(this.thought.id)
            }
        },
        saveThought: function() {
            if (this.editedContent !== this.thought.content || this.editedTitle !== this.thought.title) {
                this.editThought({
                    ...this.thought,
                    content: this.editedContent,
                    title: this.editedTitle,
                    lastUpdated: new Date().toUTCString()
                })
            }
            this.editToText(true)
        },
        textToEdit: function() {
            this.editMode = true
        },
        editToText: function(newContent = false) {
            this.editMode = false
            this.editedContent = newContent ? this.editedContent : this.thought.content
            this.editedTitle = newContent ? this.editedTitle : this.thought.title
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
        height: 150px;
    }

    div {
        margin: 10px 0 10px 0;
    }

    .title {
        text-transform: uppercase;
        font-weight: bold;
        cursor: pointer;
    }

    .content {
        padding: 15px 0 15px 0;
        cursor: pointer;
    }

    .date {
        font-size: 12px;
        display: flex;
        margin-top: auto;
    }

    form {
        display: flex;
        flex-direction: column;
    }

    form input {
        margin-bottom: 10px;
        font-size: 12px;
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