<template>
    <div class="kk-edit-list">
      <div class="kk-edit-list-container">
        <div class="kk-box-container" @click="addOperation()">
          <i class="kk-edit-plus el-icon-plus"></i>
        </div>
        <div class="kk-box-container kk-edit-container" v-for="item in editListItems" :key="item.id">
          <img :src="item.avatar" alt="" class="kk-box-avatar">
          <div class="kk-box-title"><span>{{item.title}}</span></div>
          <div class="kk-box-mask"></div>
          <div class="kk-edit-operations">
            <i class="kk-edit-operation el-icon-edit" @click="modifyOperation(item)"></i>
            <i class="kk-edit-operation el-icon-delete" @click="deleteOperation(item)"></i>
            <i class="kk-edit-operation el-icon-view" @click="viewOperation(item)"></i>
          </div>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'edit-list',
  props: {
    addOperation: {
      type: Function,
      required: true
    },
    modifyOperation: {
      type: Function,
      required: true
    },
    deleteOperation: {
      type: Function,
      required: true
    },
    viewOperation: {
      type: Function,
      required: true
    },
    editListItems: {
      type: Array
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .kk-edit-list
    width: 100%
    .kk-edit-list-container
      width: 100%
      cursor: pointer
      .kk-box-container
        display: inline-block
        float: left
        margin-top: 20px
        margin-left: 20px
        width: 100px
        height: 100px
        border-radius: 5px
        overflow: hidden
        background-color: white
        text-align: center
        &:hover
          background: #F7F7F7
          .kk-box-mask
            display: block
          .kk-edit-operations
            display: flex
        .kk-edit-plus
          margin-top: 25px
          font-size: 50px
          color: #D8D8D8
      .kk-edit-container
        position: relative
        width: 200px
        .kk-box-avatar
          width: 100%
          height: auto
        .kk-box-title
          position: absolute
          left: 0px
          bottom: 0px
          width: 100%
          padding: 5px
          background: linear-gradient(#D8D8D8, #333333)
          opacity: 0.7
          text-align: left
          font-size: 16px
          letter-spacing: 2px
          color: white
        .kk-box-mask
          display: none
          position: absolute
          left: 0
          top: 0
          width: 100%
          height: 100%
          background-color: #000000
          opacity: 0.7
        .kk-edit-operations
          position: absolute
          display: none
          flex-direction: row
          align-items: center
          left: 0
          top: 30px
          width: 100%
          height: 40px
          color: white
          font-size: 20px
          .kk-edit-operation
            flex: 1
            display: inline-block
</style>
