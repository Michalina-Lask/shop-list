<template>
  <v-app>
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
          value: "name",
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
      ],
      desserts: [],
    };
  },
};
</script>
