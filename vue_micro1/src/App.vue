<template>
  <div id="app">
    <h1>子应用</h1>
    <p>
      <button @click="$router.push({path: '/zifoo'})">Go to Foo</button>
      <button @click="$router.push({path: '/zibar'})">Go to Bar</button>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
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
