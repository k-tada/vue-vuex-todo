<template>
  <div class="container">
    <div class="input">
      <input
        type="email"
        class="form"
        placeholder="Your EMail Address"
        :value="email"
        @input="updateEmail($event)"
      />
    </div>
    <div class="input">
      <input
        type="password"
        class="form"
        placeholder="Your Password"
        :value="password"
        @input="updatePassword($event)"
      />
    </div>
    <div class="input">
      <input
        type="submit"
        class="submit"
        value="Login"
        @click="login()"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: mapState('auth', ['user']),
  watch: {
    user (newValue) {
      newValue && this.$router.push(this.$route.query.redirect || '/todos')
    }
  },
  methods: {
    updateEmail (e) {
      this.email = e.target.value
    },
    updatePassword (e) {
      this.password = e.target.value
    },
    login () {
      if (this.email.length <= 0 || this.password.length <= 0) {
        return
      }
      this.signIn({
        email: this.email,
        password: this.password,
        router: this.$router,
        redirectTo: this.$route.query.redirect || '/'
      })
    },
    ...mapActions({
      signIn: 'auth/signIn',
      onAuthStateChanged: 'auth/onAuthStateChanged'
    })
  }
}
</script>

<style scoped>
.container {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  background: #fff;
  padding-top: 20px;
}

.input {
  flex: 1;
  padding: 16px;
}

.form {
  width: 100%;
  border: none;
  height: 44px;
  font-size: 24px;
  line-height: 1.4em;
  outline: none;
  border-bottom: 2px solid steelblue;

  &:focus {
    outline: none;
    background: #fff;
  }
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

input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0px 1000px white inset;
}

.submit {
  font-style: italic;
  font-weight: 100px;
  color: #444;
  border: none;
  font-size: 24px;
  width: 240px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: #aaa;
  }

  &:focus {
    outline: 0;
    border: none;
  }
}

</style>
