//CommonJS - every file is module(by default)
//Modules - Encapsulated code(only share minimum)

const names = require('./4-names');
const sayhi = require('./5-utils');
const data = require('./6-Alternative-flavour');

sayhi(names.name1)
sayhi(names.name2);
sayhi('Atul')

require('./7-mind-granade')