<template>
<div>
     <v-alert 
  dense
      outlined
      type="error">
      Uzupełnij dane</v-alert>
</div>
 
</template>


<script>

export default {
  data(){
    return{
      alertMessage: "Uzupełnij dane"
    }
  },
}
  
