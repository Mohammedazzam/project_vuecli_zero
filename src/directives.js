import Vue from "vue";



//Make Bold Custom Directive
// Vue.directive('bold',{
//     bind: function(el){
//         el.style.fontWeight = "bold";
//     }  
// });


// //Make Dynamic Font Size Custom Directive
// Vue.directive('font',{
//     bind: function(el, binding){
//         el.style.fontSize = binding.value + 'px';
//         // console.log(`Directive Name => ${binding.name}`); //fontسيطبع كلمة
//         // console.log(`Directive Value => ${binding.value}`); //سيطبع 60
//     }  
// });


//Make format Custom Directive
Vue.directive('format',{
    bind: function(el, binding){
        el.style.fontSize = binding.value + 'px';
        //Bold Modifire
        if(binding.modifiers.bold){
            el.style.fontWeight = "bold";
        }

        //Orange Modifire
        if(binding.modifiers.orange){
            el.style.color = "orange";
        }
    }  
});