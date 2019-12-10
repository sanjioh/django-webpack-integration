<template>
  <div class="column is-4">
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image">
              <img :src="imgUrl" alt="Pokémon image" />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{{ item.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import placeholder from '../img/96x96.png';

export default {
  data() {
    return { imgUrl: placeholder };
  },
  props: ['item'],
  created() {
    axios.get(this.item.url).then(response => {
      if (response.data.sprites.front_default) {
        this.imgUrl = response.data.sprites.front_default;
      }
    });
  },
};
</script>
