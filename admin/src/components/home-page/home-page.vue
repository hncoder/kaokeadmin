<template>
  <div class="kk-home-page">
    <div class="kk-home-items">
      <div class="kk-home-item" @click="$router.push('course-edit')">
        <span class="kk-home-item-icon"></span>
        <span class="kk-home-item-title">标题</span>
      </div>
      <div class="kk-home-item">
        <span class="kk-home-item-icon"></span>
        <span class="kk-home-item-title">标题</span>
      </div>
      <div class="kk-home-item">
        <span class="kk-home-item-icon"></span>
        <span class="kk-home-item-title">标题</span>
      </div>
      <div class="kk-home-item">
        <span class="kk-home-item-icon"></span>
        <span class="kk-home-item-title">标题</span>
      </div>
      <div class="kk-home-item">
        <span class="kk-home-item-icon"></span>
        <span class="kk-home-item-title">标题</span>
      </div>
      <div class="kk-home-item">
        <span class="kk-home-item-icon"></span>
        <span class="kk-home-item-title">标题</span>
      </div>
      <div class="kk-home-item">
        <span class="kk-home-item-icon"></span>
        <span class="kk-home-item-title">标题</span>
      </div>
      <div class="kk-home-item">
        <span class="kk-home-item-icon"></span>
        <span class="kk-home-item-title">标题</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .kk-home-page
    padding: 20px
    min-width: 1080px
    display: flex
    background: #eee
    .kk-home-items
      width: 80%
      max-width: 1080px
      min-width: 900px
      height: 461px
      cursor: pointer
      .kk-home-item
        text-align: center
        display: inline-block
        width: 24.5%
        height: 230px
        border-right: 1px solid #D8D8D8
        border-bottom: 1px solid #D8D8D8
        background: #ffffff
        font-size: 15px
        color: #333333
        float: left
        .kk-home-item-icon
          display: inline-block
          width: 56px
          height: 56px
          margin-top: 57px
          background: #F0F0F0
          background: url("../../assets/logo.png")
        .kk-home-item-title
          display: block
        &:hover
          background: #F7F7F7
        &:nth-child(4n+4)
          border-right: none
        &:nth-child(5)
        &:nth-child(6)
        &:nth-child(7)
        &:nth-child(8)
          border-bottom: none
</style>
