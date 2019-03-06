'use strict';

const path = require('path');
const fs = require('fs');
const url = require('url');

///test
process.env.BABEL_ENV = 'test';
process.env.NODE_ENV = 'test';
// process.env.PUBLIC_URL = '';


const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const envPublicUrl = process.env.PUBLIC_URL;

function test() {
    console.log(process.env);
    console.log(appDirectory);
    console.log(envPublicUrl);
}

module.exports = {
    test: test(),
}