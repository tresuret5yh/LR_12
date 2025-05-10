<template>
  <header>
    <nav>
      <router-link to="/">Главная</router-link> | 
      <router-link to="/api">API Данные</router-link> | 
      <router-link to="/form">Форма</router-link>
    </nav>
  </header>
  <main>
    <router-view />
  </main>
</template>

<script setup>
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0 auto;
  max-width: 1200px;
  padding: 20px;
}

nav {
  padding: 20px 0;
  text-align: center;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 0 10px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>