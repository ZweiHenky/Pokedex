<template>
  <q-layout view="lHh Lpr lFf">

    <div >
      <q-toolbar class="bg-secondary text-white shadow-2 ">

        <q-btn flat label="Pokedex" />

        <q-space />

        <q-tabs v-model="tab" shrink>
          <essential-link 
          v-for="link in linksList" 
          :key="link.title"
          v-bind="link"
          />
        </q-tabs>

      </q-toolbar>
    </div>


    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from '../components/EssentialLink.vue'
import { linksList } from '../router/link-list'



export default defineComponent({
  components: { EssentialLink },
  name: 'MainLayout',

  setup () {
    const tab = ref('')

    return {
      linksList,
      tab
    }
  }
})
</script>
