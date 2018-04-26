<template>
    <div class="kk-item-add-modify-view">
      <div class="kk-item-edit-container">
        <el-col>
          <el-form ref="detailForm" :model="detail" :rules="rules" class="kk-item-edit-form" label-width="80px">
            <el-form-item label="标题" prop="title">
              <el-input v-model="detail.title" placeholder="章节标题"></el-input>
            </el-form-item>
            <el-form-item label="免费">
              <el-switch active-color="rgb(106,192,68)" v-model="detail.free"></el-switch>
            </el-form-item>
            <el-form-item label="内容" prop="content">
              <div class="kk-editor-container">
                <Editor :content="detail.content" @input="kk_onContentEditorInput"></Editor>
              </div>
            </el-form-item>
            <el-form-item>
              <el-button type="success" @click="kk_onEditSubmit('detailForm')"><span>确认提交</span></el-button>
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
      setID: this.$route.params.set_id,
      itemID: this.$route.params.item_id,
      detail: {
        title: '',
        free: false,
        content: ''
      },
      rules: {
        title: [{required: true, message: '请填入标题', trigger: 'blur'}],
        content: [{required: true, message: '请填写章节内容', trigger: 'blur'}]
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
    kk_onEditSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.itemID > 0) {
            let URI = this.$API.URI.ITEM_MOD.replace('<int:item_id>', this.itemID)
            this.POST(URI, this.detail, data => {
              if (data.errcode === this.$API.ErrCode.OK) {
                this.$router.back()
              }
            })
          } else {
            let URI = this.$API.URI.ITEM_ADD.replace('<int:set_id>', this.setID)
            this.POST(URI, this.detail, data => {
              if (data.errcode === this.$API.ErrCode.OK) {
                this.$router.back()
              }
            })
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  },
  mounted () {
    this.$util.resetEditNavItem(this.editNavItem)
    if (this.itemID > 0) {
      let URI = this.$API.URI.ITEM.replace('<int:item_id>', this.itemID)
      this.GET(URI, {}, data => {
        if (data.data instanceof Object) {
          this.detail = data.data
        }
      })
    }
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
