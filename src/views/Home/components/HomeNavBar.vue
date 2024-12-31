<template>
  <div class="navbar">
    <div class="title" v-unit>JUWENZHANG</div>
  </div>
</template>

<script setup name="HomeNavBar">

</script>

<style scoped lang="less">
  .navbar {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #f2f2f2;
    height: 2.4rem;

    .title {
      font-size: 1.2rem;
      font-weight: 700;
      color: var(--primary-color);
      text-shadow: 0.1rem 0.1rem black;
      animation: title_animation 2s ease-in 0;
      animation-iteration-count: infinite;
      animation-play-state: running;
    }

    @keyframes title_animation {
      from {
        transform: scale(0.5, 0.5);
      }
      50% {
        transform: scale(1, 1);
      }
      to {
        transform: scale(0.5, 0.5);
      }
    }
  }
</style>