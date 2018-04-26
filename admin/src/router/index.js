import Vue from 'vue'
import Router from 'vue-router'

import loginPage from 'components/login-page/login-page'
import homePage from 'components/home-page/home-page'
import courseEdit from 'components/course-edit/course-edit'
import coursePurchasedRecord from 'components/course-purchased-record/course-purchased-record'
import setsView from 'components/sets-view/sets-view'
import setAddModifyView from 'components/set-add-modify-view/set-add-modify-view'
import itemsView from 'components/items-view/items-view'
import itemAddModifyView from 'components/item-add-modify-view/item-add-modify-view'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home-page'
    },
    {
      path: '/home-page',
      name: 'home-page',
      component: homePage
    },
    {
      path: '/login-page',
      name: 'login-page',
      component: loginPage
    },
    {
      path: '/course-edit',
      component: courseEdit,
      children: [
        {
          path: 'sets-view',
          name: 'sets-view',
          component: setsView
        },
        {
          path: 'set-add-modify-view/:set_id/:nav',
          name: 'set-add-modify-view',
          component: setAddModifyView
        },
        {
          path: 'items-view/:set_id/:nav',
          name: 'items-view',
          component: itemsView
        },
        {
          path: 'item-add-modify-view/:set_id/:item_id/:nav',
          name: 'item-add-modify-view',
          component: itemAddModifyView
        },
        {
          path: '/',
          redirect: {path: 'sets-view'}
        }
      ]
    },
    {
      path: '/course-purchased-record',
      name: 'course-purchased-record',
      component: coursePurchasedRecord
    }
  ]
})
