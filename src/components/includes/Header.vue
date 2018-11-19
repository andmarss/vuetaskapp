<template>
    <header>
        <ul class="nav">
            <li><router-link to="/" exact>Home</router-link></li>
            <li><router-link to="/about" exact>About Us</router-link></li>
            <li><router-link to="/contact" exact>Contact</router-link></li>
        </ul>
    </header>
</template>

<script>
    export default {
        data(){
            return {}
        },
        methods: {},
        mounted(){
        },
        computed: {
        }
    }
</script>

<style scoped lang="scss">
    header {
        position: absolute;
        width: 100%;
        top: 0;
        right: 50%;
        margin-right: -50%;
        z-index: 100;

        &:before,
        &:after{
            content: "";
            display: table;
        }

        &:after{
            clear: both;
        }

        & {
            *zoom: 1;
        }
    }

    .nav {
        position: relative;
        text-align: center;
        font-size: 14px;
        font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;

        li {
            display: inline-block;
            vertical-align: middle;
            padding: 50px 25px;
            transition: background-color .5s ease, font-weight .5s ease;
            font-weight: 600;
            text-transform: uppercase;
            cursor: pointer;

            a {
                text-decoration: none;
                color: #000;
                transition: color .5s ease;

                &.router-link-active {
                    color: #00BC8C;
                }
            }

            &:hover {
                a {
                    color: #00BC8C;
                }
            }
        }
    }
</style>