<template>
  <Nav></Nav>

  <div class="block header">
    <img class="animate__animated animate__fadeIn animate__faster" src="header.avif" alt="">


    <div class="text">
      <h1>Hello, and welcome to the world of business,<br> from Human Resources to Marketing,<br> all at your
        convenience.
      </h1>
    </div>
  </div>

  <div class="block">
    <Blogs></Blogs>
  </div>

  <div class="filler"></div>
  
  <div class="block">
    <About/>
  </div>
</template>

<script>
import Blogs from '@/components/Blogs.vue'
import Nav from '@/components/Nav.vue'
import About from '@/components/AboutUs.vue'
export default {
  components: {
    Blogs,
    Nav,
    About
  }
}
</script>
<style lang="scss">
* {
  box-sizing: border-box;
}

.block {
  position: relative;

  width: 100%;
  min-height: 100vh;
  background-color: transparent;

  padding-top: 0.05px;
}

.filler {
  position: relative;

  width: 100%;
  min-height: 5vh;
  background-color: transparent;

  padding-top: 0.05px;
}

.header {
  height: 70vh;
  min-height: auto;
  background-color: transparent;

  transition: all .4s ease;

  img {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(80%);
  }

  .text {
    position: relative;
    left: 10%;
    color: white;
    width: 85%;
    max-width: 500px;
    height: 100%;

    display: flex;
    align-items: center;

    text-align: left;
    transition: all .4s ease;

    h1 {
      font-weight: 700;
    }
  }
}
</style>