<template>
  <div id="app">
    <common-header></common-header>
    <router-view/>
  </div>
</template>

<script>
  import commonHeader from './components/commonHeader'
  export default {
    name: 'app',
    components: {
      commonHeader,
    }
  }
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
