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
        type="password"
        class="form"
        placeholder="Your Password Again"
        :value="passwordConfirm"
        @input="updatePasswordConfirm($event)"
      />
    </div>
    <div class="input">
      <input
        type="submit"
        class="submit"
        value="Sign Up"
        @click="signup()"
        v-bind:disabled="hasError"
      />
    </div>
    <div class="button" @click="gotoLoginPage()">
      Login hele..
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'SignUp',
  data () {
    return {
      email: '',
      password: '',
      passwordConfirm: '',
      hasError: false
    }
  },
  computed: mapState('auth', ['user']),
  watch: {
    user (newValue) {
      newValue && this.$router.push(this.$route.query.redirect || '/todos')
    }
  },
  methods: {
    updateHasError () {
      if (
        this.email.length <= 0 ||
        this.password.length <= 0 ||
        this.password !== this.passwordConfirm
      ) {
        this.hasError = true
      } else {
        this.hasError = false
      }
    },
    updateEmail (e) {
      this.email = e.target.value
      this.updateHasError()
    },
    updatePassword (e) {
      this.password = e.target.value
      this.updateHasError()
    },
    updatePasswordConfirm (e) {
      this.passwordConfirm = e.target.value
      this.updateHasError()
    },
    signup () {
      if (this.hasError) {
        return
      }
      this.signUp({
        email: this.email,
        password: this.password,
        router: this.$router
      })
    },
    gotoLoginPage () {
      this.$router.push('/login')
    },
    ...mapActions({
      signUp: 'auth/signUp'
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

  &:disabled {
    cursor: not-allowed;
    color: #ddd;
  }
}

.button {
  color: steelblue;
  font-size: 24px;
  width: 240px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  cursor: pointer;

  &:hover {
    opacity: .8;
  }
}

</style>
