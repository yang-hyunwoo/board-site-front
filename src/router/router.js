import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: '/',
    name: 'defaultLayout',
    component: () => import('@/components/layout/DefaultLayout.vue'),
    children: [
      {
          path: '/',
          name: 'home',
          component: ()=> import('@/components/Home.vue'),
      },
      {
          path: '/travelList',
          name: 'travelList',
          component: ()=> import('@/components/travel/TravelList.vue'),
      },
      {
        path: '/travelDetail',
        name: 'travelDetail',
        component: ()=> import('@/components/travel/TravelDetail.vue'),
       },
       {
        path: '/travelPaymentIng',
        name: 'travelPaymentIng',
        component: ()=> import('@/components/travel/TravelPaymentIng.vue'),
       },
      {
        path: '/article',
        name: 'article',
        component: ()=> import('@/components/article/Article.vue'),
     },
     {
      path: '/articleDetail',
      name: 'articleDetail',
      component: ()=> import('@/components/article/ArticleDetail.vue'),
     },
     {
      path: '/articleWrite',
      name: 'articleWrite',
      component: ()=> import('@/components/article/ArticleWrite.vue'),
     },
     
  ],
  },
  {
    path: '/',
    name: 'emptyLayout',
    component: () => import('@/components/layout/EmptyLayout.vue'),
    children: [
        {
            path: '/login',
            name: 'login',
            component: ()=> import('@/components/login/Login'),
        },
        {
          path: '/join',
          name: 'join',
          component: ()=> import('@/components/login/Join'),
        },        
        {
          path: '/loginSuccess',
          name: 'loginSuccess',
          component: ()=> import('@/components/login/LoginSuccess'),
        },
        {
          path: '/travelPaymentSuccess',
          name: 'travelPaymentSuccess',
          component: ()=> import('@/components/travel/TravelPaymentSuccess.vue'),
        },
    ],
},

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

