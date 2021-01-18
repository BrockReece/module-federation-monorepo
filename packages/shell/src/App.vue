<template>
  <div class="wrapper">
    <header class="topbar">
      <div>Croud</div>
    </header>
    <nav class="sidebar">
      <ul>
        <router-link tag="li" to="/">
          <li>Home</li>
        </router-link>
        <router-link to="/app">
          <li>App</li>
        </router-link>
      </ul>
    </nav>
    <div class="content">
      <Suspense>
        <template #default>
          <router-view />
        </template>
        <template #fallback>
          <span>...Loading</span>
        </template>
      </Suspense>
    </div>
  </div>
    
</template>

<script>
import { provide } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { apolloClient } from './graphql/client'

export default {
  name: 'App',
  setup() {
    provide(DefaultApolloClient, apolloClient)
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  
}
</style>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-areas:
    "header  header"
    "sidebar content"
    "sidebar content"
}

header {
  text-align: left;
  background: #333;
  height: 50px;
  grid-area: header;
  color: white;
  font-size: 1.4em;
}

header div {
  padding: 10px;
}

nav {
  height: calc(100vh - 50px);
  background: #333;
  color: white;
  grid-area: sidebar;
  font-size: 1.3em;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

ul li {
  padding: 10px;
}

ul li:hover {
  background: rgba(0,0,0,0.3);
}

a { 
  color: inherit;
  text-decoration: none;
} 

.content {
  height: calc(100vh - 50px - 60px);
  grid-area: content;
  margin-top: 60px;
  overflow-y: scroll;
  text-align: center;
}
</style>
