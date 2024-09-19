const express = require('express');
const path = require('path');

const startServer = (options) => {
    const { PORT, PUBLIC_PATH = 'public' } = options;

    const app = express();

    // Middlewares
    app.use(express.static(PUBLIC_PATH));

    app.get('*', (req, res) => {
        const indexPath = path.join(__dirname + `../../../public/${PUBLIC_PATH}/index.html`);
        res.sendFile(indexPath)
    })

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
}

module.exports = {
    startServer
}