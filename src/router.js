// router.js 就是 vue-router 的配置文件

// 1. 引入 vue
// 2. 引入 vue-router
// 3. 使用 vue.use(vue-router)
// 4. 路由配置
// new VueRouter({
//   routes: [

//   ]
// })
// 5. 暴露这个配置

import Vue from 'vue';
import VueRouter from 'vue-router';
import Film from './views/Film.vue';
import Cinema from './views/Cinema.vue';
import Center from './views/Center.vue';
import City from './views/City.vue';
import Home from './views/Home.vue';
import Detail from './views/Detail.vue';
import Login from './views/Login.vue';
import NProgress from 'nprogress';
NProgress.configure({ showSpinner: false });

Vue.use(VueRouter);

let router = new VueRouter({
  mode: 'hash',
  // 配置路由对照表  url -> 视图组件
  // localhost:8080/#/films  -> Film.vue
  // localhost:8080/#/cinemas-> Cinema.vue
  // localhost:8080/#/center -> Center.vue
  // localhost:8080/#/city ->   City.vue
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        // PS: 不是一级路由的话，path路径前面不要加 /
        // PS: 二级或二级以上的路由，他们的url地址，是会从一级路由开始一直做追加的。
        // localhost:8080/#/films
        {
          path: 'films', // 就是url路径
          component: Film
        },
        // localhost:8080/#/cinemas
        {
          path: 'cinemas',
          component: Cinema
        },
        // localhost:8080/#/center
        {
          path: 'center',
          component: Center
        },
        // 空的儿子
        // localhost:8080/#/  ->  localhost:8080/#/films
        {
          path: '',
          // component: Film
          redirect: '/films'
        }
      ]
    },
    {
      // 城市选择页
      name: 'lose',
      path: '/city',
      component: City
    },
    {
      // 详情页
      path: '/detail/:id',
      component: Detail
    },
    {
      path: '/card/:abc',
      component: {
        render (h) {
          let that = this;
          return h('div', [
            '卖座卡页1面',
            h('button', {
              on: {
                click: function () {
                  that.reload();
                }
              }
            }, [
              '售价',
              h('span', '50￥')
            ])
          ]);
        },
        methods: {
          reload () {
            // router.push('/card');
            router.push({
              path: '/card/张三'
            })
          }
        },
        // 组件内的路由守卫函数
        beforeRouteEnter (to, from, next) {
          console.log('enter');
          next();
        },
        // 只会在页面使用了路由参数的时候。/card/100 -> card/200
        beforeRouteUpdate (to, from, next) {
          console.log('Update');
          next();
        },
        beforeRouteLeave (to, from, next) {
          console.log('Leave');
          next();
        }
      }
      // 路由独享的钩子函数
      // beforeEnter (to, from, next) {
      //   next(false)
      // }
    },
    {
      path: '/money',
      component: {
        render (h) {
          return h('div', '余额页面');
        }
      }
    },
    {
      path: '/system',
      component: {
        render (h) {
          return h('div', '设置页面');
        }
      }
    },
    {
      path: '/login',
      component: Login
    },
    // 设置一个 通配符的 一级路由，当url地址无法与上面的规则匹配的时候，就会跟我匹配。
    {
      path: '*',
      redirect: '/films'
    }
    // {
    //   path: '/films', // 就是url路径
    //   component: Film
    // },
    // {
    //   path: '/cinemas',
    //   component: Cinema
    // },
    // {
    //   path: '/center',
    //   component: Center
    // },
    // {
    //   path: '/city',
    //   component: City
    // }
  ]
})

// 全局前置守卫
/*
  路由守卫中

  a -> b
  to  将要去的路由的路由对象      b
  from 从哪里去的路由的路由对象   a
  next 是否允许去。

  a -> b 如果不想去到 b   next(false)  或者 不使用 next()
         如果允许就得     next()
         如果不允许，并且想让他去到别的页面   next('/login')
*/

// router.beforeEach((to, from, next) => {
//   // 调用nprogress.start();
//   NProgress.start();

//   if (to.path === '/card' || to.path === '/money' || to.path === '/system') {
//     // 阻止
//     // next(false);
//     next({
//       path: '/login'
//     })
//   } else {
//     next();
//   }
// })
// // 全局后置守卫
// router.afterEach((to, from) => {
//   // 完成 nprogress.done()
//   NProgress.done();
// })
export default router;

// 1. VueRouter  为什么要使用 Vue.use(), 为了去触发 VueRouter 的install 方法
/*
  {
    install: function(Vue) {
      Vue.component('router-view', {});

      Vue.component('router-link', {});
    }
  }
*/
