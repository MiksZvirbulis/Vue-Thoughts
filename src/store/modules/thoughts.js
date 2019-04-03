import axios from 'axios'

const state = {
    thoughts: []
}

const getters = {
    listThoughts: state => state.thoughts
}

const actions = {
    async fetchThoughts({ commit }) {
        const response = await axios.get('http://mikscode.com/api/thoughts/list')
        if (response.status === 200) {
           commit('setThoughts', response.data)
        } else {
            console.log(response.error)
        }
    },
    async addThought({ commit }, thought) {
        const response = await axios.post("http://mikscode.com/api/thoughts/add", thought)
        if (response.status === 200) {
            commit('newThought', thought)
        } else {
            console.log(response.error)
        }
    },
    async removeThought({ commit }, thoughtId) {
        const response = await axios.delete(`http://mikscode.com/api/thoughts/delete/${thoughtId}`)
        if (response.status === 200) {
            commit('deleteThought', thoughtId)
        } else {
            console.log(response.error)
        }
    }
}

const mutations = {
    setThoughts: (state, thoughts) => (state.thoughts = thoughts),
    newThought: (state, newThought) => state.thoughts.unshift(newThought),
    deleteThought: (state, thoughtId) => (state.thoughts = state.thoughts.filter(thought => thought.id !== thoughtId))
}

export default { state, getters, actions, mutations }