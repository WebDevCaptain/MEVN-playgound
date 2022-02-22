<template>
    <div id="add-post">
        <h3 v-show="error">{{ error }}</h3>
        <h4 v-show="success">{{ success }}</h4>
        <form>
            <div>
                <label>
                    Title: <input type="text" required v-model.lazy="title">
                </label>
            </div>
            <div>
                <label>
                    Body: <input type="text" required v-model.lazy="body">
                </label>
            </div>
            <button @click.prevent="createPost">Submit</button>
        </form>
    </div>
</template>

<script>
    import PostService from "../PostService";

    export default {
        name: "AddPost",
        data() {
            return {
                title: '',
                body: '',
                error: '',
                success: ''
            };
        },
        methods: {
            async createPost() {
                if (!this.title || !this.body) {
                    this.error = 'Please fill out the title and body of the Post';
                    return;
                }
                await PostService.insertPost({
                    title: this.title,
                    body: this.body
                });
                this.success = 'Post submitted';
                this.title = '';
                this.body = '';
            }
        }
    };
</script>

<style scoped>

</style>