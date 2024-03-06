const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./get');

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
app.use('/api', userRouter);

app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda başlatıldı`);
});
