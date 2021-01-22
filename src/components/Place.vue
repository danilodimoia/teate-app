<template>
    <h3>{{ title }}</h3>
     <img :src="`/images/` + cover" width="300" height="300" />
     <div class="abstract">{{ abstract }}</div>

</template>

<script>
export default {
    props: {
        id: Number,
        title: String,
        cover: String,
        images: Array,
        abstract: String,
    },
    computed: {
        cover_url: () => '../images/' 
    },
    mounted() {
        // console.log(this)
    }
}
</script>