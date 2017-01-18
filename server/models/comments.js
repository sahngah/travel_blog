var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new mongoose.Schema({
  content: {
    type: String,
    required:true
  },
  post: [{
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }],
  user: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
},{timestamps: true})

mongoose.model('Comment', CommentSchema);
