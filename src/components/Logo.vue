<template>
  <div class="logo">{{text}}</div>
</template>

<script>
export default {
  name: 'Logo',
  data () {
    return {
      text: 'todos'
    }
  }
}
</script>

<style scoped>
.logo {
  font-size: 100px;
  font-weight: 100;

  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(175, 47, 47, 0.15);
}
</style>
