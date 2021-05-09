<template>
  <ul>
      <li v-for="nazwy in nazwy" :key="nazwy">{{nazwy}}</li>
  </ul>
</template>

<script>
export default {
  
   state(){
        return{
             visibleList:false,
            nazwy:['przyprawy','spożywcze','higieniczne']
        }
    }

}
</script>

<style>

</style>