// imports
const path = require('path');
const express = require('express');
const compression = require('compression');
const favicon = require('serve-favicon');
const router = require('./router.js');

// constants
const port = process.env.PORT || process.env.NODE_PORT || 3000;
const app = express();

// express use statements
app.use(compression());
app.use('/assets', express.static(path.resolve(`${__dirname}/../client/`)));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(favicon(path.resolve(`${__dirname}/../client/img/favicon.png`)));

// set up router
router(app);


// start express server
app.listen(port, (err) => {
    if (err) { throw err; };
    console.log(`Listening on port ${port}`); // eslint-disable-line no-console
});