<template>
  <div id="app">
    <h1>主应用</h1>
    <p>
      <button @click="$router.push({path: '/foo'})">Go to Foo</button>
      <button @click="$router.push({path: '/bar'})">Go to Bar</button>
      <a href="/vue1">子应用</a>
    </p>
    <router-view></router-view>
    <p class="line"></p>
    <div id="container"></div>
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
.line{
  width: 100%;
  height: 1px;
  background: red;
}
</style>
