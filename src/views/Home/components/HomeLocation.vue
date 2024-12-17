<template>
  <div class="location">
    <div class="city">广东</div>
    <div class="position">
      <div class="text">我的位置</div>
      <img src="../../../assets/img/img.png" alt="~">
    </div>
  </div>
</template>

<script setup name="HomeLocation"></script>

<style scoped lang="less">
  .location {
    display: flex;
    justify-items: center;
    align-items: center;
    height: 2rem;
    border-bottom: 1px solid #dedddd;
    padding: 0 1rem;
    font-weight: bold;

    .city {
      flex: 1
    }

    .position {
      width: 5.5rem;
      display: flex;
      justify-content: space-evenly;

      .text, .img{
        flex: 1
      }
      img {
        width: 15%
      }
    }
  }
</style>