const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');


// create a post / post
router.post('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.create(req.body);
    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
})

//update a post / put
router.put('/:id', withAuth, async(req, res) => {
  try{
    const postData = await Post.update({
      title: req.body.title,
      body: req.body.body
    },
    {
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
})

//delete a post / delete
router.delete('/:id', withAuth, async(req, res) => {
  try {
    const postData = await Post.destroy({
      where:  {
        id: req.params.id,
      }
    });

    if (!postData) {
      res.status(404).json({ message: 'Tying to delete a post -- No post with that id! '})
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
})

module.exports = router;