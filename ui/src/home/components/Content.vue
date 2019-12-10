<template>
  <section class="section">
    <div class="container">
      <ItemGrid>
        <template v-slot:default="slotProps">
          <ItemCard
            :item="slotProps.item"
            :key="slotProps.item.name"
          ></ItemCard>
        </template>
      </ItemGrid>
    </div>
  </section>
</template>

<script>
import ItemCard from '@/home/components/ItemCard.vue';
import ItemGrid from '@/home/components/ItemGrid.vue';

export default {
  components: {
    ItemCard,
    ItemGrid,
  },
};
</script>
