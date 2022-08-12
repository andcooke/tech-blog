const Comment = require('./Comment');
const User = require('./User');
const Post = require ('./Post');


Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
})

Post.belongsTo(User, {
  foreignKey: 'user_id'
})

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
})


module.exports = { Comment, User, Post };