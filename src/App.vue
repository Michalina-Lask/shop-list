<template>
  <v-app id="inspire">
    <v-form ref="form">
      <v-text-field
        label="Shop"
        :rules="rules"
        hide-details="auto"
        v-model="shop"
      ></v-text-field>
      <v-text-field
        label="Calories"
        :rules="rules"
        hide-details="auto"
        v-model="calories"
      ></v-text-field>
      <v-text-field
        label="Fat"
        :rules="rules"
        hide-details="auto"
        v-model="fat"
      ></v-text-field>

            <v-btn
        
        color="success"
        class="mr-4"
        @click="addProduct"
      >
        Dodaj Produkt
      </v-btn>
    </v-form>

    <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </v-app>
</template>


<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Shop (100g serving)",
          align: "start",
          sortable: false,
          value: "shop",
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
      ],
      desserts: [],
      shop:"",
      calories:"",
      fat:""
    };
  },
  methods: {
    addProduct(){
      this.desserts.push({shop:this.shop,calories:this.calories, fat:this.fat})
      
    }
    
  }
 
};
</script>
