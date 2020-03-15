import Vue from 'vue';

//配置路由
import VueRouter from 'vue-router';
Vue.use(VueRouter);


//1.创建组件
import Login from '@/components/login/login.vue';
import Main from '@/components/main/main.vue';
import Salary from "@/components/salary/salary.vue";
import Leave from "@/components/leave/leave.vue";
import Attendance from "@/components/attend/attendance.vue";
import MySelf from "@/components/self/mySelf.vue";



//2.配置路由   注意：名字

const routes = [
  { path: '/login', component: Login },
  // { path: '/news', component: News, name: 'news' },

  { path: '/main', component: Main },
  { path: '/salary', component: Salary},
  { path: '/leave', component: Leave},
  { path: '/attendances', component: Attendance},
  { path: '/baseinfoApp', component: MySelf},


  { path: '*', redirect: '/login' }   /*默认跳转路由*/
]


//3.实例化VueRouter  注意：名字

const router = new VueRouter({
  mode: 'hash',   /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})


//5 <router-view></router-view> 放在 App.vue

export default router;

