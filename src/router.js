import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Models from './components/Models.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/models', component: Models},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;