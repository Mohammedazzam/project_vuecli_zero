<template>
    <div class="our-help">
        <h1>{{pageName}}</h1>
        <p>{{pageDescription}}</p>
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <div class="post-area">
                        <BlogPosts v-for="post in posts" v-bind:key="post.id" :views="post.views" :title="post.title" :date="post.date" :content="post.content" :author="post.author" :category="post.category"/>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="sidebar">   
                        <BlogSideBar/>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>


<script>
import BlogPosts from "@/components/Blog/BlogPosts.vue";
import BlogSideBar from "@/components/Blog/BlogSideBar.vue";
import jsonPosts from "../json/blog_post.json"

export default {
 data:function(){
      return{
          pageName:"Blog",
          pageDescription:"This Is Blog Us Page",
          posts:jsonPosts
      }
  },
    name:'blog',
    components:{
        BlogPosts,
        BlogSideBar
    }
}
</script>
