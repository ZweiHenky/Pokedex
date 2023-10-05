import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'
import  pokemons  from "./pokemons";
import  perfil  from "./perfil";


export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      pokemons,
      perfil
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
})
