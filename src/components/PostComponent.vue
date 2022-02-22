<template>
    <div>
        <h1>Poster Boys</h1>
        <hr>
        <div class="posts-container">
            <component :is="component">

            </component>
            <button @click="component = 'AddPost'">Add Post</button>
            <button @click="component = 'ShowPost'">Show Posts</button>
        </div>
    </div>
</template>

<script>
    import ShowPost from "./ShowPost";
    import AddPost from "./AddPost";

    export default {
        name: "PostComponent",
        components: {
            ShowPost,
            AddPost
        },
        data() {
            return {
                component: 'ShowPost'
            };
        },

    };
</script>

<style scoped>

</style>