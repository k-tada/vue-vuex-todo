import firebase from 'firebase'

export default {
  namespaced: true,
  state: {
    user: null,
    error: ''
  },
  getters: {},
  mutations: {
    onError (state, error) {
      state.error = error
    },
    onUserChanged (state, user) {
      state.user = user
    }
  },
  actions: {
    async signIn ({ commit }, { email, password, router, redirectTo }) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => router.push(redirectTo))
        .catch(error => commit('onError', error.code))
    },
    async signOut ({ commit }, { router }) {
      firebase
        .auth()
        .signOut()
        .then(() => router.push('/login'))
        .catch(error => commit('onError', error.code))
    },
    async onAuthStateChanged ({ commit }) {
      firebase
        .auth()
        .onAuthStateChanged(user => commit('onUserChanged', user))
    },
    async signUp ({ commit }, { email, password, router }) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => router.push('/login'))
        .catch(error => commit('onError', error.code))
    }
  }
}
