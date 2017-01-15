var mongoose = require('mongoose');
var PostSchema = new mongoose.Schema({
  category: {type: String, required:true},
  title: {type:String, required:true},
  description: {type:String},
  photo: {type:String}
},{timestamps: true})

mongoose.model('Post', PostSchema);
