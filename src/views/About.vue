<template>
  <div class="about">
    <h1>{{pageName}}</h1>
    <!-- <p v-bold>{{pageDescription}}</p> -->
    <p v-font="60">{{pageDescription}}</p>
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
    name:'about'
};
</script>
