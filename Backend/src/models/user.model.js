import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({

email:{
    type: String,
    required: true,
    unique: true
},
contact:{
  type: String,
  required: true,
},
password:{
    type: String,
    required: true
},
fullname:{
  type: String,
  required: true
},
role:{
  type: String,
  enum: ['buyer', 'seller'],
  default: 'buyer'
}

})

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
}   

const userModel = mongoose.model('user', userSchema); 

export default userModel;