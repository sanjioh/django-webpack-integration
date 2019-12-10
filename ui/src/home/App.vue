<template>
  <!-- Change this div into a Fragment once Vue 3 is released. -->
  <div>
    <Header />
    <Content />
  </div>
</template>

<script>
import Header from '@/home/components/Header.vue';
import Content from '@/home/components/Content.vue';

export default {
  components: {
    Header,
    Content,
  },
};
</script>

<style lang="sass">
@import '@/_common/scss/style.scss';
</style>
