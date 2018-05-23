import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
const left = r => require.ensure([], () => r(require('../view/left.vue')), 'left')
const leftt = r => require.ensure([], () => r(require('../view/leftt.vue')), 'leftt')
const lefttt = r => require.ensure([], () => r(require('../view/lefttt.vue')), 'lefttt')
const routes=[{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld,
    children:[
      {
        path: 'left',
        component: left
      },
      {
        path: 'leftt',
        component: leftt
      },
      {
        path: 'lefttt',
        component: lefttt
      }
    ]
  }
]

export default new Router({
  routes
})
