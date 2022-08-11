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
    ],
},

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


// import { createWebHistory, createRouter } from "vue-router";
// import LoginVue from "@/components/LoginVue"
// const router = createRouter({
//     history : createWebHistory(),
//     routes : [ 
//         {
//             path : "loginVue",
//             name : "LoginVue",
//             component : LoginVue
//         }
//     ]
// });

// export default router;