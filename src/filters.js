import Vue from "vue";

//Make UpperCase

// Vue.filter("upperCase",function(v){
//     return v.toUpperCase()
// })


//Make Reverse
Vue.filter("reversing",function(v){
    return v.split("").reverse().join("")
});

//shorten Text
Vue.filter('shorten', function(value,textLength,suffix){
    //    return value.substring(0,15) + "...";
    // return value.substring(0, textLength) + "...";
    return value.substring(0, textLength) + suffix;


})