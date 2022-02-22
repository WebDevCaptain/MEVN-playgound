<template>
    <div id="show-posts">
        <div class="post" v-for="(post, idx) in posts" :key="idx">
            <p class="title">
                {{ post.title }}
            </p>
            <p class="body">
                {{ post.body }}
            </p>
            <p class="date">
                {{ `${post.createdAt.getDate()}/${post.createdAt.getMonth()}/${post.createdAt.getFullYear()}` }}
            </p>
            <button @click="deletePost(post._id)">Delete</button>
            <hr>
        </div>
    </div>
</template>

<script>
    import PostService from "../PostService";

    export default {
        name: "ShowPost",
        data(){
            return {
                posts: [],
                error: '',
            }
        },
        async created() {
            try {
                this.posts = await PostService.getPosts();
            } catch (e) {
                this.error = e.message;
            }
        },
        methods: {
            async deletePost(id){
                await PostService.deletePost(id);
                this.posts = await PostService.getPosts();
            }
        }
    };
</script>

<style scoped>

</style>