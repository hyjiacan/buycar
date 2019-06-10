import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        pass: [],
        fail: []
    },
    mutations: {
        passItem(state, index) {
            let idx = state.fail.indexOf(index)
            if (idx !== -1) {
                state.fail.splice(idx, 1)
            }
            if (state.pass.indexOf(index) === -1) {
                state.pass.push(index)
            }
        },
        failItem(state, index) {
            let idx = state.pass.indexOf(index)
            if (idx !== -1) {
                state.pass.splice(idx, 1)
            }
            if (state.fail.indexOf(index) === -1) {
                state.fail.push(index)
            }
        }
    },
    actions: {}
})
