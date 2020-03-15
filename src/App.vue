<template>

  <!--<div :style="backgroundDiv">-->
  <div id="app" >
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
  <!--</div>-->
</template>

<script>
export default {
  name: 'App',
  data() {
    return {

      backgroundDiv: {

        backgroundImage: 'url(' + require('@/assets/backImg.jpg') + ')',

        backgroundRepeat: 'no-repeat',

        backgroundSize: '100% 100%'
        }
      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
