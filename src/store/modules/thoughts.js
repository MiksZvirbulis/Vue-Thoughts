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
    }
}

const mutations = {
    setThoughts: (state, thoughts) => (state.thoughts = thoughts)
}

export default { state, getters, actions, mutations }