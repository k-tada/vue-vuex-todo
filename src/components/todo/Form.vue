<template>
  <div class="form">
    <div class="toggle-all" />
    <div class="input">
      <input type="text" class="new" placeholder="What needs to be done?" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Form'
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
