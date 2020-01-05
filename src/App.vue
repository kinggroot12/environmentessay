<template>
  <div id="app">
    <Navbar 
    :navLinks="navLinks"
    :imagePath="require('./assets/globe.png')"
    background="#fff"
    link-color="#777"
    hoverBackground="#ddd"
    />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar'


export default {
  name: 'app',
  components: {
    Navbar    
  },
  data: () => ({
    navLinks: [
      {
        text: 'Home',
        path: '/',
        icon: 'home'
      },
      { 
        text: 'Map',
        path: '/map',
        icon: 'map-marker-alt'
      },
      { 
        text: 'About Us',
        path: '/about',
        icon: 'question-circle'
      },{ 
        text: 'Contact Us',
        path: '/contact',
        icon: 'bullhorn'
      }
    ]
  })
}
</script>

<style lang="scss">
body {
  margin: 0;
}
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