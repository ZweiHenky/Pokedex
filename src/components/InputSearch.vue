<template>
  <div class="row full-width justify-center">
      <div class="col-10 col-sm-9 col-lg-10">
        <q-input outlined class="q-mt-lg " v-model="text" label="Buscar pokemon" >

          <template v-slot:append>
            <q-icon v-if="text !== ''" name="close" @click="close" class="cursor-pointer" />
            <q-icon name="search" @click.prevent="search" />
          </template>

        </q-input>
      </div>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({

    name:'InputSearch',
    
    setup(){

      const store = useStore()
      const text = ref('')

        return{
            text,
            search: async () =>{
              store.commit('pokemons/cleanError')
              await store.dispatch('pokemons/getPokemonByIdApi', text.value)
            },
            close: () =>{
              store.commit('pokemons/cleanPokemonById')
              store.commit('pokemons/cleanError')
              text.value = ''
            }
        }
    }
})
</script>

