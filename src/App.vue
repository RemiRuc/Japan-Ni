<template>
  <div id="app">
    <TheHeader></TheHeader>
    <transition name="fade" appear>
      <router-view/>
    </transition>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader';

export default {
  name: 'App',
  components: {
    TheHeader
  }
}
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  height: 100%;
  width: 100%;
}
.view{
  height: 100%;
  width: 100%;
  overflow: auto;
}
.content{
  position: relative;
  width: 100%;
  min-height: calc(100% - 137px);
  padding: 0px 2% 2%;
  margin-top: 137px;
}

.text p{
  margin: 20px 0px;
  font-size: 1.2em;
}

body{
  margin: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-color: black;
}
button{
  cursor: pointer;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.5em;
  background: none;
  color: white;
  border: white solid 4px;
  padding: 10px 20px;
  border-radius: 50px;
  transition: all 0.3s;
}
button:hover{
  background-color: rgba(255,255,255,0.5);
}


p, h1, h2, ul{
  margin: 0;
}

div, header, a, img{
  box-sizing: border-box;
}

.title{
  font-weight: 800;
  letter-spacing: 14px;
  text-transform: uppercase;
}



.fade-enter-active {
  transition: all 0.5s;
}
.fade-enter /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  filter: blur(1.5rem);
}

</style>
