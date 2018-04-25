<template>
    <div class="items-view">
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
  name: 'items-view',
  components: {
    EditList
  },
  data () {
    return {
      editListItems: [
        {
          id: 123,
          title: '考研英语作文讲解',
          avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525093752&di=a6abad0cea586161ebd72e46728e2627&imgtype=jpg&er=1&src=http%3A%2F%2Fefile.kaoyan.com%2Fimg%2F2015%2F08%2F03%2F175432_55bf3a586217a.jpg'
        }
      ],
      editNavItem: {
        name: this.$route.params.nav,
        to: 'items-view',
        params: this.$route.params
      }
    }
  },
  methods: {
    addOperation () {
      this.$router.push({
        name: 'item-add-modify-view',
        params: {
          set_id: this.$route.params.set_id,
          item_id: 0,
          nav: '新增章节'
        }
      })
    },
    modifyOperation (item) {
      this.$router.push({
        name: 'item-add-modify-view',
        params: {
          set_id: this.$route.params.set_id,
          item_id: item.id,
          nav: '修改章节'
        }
      })
    },
    deleteOperation (item) {

    },
    viewOperation (item) {
    }
  },
  mounted () {
    this.$util.resetEditNavItem(this.editNavItem)
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
