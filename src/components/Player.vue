<template>
  <div>
    <n-space justify="center">
      <n-switch :value="switchMode" @update:value="handleSwitch" :rail-style="railStyle" :round="false">
        <template #checked>已开启 BGM</template>
        <template #unchecked>未开启 BGM</template>
      </n-switch>
      <n-button size="tiny" secondary color="#ff69b4" @click="handleRandom" :disabled="loading">随机切换</n-button>
    </n-space>
    <audio :src="activeMusic" ref="player" loop />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import config from '@/config';
import { NButton, NSpace, NSwitch } from 'naive-ui';

const railStyle = ({ focused, checked }) => {
  const style = {};
  if (checked) {
    style.background = 'pink';
  }
  if (focused) {
    style.boxShadow = '0 0 2px 2px #d0305040';
  }
  return style;
};

const player = ref(null);

const switchMode = ref(false);

const handleSwitch = (value) => {
  player.value[value ? 'play' : 'pause']();
  switchMode.value = value;
};

const randomTake = (from) => from[Math.floor(Math.random() * from.length)];

const loading = ref(false);

const activeMusic = ref(randomTake(config.music));

const handleRandom = () => {
  loading.value = true;
  activeMusic.value = randomTake(config.music);
  player.value.oncanplay = () => {
    switchMode.value = true;
    player.value.play();
  };
  loading.value = false;
};
</script>
