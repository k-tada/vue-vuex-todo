export default {
  namespaced: true,
  state: {
    nextId: 1,
    todos: [],
    isDoneAll: false
  },
  getters: {
    allTodos (state) {
      return state.todos
    },
    activeTodos (state) {
      return state.todos.filter(t => !t.isDone)
    },
    completedTodos (state) {
      return state.todos.filter(t => t.isDone)
    }
  },
  mutations: {
    addTodo (state, todo) {
      state.todos.push({ id: state.nextId, text: todo, isDone: false })
      state.nextId += 1
    },
    toggleTodo (state, id) {
      state.todos = state.todos.map(t => ({ ...t, isDone: t.id === id ? !t.isDone : t.isDone }))
      state.isDoneAll = state.todos.every(t => t.isDone)
    },
    toggleAllTodo (state, isDone) {
      state.todos = state.todos.map(t => ({ ...t, isDone }))
      state.isDoneAll = isDone
    },
    deleteTodo (state, id) {
      state.todos = state.todos.filter(t => t.id !== id)
    }
  },
  actions: {}
}
