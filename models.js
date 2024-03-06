const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: String,
  name: String,
  password: String,
  surname: String,
  id: Int16Array,
  // Diğer kullanıcı bilgilerini buraya ekleyin
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
