<script>
import { butter } from '@/buttercms'
import Nav from '@/components/Nav.vue'

export default {
    name: 'blog-categories',
    components: {
        Nav
    },
    data() {
        return {
            category: 'None',
            posts: []
        }
    },
    methods: {
        getCategory() {
            butter.category.retrieve(this.$route.params.slug, {
                "include": "recent_posts"
            })
                .then(res => {
                    this.category = res.data.data
                    this.posts = this.category.recent_posts
                    console.log(this.posts)
                    console.log(this.posts[this.posts.length - 1].featured_image)
                }).catch(res => {
                    console.log(res)
                })
        }
    },
    created() {
        this.getCategory()
    }
}
</script>

<template>


    <div class="main">
        <Nav></Nav>

        <img class="header-img" v-if="posts[0].featured_image" :src="posts[0].featured_image" alt="stuff">
        <img class="header-img" v-else src="http://via.placeholder.com/250x250" alt="">
        <h1 class="cat-name">{{ category.name }}</h1>



        <div class="content">

            <div id="blog-home">
                <!-- Create `v-for` and apply a `key` for Vue. Here we are using a combination of the slug and index. -->
                <div class="post animate__animated animate__fadeInUp" v-for="(post, index) in posts"
                    :key="post.slug + '_' + index">
                    <router-link :to="'/blog/' + post.slug">
                        <article class="media">
                            <figure>
                                <img v-if="post.featured_image" :src="post.featured_image" alt="">
                                <img v-else src="http://via.placeholder.com/250x250" alt="">
                            </figure>
                            <div class="color-block"></div>
                            <div class="title-des">
                                <h2>{{ post.title }}</h2>
                                <p>{{ post.summary }}</p>
                            </div>
                        </article>
                    </router-link>
                </div>
            </div>

        </div>


    </div>

</template>

<style scoped lang="scss">
.header-img {
    position: relative;
    width: 100vw;
    height: 50vh;
    object-fit: cover;

    left: 50%;
    transform: translate(-50%, 0);
}

.cat-name {
    position: absolute;
    top: 40px;

    margin-left: 30px;
    color: white;
}

.main {
    padding: 0;
    margin: 0;
    width: 100%;
    min-height: 100vh;
    height: auto;
    background-color: transparent;

    transition: background-color .8s ease;
}


.content {
    padding: 10px;
    margin: auto;

    box-sizing: border-box;

    max-width: 1400px;
    height: fit-content;
    background-color: transparent;
}

#blog-home {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

#blog-home .post {
    display: inline-block;
    position: relative;

    top: -60px;

    width: 100%;
    max-width: 400px;
    aspect-ratio: 1/1;
    overflow: initial;

    margin-bottom: 20px;
    margin-right: 10px;
    background-color: transparent;
    border: none;


    article {
        position: relative;
        display: flex;
        flex-wrap: nowrap;

        height: 100%;
        width: 100%;


        figure {
            margin: 0;
            width: 60%;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;

                box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.436);

                /* position: initial; */
            }
        }

        .color-block {
            position: absolute;
            left: 30%;
            width: 40%;
            height: 100%;
            background-color: rgba(0, 0, 255, 0.319);
            background-color: transparent;
        }

        .title-des {
            position: relative;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100%;

            padding-left: 12px;
            z-index: 2;

            h2 {
                margin: 0;
                width: 170px;
            }

            p {
                margin: 0;
            }
        }

    }
}

.author-home {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 10px;

    .author {
        display: flex;
        margin-bottom: 20px;

        a {
            width: 240px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            text-align: center;

            figure {
                padding: 0;
                margin: 0;
                width: 100%;
                aspect-ratio: 1/1;

                img {
                    width: 100%;
                    aspect-ratio: 1/1;
                    object-fit: cover;
                    border-radius: 50%;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.436);

                }

                img:hover {
                    transform: scale(1.1);
                }
            }

            .author-des {
                h2 {
                    margin: 8px 0;
                }

                h3 {
                    margin: 8px 0 2px;
                    font-weight: 400;
                    color: rgb(74, 74, 74);
                }

                p {
                    margin: 8px 0;
                }
            }
        }


    }

    :first-child {
        flex-basis: 100%;

        a>* {
            width: 340px !important;
        }
    }
}

.animate__animated.animate__fadeInUp {
    --animate-duration: .4s;
}

a {
    text-decoration: none;
    color: inherit;
}
</style>