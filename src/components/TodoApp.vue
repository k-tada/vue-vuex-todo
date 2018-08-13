<template>
  <div class="container">
    <Form />
    <List />
  </div>
</template>

<script>
import Form from './todo/Form'
import List from './todo/List'

export default {
  name: 'TodoApp',
  components: {
    Form,
    List
  }
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
