<template>
    <div class="login-page">
      <div class="login-container">
        <el-row>
          <el-col :span="8">
            <el-input id="name"  v-model="account" placeholder="请输入帐号">
              <template slot="prepend">帐号</template>
            </el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-input id="password" v-model="password" type="password" placeholder="请输入密码">
              <template slot="prepend">密码</template>
            </el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-button id="login" v-on:click="kk_doLogin" style="width:100%" type="success">登录</el-button>
          </el-col>
        </el-row>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
import ElContainer from 'element-ui/packages/container/src/main'
import ElRow from 'element-ui/packages/row/src/row'

export default {
  components: {
    ElRow,
    ElContainer},
  name: 'login-page',
  data () {
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    kk_doLogin: function () {
      let account = this.account
      let password = this.password
      if (account === '' || password === '') {
        this.$message({
          message: '账号和密码不能为空',
          type: 'error'
        })
        return
      }
      this.POST(this.$API.URI.LOGIN, {
        account: account,
        password: password
      }, data => {
        if (data.errcode === this.$API.ErrCode.OK) {
          this.$message({
            message: '登录成功',
            type: 'success'
          })
          this.$store.commit('changeLoginedState', true)
          this.$router.push('home-page')
        }
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .login-page
    width: 100%
    height: 100%
    .login-container
      margin-top: 80px
      margin-left: 40%
      .el-row
        margin-bottom: 20px
        &:last-child
          margin-bottom: 0
</style>
