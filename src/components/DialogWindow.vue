<template>
  <v-row justify="center">
    <v-dialog v-model="dialog.dialogVisible" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
          
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
            <v-col cols="12" sm="6" md="4">
              <span class="h3" >UUID : {{this.dialog.dialogItem.uuid}}</span>
            </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6" md="4"> </v-col>
              <v-col cols="12" sm="6" md="4"> </v-col>
              <v-col cols="12" sm="6" md="4"> </v-col>
              <v-col cols="12">
                <v-text-field v-model="dialog.dialogItem.shop" label="Shop" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="dialog.dialogItem.calories" label="Calories" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select v-model="dialog.dialogItem.fat"
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Fat"
                  required
                ></v-select>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" text @click="closeDialog">
            Close
          </v-btn>
          <v-btn color="green" text @click="saveData">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>

export default {
  props: ["dialog"],
  data() {
    return {
      shop: "",
      calories: "",
      fat: "",
    };
  },
  methods: {
    saveData() {
      let obj = { 
        dialogVisible: false,
        dialogModify: this.dialog.dialogModify,
        dialogItem:{
          uuid: this.dialog.dialogItem.uuid,
          shop: this.dialog.dialogItem.shop, 
          calories: this.dialog.dialogItem.calories, 
          fat: this.dialog.dialogItem.fat 
        }
      }
      this.$emit("modify-product", obj) 
 
    },
    closeDialog() {
      this.resetForm()
     let obj = { 
        dialogVisible: false,
        dialogItem:{}
               }
      this.$emit("modify-product", obj);
    },
  
  },
 

    };
</script>

<style></style>
