// should show all of the users routes
const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require("../utils/auth");



router.get('/', withAuth, async (req, res) => {
  try {
    // Get all posts and JOIN with user data
    // res.status(200).json(postData)
    const postData = await Post.findAll({ where: {user_id: req.session.user_id}});
    // res.status(200).json(postData);
    // // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('all-posts-admin', { 
      layout: "dashboard",
      posts,
    });
  } catch (err) {
    res.redirect('/login');
  }
});


//single post to edit

//edit post

module.exports = router;