<template>
  <div class="about">
    <h1 v-bold>{{pageName}}</h1>
    <!-- <p v-bold>{{pageDescription}}</p> -->
    <!-- <p v-font="60">{{pageDescription}}</p> -->
    <!-- <p v-format.bold="60">{{pageDescription}}</p> -->
    <p v-format.bold.orange="60">{{pageDescription}}</p>
  </div>
</template>



<script>
// @ is an alias to /src

export default {
  data:function(){
      return{
          pageName:"About us",
          pageDescription:"This Is About Us Page"
      }
  },
  directives:{
      bold:{
          bind:function(el){
              el.style.fontWeight="bold"
          }
      }
  },
    name:'about'
};
</script>
