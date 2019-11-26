<template>
  <div class="columns is-multiline">
    <ItemCard v-for="n in nums" v-bind:num="n" v-bind:key="n"></ItemCard>
  </div>
</template>

<script>
import ItemCard from '@/home/components/ItemCard.vue';

export default {
  data() {
    return { nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] };
  },
  components: {
    ItemCard,
  },
};
</script>
