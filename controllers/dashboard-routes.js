// should show all of the users routes
const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require("../utils/auth");



router.get('/', withAuth, async (req, res) => {
  try {
    // Get all posts and JOIN with user data
    // res.status(200).json(postData)
    const postData = await Post.findAll(
      { 
        where: {user_id: req.session.user_id}
      },
      {
        include: [
          {
            model: User,
            attributes: ['username'],
          },
        ],
      }
    );
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


router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id)
    if (!postData) {
      res.status(404).json({message: 'Could not find that post'})
    }

    const post = postData.get({ plain: true });

    res.render('edit-post', {
      layout: 'dashboard',
      post,
    });
  } catch (err) {
    res.redirect('/login')
  }
})

router.get('/create', (req, res) => {
  if (req.session.logged_in) {
    res.render('new-post', {
      layout: 'dashboard'
    });
  } else {
    res.render('login');
  }
})

// edit post
// router.put('/:id', withAuth, async (req, res) => {
//   try {
//     const postData = await Post.update(
//     {
//       title: req.body.title,
//       body: req.body.body,
//     },
//     {
//       where: {
//         id: req.params.id,
//       },
//     }
//     )

//     if (!postData) {
//       res.status(404).json({message: 'Could not find that post'})
//     }

//     const post = postData.get({ plain: true });

//     res.render('all-posts-admin', {
//       ...post
//     });
//   } catch (err) {
//     res.redirect('/login')
//   }
// })

module.exports = router;