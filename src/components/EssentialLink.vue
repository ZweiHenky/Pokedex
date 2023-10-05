<template>
  <q-tab :name="title" @click="navigateTo" >
    {{ title }}
  </q-tab>

</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from "vue-router";

export default defineComponent({
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      default: '#'
    },
  },

  setup(props){

    const router = useRouter()

    return{
      navigateTo(){
        router.push({ name:props.link })
      }
    }
  }
})


</script>
