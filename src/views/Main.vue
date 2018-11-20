<template>
    <div>
        <Hero />
        <Slider />
        <Form />
    </div>
</template>

<script>
    import Hero from '../components/includes/Hero.vue';
    import Slider from '../components/includes/Slider.vue';
    import Form from '../components/Form.vue';

    export default {
        data(){
            return {}
        },
        methods: {},
        mounted(){},
        computed: {},
        components: {
            Hero,
            Slider,
            Form
        }
    }
</script>

<style scoped>

</style>