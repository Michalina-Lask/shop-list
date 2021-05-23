<template>
  <v-app id="inspire">
    <v-row>
      <v-col cols="4">
        <v-btn color="success" class="mr-4" @click="addProduct">
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
            <v-icon small class="mr-2" @click="editItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon small @click="deleteItem(item)">
              mdi-delete
            </v-icon>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
    <dialog-window
      :dialog="dialog"
      @modify-product="modifyProduct"
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
        { text: "Actions", value: "actions", sortable: false },
      ],
      desserts: [],

      dialogProps: {
        dialogVisible: false,
        dialogItem: {},
      },
    };
  },
  components: {
    DialogWindow,
  },
  computed: {
    dialog() {
      return this.dialogProps;
    },
  },
  methods: {
    updateDialogProps(item) {
      this.dialogProps.dialogVisible = false
      this.dialogProps.dialogItem = item
    },
    addProduct(){
      this.dialogProps.dialogVisible = true
      this.dialogProps.dialogItem = {}

    },
    modifyProduct(obj) {
      this.dialogProps.dialogVisible = obj.dialogVisible
      this.desserts.push(obj.dialogItem);
    },
    editItem(item) {
        this.dialogProps.dialogVisible = true
        this.dialogProps.dialogItem = item
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },
  },
};
</script>
