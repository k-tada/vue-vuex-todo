<template>
  <div class="container">
    <Form />
    <List />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Form from './todo/Form'
import List from './todo/List'

export default {
  name: 'TodoApp',
  mounted () {
    this.getTodos()
  },
  components: {
    Form,
    List
  },
  methods: mapActions({
    getTodos: 'todos/getTodos'
  })
}
</script>

<style scoped>
.container {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  background: #fff;
}
</style>
