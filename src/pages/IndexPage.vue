<template>
  <q-page class="flex flex-center" style="min-height: 0;" >

        <InputSearch  />

        <div v-if=" Object.keys(pokemon).length == 0">
          <div v-if="isLoading" class="q-pa-md row justify-center" >
            <h3>Cargando...</h3>
          </div>

          <div v-else-if="error" class="q-pa-md row justify-center" >
            <h3>{{error}}</h3>
          </div>

          <div v-else class="q-pa-md row justify-center" >
            
            <q-card class="my-card col-5 col-sm-3 col-lg-2 q-ma-sm" v-for="pokemon in pokemons" :key="pokemon.id" @click="details(pokemon.name)" >

              <q-img :src="pokemon.url" :fit="mode" />
              <q-card-section>
                <div class="text-h6 text-center">{{ pokemon.name }}</div>
              </q-card-section>

            </q-card>
          </div>


        </div>
      

        <div v-else>
          <div v-if="isLoading" class="q-pa-md row justify-center" >
            <h3>Cargando...</h3>
          </div>

          <div v-else class="row justify-center " >
            
            <q-card class="my-card col-12 q-ma-xl" @click="details(pokemon.name)" >

              <q-img :src="pokemon.url" :fit="mode" />
              <q-card-section>
                <div class="text-h6 text-center">{{ pokemon.name }}</div>
              </q-card-section>

            </q-card>
          </div>
        </div>
        <Pagination v-if="Object.keys(pokemon).length == 0" />

      </q-page>

  
</template>

<script>
import { computed, defineComponent } from 'vue'
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import InputSearch from '../components/InputSearch.vue'
import Pagination from '../components/Pagination.vue'

export default defineComponent({

  components:{ InputSearch, Pagination },

  name: 'InicioPage',

  
  setup(){
    
    const store = useStore()
    const router = useRouter()

    return {
      pokemons: computed(()=> store.state.pokemons.pokemons),
      isLoading: computed(() => store.state.pokemons.isLoading),
      pokemon: computed(() => store.state.pokemons.pokemon),
      error: computed(() => store.state.pokemons.error),
      mode: 'contain',
      details:(name) =>{
        router.push(`pokemon/${name}`)
      }
      
    }

  },

  async created(){
    const store = useStore()
    const res = await store.dispatch('pokemons/getPokemonsApi')
  }

})

</script>

