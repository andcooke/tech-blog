const router = require('express').Router();
const { Post, User, Comment } = require('../models');


router.get('/', async (req, res) => {
  try {
    // Get all posts and JOIN with user data
    // res.status(200).json(postData)
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });
    // res.status(200).json(postData);
    // // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('all-posts', { 
      posts, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        User, 
        {
          model: Comment,
          include: [User],
        },
      ],
    });

    if (!postData) {
      res.status(404).json({ message: 'Trying to print one post -- No post with that id!' });
      return;
    }

    // res.status(200).json(postData);

    const post = postData.get({ plain: true });

    res.render('single-post', {
      post,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup');
})


router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;
