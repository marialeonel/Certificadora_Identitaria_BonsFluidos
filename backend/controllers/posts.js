require('dotenv').config();
const express = require('express');
const router = express.Router();
const multer = require('multer');
const {storage } = require('../services/multerConfig');
const Post = require('../model/Post.js');
const { checkToken } = require('../middleware/authentication.js');
const { handleResponse } = require('../services/handleResponse.js')

const upload = multer({ storage: storage });
router.post('/new-post', checkToken, upload.single('image'), async (req, res) => {
  try {
    const { title, content } = req.body;
    const imageUrl = req.file ? req.file.filename : null;

    const post = await Post.create({ title, content, imageUrl });
    handleResponse(res, 201, `Post created: ${post.id}`, post);
  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      const messages = error.errors.map(err => err.message);
      handleResponse(res, 400, `Validation error: ${messages}`, { errors: messages });
    } else {
      handleResponse(res, 500, `Error creating post: ${error.message}`);
    }
  }
});

router.get('/all', async (req, res) => {
  try {
    const posts = await Post.findAll();
    handleResponse(res, 200, 'Fetched all posts', posts);
  } catch (error) {
    handleResponse(res, 500, `Error fetching posts: ${error.message}`);
  }
});

router.get('/:id', checkToken, async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) return handleResponse(res, 404, 'Post not found');

    handleResponse(res, 200, `Fetched post: ${post.id}`, post);
  } catch (error) {
    handleResponse(res, 500, `Error fetching post: ${error.message}`);
  }
});

router.put('/:id', checkToken, upload.single('image'), async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) return handleResponse(res, 404, 'Post not found');

    const { title, content } = req.body;
    post.title = title || post.title;
    post.content = content || post.content;
    post.imageUrl = req.file ? req.file.filename : post.imageUrl;
    await post.save();

    handleResponse(res, 200, `Post updated: ${post.id}`, { message: 'Post successfully updated', post });
  } catch (error) {
    handleResponse(res, 500, `Error updating post: ${error.message}`);
  }
});

router.delete('/:id', checkToken, async (req, res) => {
  try {
    const result = await Post.destroy({ where: { id: req.params.id } });
    if (!result) return handleResponse(res, 404, 'Post not found');

    handleResponse(res, 200, `Post deleted: ${req.params.id}`, { message: 'Post successfully deleted' });
  } catch (error) {
    handleResponse(res, 500, `Error deleting post: ${error.message}`);
  }
});

module.exports = router;
