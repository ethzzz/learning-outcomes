<template>
  <div>
    <!--头部导航栏区域 -->
    <bread-crumb :head-data="headData"></bread-crumb>

    <!--卡片视图区域-->
    <el-card>
      <el-dropdown>

      </el-dropdown>
    </el-card>

  </div>
</template>

<script>
import breadCrumb from "../breadCrumb";

export default {
  data() {
    return {}
  },
  components: {
    breadCrumb
  },
  computed: {
    headData() {
      return this.$route.path.split('/').slice(1)
    }
  }
}
</script>

<style lang="less" scoped>
.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}

.el-icon-arrow-down {
  font-size: 12px;
}
</style>