import axios from 'axios'

const API_URL = 'http://mikscode.com/api/thoughts'

const state = {
    thoughts: [],
    error: null
}

const getters = {
    listThoughts: state => state.thoughts
}

const actions = {
    async fetchThoughts({ commit }, userId) {
        commit('resetError')
        try {
            const token = localStorage.getItem('token') ? localStorage.getItem('token') : ""
            const response = await axios.get(`${API_URL}/list/${userId}`, { headers: {"Token" : token }})
            if (response.status === 200) {
            commit('setThoughts', response.data)
            } else {
                commit('setError', response.error.message)
            }
        } catch (error) {
            commit('setError', error)
        }
    },
    async addThought({ commit }, thought) {
        commit('resetError')
        try {
            const token = localStorage.getItem('token') ? localStorage.getItem('token') : ""
            const response = await axios.post(`${API_URL}/add`, thought, { headers: {"Token" : token }})
            if (response.status === 200) {
                commit('newThought', {
                    ...thought,
                    id: response.data
                })
            } else {
                commit('setError', response.error.message)
            }
        } catch (error) {
            commit('setError', error)
        }
    },
    async removeThought({ commit }, data) {
        commit('resetError')
        try {
            const token = localStorage.getItem('token') ? localStorage.getItem('token') : ""
            const response = await axios.post(`${API_URL}/delete/${data.thoughtId}`, { userId: data.userId }, { headers: {"Token" : token }})
            if (response.status === 200) {
                commit('deleteThought', data.thoughtId)
            } else {
                commit('setError', response.error.message)
            }
        } catch (error) {
            commit('setError', error)
        }
    },
    async editThought({ commit }, editedThought) {
        commit('resetError')
        try {
            const token = localStorage.getItem('token') ? localStorage.getItem('token') : ""
            const response = await axios.put(`${API_URL}/update/${editedThought.id}`, editedThought, { headers: {"Token" : token }})
            if (response.status === 200) {
                commit('updateThought', editedThought)
            } else {
                commit('setError', response.error.message)
            }
        } catch (error) {
            commit('setError', error)
        }
    }
}

const mutations = {
    resetError: (state) => ( state.error = null ),
    setError: (state, error) => ( state.error = error),
    setThoughts: (state, thoughts) => (state.thoughts = thoughts),
    newThought: (state, newThought) => state.thoughts.unshift(newThought),
    deleteThought: (state, thoughtId) => (state.thoughts = state.thoughts.filter(thought => thought.id !== thoughtId)),
    updateThought: (state, updatedThought) => {
        const thoughtIndex = state.thoughts.findIndex(thought => thought.id === updatedThought.id)
        state.thoughts[thoughtIndex] = updatedThought
    }
}

export default { state, getters, actions, mutations }