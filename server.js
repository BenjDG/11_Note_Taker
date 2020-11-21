const express = require('express');
const routes = require('./routes');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});