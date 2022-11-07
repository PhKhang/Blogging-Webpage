<template>
    <footer>


        <div class="team-name">
            <div class="logo">
                <router-link class="logo-link" to="/">
                    <img src="@/../public/Vector1.svg" alt="">
                </router-link>
            </div>

            <p>The world of business,<br> from Human Resources to Marketing,<br> all at your
                convenience.</p>
            <p class="copy">&copy; Copyright 2022, Tieu's Blog</p>
        </div>

        <div class="socials">

        </div>


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
    padding: 20px;
    border: 0.05px solid transparent;

    box-shadow: 0 25px 50px 12px rgba(0, 0, 0, 0.436);

}

.copy {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);

    text-align: center;
    margin: 10px;
}

.team-name {
    display: flex;
    align-items: center;
    gap: 50px;
    margin-bottom: 50px;

    .logo {
        margin-left: 4px;
        height: 100%;

        .logo-link {
            display: flex;
            align-items: center;
        }

        img {
            height: 70px;
            object-fit: cover;
            filter: invert(1);
        }
    }
}
</style>