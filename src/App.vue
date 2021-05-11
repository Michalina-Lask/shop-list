<template>
  <v-app id="inspire">
    <alert v-show="alertVisibility"></alert>
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

      <v-btn color="success" class="mr-4" @click="addProduct">
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
import Alert from "./components/Alert";

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
      alertVisibility: false,
    };
  },
  components: {
    Alert,
  },
  methods: {
    addProduct() {
      let obj = { shop: this.shop, calories: this.calories, fat: this.fat };

      if (this.validateProduct(obj)) {
        this.desserts.push(obj);
      }
    },
    setVisibleAlert(visible) {
      if (!visible) {
        this.alertVisibility = true
      } else {
        this.alertVisibility = false
      }
    },
    validateProduct(obj) {
      let req = true;

      if (!obj.shop.length > 0) {
        req = false;
      }

      this.setVisibleAlert(req)

      return req;
    },
  },
};
</script>
