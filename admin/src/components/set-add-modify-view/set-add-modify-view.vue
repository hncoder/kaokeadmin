<template>
    <div class="kk-set-add-modify-view">
      <div class="kk-set-edit-container">
        <el-col>
          <el-form ref="detailForm" :model="detail" :rules="rules" class="kk-set-edit-form" label-width="120px">
            <el-form-item label="标题" prop="title">
              <el-input v-model="detail.title" placeholder="课程标题"></el-input>
            </el-form-item>
            <el-form-item label="封面" required>
              <el-upload
                class="kk-avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="kk_handleAvatarSuccess"
                :before-upload="kk_beforeAvatarUpload">
                <img v-if="detail.avatar" :src="detail.avatar" class="kk-avatar">
                <i v-else class="el-icon-plus kk-avatar-uploader-icon"></i>
              </el-upload>
              <el-form-item prop="avatar">
                <el-input v-model="detail.avatar" placeholder="封面链接"></el-input>
              </el-form-item>
            </el-form-item>
            <el-form-item label="价格(元)" required>
              <el-col :span="4">
                <el-input v-model="detail.market_p" type="number" placeholder="原价"></el-input>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="4">
                <el-input v-model="detail.discount_p" type="number" placeholder="折扣价"></el-input>
              </el-col>
            </el-form-item>

            <el-form-item label="课程描述" prop="desc">
              <div class="kk-editor-container">
                <Editor :content="detail.desc" @input="kk_onDescEditorInput"></Editor>
              </div>
            </el-form-item>
            <el-form-item label="购买须知" prop="notice">
              <div class="kk-editor-container">
                <Editor :content="detail.notice" @input="kk_onNoticeEditorInput"></Editor>
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
  name: 'set-add-modify-view',
  components: {
    Editor
  },
  data () {
    return {
      content: `<h2 class="ql-align-center"><span class="ql-font-serif">Text content loading..</span></h2>`,
      editNavItem: {
        name: this.$route.params.nav,
        to: 'set-add-modify-view',
        params: this.$route.params
      },
      detail: {
        title: '',
        market_p: 0,
        discount_p: 0,
        avatar: '',
        desc: '',
        notice: ''
      },
      rules: {
        title: [{required: true, message: '请填入标题', trigger: 'blur'}],
        avatar: [{required: true, message: '请填入封面图片链接', trigger: 'blur'}],
        desc: [{required: true, message: '请填写课程描述', trigger: 'blur'}],
        notice: [{required: true, message: '请填写购买须知', trigger: 'blur'}]
      }
    }
  },
  computed: {
  },
  methods: {
    kk_onDescEditorInput (content) {
      console.log(content)
      this.detail.desc = content
    },
    kk_onNoticeEditorInput (content) {
      this.detail.notice = content
    },
    kk_onEditSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    kk_handleAvatarSuccess (res, file) { // this.imageUrl = URL.createObjectURL(file.raw)
    },
    kk_beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }

  },
  mounted () {
    this.$util.resetEditNavItem(this.editNavItem)
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .kk-set-add-modify-view
    width: 100%
    height: 100%
    .kk-set-edit-container
      margin-top: 30px
      letter-spacing: 2px
      .kk-set-edit-form
        .kk-avatar-uploader
          width: 200px
          height: 100px
          margin-bottom: 10px
          border: 1px dashed #d9d9d9
          border-radius: 6px
          background-color: white
          cursor: pointer
          position: relative
          overflow: hidden
          &:hover
            border-color: #409EFE
          .kk-avatar-uploader-icon
            font-size: 28px
            color: #8c939d
            width: 200px
            height: 100px
            line-height: 100px
            text-align: center
          .kk-avatar
            width: 200px
            height: 178px
            display: block
        .line
          text-align: center
        .kk-editor-container
          height: 300px
          .kk-editor
            height: 200px
</style>
