<template>
  <div class="home" v-for="place in places" :key="place.id">
    <Place
      :id="place.id"
      :title="place.title"
      :abstract="place.abstract"
      :cover="place.cover"
      :images="place.images"
    />
  </div>
</template>

<script>
import Place from "../components/Place.vue";
export default {
  name: "Home",
  components: {
    Place,
  },
  computed: {
    places() {
      return this.$store.state.places;
    },
  },
};
</script>
