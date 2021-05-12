
<template v-slot:activator="{ on, attrs }">
  <v-btn color="success" class="mr-4" @click="addProduct">
        Dodaj Produkt
      </v-btn>
          <!-- <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
          >
            Dodaj Produkt
          </v-btn>
          </div> -->
  
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
      /* let obj = { shop: this.shop, calories: this.calories, fat: this.fat };

      this.desserts.push(obj); */
    },

}
}
</script>

<style>

</style>




