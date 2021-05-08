<template>
  <div>
    <el-header>
      <bread-crumb :head-data="dataSplit"></bread-crumb>
    </el-header>
    <el-main></el-main>
  </div>
</template>

<script>
import breadCrumb from "../breadCrumb";

export default {
  data() {
    return {};
  },
  components: {
    breadCrumb,
  },
  computed: {
    dataSplit() {
      return this.$route.path.split("/").slice(1);
    },
  },
};
</script>

<style scoped>
</style>