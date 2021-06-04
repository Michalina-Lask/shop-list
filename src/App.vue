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
import { v4 as uuidv4 } from 'uuid'

export default {
  data() {
    return {
      headers: [
        { text: "UUID", value:"uuid"},
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
        dialogModify: false,
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
      this.dialogProps.dialogVisible = false;
      this.dialogProps.dialogItem = item;
    },
    addProduct() {
      this.dialogProps.dialogVisible = true;
      this.dialogProps.dialogModify = false;
      this.dialogProps.dialogItem = {uuid: uuidv4()};

    },
    modifyProduct(obj) {
      this.dialogProps.dialogVisible = obj.dialogVisible;

      if (obj.dialogModify) {
        console.log('test')
      }else{
         this.desserts.push(obj.dialogItem);
      }
      
    },
    editItem(item) {
      this.dialogProps.dialogVisible = true;
      this.dialogProps.dialogModify = true;
      this.dialogProps.dialogItem = item;
    },

    deleteItem(row) {

 this.desserts=this.desserts.filter(item => item.uuid != row.uuid)
    },
  },
};
</script>
