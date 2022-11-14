<template>
  <div class="snow-container">
    <div v-for="i in Math.min(props.count, 200)" :key="i" class="item-wrapper">
      <img :src="require('@/assets/heart.png')" alt="" class="item" />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({ count: Number });
</script>

<style lang="scss" scoped>
@function random_range($min, $max) {
  $rand: random();
  $random_range: $min + floor($rand * (($max - $min) + 1));
  @return $random_range;
}

.snow-container {
  width: 100vw;
  height: 120vh;
  margin-top: -20vh;
  overflow: hidden;
  background-image: linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%);

  .item-wrapper {
    $total: 200;

    @for $i from 1 through $total {
      $random-x: random_range(-500000, 500000) * 0.0001vw;
      $random-offset: random_range(-100000, 100000) * 0.0001vw;
      $random-x-end-from: $random-x + $random-offset;
      $random-x-end-to: $random-x + ($random-offset / 2);
      $random-time: random_range(30000, 80000) / 100000;
      $random-y: $random-time * 120vh;
      $random-scale: random(10000) * 0.0001;
      $fall-duration: random_range(10, 30) * 1s;
      $fall-delay: random(30) * -1s;

      &:nth-child(#{$i}) {
        opacity: random(10000) * 0.0001;
        transform: translate($random-x, -10px) scale($random-scale);
        animation: fall-#{$i} $fall-duration $fall-delay linear infinite;
      }

      @keyframes fall-#{$i} {
        #{percentage($random-time)} {
          transform: translate($random-x-end-from, $random-y) scale($random-scale);
        }
        to {
          transform: translate($random-x-end-to, 120vh) scale($random-scale);
        }
      }
    }

    .item {
      $size: random_range(3, 10) * 1vw;
      height: $size;
      width: $size;
      position: absolute;
    }
  }
}
</style>
