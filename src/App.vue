<template>
  <div id="app">
    <Firework v-if="egg" />
    <Text class="text" />
    <Snow :count="140" class="background" />
    <Player class="player" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Snow from '@/components/Snow';
import Text from '@/components/Text';
import Player from '@/components/Player';
import Firework from '@/components/Firework';

const egg = ref(false);
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>

<style lang="scss" scoped>
.background {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
}

@keyframes scaleMove {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(2vh);
  }
  100% {
    transform: translateY(0);
  }
}

.text {
  width: 90vw;
  margin: 34vh auto;
  animation: scaleMove 2.5s ease-in-out infinite;
}

.player {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 5vh;
}
</style>
