const express = require('express');
const mongoose = require('mongoose');
const userGet = require('./userRoutes/getController.js');
const userPost = require('./userRoutes/postController.js');

const app = express();
const PORT = process.env.PORT || 5005;

mongoose.connect('mongodb://localhost:27017/stajUygulaması', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB bağlantısı başarılı');
}).catch(err => {
  console.error('MongoDB bağlantı hatası:', err);
});

app.use(express.json());
app.use('/api', userGet);
app.use('/api', userPost);

app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda başlatıldı`);
});
