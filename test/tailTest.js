const assertEqual = require('../assertEqual');
const tail = require('../tail');


const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

const one = [1];
tail(one);
assertEqual(tail(one), []);

const empty = [];
tail(empty);
assertEqual(tail(empty), []);

