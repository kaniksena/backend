const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: String,
  name: String,
  sifre: String,
  surname: String,
  // Diğer kullanıcı bilgilerini buraya ekleyin
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
