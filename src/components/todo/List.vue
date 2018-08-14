<template>
  <div class="todos">
    <div class="todo" v-for="todo in todos" :key="todo.id">
      <input
        class="toggle"
        type="checkbox"
        :checked="todo.isDone"
        @click="toggleTodo(todo.id)"
      />
      <div class="text">{{todo.text}}</div>
      <div class="destroy" @click="deleteTodo(todo.id)">×</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'List',
  computed: mapGetters('todos', {
    todos: 'allTodos'
  }),
  methods: {
    toggleTodo (id) {
      this.$store.commit('todos/toggleTodo', id)
    },
    deleteTodo (id) {
      this.$store.commit('todos/deleteTodo', id)
    }
  }
}
</script>

<style scoped>
.todos {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #e6e6e6;
}

.todo {
  flex-shrink: 0;
  height: 58px;
  display: flex;
  align-items: center;
  font-size: 24px;
  border-bottom: 1px solid #ededed;
}

input.toggle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  appearance: none;
  border: none;
}

input.toggle:after {
  content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>');
}

input.toggle:checked:after {
  content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>');
}

input.toggle:checked + .text {
  Color: #d9d9d9;
  text-decoration: line-through;
}

.text {
  flex: 1;
  display: flex;
  align-items: center;
  white-space: pre-line;
  word-break: break-all;
  padding: 15px 20px;
}

.destroy {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: transparent;
  visibility: hidden;
}

.todo:hover .destroy {
  visibility: visible;
  color: #af5b5e;
  cursor: pointer;
}
</style>
