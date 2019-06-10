import Vue from 'vue'
import Vuex from 'vuex'
import storage from "./assets/storage";

Vue.use(Vuex)

const store = {
    state: {
        pass: storage.getItem('pass'),
        fail: storage.getItem('fail')
    },
    getters: {
        getPass() {
            return storage.getItem('pass')
        },
        getFail() {
            return storage.getItem('fail')
        }
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
            storage.setItem('pass', state.pass)
            storage.setItem('fail', state.fail)
        },
        failItem(state, index) {
            let idx = state.pass.indexOf(index)
            if (idx !== -1) {
                state.pass.splice(idx, 1)
            }
            if (state.fail.indexOf(index) === -1) {
                state.fail.push(index)
            }
            storage.setItem('pass', state.pass)
            storage.setItem('fail', state.fail)
        },
        reset(state) {
            state.pass = []
            state.fail = []
            storage.setItem('pass', state.pass)
            storage.setItem('fail', state.fail)
        }
    },
    actions: {}
}

export default new Vuex.Store(store)
