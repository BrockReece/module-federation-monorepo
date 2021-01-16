<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>Styleguide components</h1>
  <h2>Buttons</h2>
  <Btn>Example button</Btn>
  <Btn class="cta">CTA button</Btn>
</template>

<script>
import Btn from './components/Btn.vue'

export default {
  name: 'App',
  components: {
    Btn
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
