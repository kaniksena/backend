const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Express uygulamasını oluşturun
const app = express();

// Middleware'leri tanımlayın
app.use(bodyParser.json());

// MongoDB'ye bağlanın
mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB bağlantısı başarılı'))
    .catch(err => console.error('MongoDB bağlantı hatası:', err));

// Kullanıcı modeli oluşturun
const User = mongoose.model('User', {
    username: String,
    password: String
});

// Kullanıcı girişi için bir POST endpoint'i tanımlayın
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    // Kullanıcıyı veritabanında kontrol edin
    const user = await User.findOne({ username, password });
    if (user) {
        res.json({ success: true, message: 'Giriş başarılı' });
    } else {
        res.status(401).json({ success: false, message: 'Kullanıcı adı veya şifre hatalı' });
    }
});

// Sunucuyu başlatın
const PORT = process.env.PORT || 5005;
app.listen(PORT, () => console.log(`Sunucu ${PORT} portunda başlatıldı`));
