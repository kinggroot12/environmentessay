<template>
  <nav :style="{background: background || '#333'}">
    <ul :style="{background: background || '#333'}" ref="nav">
      <figure class="image-logo" @click="toggleNav">
        <img :src="imagePath" height="40px" width="40px" />
      </figure>
      <li
        v-for="(link, index) in navLinks"
        :key="index"
        @mouseenter="$event.currentTarget.style.background = hoverBackground || '#999'"
        @mouseleave="$event.currentTarget.style.background = background || '#333'"
      >
        <router-link 
          :to="link.path"
          :style="{ color: linkColor || '#DDD'}"
        >
          {{ link.text }}
					<font-awesome-icon :icon=link.icon style="font-size:17px; margin-right: 5px;" />
        </router-link>
      </li>
    </ul>
  </nav>  
</template>

<script>

export default {
  props: ["navLinks", "background", "linkColor", "hoverBackground", "imagePath"],
  methods: {
    toggleNav () {
        const nav = this.$refs.nav.classList
        nav.contains('active') ? nav.remove('active') : nav.add('active')
    }
  }
}
</script>

<style scoped lang="scss">

  nav {
    height: 60px;
    width: 100%;
    box-shadow: 2px 2px 2px #CCC;
    
    ul {
      display: flex;
      height: 100%;
      align-items: center;
      margin-block-start: 0;
      margin-block-end: 0;
      padding-inline-start: 0;

      figure {
        margin-top: 15px;
        margin-right: 10px;
        margin-left: 5px;
        cursor: pointer;
      }

      a {
        text-decoration: none;
        display: flex; 
        flex-direction: row-reverse;
        align-items: center;
      }

      icons {
        margin-right: 5px;
        font-size: 25px;
      }

      li {
        list-style-type: none;
        padding: 10px 20px;
        
      }



    }
  }

  @media screen and (max-width: 759px) {
    nav {
      ul {
        position: absolute;
        width: 200px;
        flex-direction: column;
        left: -150px;
        transition: 300ms ease all;
        top: 60px; 
        box-shadow: 2px 2px 2px #CCC;

        &.active {
          left: 0px;
        }

        figure {
          position: fixed;
          z-index: 1;
          top: -5.5px;
          left: 0px; 
        }

        li {
          width: 100%;
          padding-left: 0;
          padding-right: 0;
        }

        a {
          flex-direction: row;
          margin-left: 20px;
          justify-content: space-between;
          margin-right: 13px; 
        }
        .svg-inline--fa fa-map-marker-alt fa-w-12 {
          left: -5px;
        }
      }
    }
    
  }
</style>