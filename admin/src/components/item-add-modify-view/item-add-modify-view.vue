<template>
    <div class="kk-item-add-modify-view">
      <div class="kk-item-edit-container">
        <el-col>
          <el-form ref="detailForm" :model="detail" :rules="rules" class="kk-item-edit-form" label-width="80px">
            <el-form-item label="标题">
              <el-input v-model="detail.title" placeholder="章节标题"></el-input>
            </el-form-item>
            <el-form-item label="内容">
              <div class="kk-editor-container">
                <Editor :content="detail.content" @input="kk_onContentEditorInput"></Editor>
              </div>
            </el-form-item>
            <el-form-item>
              <el-button type="success" @click="kk_onEditSubmit"><span>确认提交</span></el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
import Editor from 'components/editor/editor'
export default {
  name: 'item-add-modify-view',
  components: {
    Editor
  },
  data () {
    return {
      detail: {
        title: '',
        content: ''
      },
      rules: {
      },
      editNavItem: {
        name: this.$route.params.nav,
        to: 'item-add-modify-view',
        params: this.$route.params
      }
    }
  },
  methods: {
    kk_onContentEditorInput (content) {
      this.detail.content = content
    },
    kk_onEditSubmit () {
    }
  },
  mounted () {
    this.$util.resetEditNavItem(this.editNavItem)
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .kk-item-add-modify-view
    width: 100%
    height: 100%
    .kk-item-edit-container
      margin-top: 30px
      .kk-item-edit-form
        .kk-editor-container
          height: 300px
          .kk-editor
            height: 200px
</style>
