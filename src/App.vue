<template>
  <v-app id="inspire">
    <v-row>
      <v-col cols="4">
        <v-btn color="success" class="mr-4" @click="openForm">
          Dodaj Produkt
        </v-btn>
      </v-col>
      <v-col cols="12">
        <v-data-table
          :headers="headers"
          :items="desserts"
          :items-per-page="5"
          class="elevation-1"
        >
        <template v-slot:item.actions="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          small
          @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>
        
        </v-data-table>
      </v-col>
    </v-row>
    <dialog-window
      :dialog="dialog"
      @update-dialog="updateDialog"
      @add-product="addProduct"
    ></dialog-window>
  </v-app>
</template>

<script>
import DialogWindow from "./components/DialogWindow";

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
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      desserts: [],

      dialogVisible: false,
    };
  },
  components: {
    DialogWindow,
  },
  computed: {
    dialog() {
      return this.dialogVisible;
    },
  },
  methods: {
    updateDialog(val) {
      this.dialogVisible = val;
    },
    addProduct(obj) {
      this.desserts.push(obj);
    },
    openForm() {
      this.dialogVisible = true;
    },
  },
};
</script>
