<template>
    <nav>
        <div class="logo">
            <router-link class="logo-link" to="/">
                <img src="@/../public/Vector1.svg" alt="">
            </router-link>

        </div>

        <div class="links">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/category/marketing">Category</router-link>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss">
nav {
    position: absolute;
    top: 0;
    left: 0;

    z-index: 99;

    width: 100%;
    border: 2px solid white;
    color: white;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .logo {
        margin-left: 4px;
        height: 100%;

        .logo-link {
            display: flex;
            align-items: center;
        }

        img {
            height: 36px;
            object-fit: cover;
        }
    }

    .links {
        height: 100%;
        margin: 0;
        padding: 0;

        a {
            box-sizing: border-box;
            text-decoration: none;
            font-weight: bold;
            color: white;
            display: table-cell;
            border-left: 2px solid white;
            height: 100%;
            width: 150px;
            padding: 10px 0;
            text-align: center;

            transition: background-color 0.4s ease;

            &.router-link-exact-active {
                color: white;
            }

            &:hover {
                background-color: rgba(255, 255, 255, 0.645);
                color: black;
                border: 1px solid white;
            }
        }
    }
}

@media screen and (max-width: 480px) {
    nav a {
        width: 80px !important;
    }
}
</style>