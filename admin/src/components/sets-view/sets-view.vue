<template>
    <div class="kk-sets-view">
      <EditList
        :addOperation="addOperation"
        :modifyOperation="modifyOperation"
        :deleteOperation="deleteOperation"
        :viewOperation="viewOperation"
        :editListItems="editListItems"></EditList>
    </div>
</template>

<script type="text/ecmascript-6">
import EditList from 'components/edit-list/edit-list'

export default {
  name: 'sets-view',
  components: {
    EditList
  },
  data () {
    return {
      editListItems: [
        {
          id: 123,
          title: '英语作文讲解',
          avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525093752&di=a6abad0cea586161ebd72e46728e2627&imgtype=jpg&er=1&src=http%3A%2F%2Fefile.kaoyan.com%2Fimg%2F2015%2F08%2F03%2F175432_55bf3a586217a.jpg'
        }
      ],
      editNavItem: {
        name: '全部课程',
        to: 'sets-view',
        params: {}
      }
    }
  },
  methods: {
    addOperation () {
      this.$router.push({
        name: 'set-add-modify-view',
        params: {
          set_id: 0,
          nav: '新增课程'
        }
      })
    },
    modifyOperation (item) {
      this.$router.push({
        name: 'set-add-modify-view',
        params: {
          set_id: item.id,
          nav: '修改课程'
        }
      })
    },
    deleteOperation (item) {

    },
    viewOperation (item) {
      this.$router.push({
        name: 'items-view',
        params: {
          set_id: item.id,
          nav: item.title
        }
      })
    }
  },
  mounted () {
    this.$util.resetEditNavItem(this.editNavItem)
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .kk-sets-view
    width: 100%
</style>
