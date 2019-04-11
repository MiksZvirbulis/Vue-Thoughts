import axios from 'axios'

const API_URL = 'http://mikscode.com/api/thoughts'

const state = {
    errors: [],
    userId: null,
    loggedIn: false
}

const getters = { }

const actions = {
    async signupUser({ commit }, user) {
        const response = await axios.post(`${API_URL}/signup`, user)
        if (response.status === 200) {
            commit('newUser')
        } else {
            console.log(response.error)
        }
    },
    async loginUser({ commit }, user) {
        const response = await axios.post(`${API_URL}/login`, user)
        if (response.status === 200) {
            commit('authUser', response.data)
            return true
        } else if (response.status === 401) {
            commit('authUserFailed')
            return false
        } else {
            commit('authUserFailed')
            return false
        }
    },
    logoutUser({ commit }) {
        commit('authUserFailed')
    },
    async loggedIn({ commit }) {
        if (localStorage.getItem('token') && localStorage.getItem('userId')) {
            const userData = {
                userId: localStorage.getItem('userId'),
                token: localStorage.getItem('token')
            }
            const response = await axios.post(`${API_URL}/checkUser`, userData)
            if (response.status === 200) {
                commit('loggedInSuccess', userData.userId)
                return true
            } else {
                commit('loggedInFail')
                return false
            }
        } else {
            commit('loggedInFail')
            return false
        }
    }
}

const mutations = {
    newUser: (state) => ( state.errors = [] ),
    authUser: (state, userData) => {
        state.loggedIn = true
        state.userId = userData.userId
        localStorage.setItem('userId', userData.userId)
        localStorage.setItem('token', userData.token)
    },
    authUserFailed: state => {
        state.loggedIn = false
        state.userId = null
        localStorage.removeItem('userId')
        localStorage.removeItem('token')
    },
    loggedInSuccess: (state, userId) => {
        state.loggedIn = true
        state.userId = userId
    },
    loggedInFail: state => {
        state.loggedIn = false
        state.userId = null
    }
}

export default { state, getters, actions, mutations }