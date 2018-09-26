<template>
  <!-- 搜索列表 -->
  <div class="data-box">搜索列表</div>
</template>

<script>
export default {
  name: "Search"
};
</script>
<style lang="less" scoped>
/* 数据区域容器 */
.data-box {
  position: absolute;
  left: 10px;
  right: 10px;
  top: 10px;
  bottom: 10px;
  overflow-y: auto;
}
</style>
