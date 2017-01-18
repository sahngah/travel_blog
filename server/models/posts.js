var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new mongoose.Schema({
  category: {
    type: String,
    required:true
  },
  title: {
    type:String,
    required:true
  },
  description: {
    type:String
  },
  photo: {
    type:String
  },
  _comments: {
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }
},{timestamps: true})

mongoose.model('Post', PostSchema);
