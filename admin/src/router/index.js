import Vue from 'vue'
import Router from 'vue-router'

import homePage from 'components/home-page/home-page'
import courseEdit from 'components/course-edit/course-edit'
import coursePurchasedRecord from 'components/course-purchased-record/course-purchased-record'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      name: 'home-page',
      component: homePage
    },
    {
      path: '/course-edit',
      name: 'course-edit',
      component: courseEdit
    },
    {
      path: '/course-purchased-record',
      name: 'course-purchased-record',
      component: coursePurchasedRecord
    }
  ]
})
