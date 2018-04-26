<template>
  <div class="kk-course-edit">
    <div class="kk-course-edit-nav">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item v-for="item in kk_navItems" :key="item.to" :to="{ name: item.to, params: item.params }">{{item.name}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="kk-course-edit-container"><router-view/></div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'course-edit',
  data () {
    return {
    }
  },
  computed: {
    kk_navItems () {
      return this.$store.state.editNavItems
    }
  },
  mounted () {
    // this.$router.push({name: 'sets-view'})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .kk-course-edit
    display: flex
    flex-direction: column
    width: 100%
    height: 100%
    .kk-course-edit-nav
      width: 100%
      padding: 10px
      background-color: white
      border-bottom: 1px solid #D8D8D8
    .kk-course-edit-container
      flex: 1
</style>
