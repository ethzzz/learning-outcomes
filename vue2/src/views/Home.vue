<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div @click="toWelcome">
        <img src="../assets/logo.png" alt width="30px" height="30px"/>
        <span>ethz test</span>
      </div>
      <el-button id="logout" type="info" @click="logout">退出</el-button>
    </el-header>
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <!-- 显示与隐藏侧边栏 -->
        <div class="toggle-button" @click="toggleCollapse">|||</div>
        <!-- 侧边栏菜单区域按钮 -->
        <el-menu
            background-color="#373d41"
            text-color="#fff"
            active-text-color="#409eff"
            width="200px"
            :collapse="isCollapse"
            :collapse-transition="false"
            :router="true"
            :default-active="activePath"
        >
          <!-- 一级菜单 -->
          <el-submenu
              :index="item.id + ''"
              v-for="item in menulist"
              :key="item.id"
          >
            <!-- 一级菜单的模板区域 -->
            <template slot="title">
              <!-- 图标 -->
              <i :class="iconObj[item.id]"></i>
              <!-- 文本 -->
              <span>{{ item.menuName }}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item
                :index="item.path+ subItem.path"
                v-for="subItem in item.children"
                :key="subItem.id"
                @click="savaNavStatu(item.path+ subItem.path)"
            >
              <!-- 图标 -->
              <i class="el-icon-menu"></i>
              <!-- 文本 -->
              <span>{{ subItem.menuName }}</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右侧内容主体 -->
      <el-main>
        <!-- 路由占位符 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      // 左侧菜单数据
      menulist: [
        {
          menuName: "Axios",
          id: "100",
          path: "/axios",
          children: [
            {
              menuName: "Jokes",
              id: "101",
              path: "/jokes",
              children: [],
            },
            {
              menuName: "Weather",
              id: "102",
              path: "/weather",
              children: [],
            },
            {
              menuName: "News",
              id: "103",
              path: "/news",
              children: [],
            },
            {
              menuName: "Novel",
              id: "104",
              path: "/novel",
              children: [],
            },
            {
              menuName: "Music",
              id: "105",
              path: "/music",
              children: [],
            },
          ],
        },
        {
          menuName: "Echarts",
          id: "200",
          path: "/echarts",
          children: [
            {
              menuName: 'Echarts',
              id: '106',
              path: '/echarts'
            }
          ]
        }
      ],
      // 导航栏图标
      iconObj: {
        125: "el-icon-user-solid",
        103: "el-icon-s-opportunity",
        101: "el-icon-s-goods",
        102: "el-icon-s-order",
        145: "el-icon-s-marketing",
        200: "el-icon-s-data",
      },
      // 是否折叠
      isCollapse: false,
      // 被激活的链接地址
      activePath: "",
    };
  },
  created() {
    // this.getMenuList();
    this.activePath = window.sessionStorage.getItem("activePath");
  },
  methods: {
    logout() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    },
    // 跳转到welcome组件
    toWelcome() {
      this.$router.push("/welcome");
    },
    // 获取所有的菜单
    async getMenuList() {
      const {data: res} = await this.$http.get("menus");
      console.log(res);
      if (res.meta.status !== 200) return this.$message.error(res.meta.msg);
      this.menulist = res.data;
    },
    // 点击按钮，切换菜单的折叠与展开
    toggleCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    // 保存连接的激活状态
    savaNavStatu(activePath) {
      window.sessionStorage.setItem("activePath", activePath);
      this.activePath = window.sessionStorage.getItem("activePath");
    },
  },
};
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
}

.el-header {
  display: flex;
  justify-content: center;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 20px;
  background-color: #373d41;

  > div {
    display: flex;
    align-items: center;

    span {
      margin-left: 15px;
    }
  }

  #logout {
    position: absolute;
    right: 10px;
  }
}

.el-aside {
  background-color: #333744;

  .el-menu {
    border-right: none;
    transition: 1s all;
  }
}

.el-main {
  background-color: #eaedf1;
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