<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>
      <Btn v-if="user" @click="logout">Logout</Btn>
      <Btn v-else @click="login({ name: 'foo' })">Login</Btn>
    </div>
    {{ user }}
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { useCurrentUser } from 'shell/compositions/user'
const Btn = defineAsyncComponent(() => import("styleguide/Btn"));

export default {
  name: 'Home',

  components: {
    Btn
  },

  setup() {
    const { login, user, logout } = useCurrentUser()
    return {
      login,
      logout,
      user
    }
  }
}
</script>
