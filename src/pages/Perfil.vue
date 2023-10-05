<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" flat bordered>
      <img src="../assets/perfil.jpg">

      <q-list>

          <q-item-section>
            <q-item-label>Nombre:</q-item-label>
            <q-item-label caption>{{ datos.nombre }}</q-item-label>
          </q-item-section>


          <q-item-section>
            <q-item-label>Edad:</q-item-label>
            <q-item-label caption> {{ datos.edad }} </q-item-label>
          </q-item-section>


          <q-item-section>
            <q-item-label>Correo:</q-item-label>
            <q-item-label caption>{{ datos.correo }}</q-item-label>
          </q-item-section>

          <q-item-section>
            <q-item-label>Telefono:</q-item-label>
            <q-item-label caption>{{ datos.telefono }}</q-item-label>
          </q-item-section>

      </q-list>
    </q-card>

  </div>
</template>
  
  <script>
  import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
  
  export default defineComponent({
    name: 'PerfilPage',

    setup(){
      const store = useStore()

      return{
        datos: computed(() => store.state.perfil.datos)
      }
       
    }
  })
  </script>
  