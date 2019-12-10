<template>
  <div class="columns is-multiline">
    <slot v-for="i in items" :item="i" />
    <ItemGridTrigger @triggerIntersected="load" />
  </div>
</template>

<script>
import axios from 'axios';
import ItemGridTrigger from '@/home/components/ItemGridTrigger.vue';

export default {
  components: {
    ItemGridTrigger,
  },
  data() {
    return {
      items: [],
      next: 'https://pokeapi.co/api/v2/pokemon/',
      loading: false,
    };
  },
  methods: {
    load() {
      if (!this.loading && this.next) {
        this.loading = true;
        axios
          .get(this.next)
          .then(response => {
            this.next = response.data.next;
            this.items.push(...response.data.results);
            this.loading = false;
          })
          .catch(err => {
            this.loading = false;
          });
      }
    },
  },
};
</script>
