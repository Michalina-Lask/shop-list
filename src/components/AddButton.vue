
<template v-slot:activator="{ on, attrs }">
  <v-btn color="success" class="mr-4" @click="addProduct">
        Dodaj Produkt
      </v-btn>
        
  </template>


<script>
export default {
    data (){
        return{
           
        }
    },
     methods: {
    addProduct() {
      this.dialog = true
     
    },

}
}
</script>

<style>

</style>




