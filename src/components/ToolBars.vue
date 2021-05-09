<template>
  <div id="app">
  <v-app id="inspire">
    <v-card>
      <v-toolbar
        color="green"
        dark
        flat
      >
      
        <v-app-bar-nav-icon @click="nazwy" ></v-app-bar-nav-icon>
  
        <v-toolbar-title>Shop list</v-toolbar-title>
        
  
        <v-spacer></v-spacer>
  
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
  
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
  
        <template v-slot:extension>
          <v-tabs
            v-model="model"
            centered
            slider-color="pink"
          >
            <v-tab
              v-for="i in 3"
              :key="i"
              :href="`#tab-${i}`"
            >
              Item {{ i }}
            </v-tab>
          </v-tabs>
        </template>
      </v-toolbar>
  
      <v-tabs-items v-model="model">
        <v-tab-item
          v-for="i in 3"
          :key="i"
          :value="`tab-${i}`"
        >
          <v-card flat>
            <v-card-text v-text="text"></v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-app>
</div>
</template>
<script>


export default {
 components:{},
 methods:{
   nazwy(){
     this.$store.state.nazwy
   }
 },
};
    

</script>
>