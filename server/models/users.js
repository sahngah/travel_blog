var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required:[true, 'username is required'],
    unique:[true, 'username already in use']
  },
  email: {
    type:String,
    required:[true, 'email is required'],
    unique: [true, 'email already in use']
  },
  password: {
    type:String,
    required:[true, 'password is required']
  },
  _comments: {
    type: Schema.Types.ObjectId,
    ref: "Comment"
  }
},{
  timestamps: true
});

UserSchema.methods.hashPassword = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
}

UserSchema.methods.validatePassword = function(input) {
  return bcrypt.compareSync(input, this.password);
}

UserSchema.pre('save', function(done){
  this.password = this.hashPassword(this.password);
  done();
})

mongoose.model('User', UserSchema);
