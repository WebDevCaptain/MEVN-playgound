import axios from 'axios';

const url = 'api/posts/';

class PostService {
    static getPosts() {
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(data.map(post => ({
                    ...post,
                    createdAt: new Date(post.createdAt)
                })));
            } catch (e) {
                reject(e);
            }
        });
    }


    static insertPost(data) {
        return axios.post(url, {
            title: data.title,
            body: data.body
        });
    }


    static deletePost(id) {
        return axios.delete(`${url}${id}`);
    }
}

export default PostService;