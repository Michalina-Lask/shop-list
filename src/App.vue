<template>
  <v-app id="inspire">
    
    <v-row>
      <v-col cols="4">
        <add-button></add-button>
        <!-- <v-btn color="success" class="mr-4" @click="addProduct">
        Dodaj Produkt
      </v-btn> -->
      </v-col>
      <v-col cols="12">
        <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
      </v-col>
    </v-row>
    <dialog-window :dialog="dialog"></dialog-window>

   
  </v-app>
</template>

<script>
import DialogWindow from './components/Dialog Window'
import AddButton from './components/AddButton'



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
      shop: "",
      calories: "",
      fat: "",
      dialog: true
    };
  },
  components: {
        DialogWindow,
        AddButton,
    
   
  },
  methods: {
    addProduct() {
      this.dialog = true
      /* let obj = { shop: this.shop, calories: this.calories, fat: this.fat };

      this.desserts.push(obj); */
    },
    setVisibleAlert(val) {
      if (val.length > 0) {
        this.alertVisibility = false;
      } else {
        this.alertVisibility = true;
      }
    },
  },
  watch: {
    shop(val) {
      this.setVisibleAlert(val)
    },
    calories(val){
      this.setVisibleAlert(val)
    },
    fat(val){
      this.setVisibleAlert(val)
    }
  },
};
</script>
