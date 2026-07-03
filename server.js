const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('frontend'));    //serve static files

const PORT = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Success! Server is running on http://localhost:${port}`);
});

