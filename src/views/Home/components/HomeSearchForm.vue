<template>
  <div class="searchForm">
    <input type="text" placeholder="请搜索内容">
  </div>
</template>

<script setup name="HomeSearchForm">

</script>

<style scoped lang="less">
  .searchForm {
    position: fixed;
    top: 0;
    input{
      width: 100vw;
      height: 40px;
      text-align: center;
      padding: 5px 10px;
      border-color: #f3f1f1;
      border-width: 1px;
      box-sizing: border-box;
      background: #f8f5f5;
    }
  }
</style>