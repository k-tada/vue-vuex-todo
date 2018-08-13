<template>
  <div class="todos">
    <div class="todo" v-for="todo in todos" :key="todo.id">
      <input
        class="toggle"
        type="checkbox"
        :checked="todo.isDone"
      />
      <div class="text">{{todo.text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      todos: [
        { id: 1, text: 'aaa', isDone: false },
        { id: 2, text: 'bbb', isDone: true },
        { id: 3, text: 'ccc', isDone: false }
      ]
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
  /* appearance: none; */
  border: none;
}

/* input:after { */
/*   content: url(data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" …="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>); */
/* } */
/*  */
.text {
  flex: 1;
  display: flex;
  align-items: center;
  white-space: pre-line;
  word-break: break-all;
  padding: 15px 20px;
}
</style>
