<script>
import { butter } from '@/buttercms'

export default {
    name: 'blog-home',
    components: {
    },
    data() {
        return {
            page_title: 'Blog',
            posts: [],
            authors: []
        }
    },
    methods: {
        getPosts() {
            butter.post.list({
                page: 1,
                page_size: 10
            })
                .then(res => {
                    this.posts = res.data.data
                    console.log(this.posts)
                })
        },

        getAuthors() {
            butter.author.list({ "include": "recent_posts" })
                .then(res => {
                    this.authors = res.data.data
                    console.log(this.authors)
                })
        }
    },
    created() {
        this.getAuthors()
    }
}
</script>

<template>
    <div class="main">
        <div class="content">

            <h1>Our team</h1>

            <div class="author-home">
                <div class="author animate__animated animate__fadeInUp" v-for="(author, index) in authors"
                    :key="author.slug + '_' + index">
                    <div class="aut">

                        <figure>
                            <img v-if="author.profile_image" :src="author.profile_image" alt="">
                            <img v-else src="http://via.placeholder.com/250x250" alt="">
                        </figure>
                        <div class="author-des">
                            <h2>{{ author.first_name + ' ' + author.last_name }}</h2>
                            <h3>{{ author.title }}</h3>
                            <p>{{ author.bio }}</p>
                            <p class="email"> <i class='bx bxs-envelope' ></i> {{ author.email }}</p>
                        </div>

                    </div>

                </div>
                <div class="break" v-if="index == 1"></div>

            </div>


        </div>
    </div>
</template>

<style lang="scss" scoped>
.main {

    font-family: 'Merriweather', serif;
    padding: 0;
    margin: 0;
    width: 100%;
    min-height: 100vh;
    height: auto;
    background-color: transparent;

    transition: background-color .8s ease;
}

.bx {
    transform: translate(0px, 3px);
}
.content {
    padding: 10px;
    margin: auto;

    box-sizing: border-box;

    max-width: 1400px;
    height: fit-content;
    background-color: transparent;

    h1 {
        max-width: 680px;
        margin: auto;
        margin-bottom: 20px;
    }
}


.author-home {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 50px;

    .author {
        display: flex;
        margin-bottom: 20px;

        .aut {
            width: 240px;
            box-sizing: border-box;
            margin: 0 40px;

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
                    aspect-ratio: 1/1 !important;
                    object-fit: cover;
                    border-radius: 50%;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.436);

                    transition: all .4s ease;
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

                p.email {
                    display: inline-block;
                }
            }
        }


    }

    :first-child {
        flex-basis: 100%;

        .aut>* {
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


@media screen and (max-width: 480px) {}
</style>