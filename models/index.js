const Comment = require('./Comment');
const User = require('./User')


Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { Comment, User }