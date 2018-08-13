<template>
  <div class="form">
    <div class="toggle-all" @click="toggleAllTodo" />
    <div class="input">
      <input
        type="text"
        class="new"
        placeholder="What needs to be done?"
        :value="text"
        @input="updateText($event)"
        @keyup.enter="addTodo()"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Form',
  data () {
    return {
      text: ''
    }
  },
  computed: mapState({
    isDoneAll: state => state.todos.isDoneAll
  }),
  methods: {
    updateText (e) {
      this.text = e.target.value
    },
    addTodo (e) {
      this.$store.commit('todos/addTodo', this.text)
      this.text = ''
    },
    toggleAllTodo () {
      this.$store.commit('todos/toggleAllTodo', !this.isDoneAll)
    }
  }
}
</script>

<style scoped>
.form {
  align-self: stretch;
  display: flex;
  align-items: center;
}

.toggle-all {
  width: 60px;
  height: 34px;
  transform: rotate(90deg);
}

.toggle-all:before {
  content: '❯';
  font-size: 22px;
  color: #e6e6e6;
  padding: 10px 27px 10px 27px;
}

.input {
  flex: 1;
  padding: 16px;
}

.new {
  width: 100%;
  border: none;
  height: 65px;
  font-size: 24px;
  line-height: 1.4em;
  outline: none;
}

input::-webkit-input-placeholder {
  font-style: italic;
  font-weight: 100px;
  color: #e6e6e6;
}

input::-moz-placeholder {
  font-style: italic;
  font-weight: 100px;
  color: #e6e6e6;
}

input::input-placeholder {
  font-style: italic;
  font-weight: 100px;
  color: #e6e6e6;
}
</style>
