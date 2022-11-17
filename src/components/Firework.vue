<template>
  <div>
    <Particles id="firework" :particlesInit="particlesInit" :options="configs" />
  </div>
</template>

<script setup>
import { loadFull } from 'tsparticles';

const particlesInit = async (engine) => {
  await loadFull(engine);
};

const subParticles = {
  color: ['#5bc0eb', '#fde74c', '#9bc53d', '#e55934', '#fa7921'],
  opacity: {
    value: 1,
    animation: {
      enable: true,
      speed: 0.6,
      minimumValue: 0.1,
      sync: false,
      startValue: 'max',
      destroy: 'min'
    }
  },
  number: { value: 0 },
  stroke: { width: 2 },
  collisions: { enable: false },
  shape: { type: 'circle' },
  size: { value: 1, animation: { enable: false } },
  life: { count: 1, duration: { value: { min: 1, max: 2 } } },
  move: {
    enable: true,
    gravity: { enable: false },
    speed: 3,
    direction: 'none',
    random: true,
    straight: false,
    outMode: 'destroy'
  }
};

const configs = {
  detectRetina: true,
  emitters: {
    direction: 'top',
    life: { count: 30, duration: 0.1, delay: 0.1 },
    rate: { delay: 0.2, quantity: 1 },
    size: { width: 100, height: 0 },
    position: { y: 100, x: 50 }
  },
  particles: {
    number: { value: 0 },
    stroke: { color: { value: '#ababab' }, width: 1 },
    shape: { type: 'line' },
    size: {
      value: { min: 1, max: 70 },
      animation: { enable: true, sync: true, speed: 150, startValue: 'max', destroy: 'min' }
    },
    life: { count: 1 },
    rotate: { path: true },
    move: {
      enable: true,
      gravity: { acceleration: 15, enable: true, inverse: true, maxSpeed: 100 },
      speed: { min: 10, max: 20 },
      outModes: { default: 'destroy', top: 'none' }
    },
    destroy: {
      mode: 'split',
      split: { count: 1, factor: { value: 1 / 4 }, rate: { value: 100 }, particles: subParticles }
    }
  }
};
</script>
