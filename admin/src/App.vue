<template>
  <div id="app">
    <div class="kk-nav">
      <div class="kk-nav-logo">
        <img src="./assets/logo.jpg">
      </div>
      <div class="kk-nav-admin">
        <el-popover ref="kk-ref-popover-admin" placement="bottom" width="100" trigger="hover">
          <ul class="kk-popover-admin">
            <li><span>登录</span></li>
            <li><span>退出</span></li>
          </ul>
        </el-popover>
        <span v-popover:kk-ref-popover-admin v-show="kk_logined"><i class="el-icon-setting"></i></span>
      </div>
    </div>
    <div class="kk-main">
      <div class="kk-main-nav" v-show="kk_logined">
        <!--设置 el-menu 路由：https://segmentfault.com/a/1190000007810151-->
        <el-menu
          :default-active="kk_defaultActiveIndex"
          class="kk-main-nav-menu"
          background-color="#3B3B3B"
          text-color="#D8D8D8"
          active-text-color="#50AF3A"
          :router="true">
          <el-menu-item index="kk-menu-home-page" :disabled="kk_allMenuDisabled" :route="{name:'home-page'}">
            <i class="el-icon-menu"></i>
            <span>首页</span>
          </el-menu-item>
          <el-menu-item index="kk-menu-course-edit" :disabled="kk_allMenuDisabled" :route="{name:'course-edit'}">
            <template slot="title">
              <i class="el-icon-edit-outline"></i>
              <span>课程编辑</span>
            </template>
          </el-menu-item>
          <el-submenu index="kk-menu-table" :disabled="kk_allMenuDisabled">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span>数据报表</span>
            </template>
            <el-submenu index="kk-menu-table-course">
              <template slot="title">课程</template>
              <el-menu-item index="kk-menu-course-purchased-count">购买总计</el-menu-item>
              <el-menu-item index="kk-menu-course-purchased-record" :route="{name:'course-purchased-record'}">购买记录</el-menu-item>
            </el-submenu>
            <el-submenu index="kk-menu-table-user">
              <template slot="title">用户</template>
              <el-menu-item index="kk-menu-user-purchased">购买用户</el-menu-item>
              <el-menu-item index="kk-menu-user-all">所有用户</el-menu-item>
            </el-submenu>
            <el-menu-item index="kk-menu-order-record">订单记录</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
      <div class="kk-main-container"><router-view/></div>
    </div>
  </div>
</template>

<script>
import ElMenu from '../node_modules/element-ui/packages/menu/src/menu.vue'
import ElSubmenu from '../node_modules/element-ui/packages/menu/src/submenu.vue'

export default {
  components: {
    ElSubmenu,
    ElMenu
  },
  name: 'App',
  computed: {
    kk_defaultActiveIndex () {
      let routeStrs = this.$route.path.split('/')
      let routeStr = this.$route.name
      if (routeStrs.length > 2) {
        routeStr = routeStrs[1]
      }
      return 'kk-menu-' + routeStr
    },
    kk_allMenuDisabled () {
      return false
    },
    kk_logined () {
      return this.$store.state.logined
    }
  },
  created () {

  },
  mounted () {
    // this.$router.push('home-page')
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #app
    display: flex
    flex-direction: column
    height: 100%
    .kk-nav
      display: flex
      align-items: center
      width: 100%
      height: 45px
      line-height: 44px
      border-bottom: 1px solid #D8D8D8
      background: #FFFFFF//linear-gradient(#447BCC, #4A74B0)
      color: #50AF3A
      .kk-nav-logo
        & > img
          display: block
          width: auto
          height: 30px
          margin-left: 20px
      .kk-nav-admin
        flex: 1
        text-align: right
        padding-right: 20px
        font-size: 20px
    .kk-main
      flex: 1
      display: flex
      .kk-main-nav
        width: 160px
        height: 100%
        background: #3B3B3B
        .kk-main-nav-menu
          width: 100%
          overflow: hidden
          /*background: #3B3B3B*/
      .kk-main-container
        flex: 1
        height: 100%
</style>
