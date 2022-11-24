<template>
    <footer>


        <div class="main">
            <div class="team-name">
                <div class="logo">
                    <router-link :class="logo - link" to="/">
                        <img src="@/../public/Vector1.svg" alt="">
                    </router-link>
                </div>
                <p>The world of business,<br> from Human Resources to Marketing,<br> all at your
                    convenience.</p>
            </div>
            <a href="https://buttercms.com" class="blog-engine">
                <img src="https://cdn.buttercms.com/PGJPyIwaQ2KnOA8UyKfH" alt="">
                <p>Created with ButterCMS</p>
            </a>
        </div>


        <p class="copy">&copy; Copyright 2022, Tieu's Blog</p>


    </footer>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
footer {
    box-sizing: border-box;

    position: relative;
    bottom: 0;
    margin: 0;
    width: 100%;
    padding-top: 20px;
    border: 0.05px solid transparent;



    box-shadow: 0 25px 50px 12px rgba(0, 0, 0, 0.436);


}

.main {
    height: fit-content;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.copy {
    position: relative;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);

    text-align: center;
    margin: 30px 0 0 0;
}

.blog-engine {
    display: flex;
    flex-direction: column;
    align-items: center;

    color: inherit;
    text-decoration: none;

    img {
        height: 70px;
    }

    p {
        padding: 0;
        margin: -10px;
    }
}

.team-name {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    margin-bottom: 0;

    .logo {
        margin-left: 4px;
        height: 70px;

        .logo-link {
            display: flex;
            align-items: center;
            justify-items: center;
        }

        img {
            height: 100%;
            object-fit: cover;
            filter: invert(1);
        }
    }
}

@media screen and (max-width: 820px) {
    .main {
        flex-direction: column;
        align-items: center;

    }
}
</style>