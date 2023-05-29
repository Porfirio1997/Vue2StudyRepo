import Vue from "vue";
import VueRouter from "vue-router";
import Cadastro from "../views/PessoasCadastro.vue";
import Registro from "../views/PessoasCadastradas.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Cadastro,
    },
    {
      path: "/cadastradas",
      name: "Registro",
      component: Registro,
    },
    /*
    {
      path: "/cadastradas",
      name: "cadastradas",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/PessoasCadastradas.vue"),
    },*/
  ],
});

export default router;
