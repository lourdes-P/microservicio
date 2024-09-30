const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;


app.get('/trending-tv-show', async (req, res) => {
    try {
        const response = await axios.get('https://api.themoviedb.org/3/trending/tv/week', {
            params: {
                api_key: '62e9afa9b26ec1658e4f7c572663a19b' 
            }
        });
        const shows = response.data.results;
        const randomShow = shows[Math.floor(Math.random() * shows.length)];

        res.json(randomShow);
    } catch (error) {
        console.error('Error details:', error.response ? error.response.data : error.message);
        res.status(500).json({ message: 'Error al obtener el trending TV show.', error: error.response ? error.response.data : error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


