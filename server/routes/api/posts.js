const router = require('express').Router();
const Post = require('../../models/posts');

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.send(posts);
    } catch (e) {
        res.send('Error');
    }
});


router.post('/', async (req, res) => {
    try {
        const post = new Post(req.body);
        await post.save();
        res.json({
            message: 'Post successfully created'
        });
    } catch (e) {
        res.status(404).json({
            message: 'Invalid data'
        });
    }
});


router.delete('/:id', async (req, res) => {
    const postId = req.params.id;
    try {
        await Post.findByIdAndDelete(postId);
        res.json({
            message: `Post with an ID = ${postId} has been deleted successfully`
        })
    } catch (e) {
        res.send({
            message: "Invalid Post ID provided"
        })
    }
});


module.exports = router;