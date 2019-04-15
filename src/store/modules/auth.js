import axios from 'axios'

const API_URL = 'http://mikscode.com/api/thoughts'

const state = {
    error: null,
    userId: null,
    loggedIn: false
}

const getters = { }

const actions = {
    async signupUser({ commit }, user) {
        commit('resetError')
        try {
            const response = await axios.post(`${API_URL}/signup`, user)
            if (response.status === 200) {
                return true
            } else {
                return false
            }
        } catch (error) {
            commit('setError', error)
        }
    },
    async loginUser({ commit }, user) {
        commit('resetError')
        try {
            const response = await axios.post(`${API_URL}/login`, user)
            if (response.status === 200) {
                commit('authUser', response.data)
                return true
            } else {
                commit('setError', response.data)
                commit('authUserFailed')
                return false
            }
        } catch (error) {
            commit('setError', error.response.data)
            return false
        }
    },
    logoutUser({ commit }) {
        commit('resetError')
        commit('authUserFailed')
    },
    async loggedIn({ commit }) {
        commit('resetError')
        if (localStorage.getItem('token') && localStorage.getItem('userId')) {
            const userData = {
                userId: localStorage.getItem('userId'),
                token: localStorage.getItem('token')
            }
            try {
                const response = await axios.post(`${API_URL}/checkUser`, userData)
                if (response.status === 200) {
                    commit('loggedInSuccess', userData.userId)
                    return true
                } else {
                    commit('loggedInFail')
                    return false
                }
            } catch (error) {
                commit('setError', error)
                return false
            }
        } else {
            commit('loggedInFail')
            return false
        }
    }
}

const mutations = {
    resetError: (state) => ( state.error = null ),
    setError: (state, error) => ( state.error = error),
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