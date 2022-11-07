<script>
import { butter } from '@/buttercms'
import Nav from '@/components/Nav.vue'

export default {
    name: 'blog-post',
    components: {
        Nav
    },
    data() {
        return {
            post: {}
        }
    },
    methods: {
        getPost() {
            butter.post.retrieve(this.$route.params.slug)
                .then(res => {
                    this.post = res.data
                }).catch(res => {
                    console.log(res)
                })
        }
    },
    created() {
        this.getPost()
    }
}
</script>

<template>
    <div class="main">
        <Nav></Nav>
        <div class="content animate__animated animate__fadeIn">
            <img class="header-img" v-if="post.data.featured_image" :src="post.data.featured_image" alt="stuff">
            <img class="header-img" v-else src="http://via.placeholder.com/250x250" alt="">

            <div id="blog-post">


                <h1>{{ post.data.title }}</h1>
                <h4>{{ post.data.author.first_name }} {{ post.data.author.last_name }}</h4>
                <div v-html="post.data.body"></div>

                <div class="links" v-show="false"
                    style="display: flex; justify-content: space-between; margin-top: 30px;">
                    <router-link v-if="post.meta.next_post" :to="/blog/ + post.meta.next_post.slug" class="button">
                        Next
                    </router-link>
                    <router-link v-if="post.meta.previous_post" :to="/blog/ + post.meta.previous_post.slug"
                        class="button">
                        Previous
                    </router-link>

                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
.main {
    padding: 0;
    margin: 0;
    width: 100%;
    min-height: 100vh;
    height: auto;
    background-color: var(--bg);

    transition: background-color var(--trans-time-l) ease;
}

@media screen and (max-width: 820px) {}


.content {
    margin: auto;
    width: 100%;
    padding: 0 10px;

    box-sizing: border-box;

    height: fit-content;
    background-color: transparent;

}

.animate__animated.animate__fadeIn {
    --animate-duration: .4s;
}

.header-img {
    position: relative;
    width: 100vw;
    height: 50vh;
    object-fit: cover;

    left: 50%;
    transform: translate(-50%, 0);
}

#blog-post {
    max-width: 700px;

    margin: 0 auto;

}

#blog-post>>>p,
ul,
li {
    width: 100%;
    text-align: justify;
}

#blog-post>>>img {
    max-width: 100%;
    object-fit: cover;
    border-radius: 4px;

    position: relative;
    left: 50%;
    transform: translate(-50%);
}

#blog-post:deep() a {

    text-decoration: none;
    color: rgb(88, 88, 88);
    outline: none;

    background-image: linear-gradient(black, black);
    background-size: 0% 0.1em;
    background-position-x: 0%;
    background-position-y: 100%;
    background-repeat: no-repeat;
    transition: background-size 0.2s ease-in-out;

}

#blog-post:deep() a:hover,
a:focus,
a:active {
    background-size: 100% 0.1em;
}
</style>