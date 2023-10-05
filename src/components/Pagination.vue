<template>
    <div class="q-pa-lg flex flex-center">
      <q-pagination
        v-model="current"
        color="black"
        :max="1300/20"
        :max-pages="6"
        :boundary-numbers="false"
        @click="click"
      />
    </div>
  </template>
  
  <script>
  import {defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
  
  export default defineComponent({

    name: 'PaginationComponent',

    setup () {

        const store = useStore()
        const current = ref(1)

      return {
        current,
        click: async () =>{
            const offset = (current.value * 20) - 20
            store.commit('pokemons/updatePagination', offset )
            await store.dispatch('pokemons/getUpdatePokemonsApi')
        }
      }
    }
  })
  </script>
