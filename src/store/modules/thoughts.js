import axios from 'axios'

const API_URL = 'http://mikscode.com/api/thoughts'

const state = {
    thoughts: []
}

const getters = {
    listThoughts: state => state.thoughts
}

const actions = {
    async fetchThoughts({ commit }) {
        const response = await axios.get(`${API_URL}/list`)
        if (response.status === 200) {
           commit('setThoughts', response.data)
        } else {
            console.log(response.error)
        }
    },
    async addThought({ commit }, thought) {
        const response = await axios.post(`${API_URL}/add`, thought)
        if (response.status === 200) {
            commit('newThought', {
                ...thought,
                id: response.data
            })
        } else {
            console.log(response.error)
        }
    },
    async removeThought({ commit }, thoughtId) {
        const response = await axios.delete(`${API_URL}/delete/${thoughtId}`)
        if (response.status === 200) {
            commit('deleteThought', thoughtId)
        } else {
            console.log(response.error)
        }
    },
    async editThought({ commit }, editedThought) {
        const response = await axios.put(`${API_URL}/update/${editedThought.id}`, editedThought)
        if (response.status === 200) {
            commit('updateThought', editedThought)
        } else {
            console.log(response.error)
        }
    }
}

const mutations = {
    setThoughts: (state, thoughts) => (state.thoughts = thoughts),
    newThought: (state, newThought) => state.thoughts.unshift(newThought),
    deleteThought: (state, thoughtId) => (state.thoughts = state.thoughts.filter(thought => thought.id !== thoughtId)),
    updateThought: (state, updatedThought) => {
        const thoughtIndex = state.thoughts.findIndex(thought => thought.id === updatedThought.id)
        state.thoughts[thoughtIndex] = updatedThought
    }
}

export default { state, getters, actions, mutations }