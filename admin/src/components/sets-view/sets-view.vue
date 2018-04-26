<template>
    <div class="kk-sets-view">
      <EditList
        :addOperation="addOperation"
        :modifyOperation="modifyOperation"
        :deleteOperation="deleteOperation"
        :viewOperation="viewOperation"
        :editListItems="editSets"></EditList>
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
      editSets: [],
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
    this.GET(this.$API.URI.SET_ALL, {}, data => {
      if (data.data instanceof Array) {
        this.editSets = data.data
      }
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .kk-sets-view
    width: 100%
</style>
