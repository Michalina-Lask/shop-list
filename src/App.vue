<template>
  <v-app>
    <v-main>
      <ToolBars/>
    </v-main>
  </v-app>
</template>

<script>
import ToolBars from './components/ToolBars';

export default {
  name: 'App',

  components: {
    ToolBars,
  },

  data: () => ({
    //
  }),
};
</script>
