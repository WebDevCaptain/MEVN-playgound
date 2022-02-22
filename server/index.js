const express = require('express');
const cors = require('cors');
const path = require('path');
require('./db/mongoose');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Routers
const posts = require('./routes/api/posts');
app.use('/api/posts', posts);


// Handle Production Environment
if (process.env.NODE_ENV === 'production') {
    const publicPath = path.resolve(__dirname, 'public/');
    app.use(express.static(publicPath));

    // Redirection
    app.get(/.*/, (req, res) => {
        res.sendFile(path.resolve(publicPath, 'index.html'));
    });
}


app.listen(port, () => {
    console.log(`Server is up on PORT ${port}`);
});
