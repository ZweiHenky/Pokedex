<template>
    <q-page>
        <div class="card">
        <div class="pokemon">
            <img :src="url" alt="">
            <div>
                <h5>{{ name }}</h5>
                <span>Tipos: </span>
                <span  class="q-pa-xs" v-for="type in types" :key="type.slot">
                    <span>{{ type.type.name }}</span>
                </span>

            </div>
        </div>
        <q-icon name="close" class="icono" size="lg" @click="back" />

    </div>
    <div class="q-pa-md q-gutter-md line-progress">
        <q-linear-progress
        v-for="stat in stats"
        :key="stat.stat.name"
        :value="stat.base_stat * 0.01"
        size="50px"
        color="accent" 
        class="q-mt-sm"
        >
            <div class="absolute-full flex flex-center">
                <q-badge color="white" text-color="accent" :label="stat.stat.name" />
            </div>
        </q-linear-progress>
    </div>
    </q-page>
</template>
  
  <script>
  import { computed, defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
  
  export default defineComponent({

    name: 'PokemonDetail',
    
    
    setup(){
        const store = useStore()
        const router = useRouter()
        
        return{
            name: computed(()=> store.state.pokemons.pokemon.name),
            url: computed(()=> store.state.pokemons.pokemon.url),
            types: computed(()=> store.state.pokemons.pokemon.types),
            stats: computed(()=> store.state.pokemons.pokemon.stats),

            back: () =>{
                store.commit('pokemons/cleanPokemonById')
                router.push({name: 'inicio'})
            }
        }
    },

    async created (){
        const store = useStore()
        const router = useRouter()
        await store.dispatch('pokemons/getPokemonByIdDetailsApi', router.currentRoute.value.params.name)
    }
  })
  </script>

<style scoped>
.card{
    border-radius: 5px;
    margin-top: 5px;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    background-color: #038554;
    color: white;
}
.pokemon{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
}

.icono{
    background: white;
    border-radius: 5px;
    color: black;
}

.line-progress{
    width: 95%;
    margin: 0 auto;
}

</style>