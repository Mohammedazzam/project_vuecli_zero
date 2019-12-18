<template>
    <div class="sidebar-widgets">{{title | upperCase}}</div>
</template>


<script>
export default {
    data:function(){
        return{
            title:"Testing"
        }
    },
    name:"blog_sidebar",
    filters:{
        upperCase:function(v){
            return v.toUpperCase();
        }
    }
}
</script>