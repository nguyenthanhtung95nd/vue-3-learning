<template>
    <Carousel :slides="slides" />
</template>

<script>
import Carousel from './components/Carousel.vue'
export default {
    components: {
        Carousel,
    },
    data: () => ({
        slides: [
            'https://picsum.photos/id/1032/1000/450',
            'https://picsum.photos/id/1033/1000/450',
            'https://picsum.photos/id/1035/1000/450',
            'https://picsum.photos/id/1036/1000/450',
            'https://picsum.photos/id/1037/1000/450',
        ],
    }),
}
</script>

<style></style>
