const router = require('express').Router();
const { Comment, Post } = require('../../models');
const withAuth = require('../../utils/auth');



// TO-DO, how to link a user with their specific comment

router.post('/:id', withAuth, async (req, res) => {
  try {

    const postData = await Post.findByPk(req.params.id, {

    });

    if(!postData) {
      res.status(404).json({ message: 'No post found.'})
    }

    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;



// post route for someone to make a comment
//associated with a user

