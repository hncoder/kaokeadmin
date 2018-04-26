<template>
    <div class="items-view">
      <EditList
        :addOperation="addOperation"
        :modifyOperation="modifyOperation"
        :deleteOperation="deleteOperation"
        :viewOperation="viewOperation"
        :editListItems="editItems"></EditList>
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
      setID: this.$route.params.set_id,
      editItems: [],
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
          set_id: this.setID,
          item_id: 0,
          nav: '新增章节'
        }
      })
    },
    modifyOperation (item) {
      this.$router.push({
        name: 'item-add-modify-view',
        params: {
          set_id: this.setID,
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
    let URI = this.$API.URI.SET_ITEMS.replace('<int:set_id>', this.setID)
    this.GET(URI, {}, data => {
      if (data.data instanceof Array) {
        this.editItems = data.data
      }
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
