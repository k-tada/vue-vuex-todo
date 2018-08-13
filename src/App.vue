<template>
  <div class="app">
    <div class="container">
      <Logo />
      <TodoApp />
    </div>
  </div>
</template>

<script>
import Logo from './components/Logo'
import TodoApp from './components/TodoApp'

export default {
  name: 'App',
  components: {
    Logo,
    TodoApp
  }
}
</script>

<style scoped>
.app {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #4d4d4d;
  background: #f5f5f5;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: stretch;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 550px;
}
</style>
