<template>
  <Nav></Nav>

  <div class="block header">
    <img class="animate__animated animate__fadeIn animate__faster" src="header.webp" alt="">
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
    <Cat></Cat>
  </div>

  <div class="block">
    <About></About>
  </div>

  <Footer></Footer>
</template>

<script>
import Blogs from '@/components/Blogs.vue'
import Nav from '@/components/Nav.vue'
import About from '@/components/AboutUs.vue'
import Cat from '@/components/BlogByCat.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Blogs,
    Nav,
    About,
    Cat,
    Footer
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
  min-height: fit-content;
  background-color: transparent;

  padding-top: 0.05px;
  margin: 0 0 100px 0;
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