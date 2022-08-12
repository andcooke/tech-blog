const Comment = require('./Comment');
const User = require('./User');
const Post = require ('./Post');


Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { Comment, User, Post };