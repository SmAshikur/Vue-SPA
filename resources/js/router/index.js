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
        ]
});

export default routes;