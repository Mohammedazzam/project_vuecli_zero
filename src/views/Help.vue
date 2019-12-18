<template>
    <div class="our-help">
        <h1>{{pageName}}</h1>
        <p v-format="40">{{pageDescription}}</p>
    </div>
</template>

<script>
export default {
 data:function(){
      return{
          pageName:"Help",
          pageDescription:"This Is Help Us Page"
      }
  },
    name:'help'
}
</script>
