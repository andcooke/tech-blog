const router = require('express').Router();
const { Post, User, Comment } = require('../../models');



router.post('/', async (req, res) => {
  try {
    const postData = await Post.create(req.body);
    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
})

//update a post/ put

//delete a post / delete


module.exports = router;