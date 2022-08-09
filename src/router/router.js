import { createWebHistory, createRouter } from "vue-router";
import LoginVue  from '@/components/LoginVue.vue'
import HelloWorld from '@/components/HelloWorld'
const routes = [
  {
    path: "/loginVue",
    name: "LoginVue",
    component: LoginVue,
  },
  {
    path: "/",
    name: "helloWorld",
    component: HelloWorld,
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