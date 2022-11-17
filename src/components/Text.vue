<template>
  <div>
    <div class="container">
      <span>{{ config.lhs }}</span>
      <img :src="require('@/assets/heart.svg')" alt="" class="image" />
      <span>{{ config.rhs }}</span>
    </div>
    <div class="divider"></div>
    <div class="container">
      {{ delta }}
    </div>
  </div>
</template>

<script setup>
import moment from 'moment';
import config from '@/config.js';
import { onMounted, ref } from 'vue';
import display from 'raw-loader!@/console.txt';

const from = moment(config.from, 'YYYY-M-D');

const parseTimeDiff = (lhs, rhs) => {
  const result = [];
  const days = lhs.diff(rhs, 'days');
  result.push(days + 1 + ' 天');
  const hours = lhs.diff(rhs, 'hours');
  result.push(hours - days * 24 + ' 小时');
  const minutes = lhs.diff(rhs, 'minutes');
  result.push(minutes - hours * 60 + ' 分钟');
  return result.join(', ');
};

const delta = ref(parseTimeDiff(moment(), from));

onMounted(() => {
  setInterval(() => (delta.value = parseTimeDiff(moment(), from)), 10 * 1000);
  console.log('%c' + display, 'color: red');
});
</script>

<style lang="scss" scoped>
$size: 40;
$gap: $size / 10;

.container {
  color: #282828;
  font-size: $size * 1px;
  font-family: Sofia, monospace;
  text-shadow: $gap * 1px $gap * 1px $gap * 1px #ababab;

  @keyframes scaleDraw {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(1.3);
    }
    50% {
      transform: scale(1);
    }
    75% {
      transform: scale(1.3);
    }
  }

  .image {
    width: $size * 1px;
    height: $size * 1px;
    margin-bottom: -$gap * 1px;
    margin-left: $size * 1px;
    margin-right: $size * 1px;
    animation: scaleDraw 2.5s ease-in-out infinite;
  }
}

.divider {
  width: 50%;
  margin: $size / 2 * 1px auto $size / 2 * 1px;
  height: 1px;
  box-shadow: 0 0 $gap * 1px #ababab;
}
</style>
