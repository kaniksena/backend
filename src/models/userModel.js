const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  id: Number,
  username: String,
  password: String,
  name: String,
  surname: String,
  
  // Diğer kullanıcı bilgilerini buraya ekleyin
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
