import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from "../components/pages/home";
import catIndex from "../components/pages/category/catIndex";
import catCreate from '../components/pages/category/catCreate';
import editCat from '../components/pages/category/editCat';
import proIndex from '../components/pages/product/proIndex';
import proCreate from '../components/pages/product/proCreate';
import proEdit from '../components/pages/product/proEdit';
import dashboard from '../components/pages/dashboard/dashboard';
import Login from '../components/pages/auth/login/Login.vue';
import profile from '../components/pages/dashboard/profile.vue';
import SignupVue from '../components/pages/auth/login/Signup.vue';
import pageDetails from '../components/pages/pageDetails.vue';
const routes = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: [
        {
            path: '/',
            component: Home,
            name: 'home',

        },
        {
            path: '/cat-index',
            component: catIndex,
            name: 'catIn',

        },
        {
            path: '/cat-create',
            component: catCreate,
            name: 'catCreate',

        },
        {
            path: '/cat-edit/:id',
            component: editCat,
            name: 'catEdit',

        },
        {
            path: '/pro-index',
            component: proIndex,
            name: 'proIn',
        },
        {
            path: '/pro-create',
            component: proCreate,
            name: 'proCreate',
        },
        {
            path: '/pro-edit/:id',
            component: proEdit,
            name: 'proEdit',
        },
        {
            path: '/auth/login',
            component: Login,
            name: 'login',
            meta: {
                requiresVisitor: true,
            }
        },
        {
            path: '/dashboard',
            component: dashboard,
            name: 'dashboard',
            meta: {
                requiresAuth: true,
            }
        },
        {
            path: '/profile',
            component: profile,
            name: 'profile',
            meta: {
                requiresAuth: true,
            }
        },
        {
            path: '/signup',
            component: SignupVue,
            name: 'signup',
            meta: {
                requiresVisitor: true,
            }
        },
        {
            path:  '/product/:slug',
            component:pageDetails,
            name: 'proDetails',
        },
        ]
});

export default routes;
