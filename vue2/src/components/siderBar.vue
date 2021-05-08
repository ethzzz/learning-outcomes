<template>
  <div class="sider-bar">
    <!-- 显示与隐藏侧边栏 -->
    <div class="toggle-button" @click="toggleCollapse">|||</div>
    <!-- 侧边栏菜单区域按钮 -->
    <el-menu
        background-color="#333744"
        text-color="#fff"
        active-text-color="#409eff"
        width="200px"
        unique-opened
        :collapse="isCollapse"
        :collapse-transition="false"
        :router="true"
        :default-active="activePath"
    >
      <!-- 一级菜单 -->
      <el-submenu :index="item.id+''" v-for="item in menuList" :key="item.id">
        <!-- 一级菜单的模板区域 -->
        <template slot="title">
          <!-- 图标 -->
          <!--<i :class="iconObj[item.id]"></i>-->
          <!-- 文本 -->
          <span>{{ item.name }}</span>
        </template>
        <!-- 二级菜单 -->
        <el-menu-item
            :index="'/'+subItem.path"
            v-for="subItem in item.children"
            :key="subItem.id"
            @click="savaNavStatu('/'+subItem.path)"
        >
          <!-- 图标 -->
          <i class="el-icon-menu"></i>
          <!-- 文本 -->
          <span>{{ subItem.authName }}</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [{
        name: 'axios',
        id: 'axios',
        path: 'axios',
        children: [
          {
            name: 'A',
            id: 'A',
            path: 'axios',
            children: []
          },
          {
            name: 'B',
            id: 'B',
            path: 'axios',
            children: []
          },
          {
            name: 'C',
            id: 'C',
            path: 'axios',
            children: []
          },
          {
            name: 'D',
            id: 'D',
            path: 'axios',
            children: []
          }
        ]
      }]
    }
  }
}
</script>

<style lang="less" scoped>
.sider-bar {
  height: 100%;
}

.toggle-button {
  background-color: #4a5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>