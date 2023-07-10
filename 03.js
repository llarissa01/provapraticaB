const { url } = require("inspector");


import {url} from 'node:url';
console.log(url === globalThis.url);
const url = new url('/foo', 'https://nodejs.org/')
