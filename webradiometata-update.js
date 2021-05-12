'use strict';

const webradiometadata = require("webradio-metadata")
const fs = require('fs');
webradiometadata.getAll(function(results) {
    const file = 'webradio-metadata.js'
    const localFile = process.cwd() + '/' + file;
    fs.writeFileSync(localFile, JSON.stringify(results, null, 2));
});
