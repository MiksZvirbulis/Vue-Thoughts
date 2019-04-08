import axios from 'axios'

const API_URL = 'http://mikscode.com/api/thoughts'

const state = {
    userId: null,
    loggedIn: false
}

const getters = { }

const actions = {
    async signupUser({ commit }, user) {
        const response = await axios.post(`${API_URL}/signup`, user)
        if (response.status === 200) {
            commit('newUser', response.data)
        } else {
            console.log(response.error)
        }
    },
    async loginUser({ commit }, user) {
        const response = await axios.post(`${API_URL}/login`, user)
        if (response.status === 200) {
            commit('authUser')
            return true
        } else if (response.status === 401) {
            commit('authUserFailed')
            return false
        } else {
            commit('authUserFailed')
            return false
        }
    }
}

const mutations = {
    newUser: (state, userId) => ( state.userId = userId ),
    authUser: (state) => ( state.loggedIn = true ),
    authUserFailed: (state) => ( state.loggedIn = false )
}

export default { state, getters, actions, mutations }